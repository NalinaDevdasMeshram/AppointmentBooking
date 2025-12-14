import { Link } from "react-router-dom";
import { specialityData } from "../assets/assets_frontend/assets";

const SpecialityMenu = () => {
  return (
    <div
      id="speciality"
      className="flex flex-col items-center gap-4 py-18 text-gray-600"
    >
      <h1 className="text-3xl font-medium mt-2">Find By speciality</h1>
      <p className="sm:w-1/3 text-center text-xl">
        Simply Browser through our extensive list of trusted doctors, sechedule
        your appointment hassle-free.
      </p>
      <div className="flex sm:justify-center gap-4 pt-5 w-full overflow-scroll">
        {specialityData.map((item, index) => (
          <Link
            onClick={() => scroll(0, 0)}
            className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-300"
            to={`/doctors/${item.speciality}`}
            key={index}
          >
            <img className="w-16 sm:w-24 mb-2" src={item.image} alt="refresh" />
            <p className="text-xl">{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;
