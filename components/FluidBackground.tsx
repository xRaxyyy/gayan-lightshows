import React, { useEffect, useRef } from 'react';

const FluidBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Handle high DPI displays
    const dpr = window.devicePixelRatio || 1;
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      size: number;
      color: string;
    }

    const particles: Particle[] = [];
    
    // Function to calculate color based on horizontal position (Gradient: Blue -> Purple -> Red)
    // Matches the poster style: Left side blueish, Right side reddish
    const getGradientColor = (x: number, w: number) => {
      const ratio = Math.max(0, Math.min(1, x / w)); // Clamp between 0 and 1
      
      // Interpolate between Deep Blue (#0000AA) and Deep Red (#AA0000)
      // We keep the values relatively dark so 'screen' blend mode doesn't make them white immediately
      
      // Blue Channel: Starts high (180), ends low (20)
      const b = Math.floor(180 - (160 * ratio));
      
      // Red Channel: Starts low (20), ends high (200)
      const r = Math.floor(20 + (180 * ratio));
      
      // Green Channel: Keep low to maintain saturation
      const g = 0; 

      return `rgb(${r}, ${g}, ${b})`;
    };

    const mouse = { x: width / 2, y: height / 2 };
    let isMoving = false;
    let timeout: number;

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      isMoving = true;
      
      // Get color based on current mouse X position
      const color = getGradientColor(mouse.x, width);

      // Spawn particles
      for (let i = 0; i < 3; i++) {
        particles.push({
          x: mouse.x,
          y: mouse.y,
          vx: (Math.random() - 0.5) * 4, 
          vy: (Math.random() - 0.5) * 4,
          life: 1,
          size: Math.random() * 50 + 40, // Large soft particles
          color: color
        });
      }

      clearTimeout(timeout);
      timeout = window.setTimeout(() => isMoving = false, 200);
    };

    // Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // 'screen' blend mode creates the light effect, but we use low opacity to keep it subtle ("niet te fel")
      ctx.globalCompositeOperation = 'screen';

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.01; // Slower fade
        p.size += 0.2;  // Slow expansion

        if (p.life <= 0) {
          particles.splice(i, 1);
          i--;
          continue;
        }

        // Significantly reduced opacity for a subtler, smokier look
        ctx.globalAlpha = p.life * 0.15; 
        
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Ambient background movement (subtle floating blobs matching the gradient zones)
      if (particles.length < 10) {
         const x = Math.random() * width;
         particles.push({
          x: x,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
          life: Math.random() * 0.4 + 0.1, 
          size: Math.random() * 100 + 60,
          color: getGradientColor(x, width) // Ambient particles also follow the gradient rule
        });
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ 
        // Increased blur to 100px for very soft, gradient-like blending
        filter: 'blur(100px)', 
        zIndex: 0,
        background: 'transparent'
      }} 
    />
  );
};

export default FluidBackground;