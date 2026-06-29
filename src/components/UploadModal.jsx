function UploadModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">

      <div className="w-[500px] rounded-2xl bg-white p-8">

        <div className="mb-6 flex items-center justify-between">

          <h2 className="text-2xl font-bold">
            Upload Book
          </h2>

          <button
            onClick={onClose}
            className="text-2xl"
          >
            ×
          </button>

        </div>

        <div className="rounded-xl border-2 border-dashed border-gray-300 p-12 text-center">

          <p className="mb-6 text-gray-500">
            Drag & Drop your PDF or EPUB here
          </p>

          <input
            type="file"
            accept=".pdf,.epub"
          />

        </div>

      </div>

    </div>
  );
}

export default UploadModal;