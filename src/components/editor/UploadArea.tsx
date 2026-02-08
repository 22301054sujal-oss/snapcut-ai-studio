import { useCallback, useState } from "react";
import { Upload, ImageIcon } from "lucide-react";

interface UploadAreaProps {
  onImageSelect: (file: File) => void;
}

const ACCEPTED_TYPES = ["image/jpeg", "image/png", "image/webp"];
const MAX_SIZE = 10 * 1024 * 1024; // 10MB

const UploadArea = ({ onImageSelect }: UploadAreaProps) => {
  const [dragOver, setDragOver] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validateAndSelect = useCallback(
    (file: File) => {
      setError(null);
      if (!ACCEPTED_TYPES.includes(file.type)) {
        setError("Please upload a JPG, PNG, or WEBP image.");
        return;
      }
      if (file.size > MAX_SIZE) {
        setError("Image must be under 10MB.");
        return;
      }
      onImageSelect(file);
    },
    [onImageSelect]
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setDragOver(false);
      const file = e.dataTransfer.files[0];
      if (file) validateAndSelect(file);
    },
    [validateAndSelect]
  );

  return (
    <div
      onDragOver={(e) => {
        e.preventDefault();
        setDragOver(true);
      }}
      onDragLeave={() => setDragOver(false)}
      onDrop={handleDrop}
      className={`flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed p-12 transition-colors ${
        dragOver ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
      }`}
      onClick={() => {
        const input = document.createElement("input");
        input.type = "file";
        input.accept = ACCEPTED_TYPES.join(",");
        input.onchange = (e) => {
          const file = (e.target as HTMLInputElement).files?.[0];
          if (file) validateAndSelect(file);
        };
        input.click();
      }}
    >
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
        {dragOver ? (
          <ImageIcon className="h-7 w-7 text-primary" />
        ) : (
          <Upload className="h-7 w-7 text-primary" />
        )}
      </div>
      <p className="font-display text-lg font-semibold text-foreground">
        {dragOver ? "Drop your image here" : "Upload an Image"}
      </p>
      <p className="mt-1 text-sm text-muted-foreground">Drag & drop or click to browse · JPG, PNG, WEBP · Max 10MB</p>
      {error && <p className="mt-3 text-sm text-destructive">{error}</p>}
    </div>
  );
};

export default UploadArea;
