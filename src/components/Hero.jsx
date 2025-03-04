import { FaUserPlus } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { MdPsychology } from "react-icons/md";
function Hero() {
  return (
    <div className="m-10">
      <div className="grid grid-cols-4 grid-rows-2 gap-4 p-4">
        <div></div>
        <div className="text-white hover:border rounded-md p-1">
          <img src="src\assets\Container (1).png" alt="" />
        </div>
        <div className="text-white hover:border rounded-md p-1">
          <img src="src\assets\Container (2).png" alt="" />
        </div>
        <div></div>
        <div></div>
        <div className="text-white hover:border rounded-md p-1 ">
          <img src="src\assets\Container (3).png" alt="" />
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Hero;
