function Popup({ isOpen, onClose, children }) {
  // Do nothing if popup is closed
  if (!isOpen) return null;

  function handleContainerClick(e) {
    e.stopPropagation();
  }

  return (
    <div
      className='fixed inset-0 z-50 flex item-center justify-center bg-black/50 p-4'
      onClick={onClose}
    >
      <div
        className='relative w-full max-w-md scale-100 rounded-lg bg-white p-6 shadow-xl transition-transform animate-in fade-in zoom-in-95 duration-200 max-h-[40vh]'
        onClick={handleContainerClick}
      >
        {/* Close button */}
        <button
          className='absolute right-4 top-4 text-2xl font-semibold text-gray-400 hover:text-gray-700 focus:outline-none'
          onClick={onClose}
        >
          &times;
        </button>

        {/* Content */}
        <div className='mt-12 text-gray-600 flex flex-col items-center '>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Popup;
