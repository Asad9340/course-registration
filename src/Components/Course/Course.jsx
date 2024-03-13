function Course({ course }) {
  console.log(course);
  const { photo, name, description } = course;
  return (
    <div className=" rounded-md border p-4 mt-8 md:mt-12">
      <img src={photo} alt="" className=" w-full rounded-t-md object-cover" />
      <div className="p-4">
        <h1 className="inline-flex items-center text-lg font-semibold">
          {name}
        </h1>
        <p className="mt-3 text-sm text-gray-600">{description}</p>
        <div className="mt-4">
          <div>
            
         </div>
         <div></div>
        </div>
        <button
          type="button"
          className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Read
        </button>
      </div>
    </div>
  );
}

export default Course;
