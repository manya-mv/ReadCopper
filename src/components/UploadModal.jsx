function UploadModal({ isOpen, onClose, onUpload }) {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    onUpload(file);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      
      {/* Modal Card */}
      <div className="w-full max-w-md rounded-2xl bg-white shadow-2xl border border-gray-100 p-6">

        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl font-semibold text-gray-800">
            Upload Book
          </h2>

          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-900 text-2xl leading-none"
          >
            ×
          </button>
        </div>

        {/* Upload Box */}
        <label className="flex flex-col items-center justify-center gap-3 cursor-pointer border-2 border-dashed border-gray-300 rounded-xl p-10 transition-all hover:border-orange-400 hover:bg-orange-50">

          <svg
            className="w-10 h-10 text-orange-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M7 16V12M7 12l-4 4m4-4l4 4M17 8V4m0 0l-4 4m4-4l4 4" />
          </svg>

          <p className="text-gray-600 text-sm">
            Drag & drop your <span className="font-medium">PDF / EPUB</span>
          </p>

          <p className="text-xs text-gray-400">
            or click to browse files
          </p>

          <input
            type="file"
            accept=".pdf,.epub"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>

        {/* Footer hint */}
        <p className="mt-4 text-xs text-center text-gray-400">
          Supported formats: PDF, EPUB
        </p>
      </div>
    </div>
  );
}

export default UploadModal;