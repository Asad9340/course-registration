import { useState } from 'react';
import Courses from './Components/Courses/Courses';
import PriceCart from './Components/PriceCart/PriceCart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const totalCourse = 15;
function App() {
  const [selectedCourse, setSelectedCourse] = useState([]);
  const handleSelectBtn = course => {
    const totalCredit = selectedCourse.reduce((p, c) => p + c.credit, 0);
    if (totalCredit + course.credit > totalCourse) {
      return toast.warn(`Only ${totalCourse} credit  is allowed`);
    }

    const alreadyExist = selectedCourse.find(
      element => element.id === course.id
    );

    if (!alreadyExist) {
      toast.success(`Course "${course.name}" added successfully`);
      const allCourse = [...selectedCourse, course];
      setSelectedCourse(allCourse);
    } else {
      toast.info(`Course "${course.name}" already exists`);
    }
  };
  return (
    <div>
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-center text-white bg-gray-900 py-5 mt-10">
        Course Registration
      </h1>
      <div className="flex flex-col md:grid gap-4 grid-cols-12  mt-8 md:mt-12 mx-2 md:mx-4">
        <div className="col-span-8">
          <Courses handleSelectBtn={handleSelectBtn} />
        </div>
        <div className="col-span-4">
          <PriceCart selectedCourse={selectedCourse}></PriceCart>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
