import Link from "next/link";

const Hero = () => {
  return (
    <div>
      <div>
        <div className="flex items-center justify-center bg-slate-300 h-screen text-black ">
          <div className="px-25 text-center ">
            <h1 className="font-bold text-4xl pb-3">Selamat datang!</h1>

            <Link
              href={"/products/"}
              className="font-extralight bg-blue-900 rounded p-1 text-white"
            >
              Lihat
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
