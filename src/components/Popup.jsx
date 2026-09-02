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
        className='relative w-full max-w-md scale-100 rounded-lg bg-amber-50 p-6 shadow-xl transition-transform animate-in fade-in zoom-in-95 duration-200 max-h-[50vh]'
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
        <div className='absolute inset-0 m-auto w-90 text-gray-600 flex flex-col items-center justify-center'>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Popup;
