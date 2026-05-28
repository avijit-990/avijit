import { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

export default function ParticleNetwork() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef<{ x: number | null; y: number | null }>({ x: null, y: null });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Handle Resize using a ResizeObserver with a debounce
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let resizeTimeout: number;

    const observer = new ResizeObserver((entries) => {
      if (!entries || entries.length === 0) return;
      const { width, height } = entries[0].contentRect;
      
      // Debounce state update to optimize performance
      window.clearTimeout(resizeTimeout);
      resizeTimeout = window.setTimeout(() => {
        setDimensions({ width, height });
      }, 100);
    });

    observer.observe(container);

    return () => {
      observer.disconnect();
      window.clearTimeout(resizeTimeout);
    };
  }, []);

  // Sync canvas width and height attributes when dimensions state changes
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    // Determine target number of particles based on screen real estate
    const area = dimensions.width * dimensions.height;
    // 1 particle per 15000 square pixels, constrained within a safe range
    const desiredCount = Math.min(Math.max(Math.floor(area / 15000), 20), 85);

    // Initialize or adjust particle array
    const particles = particlesRef.current;
    if (particles.length < desiredCount) {
      // Add missing particles
      const countToAdd = desiredCount - particles.length;
      for (let i = 0; i < countToAdd; i++) {
        particles.push({
          x: Math.random() * dimensions.width,
          y: Math.random() * dimensions.height,
          vx: (Math.random() - 0.5) * 0.75, // Slow, elegant float speeds
          vy: (Math.random() - 0.5) * 0.75,
          radius: Math.random() * 1.5 + 1.2, // Delicate tiny dot radii
        });
      }
    } else if (particles.length > desiredCount) {
      // Truncate list
      particlesRef.current = particles.slice(0, desiredCount);
    }
  }, [dimensions]);

  // Capture Mouse Interactivity
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: null, y: null };
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Animation Frame Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;

    const render = () => {
      // Clear canvas with clean slate
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      // Extract current theme-specific brand-accent color on each frame
      const computed = getComputedStyle(document.documentElement);
      const isDark = !document.documentElement.classList.contains('light');
      
      // Extract main accent color representation or fallback safely
      const rawAccent = computed.getPropertyValue('--accent').trim() || '#22d3ee';
      
      // Draw Particles and compute network connections
      const len = particles.length;

      // Stage update positions
      for (let i = 0; i < len; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        // Elegant bounce calculation off edge constraints
        if (p.x < 0 || p.x > canvas.width) {
          p.vx = -p.vx;
          p.x = Math.max(0, Math.min(p.x, canvas.width));
        }
        if (p.y < 0 || p.y > canvas.height) {
          p.vy = -p.vy;
          p.y = Math.max(0, Math.min(p.y, canvas.height));
        }

        // Draw particle dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        
        // Render delicate, low-opacity accent-colored or light gray dots
        ctx.fillStyle = isDark
          ? `rgba(255, 255, 255, 0.45)`
          : `rgba(15, 23, 42, 0.35)`;
        ctx.fill();
      }

      // Draw Connection network lines
      for (let i = 0; i < len; i++) {
        const pi = particles[i];

        // Draw line connections between particles
        for (let j = i + 1; j < len; j++) {
          const pj = particles[j];
          const dx = pi.x - pj.x;
          const dy = pi.y - pj.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            // Smoothly fade out connectivity based on distance ratio
            const alpha = (1 - dist / 120) * (isDark ? 0.12 : 0.08);
            ctx.beginPath();
            ctx.moveTo(pi.x, pi.y);
            ctx.lineTo(pj.x, pj.y);
            
            // Choose colors based on theme context (subtle accent tint)
            ctx.strokeStyle = rawAccent.includes('rgb') 
              ? rawAccent.replace(')', `, ${alpha})`).replace('rgb', 'rgba')
              : rawAccent.startsWith('#')
                ? `rgba(${hexToRgb(rawAccent)}, ${alpha})`
                : isDark ? `rgba(255, 255, 255, ${alpha})` : `rgba(15, 23, 42, ${alpha})`;
            
            ctx.lineWidth = 0.85;
            ctx.stroke();
          }
        }

        // Connect cursor mouse pointer to adjacent node nodes
        if (mouse.x !== null && mouse.y !== null) {
          const dx = pi.x - mouse.x;
          const dy = pi.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            // Interactive mouse connections have slightly higher visual presence
            const alpha = (1 - dist / 150) * (isDark ? 0.28 : 0.18);
            ctx.beginPath();
            ctx.moveTo(pi.x, pi.y);
            ctx.lineTo(mouse.x, mouse.y);
            
            ctx.strokeStyle = rawAccent.includes('rgb')
              ? rawAccent.replace(')', `, ${alpha})`).replace('rgb', 'rgba')
              : rawAccent.startsWith('#')
                ? `rgba(${hexToRgb(rawAccent)}, ${alpha})`
                : isDark ? `rgba(255, 255, 255, ${alpha})` : `rgba(15, 23, 42, ${alpha})`;
                
            ctx.lineWidth = 1.1;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [dimensions]);

  return (
    <div 
      ref={containerRef} 
      id="canvas-particle-container"
      className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0"
    >
      <canvas 
        ref={canvasRef} 
        id="bg-particle-canvas"
        className="block w-full h-full opacity-60 dark:opacity-40 transition-opacity duration-300"
      />
    </div>
  );
}

// Simple color helper
function hexToRgb(hex: string): string {
  const cleanHex = hex.replace('#', '');
  const r = parseInt(cleanHex.substring(0, 2), 16);
  const g = parseInt(cleanHex.substring(2, 4), 16);
  const b = parseInt(cleanHex.substring(4, 6), 16);
  return isNaN(r) || isNaN(g) || isNaN(b) ? '34, 211, 238' : `${r}, ${g}, ${b}`;
}
