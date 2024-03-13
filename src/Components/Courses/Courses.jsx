import { useEffect } from 'react';
import { useState } from 'react';
import Course from '../Course/Course';

function Courses({ handleSelectBtn }) {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      const res = await fetch('courses.json');
      const data = await res.json();
      setCourses(data);
    };
    loadData();
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
      {courses.map((course, index) => (
        <Course
          key={index}
          course={course}
          handleSelectBtn={handleSelectBtn}
        ></Course>
      ))}
    </div>
  );
}

export default Courses;
