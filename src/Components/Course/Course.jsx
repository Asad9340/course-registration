import { PiCurrencyCircleDollarFill } from 'react-icons/pi';
import { FaBookOpen } from 'react-icons/fa';
import { useState } from 'react';
function Course({ course, handleSelectBtn }) {
  const { photo, name, description, price, credit } = course;
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const handleBtn = () => {
    handleSelectBtn(course),
      handleClick();
  }
  return (
    <div
      className={` rounded-lg border p-2 bg-[#ffffff] hover:bg-gray-300 duration-300         ${click?'bg-gray-200':''}`}
    >
      <img src={photo} alt="" className=" w-full rounded-t-md object-cover" />
      <div className="p-4">
        <h1 className="inline-flex items-center text-lg font-semibold">
          {name}
        </h1>
        <p className="mt-3 text-sm text-gray-600">{description}</p>
        <div className="mt-4 flex justify-between items-center text-base font-medium text-[#1C1B1B99]">
          <div className="flex gap-1 items-center">
            <PiCurrencyCircleDollarFill />
            <h3>Price: {price} </h3>
          </div>
          <div className="flex gap-1 items-center">
            <FaBookOpen />
            <h3>Credit: {credit} </h3>
          </div>
        </div>
        <button
          onClick={handleBtn}
          type="button"
          className="mt-4 w-full rounded-md bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Select
        </button>
      </div>
    </div>
  );
}

export default Course;
