import { useState } from "react";
import Courses from "./Components/Courses/Courses";
import PriceCart from "./Components/PriceCart/PriceCart";
function App() {
  const [selectedCourse, setSelectedCourse] = useState([])
  const handleSelectBtn = (course) => {
    const allCourse = [...selectedCourse, course];
    setSelectedCourse(allCourse);
  }
  return (
    <>
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-center text-white bg-gray-900 py-4 mt-10">
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
    </>
  );
}

export default App;
