import { useRef, useEffect, useState } from 'react';

const Squares = ({
  direction = 'Diagonal',
  speed = 0.5,
  borderColor = 'rgba(255,255,255,0.02)',
  squareSize = 40,
  hoverFillColor = 'rgba(200, 255, 0, 0.05)',
  className = ''
}) => {
  const canvasRef = useRef(null);
  const [hoveredSquare, setHoveredSquare] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    let animationFrameId;
    let gridOffset = { x: 0, y: 0 };
    
    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const startX = Math.floor(gridOffset.x / squareSize) * squareSize;
      const startY = Math.floor(gridOffset.y / squareSize) * squareSize;
      
      ctx.lineWidth = 1;
      ctx.strokeStyle = borderColor;
      for (let x = startX - squareSize; x < canvas.width + squareSize; x += squareSize) {
        for (let y = startY - squareSize; y < canvas.height + squareSize; y += squareSize) {
          const squareX = x - (gridOffset.x % squareSize);
          const squareY = y - (gridOffset.y % squareSize);
          
          if (
            hoveredSquare &&
            Math.floor((x - startX) / squareSize) === hoveredSquare.x &&
            Math.floor((y - startY) / squareSize) === hoveredSquare.y
          ) {
            ctx.fillStyle = hoverFillColor;
            ctx.fillRect(squareX, squareY, squareSize, squareSize);
          }
          
          ctx.beginPath();
          ctx.rect(squareX, squareY, squareSize, squareSize);
          ctx.stroke();
        }
      }

      if (direction === 'Diagonal') {
        gridOffset.x -= speed;
        gridOffset.y -= speed;
      }
      
      animationFrameId = requestAnimationFrame(drawGrid);
    };
    
    drawGrid();
    
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      
      const startX = Math.floor(gridOffset.x / squareSize) * squareSize;
      const startY = Math.floor(gridOffset.y / squareSize) * squareSize;
      
      const px = mouseX + (gridOffset.x % squareSize);
      const py = mouseY + (gridOffset.y % squareSize);
      
      setHoveredSquare({ 
        x: Math.floor(px / squareSize), 
        y: Math.floor(py / squareSize) 
      });
    };
    
    const handleMouseLeave = () => setHoveredSquare(null);
    
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [direction, speed, borderColor, hoverFillColor, squareSize, hoveredSquare]);

  return <canvas ref={canvasRef} className={className} style={{ width: '100%', height: '100%' }}></canvas>;
};

export default Squares;
