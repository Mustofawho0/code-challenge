import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
  return (
    <>
      <nav>
        <div className=" z-10 flex items-center justify-between rounded-b-full bg-blue-100 px-24 text-white shadow">
          <div>
            <Image
              className="h-[70px] w-[140px]"
              priority={true}
              quality={100}
              src="/logo.png"
              alt="logo"
              width={1000}
              height={1000}
            />
          </div>
          <div className="sm:hidden md:hidden flex gap-10 tracking-wide text-black">
            <Link href={"/"}>
              <span className="">Home</span>
            </Link>
            <Link href={"/about"}>
              <span>About Us</span>
            </Link>
            <Link href={"/product"}>
              <span>Product Company</span>
            </Link>
            <span>Our Team</span>
          </div>
        </div>
      </nav>
      {/* <div className="divider bg-gray-300 shadow-xl w-auto h-auto my-auto py-auto"></div> */}
    </>
  );
}
