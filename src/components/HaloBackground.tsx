import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  size: number;
  depth: number;
  color: string;
}

const colors = [
  "rgba(0,255,200,0.7)",   // bright teal
  "rgba(0,200,255,0.6)",   // cyan
  "rgba(0,170,200,0.5)",   // soft teal
  "rgba(0,120,160,0.45)",  // muted teal
  "rgba(120,255,255,0.5)"  // highlight
];

const HaloBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const particles: Particle[] = [];

    const gap = 70;

    for (let x = 0; x < canvas.width; x += gap) {
      for (let y = 0; y < canvas.height; y += gap) {

        const wave = Math.sin(x * 0.02) * 20;

        particles.push({
          x: x + (Math.random() - 0.5) * 20,
          y: y + wave + (Math.random() - 0.5) * 20,
          baseX: x,
          baseY: y + wave,
          size: Math.pow(Math.random(), 2) * 18 + 4,
          depth: Math.random() * 0.8 + 0.2,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    }

    window.addEventListener("mousemove", (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
    });

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {

        const dx = mouse.current.x - p.x;
        const dy = mouse.current.y - p.y;

        const dist = Math.sqrt(dx * dx + dy * dy);

        const maxDist = 160;

        if (dist < maxDist) {
          const force = (maxDist - dist) / maxDist;

          const angle = Math.atan2(dy, dx);

          p.x -= Math.cos(angle) * force * 12 * p.depth;
          p.y -= Math.sin(angle) * force * 12 * p.depth;

        } else {

          p.x += (p.baseX - p.x) * 0.05;
          p.y += (p.baseY - p.y) * 0.05;

        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * p.depth, 0, Math.PI * 2);
        ctx.globalAlpha = 0.65;
        ctx.fillStyle = p.color;
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
};

export default HaloBackground;