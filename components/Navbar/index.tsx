import Link from "next/link";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <div className="flex justify-between navbar bg-black bg-gradient-to-b from-black to-[#100502]">
      <h1 className="ms-3 font-semibold text-white text-xl">KopiKu</h1>
      <Link href={""} className="px-5">
        <CgProfile size={28} color="white" />
      </Link>
    </div>
  );
};

export default Navbar;
