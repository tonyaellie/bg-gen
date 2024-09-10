"use client";
import { useEffect, useRef } from "react";

const numberOfDots = 1000;
const colours = [
  // "hsl(10, 80%, 70%)", // Light Red
  "hsl(120, 60%, 70%)", // Light Green
  "hsl(240, 60%, 75%)", // Light Blue
  "hsl(330, 70%, 75%)", // Light Pink
  "hsl(50, 80%, 75%)", // Light Yellow
  "hsl(184, 90%, 70%)",
];

export default function HomePage() {
  const canvasRef = useRef(null);

  const generate = async () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Fill background with white
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, 1000, 1000);

    // Function to draw random dots
    function drawDots() {
      for (let i = 0; i < numberOfDots; i++) {
        const size = Math.floor(Math.random() * 40) + 100; // Random size between 10 and 50
        const x = Math.random() * 1100; // Random x position
        const y = Math.random() * 1100; // Random y position
        const color = colours[Math.floor(Math.random() * colours.length)]; // Random color

        // Draw the circle
        ctx.beginPath();
        ctx.arc(x, y, size / 2, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
      }
    }

    drawDots();

    // Apply a blur effect to the canvas
    ctx.filter = "blur(40px)";
    ctx.drawImage(canvas, 0, 0);
  };

  useEffect(() => {
    generate();
  }, []);

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <button
        onClick={generate}
        className="rounded-lg bg-blue-500 p-4 text-white transition-colors hover:bg-blue-700"
      >
        Generate
      </button>

      <canvas ref={canvasRef} width={1000} height={1000} />
    </div>
  );
}
