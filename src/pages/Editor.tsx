import { useState, useCallback } from "react";
import UploadArea from "@/components/editor/UploadArea";
import BeforeAfterSlider from "@/components/editor/BeforeAfterSlider";
import { Button } from "@/components/ui/button";
import { Download, RotateCcw, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type EditorState = "upload" | "processing" | "result";

const Editor = () => {
  const [state, setState] = useState<EditorState>("upload");
  const [originalUrl, setOriginalUrl] = useState<string>("");
  const [processedUrl, setProcessedUrl] = useState<string>("");

  const handleImageSelect = useCallback(async (file: File) => {
    const url = URL.createObjectURL(file);
    setOriginalUrl(url);
    setState("processing");

    try {
      const formData = new FormData();
      formData.append("image", file);

      const response = await fetch(
        "https://sujal02222.app.n8n.cloud/webhook-test/remove-background",
        { method: "POST", body: formData }
      );

      if (!response.ok) throw new Error("Background removal failed");

      const blob = await response.blob();
      const processedBlobUrl = URL.createObjectURL(blob);
      setProcessedUrl(processedBlobUrl);
      setState("result");
    } catch (err) {
      console.error("Background removal error:", err);
      setState("upload");
      URL.revokeObjectURL(url);
      setOriginalUrl("");
    }
  }, []);

  const handleReset = useCallback(() => {
    if (originalUrl) URL.revokeObjectURL(originalUrl);
    setOriginalUrl("");
    setProcessedUrl("");
    setState("upload");
  }, [originalUrl]);

  const handleDownload = useCallback(() => {
    if (!processedUrl) return;
    const a = document.createElement("a");
    a.href = processedUrl;
    a.download = "snapcut-result.png";
    a.click();
  }, [processedUrl]);

  return (
    <main className="min-h-[calc(100vh-4rem)] bg-section py-10">
      <div className="container max-w-3xl">
        <div className="mb-8 text-center">
          <h1 className="font-display text-3xl font-bold text-foreground">Background Remover</h1>
          <p className="mt-2 text-muted-foreground">Upload an image to remove its background instantly</p>
        </div>

        <AnimatePresence mode="wait">
          {state === "upload" && (
            <motion.div key="upload" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              <UploadArea onImageSelect={handleImageSelect} />
            </motion.div>
          )}

          {state === "processing" && (
            <motion.div key="processing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center gap-4 py-20">
              <Loader2 className="h-10 w-10 animate-spin text-primary" />
              <p className="font-display text-lg font-semibold text-foreground">Removing background...</p>
              <p className="text-sm text-muted-foreground">This usually takes less than 5 seconds</p>
            </motion.div>
          )}

          {state === "result" && (
            <motion.div key="result" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              <BeforeAfterSlider originalSrc={originalUrl} processedSrc={processedUrl} />
              <div className="mt-6 flex justify-center gap-3">
                <Button variant="outline" onClick={handleReset} className="gap-2">
                  <RotateCcw className="h-4 w-4" />
                  New Image
                </Button>
                <Button onClick={handleDownload} className="gap-2">
                  <Download className="h-4 w-4" />
                  Download PNG
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
};

export default Editor;
