import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";

export default function ProductPage() {
  return (
    <>
      <div className="py-10 md:px-[100px]">
        <div className="flex items-end justify-between gap-3 py-7">
          <h1 className=" w-[220px] text-xl font-extrabold ">
            Product Company FHCI
          </h1>
          <hr className="w-full border-b border-black" />
        </div>
        <div className="mobile:justify-center flex w-auto overflow-hidden sm:justify-center">
          <div className="grid grid-cols-1 gap-5 py-5 text-justify md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
            <div className=" max-w-xs rounded-lg border-2 hover:border-red-700">
              <Link href={"#"}>
                <div className="flex items-center justify-center rounded-lg bg-cyan-800">
                  <Image
                    className="h-[150px] w-[320px] rounded-lg"
                    src={"/card5.png"}
                    width={1000}
                    height={1000}
                    alt="card"
                    // priority={true}
                    quality={100}
                  />
                </div>
                <p className="title-card px-4 pt-4 text-sm font-extrabold">
                  Rekrutmen Bersama BUMN
                </p>
                <p className="px-4 py-2 text-xs text-gray-600">
                  Sebagai bentuk perwujudan BUMN Untuk Indonesia, Kementerian
                  BUMN melalui Forum Human Capital Indonesia (FHCI) membuka
                  kesempatan bagi putra-putri terbaik Indonesia untuk bergabung
                  dan menjadi bagian dari keluarga besar BUMN melalui Rekrutmen
                  Bersama BUMN Grup
                </p>
                <div className="flex items-end justify-end px-10 py-3">
                  <button className=" flex items-center justify-end text-xs text-red-700">
                    Read More <MdArrowOutward size={30} className="pl-3" />
                  </button>
                </div>
              </Link>
            </div>
            <div className=" max-w-xs rounded-lg border-2 hover:border-red-700">
              <Link href={"#"}>
                <div className="flex items-center justify-center rounded-lg bg-cyan-800">
                  <Image
                    className="h-[150px] w-[320px] rounded-lg"
                    src={"/card6.png"}
                    width={1000}
                    height={1000}
                    alt="card"
                    // priority={true}
                    quality={100}
                  />
                </div>
                <p className="title-card px-4 pt-4 text-sm font-extrabold">
                  Magang Generasi Bertalenta
                </p>
                <p className="px-4 py-2 text-xs text-gray-600">
                  MAGENTA BUMN memberikan kesempatan berharga untuk terus
                  belajar, bertumbuh dan berkontribusi untuk Indonesia melalui
                  program magang di BUMN.
                </p>
                <div className="flex items-end justify-end px-10 py-3">
                  <button className=" flex items-center justify-end text-xs text-red-700">
                    Read More <MdArrowOutward size={30} className="pl-3" />
                  </button>
                </div>
              </Link>
            </div>
            <div className=" max-w-xs rounded-lg border-2 hover:border-red-700">
              <Link href={"#"}>
                <div className="flex items-center justify-center rounded-lg bg-cyan-800">
                  <Image
                    className="h-[150px] w-[320px] rounded-lg"
                    src={"/card7_1.jpg"}
                    width={1000}
                    height={1000}
                    alt="card"
                    // priority={true}
                    quality={100}
                  />
                </div>
                <p className="title-card px-4 pt-4 text-sm font-extrabold">
                  Indonesia Human Capital Summit
                </p>
                <p className="px-4 py-2 text-xs text-gray-600">
                  Indonesia Human Capital Summit (IHCS) merupakan kegiatan rutin
                  dua tahunan FHCI sebagai ajang silaturahmi sebagai komunitas
                  penggiat SDM BUMN untuk mengembangkan SDM Indonesia yang
                  unggul. IHCS telah diadakan empat kali, dari mulai tahun 2016
                  hingga tahun 2023. Pelaksanaan lndonesia Human Capital Summit
                  (IHCS) menjadi komitmen FHCI sebagai mitra pemerintah untuk
                  mengembangkan sumber daya manusia Indonesia.
                </p>
                <div className="flex items-end justify-end px-10 py-3">
                  <button className=" flex items-center justify-end text-xs text-red-700">
                    Read More <MdArrowOutward size={30} className="pl-3" />
                  </button>
                </div>
              </Link>
            </div>
            <div className=" max-w-xs rounded-lg border-2 hover:border-red-700">
              <Link href={"#"}>
                <div className="flex items-center justify-center rounded-lg bg-white">
                  <Image
                    className="h-[150px] w-[200px] rounded-lg"
                    src={"/card8.png"}
                    width={1000}
                    height={1000}
                    alt="card"
                    // priority={true}
                    quality={100}
                  />
                </div>
                <p className="title-card px-4 pt-4 text-sm font-extrabold">
                  Lembaga Pelatihan Kerja FHCI
                </p>
                <p className="px-4 py-2 text-xs text-gray-600">
                  LPK FHCI adalah singkatan dari "Lembaga Pelatihan dan
                  Konsultasi Fakultas Hukum dan Ilmu Sosial Politik". Ini
                  mungkin merupakan lembaga yang menyediakan pelatihan, kursus,
                  atau konsultasi di berbagai bidang yang terkait dengan hukum,
                  ilmu sosial, dan politik. Lembaga semacam ini mungkin berfokus
                  pada memberikan pelatihan atau konsultasi kepada individu atau
                  organisasi yang tertarik atau membutuhkan pemahaman lebih
                  lanjut dalam bidang-bidang tersebut.
                </p>
                <div className="flex items-end justify-end px-10 py-3">
                  <button className=" flex items-center justify-end text-xs text-red-700">
                    Read More <MdArrowOutward size={30} className="pl-3" />
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-end justify-between gap-3 py-7">
          <h1 className=" w-[120px] text-xl font-extrabold ">Testimonial</h1>
          <hr className="w-full border-b border-black" />
        </div>
        <div>
          <section className="text-black">
            <div className="container mx-auto px-6 py-12">
              <div className="grid items-center gap-4 xl:grid-cols-5">
                <div className="mx-auto my-8 max-w-2xl space-y-4 text-center xl:col-span-2 xl:text-left">
                  <h2 className="text-4xl font-bold">
                    WHAT OUR EMPLOYEE ARE SAYING ABOUT US
                  </h2>
                </div>
                <div className="p-6 xl:col-span-3">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="grid content-center gap-4">
                      <div className="rounded-lg p-6 shadow-md dark:bg-blue-200">
                        <p>
                          Saya berterima kasih kepada BUMN terutama kedapa FHCI
                          karena saya mampu belajar dan beradaptasi terhadap
                          perkembangan zaman yang semakin cepat.
                        </p>
                        <div className="mt-4 flex items-center space-x-4">
                          <Image
                            src={"/r1.png"}
                            width={50}
                            height={50}
                            alt="gambar"
                            className="h-12 w-12 rounded-full bg-cover bg-center dark:bg-gray-500"
                          />
                          <div>
                            <p className="text-lg font-semibold">
                              Rizky Pratama
                            </p>
                            <p className="text-sm dark:text-gray-500">
                              Staf Bank at Bank Rakyat Indonesia Tbk.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="rounded p-6 shadow-md dark:bg-blue-200">
                        <p>
                          Terima kasih kepada BUMN karena sudah memberikan saya
                          peluang dan value yang dapat meningkatkan kualitas
                          yang terpadat pada dalam dunia kerja dan diri saya
                        </p>
                        <div className="mt-4 flex items-center space-x-4">
                          <Image
                            src={"/r2.jpg"}
                            width={50}
                            height={50}
                            alt="gambar"
                            className="h-12 w-12 rounded-full bg-cover bg-center dark:bg-gray-500"
                          />
                          <div>
                            <p className="text-lg font-semibold">
                              Hendra Saputra
                            </p>
                            <p className="text-sm dark:text-gray-500">
                              Staf Bank at Bank Negara Indonesia Tbk.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid content-center gap-4">
                      <div className="rounded-lg p-6 shadow-md dark:bg-blue-200">
                        <p>
                          Terima kasih kepada FHCI, saya telah menemukan arah
                          yang jelas dalam karir saya. Dukungan dan bimbingan
                          yang saya terima telah membantu saya tumbuh dan
                          berkembang secara profesional.
                        </p>
                        <div className="mt-4 flex items-center space-x-4">
                          <Image
                            src={"/r3.jpg"}
                            width={50}
                            height={50}
                            alt="gambar"
                            className="h-12 w-12 rounded-full bg-cover bg-center dark:bg-gray-500"
                          />
                          <div>
                            <p className="text-lg font-semibold">
                              Bayu Kurniawan
                            </p>
                            <p className="text-sm dark:text-gray-500">
                              Staf at Perkebunan Nusantara
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg p-6 shadow-md dark:bg-blue-200">
                        <p>
                          Saya sangat terkesan dengan FHCI. Karena, dari
                          pelatihan keterampilan teknis hingga seminar
                          kepemimpinan, semuanya dirancang dengan baik dan
                          memberikan nilai tambah yang signifikan bagi karyawan.
                        </p>
                        <div className="mt-4 flex items-center space-x-4">
                          <Image
                            src={"/r4.jpg"}
                            width={50}
                            height={50}
                            alt="gambar"
                            className="h-12 w-12 rounded-full bg-cover bg-center dark:bg-gray-500"
                          />
                          <div>
                            <p className="text-lg font-semibold">
                              Fajar Ramadhan
                            </p>
                            <p className="text-sm dark:text-gray-500">
                              Staf at JasaMarga
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
