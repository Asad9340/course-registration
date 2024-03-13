function PriceCat({ selectedCourse }) {
  return (
    <div className="p-4 bg-[#ffffff] rounded-lg space-y-3">
      <h3 className="text-lg font-bold text-[#2F80ED]">
        Credit Hour Remaining 7 hr
      </h3>
      <div>
        <h3 className="text-xl font-bold text-[#1C1B1B]">Course Name: </h3>
        <p className="text-black mt-3">{
          selectedCourse.map((course, index) => <li className="list-decimal mb-1" key={index}>{course.name}</li>)
        }</p>
      </div>
    </div>
  );
}

export default PriceCat