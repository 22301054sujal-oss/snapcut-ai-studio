import { useState, useRef, useCallback } from "react";

interface BeforeAfterSliderProps {
  originalSrc: string;
  processedSrc: string;
}

const BeforeAfterSlider = ({ originalSrc, processedSrc }: BeforeAfterSliderProps) => {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as Element).setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  }, [updatePosition]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!dragging.current) return;
    updatePosition(e.clientX);
  }, [updatePosition]);

  const handlePointerUp = useCallback(() => {
    dragging.current = false;
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative select-none overflow-hidden rounded-xl border"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
    >
      {/* Processed (right) */}
      <div className="checkerboard">
        <img src={processedSrc} alt="Processed" className="block w-full" draggable={false} />
      </div>

      {/* Original (left) - clipped */}
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${position}%` }}>
        <img
          src={originalSrc}
          alt="Original"
          className="block w-full"
          style={{ width: `${containerRef.current?.offsetWidth || 100}px` }}
          draggable={false}
        />
      </div>

      {/* Divider */}
      <div className="absolute inset-y-0" style={{ left: `${position}%`, transform: "translateX(-50%)" }}>
        <div className="h-full w-0.5 bg-primary-foreground/80 shadow-md" />
        <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-primary-foreground/80 bg-primary shadow-lg">
          <svg className="h-4 w-4 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4M8 15l4 4 4-4" />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute left-3 top-3 rounded-md bg-foreground/60 px-2 py-0.5 text-xs font-medium text-background">
        Original
      </div>
      <div className="absolute right-3 top-3 rounded-md bg-foreground/60 px-2 py-0.5 text-xs font-medium text-background">
        Removed
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
