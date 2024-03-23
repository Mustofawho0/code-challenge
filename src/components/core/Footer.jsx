import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { FaTwitter, FaTiktok, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import Link from "next/link";

export default function Footer() {
  return (
      <div className="z-10">
        {/* Mobile*/}
        <div className="w-full bg-blue-100 rounded-t-[20%]">
          <div className="flex items-center justify-center px-[100px] py-5 tracking-wider gap-5">
            <div className="b w-[80%] border-r-2 border-black pr-10">
              <Image
                className="w-[200px] h-[100px]"
                src={"/logo.png"}
                width={400}
                height={400}
                alt="logo"
                priority={true}
                quality={100}
              />
              <p className="py-5  text-justify text-sm">
                FHCI or Indonesia Human Capital Forum is media for Human Capital
                Management of Indonesia State-Owned Enterprises to Interacting,
                do learning and synergy with their members to develop Human
                Capital Management in Indonesia.
              </p>
              <div className="flex justify-start">
                <button className="border flex justify-center items-center rounded-tl-3xl rounded-br-3xl border-white bg-white text-red-600 h-auto w-[140px]">
                  Contact <MdArrowOutward size={30} className="pl-3" />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-3">
              <div className="w-[30%] ml-[100px]">
                <span className="font-bold font-sans">Menu</span>
                <ul className="py-7 text-sm">
                  <li className="py-3 hover:text-red-500">
                    <a href="#">Home</a>
                  </li>
                  <li className="py-3 hover:text-red-500">
                    <a href="#">About Us</a>
                  </li>
                  <li className="py-3 hover:text-red-500">
                    <a href="#">Program</a>
                  </li>
                  <li className="py-3 hover:text-red-500">
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
              <div className=" w-[55%]">
                <span className="font-bold font-sans">Product Company</span>
                <ul className="py-7 text-sm">
                  <li className="py-3 hover:text-red-500">
                    <a href="#">Srikandi BUMN</a>
                  </li>
                  <li className="py-3 hover:text-red-500">
                    <a href="#">BUMN Muda</a>
                  </li>
                  <li className="py-3 hover:text-red-500">
                    <a href="#">LSP MHCI</a>
                  </li>
                  <li className="py-3 hover:text-red-500">
                    <a href="#">LPK FHCI</a>
                  </li>
                </ul>
              </div>
              <div className="">
                <span className="font-bold font-sans">Contact Us</span>
                <ul className="py-7 text-sm">
                  <li className="py-3 hover:text-red-500 text-sm flex items-center justify-start gap-3">
                    <FaWhatsapp size={20} /> <a href="#">08118954320</a>
                  </li>
                  <li className="py-3 hover:text-red-500 text-sm flex items-center justify-start gap-3">
                    <BsTelephone size={20} /> <a href="#">021 2709 5432</a>
                  </li>
                  <li className="py-3 hover:text-red-500 text-sm flex items-center justify-start gap-3">
                    <MdOutlineEmail size={20} />
                    <a href="#">fhcibumn@gmail.com</a>
                  </li>
                  <li className="py-3 hover:text-red-500 text-sm flex items-center justify-center gap-3">
                    <SlLocationPin size={50} />
                    <a href="#">
                      Gedung Plaza Mandiri Lantai 28, Jalan Jend. Gatot Subroto
                      Kav. 36-38, Jakarta Selatan 12190.
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* END MOBILE */}
        <div className="bg-blue-300 h-[50px] py-2 px-[100px] flex items-center justify-between">
          <div className="">
            © 2024 by Forum Human Capital Indonesia. All Rights Reserved.
          </div>
          <div className="flex gap-5 px-14 tracking-wide">
            <span className="hover:text-red-500">
              <a href="#">
                <RiInstagramFill size={20} />
              </a>
            </span>
            <span className="hover:text-red-500">
              <a href="#">
                <FaTwitter size={20} />
              </a>
            </span>
            <span className="hover:text-red-500">
              <a href="#">
                <FaTiktok size={20} />
              </a>
            </span>
            <span className="hover:text-red-500">
              <a href="#">
                <FaYoutube size={20} />
              </a>
            </span>
          </div>
        </div>
        {/* END FOOTER */}
      </div>
      // END Dekstop
      
  );
}
