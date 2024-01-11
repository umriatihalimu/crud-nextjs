import Link from "next/link";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <div className="flex justify-between navbar bg-black bg-gradient-to-b from-black to-[#100502]">
      <h1 className="ms-3 font-semibold text-white text-xl">BPJS</h1>

      <div className="menu hidden md:block md:w-auto text-white" id="navbar">
        <ul className="flex flex-row gap-4">
          <li>Form</li>
          <li>Table</li>
          <li>Hasil</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
