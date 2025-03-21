
import React, { useState, useRef } from 'react';
import { Upload, FileText, Check, AlertCircle, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ResumeUploaderProps {
  onUploadComplete?: (file: File) => void;
}

const ResumeUploader: React.FC<ResumeUploaderProps> = ({ onUploadComplete }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const processFile = (file: File) => {
    // Reset states
    setError(null);
    setUploadSuccess(false);
    
    // Check file type
    const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!validTypes.includes(file.type)) {
      setError('Please upload a PDF or Word document.');
      return;
    }
    
    // Check file size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      setError('File size should be less than 5MB.');
      return;
    }
    
    setFile(file);
    setUploading(true);
    
    // Simulate upload process
    setTimeout(() => {
      setUploading(false);
      setUploadSuccess(true);
      if (onUploadComplete) {
        onUploadComplete(file);
      }
    }, 2000);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      processFile(e.target.files[0]);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };
  
  const resetUpload = () => {
    setFile(null);
    setUploadSuccess(false);
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <AnimatePresence>
          {!file && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={cn(
                "border-2 border-dashed rounded-xl p-8 text-center transition-all duration-200 backdrop-blur-sm",
                isDragging ? "border-primary bg-primary/5" : "border-border bg-white/50",
                error ? "border-destructive/50 bg-destructive/5" : ""
              )}
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileSelect}
                className="hidden"
                accept=".pdf,.doc,.docx"
              />

              <div className="flex flex-col items-center justify-center space-y-4 py-4">
                <div className={cn(
                  "w-16 h-16 rounded-full flex items-center justify-center mb-2",
                  isDragging ? "bg-primary/10" : "bg-secondary"
                )}>
                  <Upload size={24} className={isDragging ? "text-primary" : "text-foreground/70"} />
                </div>
                
                <h3 className="text-xl font-semibold">
                  {isDragging ? "Drop your resume here" : "Upload your resume"}
                </h3>
                
                <p className="text-foreground/70 text-sm max-w-md">
                  Drag and drop your resume file here, or click to browse. We support PDF and Word documents up to 5MB.
                </p>
                
                {error && (
                  <div className="flex items-center text-destructive space-x-2 text-sm mt-2">
                    <AlertCircle size={16} />
                    <span>{error}</span>
                  </div>
                )}
                
                <button
                  onClick={triggerFileInput}
                  className="btn-primary mt-4"
                  type="button"
                >
                  Browse Files
                </button>
              </div>
            </motion.div>
          )}
          
          {file && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="border rounded-xl p-6 bg-white/90 backdrop-blur-sm shadow-soft"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <FileText size={24} className="text-primary" />
                </div>
                
                <div className="flex-1">
                  <h3 className="font-medium truncate max-w-xs">{file.name}</h3>
                  <p className="text-sm text-foreground/70">
                    {(file.size / 1024).toFixed(1)} KB • {file.type.split('/')[1].toUpperCase()}
                  </p>
                  
                  {uploading && (
                    <div className="mt-3">
                      <div className="flex items-center space-x-2 text-sm text-foreground/70 mb-2">
                        <Loader2 size={14} className="animate-spin" />
                        <span>Uploading...</span>
                      </div>
                      <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 2 }}
                          className="h-full bg-primary rounded-full"
                        />
                      </div>
                    </div>
                  )}
                  
                  {uploadSuccess && (
                    <div className="flex items-center space-x-2 text-sm text-green-600 mt-3">
                      <Check size={16} />
                      <span>Upload complete! Your resume is ready for analysis.</span>
                    </div>
                  )}
                </div>
                
                <button
                  onClick={resetUpload}
                  className="text-foreground/60 hover:text-foreground transition-colors"
                  aria-label="Remove file"
                >
                  <X size={20} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ResumeUploader;
