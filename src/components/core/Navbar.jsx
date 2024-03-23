import Link from "next/link";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
// import { IoMdClose } from "react-icons/io";
import { MdClose } from "react-icons/md";

export default function Navbar() {
  return (
    <nav>
      {/* Mobile */}
      <div className="lg:hidden">
        <div className="relative flex items-center justify-center rounded-b-full bg-blue-100 px-24 text-black shadow">
          <div className="absolute left-10 z-50 flex">
            <div className="drawer">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                <label htmlFor="my-drawer" className="drawer-button">
                  <RxHamburgerMenu size={25} />
                </label>
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="my-drawer"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="text-shuttlegray menu relative min-h-full w-80 bg-base-200 p-4 font-bold">
                  <li className="hover:text-burnorange pt-10">
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link className="hover:text-burnorange" href="/about">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-burnorange" href="/product">
                      Company Product
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-burnorange" href="#">
                      Our Teams
                    </Link>
                  </li>

                  {/* Close button */}
                  <input id="my-drawer" type="checkbox" className="hidden" />
                  <div className="absolute right-5">
                    <label htmlFor="my-drawer">
                      <MdClose size={25} className="text-black" />
                    </label>
                  </div>
                </ul>
              </div>
            </div>
          </div>
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
        </div>
      </div>
      {/* END MOBILE */}
      {/* Desktop */}
      <div className="hidden lg:block">
        <div className=" flex items-center justify-between rounded-b-full bg-blue-100 px-24 text-white shadow">
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
          <div className=" tracking-wide text-black lg:flex lg:gap-10">
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
          {/* END DESKTOP */}
        </div>
      </div>
      {/* End dekstop */}
    </nav>
  );
}
