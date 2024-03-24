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
      <div className="mobile:hidden lg:hidden">
        <div className="w-full rounded-t-[20%] bg-blue-100">
          <div className="flex items-center justify-center gap-5 px-[100px] py-5 tracking-wider sm:flex-col">
            <div className="w-[80%]">
              <Image
                className="flex h-[100px] w-[200px] "
                src={"/logo.png"}
                width={400}
                height={400}
                alt="logo"
                // priority={true}
                loading="lazy"
                quality={100}
              />
              <p className="py-5 text-justify text-sm">
                FHCI or Indonesia Human Capital Forum is media for Human Capital
                Management of Indonesia State-Owned Enterprises to Interacting,
                do learning and synergy with their members to develop Human
                Capital Management in Indonesia.
              </p>
              <div className="flex justify-start">
                <button className="flex h-auto w-[140px] items-center justify-center rounded-br-3xl rounded-tl-3xl border border-white bg-white text-red-600">
                  Contact <MdArrowOutward size={30} className="pl-3" />
                </button>
              </div>
            </div>
            <div className="flex sm:flex-col">
              <div className="grid grid-cols-3">
                <div className="sm:ml-10 md:ml-16">
                  <span className="font-sans font-bold">Menu</span>
                  <ul className="py-7 text-sm">
                    <li className="py-3 hover:text-red-500">
                      <Link href="/">Home</Link>
                    </li>
                    <li className="py-3 hover:text-red-500">
                      <Link href="/about">About Us</Link>
                    </li>
                    <li className="py-3 hover:text-red-500">
                      <Link href="/product">Product Company</Link>
                    </li>
                    <li className="py-3 hover:text-red-500">
                      <Link href="/team">Our Team</Link>
                    </li>
                  </ul>
                </div>
                <div className="">
                  <span className="font-sans font-bold">Product Company</span>
                  <ul className="py-7 text-sm">
                    <li className="py-3 hover:text-red-500">
                      <a href="https://srikandibumn.org/">Srikandi BUMN</a>
                    </li>
                    <li className="py-3 hover:text-red-500">
                      <a href="https://bumnmudapelindo.org/">BUMN Muda</a>
                    </li>
                    <li className="py-3 hover:text-red-500">
                      <a href="https://www.lsphcmi.com/">LSP HCMI</a>
                    </li>
                    <li className="py-3 hover:text-red-500">
                      <a href="https://www.instagram.com/lpk_fhci/">LPK FHCI</a>
                    </li>
                  </ul>
                </div>
                <div className="">
                  <span className="font-sans font-bold">Contact Us</span>
                  <ul className="py-7 text-sm">
                    <li className="flex items-center justify-start gap-3 py-3 text-sm hover:text-red-500">
                      <FaWhatsapp size={20} />{" "}
                      <a href="https://api.whatsapp.com/send/?phone=08118954320&text&type=phone_number&app_absent=0">
                        08118954320
                      </a>
                    </li>
                    <li className="flex items-center justify-start gap-3 py-3 text-sm hover:text-red-500">
                      <BsTelephone size={20} />{" "}
                      <a href="https://api.whatsapp.com/send/?phone=08118954320&text&type=phone_number&app_absent=0">
                        021 2709 5432
                      </a>
                    </li>
                    <li className="flex items-center justify-start gap-3 py-3 text-sm hover:text-red-500">
                      <MdOutlineEmail size={20} />
                      <a href="mailto:fhcibumn@gmail.com">fhcibumn@gmail.com</a>
                    </li>
                    <li className="flex items-center justify-center gap-3 py-3 text-sm hover:text-red-500">
                      <SlLocationPin size={50} />
                      <a href="https://maps.app.goo.gl/ueDMDP1Xy3AkyfodA">
                        Gedung Plaza Mandiri Lantai 28, Jalan Jend. Gatot
                        Subroto Kav. 36-38, Jakarta Selatan 12190.
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END MOBILE */}
      {/* Dekstop */}
      <div className="hidden lg:block">
        <div className="w-full rounded-t-[20%] bg-blue-100">
          <div className="flex items-center justify-center gap-5 px-[100px] py-5 tracking-wider">
            <div className="b w-[80%] border-r-2 border-black pr-10">
              <Image
                className="h-[100px] w-[200px]"
                src={"/logo.png"}
                width={400}
                height={400}
                alt="logo"
                //
                loading="lazy"
                quality={100}
              />
              <p className="py-5  text-justify text-sm">
                FHCI or Indonesia Human Capital Forum is media for Human Capital
                Management of Indonesia State-Owned Enterprises to Interacting,
                do learning and synergy with their members to develop Human
                Capital Management in Indonesia.
              </p>
              <div className="flex justify-start">
                <button className="flex h-auto w-[140px] items-center justify-center rounded-br-3xl rounded-tl-3xl border border-white bg-white text-red-600">
                  Contact <MdArrowOutward size={30} className="pl-3" />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-3">
              <div className="ml-[100px] w-[30%]">
                <span className="font-sans font-bold">Menu</span>
                <ul className="py-7 text-sm">
                  <li className="py-3 hover:text-red-500">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="py-3 hover:text-red-500">
                    <Link href="/about">About Us</Link>
                  </li>
                  <li className="py-3 hover:text-red-500">
                    <Link href="/product">Product Company</Link>
                  </li>
                  <li className="py-3 hover:text-red-500">
                    <Link href="/team">Our Team</Link>
                  </li>
                </ul>
              </div>
              <div className=" w-[55%]">
                <span className="font-sans font-bold">Product Company</span>
                <ul className="py-7 text-sm">
                  <li className="py-3 hover:text-red-500">
                    <a href="https://srikandibumn.org/">Srikandi BUMN</a>
                  </li>
                  <li className="py-3 hover:text-red-500">
                    <a href="https://bumnmudapelindo.org/">BUMN Muda</a>
                  </li>
                  <li className="py-3 hover:text-red-500">
                    <a href="https://www.lsphcmi.com/">LSP HCMI</a>
                  </li>
                  <li className="py-3 hover:text-red-500">
                    <a href="https://www.instagram.com/lpk_fhci/">LPK FHCI</a>
                  </li>
                </ul>
              </div>
              <div className="">
                <span className="font-sans font-bold">Contact Us</span>
                <ul className="py-7 text-sm">
                  <li className="flex items-center justify-start gap-3 py-3 text-sm hover:text-red-500">
                    <FaWhatsapp size={20} />{" "}
                    <a href="https://api.whatsapp.com/send/?phone=08118954320&text&type=phone_number&app_absent=0">
                      08118954320
                    </a>
                  </li>
                  <li className="flex items-center justify-start gap-3 py-3 text-sm hover:text-red-500">
                    <BsTelephone size={20} />{" "}
                    <a href="https://api.whatsapp.com/send/?phone=08118954320&text&type=phone_number&app_absent=0">
                      021 2709 5432
                    </a>
                  </li>
                  <li className="flex items-center justify-start gap-3 py-3 text-sm hover:text-red-500">
                    <MdOutlineEmail size={20} />
                    <a href="mailto:fhcibumn@gmail.com">fhcibumn@gmail.com</a>
                  </li>
                  <li className="flex items-center justify-center gap-3 py-3 text-sm hover:text-red-500">
                    <SlLocationPin size={50} />
                    <a href="https://maps.app.goo.gl/ueDMDP1Xy3AkyfodA">
                      Gedung Plaza Mandiri Lantai 28, Jalan Jend. Gatot Subroto
                      Kav. 36-38, Jakarta Selatan 12190.
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Desktop */}
      <div className="flex h-[80px] flex-col items-center justify-center bg-blue-300 py-2 mobile:h-[80px] mobile:gap-4 sm:gap-4 md:flex-row md:justify-between md:px-[100px]">
        <div className="mobile:text-center mobile:text-xs sm:text-xs lg:text-sm">
          © 2024 Create by Nurul Musthofa, Clone from Forum Human Capital
          Indonesia. All Rights Reserved.
        </div>
        <div className="flex gap-5 px-14 tracking-wide">
          <span className="hover:text-red-500">
            <a href="https://www.instagram.com/fhci.bumn/">
              <RiInstagramFill size={20} />
            </a>
          </span>
          <span className="hover:text-red-500">
            <a href="https://twitter.com/fhcibumn">
              <FaTwitter size={20} />
            </a>
          </span>
          <span className="hover:text-red-500">
            <a href="https://www.tiktok.com/@fhci.bumn">
              <FaTiktok size={20} />
            </a>
          </span>
          <span className="hover:text-red-500">
            <a href="https://www.youtube.com/@fhcibumn5207">
              <FaYoutube size={20} />
            </a>
          </span>
        </div>
      </div>
      {/* END FOOTER */}
    </div>
  );
}
