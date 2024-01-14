import Link from "next/link";

const Hero = () => {
  return (
    <div>
      <div>
        <div className="flex items-center justify-center bg-hero-pattern  bg-cover h-screen text-white  ">
          <div className="px-25 text-center ">
            <h1 className="font-bold text-4xl pb-3">Selamat datang, Admin!</h1>

            <Link
              href={"/products/"}
              className="font-extralight bg-[#856450] rounded p-1 text-white "
            >
              Lihat Produk
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
