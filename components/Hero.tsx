import Link from "next/link";

const Hero = () => {
  return (
    <div>
      <div>
        <div className="flex items-center justify-center bg-hero-pattern  bg-cover bg-center bg-blend-overlay bg-black/60 bg-fixed h-screen text-white ">
          <div className="px-25 text-center ">
            <h1 className="font-bold text-4xl ">Selamat datang, Admin!</h1>
            <p className="mb-3 mt-3">Sistem informasi stok kopi</p>
            <Link
              href={"/products/"}
              className="font-extralight bg-[#7d4c3b] rounded p-1 hover:bg-[#472e23]  "
            >
              Lihat produk
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
