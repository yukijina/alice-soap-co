import { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa6';
import { FaAngleLeft } from 'react-icons/fa6';

function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='m-auto mt-10 border border-amber-400 rounded-lg w-full max-w-4xl'>
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className='border-b border-amber-400 last:border-none'
            onClick={() => toggleItem(index)}
          >
            <button className='flex justify-between items-center p-5 hover:bg-orange-100 transition-colors focus:outline-none w-full'>
              <span className='font-light text-left'>{item.question}</span>
              <div className='text-orange-500 transform transition-transform duration-300'>
                {isOpen ? <FaAngleLeft /> : <FaAngleDown />}
              </div>
            </button>

            {/* content */}
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen
                  ? 'grid-rows[1fr] opacity-100'
                  : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              {/* hidden - hide when it is closed */}
              <div className='overflow-hidden'>
                <p className='p-5 text-orange-900 leading-realaxed text-sm'>
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;
