import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="py-10">
        <div className="flex justify-center">
          <div className="sm:w-[100%] md:w-[80%] lg:w-[70%] xl:w-[50%] h-auto w-[50%]">
            <div className="text-center">
              <h1 className="text-3xl font-semibold">FHCI BUMN</h1>
              <p className="px-4 py-3">
                FHCI adalah wadah para Direktur dan Pegiat Human Capital BUMN
                yang berkomitmen membangun Human Capital Indonesia sejalan
                dengan Employee Value Proposition BUMN yaitu belajar, bertumbuh,
                dan berkontribusi untuk Indonesia.
              </p>
            </div>
          </div>
        </div>
        <div className="w-auto overflow-hidden pt-[100px]">
          <Image
            className="w-[100vw] rounded-t-[40%]"
            src={"/g1.jpg"}
            width={10000}
            height={10000}
            // sizes="100vw"
            alt="Picture"
            quality={100}
            priority={true}
          />
        </div>
      </div>
      <div className="h-auto">
        <div className="grid grid-cols-2">
          <div className="sm:w-[100vw] md:w-[75vw] xl:w-[65vw] lg:w-[70vw] w-[65vw] px-[100px] pt-10">
            <h1 className="text-5xl font-extrabold">
              What is <br /> FHCI?
            </h1>
            <p className="pt-4 text-justify">
              <strong>Forum Human Capital Indonesia (FHCI)</strong> merupakan
              wadah khusus yang di dedikasikan di bidang Sumber Daya Manusia
              (SDM) dengan tujuan merumuskan wawasan strategis bagi pengembangan
              sumber daya manusia di Indonesia, terutama dalam lingkup Badan
              Usaha Milik Negara (BUMN). FHCI berawal pada tahun 2006 ketika
              Kementerian BUMN menginisiasi pertemuan seluruh Direktur Sumber
              Daya Manusia dari tanggal 11 hingga 13 November 2006 di Bali
              dengan tema "Sumber Daya Manusia BUMN sebagai Penentu Daya Saing
              Indonesia". FHCI resmi didirikan pada tanggal 8 Juni 2007.
            </p>
            <br />
            <p className="text-justify">
              Ketua umum FHCI saat ini dijabat oleh Alexandra Askandar (2021 -
              2024). Beberapa ketua umum sebelumnya adalah Ketua Umum FHCI
              pertama - Achmad Purwono (2007-2010), diikuti oleh Rukmi
              Hadihartini (2010-2012), Priyantono Rudito (2012-2015), Herdy
              Harman (2015-2021). Di bawah kepengurusan Alexandra, FHCI
              berkembang memiliki 2 sayap organisasi yaitu Srikandi BUMN dan
              BUMN Muda. FHCI juga mendirikan Lembaga Sertifikasi Profesi (LSP
              HCMI) pada tahun 2020 dan Lembaga Pelatihan (LPK FHCI) di tahun
              2022. Kiprah FHCI selama ini sangat signifikan mewarnai dunia
              Human Capital Indonesia. Hadir dengan berbagai program unggulan
              antara lain:
            </p>
            <br />
            <p className="text-justify">
              1. Program Perekrutan Bersama BUMN untuk umum, penyandang
              disabilitas dan Rekrutmen Putra Putri Papua (PPB) yang saat ini
              semua disinergikan di Program Rekrutmen Bersama BUMN (RBB).
            </p>
            <br />
            <p className="text-justify">
              2. Magang Generasi Bertalenta (Magenta) adalah Program yang
              memfasilitasi mahasiswa untuk melakukan praktik kerja di
              Perusahaan BUMN, terdapat 3 jenis magang yaitu (Magang Umum,
              Magang Santri, dan Indonesia Global Talent Internship atau magang
              mahasiswa yang berasal dari Universitas luar negeri ke perusahaan
              BUMN).
            </p>
            <br />
            <p className="text-justify">
              3. Indonesia Human Capital Summit (IHCS), agenda dua tahunan yang
              merupakan event terbesar Human Capital yang diadakan di Indonesia
              didedikasikan untuk memperkuat kapabilitas HUman Capital
              Indonesia. Event yang selalu menghadirkan nara sumber C-level
              global di bidang human capital, direksi BUMN dan perusahaan
              mutltinasional serta swasta dan akademisi.
            </p>
            <br />
            <p className="text-justify">
              4. School of Chief Human Resource Officer (CHRO) adalah Program
              yang berkolaborasi dengan Kementerian BUMN & BUMN School of
              Excellence (BSE) dalam menunjang transformasi BUMN dari sisi Human
              Capital.
            </p>
            <br />
            <p className="text-justify">
              5. Chief Business Development Officer (CBDO) adalah Program yang
              berkolaborasi dengan Kementerian BUMN, dirancang untuk Chief
              Business Development BUMN & Tim untuk memperkuat kapabilitas
              kepemimpinan dalam Global Business savvy, digital leadership, dan
              driving innovation.
            </p>
            <br />
            <p className="text-justify">
              6. BUMN Goes To Campus (BGTC) juga merupakan kegiatan yang
              berkolaborasi dengan Kementerian BUMN, dalam memperkenalkan BUMN
              ke Universitas di Indonesia.
            </p>
            <br />
            <p className="text-justify">
              7. CEO & CFO Rumah BUMN, adalah Program perekrutan CEO & CFO untuk
              mengembangkan Rumah BUMN serta menjadi bagian dari Program
              Enrichment, dalam pengelolaan Bisnis, managerial skill, dan
              kepemimpinan.
            </p>
            <br />
            <p className="text-justify">
              Harapannya adalah agar sumber daya manusia dalam lingkungan BUMN
              dapat menjadi penggerak utama perubahan dan membantu menciptakan
              perusahaan yang unggul dan berkelanjutan.
            </p>
            <div className="pt-[35px] ">
              <button className="flex h-[40px] w-[160px] items-center justify-center rounded-br-3xl rounded-tl-3xl border-2 border-red-500 bg-red-600 text-white">
                Tentang Kami <MdArrowOutward size={30} className="pl-3" />
              </button>
            </div>
          </div>
          <div className="sm:hidden md:flex md:ml-[110px] lg:ml-[150px] xl:ml-[190px] ml-[190px] flex w-[35vw] items-center justify-start">
            <Image
              className="h-[200px] w-[300px]"
              src={"/logo.png"}
              width={1000}
              height={1000}
              alt="logo"
              priority={true}
              quality={100}
            />
          </div>
        </div>
        <div className="flex items-end justify-between gap-3 px-[100px] py-7">
          <h1 className=" w-[220px] text-xl font-extrabold ">
            Program Unggulan
          </h1>
          <hr className="w-full border-b border-black" />
        </div>
        <div className="flex items-end justify-end px-[100px] py-4">
          <button className="flex h-[40px] w-[160px] items-center justify-center rounded-br-3xl rounded-tl-3xl border-2 border-red-500 bg-red-600 text-white">
            Lihat Program <MdArrowOutward size={30} className="pl-3" />
          </button>
        </div>
        <div className="flex items-end justify-between gap-3 px-[100px] py-4">
          <h1 className=" w-[160px] text-xl font-extrabold ">Press Release</h1>
          <hr className="w-full border-b border-black" />
        </div>
      </div>
      <div className="sm:flex-col flex gap-10 px-[100px] py-5 text-justify">
        <div className="w-[50vw] max-w-xs rounded-lg border-2 bg-blue-100 hover:border-red-700">
          <Link href={"#"}>
            <div className="flex items-center justify-center rounded-lg bg-cyan-800">
              <Image
                className="h-[180px] w-[270px] rounded-lg"
                src={"/card1.jpg"}
                width={1000}
                height={1000}
                alt="card"
                priority={true}
                quality={100}
              />
            </div>
            <div className="flex justify-between px-4 py-3 text-[10px]">
              <span>By: Forum Human Capital Indonesia</span>
              <span>28 Feb 2024</span>
            </div>
            <p className="title-card px-4 text-xs font-extrabold">
              BUMN bersama LinkedIn Jalin Kemitraan Pembelajaran Strategis,
              Menggapai Standar Global dalam Ekosistem BUMN di Indonesia
            </p>
            <p className="px-4 py-2 text-xs text-gray-600">
              Kementerian Badan Usaha Milik Negara (BUMN) mendukung kemitraan
              strategis antara Forum Human Capital Indonesia (FHCI) dan jaringan
              profesional terbesar di dunia.
            </p>
            <div className="flex items-end justify-end px-10 py-3">
              <button className=" flex items-center justify-end text-xs text-red-700">
                Read More <MdArrowOutward size={30} className="pl-3" />
              </button>
            </div>
          </Link>
        </div>
        <div className="w-[50vw] max-w-xs rounded-lg border-2 bg-blue-100 hover:border-red-700">
          <Link href={"#"}>
            <div className="flex items-center justify-center rounded-lg bg-cyan-800">
              <Image
                className="h-[180px] w-[150px] rounded-lg"
                src={"/card2.jpg"}
                width={1000}
                height={1000}
                alt="card"
                priority={true}
                quality={100}
              />
            </div>
            <div className="flex justify-between px-4 py-3 text-[10px]">
              <span>By: Forum Human Capital Indonesia</span>
              <span>08 Feb 2024</span>
            </div>
            <p className="title-card px-4 text-xs font-extrabold">
              Kabar Gembira, Rekrutmen bersama BUMN (RBB) Tahun 2024, akan
              Segera Dibuka
            </p>
            <p className="px-4 py-2 text-xs text-gray-600">
              Kementerian Badan Usaha Milik Negara (BUMN) bersama Forum HUman
              Capital Indonesia (FHCI) kembali membuka kesempatan bagi
              putra-putri terbaik bangsa untuk bergabung menjadi bagian dari
              Badan Usaha Milik Negara (BUMN) melalui Program Rekrutmen Bersama
              BUMN (RBB).
            </p>
            <div className="flex items-end justify-end px-10 py-3">
              <button className=" flex items-center justify-end text-xs text-red-700">
                Read More <MdArrowOutward size={30} className="pl-3" />
              </button>
            </div>
          </Link>
        </div>
        <div className="w-[50vw] max-w-xs rounded-lg border-2 bg-blue-100 hover:border-red-700">
          <Link href={"#"}>
            <div className="flex items-center justify-center rounded-lg bg-cyan-800">
              <Image
                className="h-[180px] w-[270px] rounded-lg"
                src={"/card3.jpg"}
                width={500}
                height={500}
                alt="card"
                priority={true}
                quality={100}
              />
            </div>
            <div className="flex justify-between px-4 py-3 text-[10px]">
              <span>By: Forum Human Capital Indonesia</span>
              <span>20 Des 2023</span>
            </div>
            <p className="title-card px-4 text-xs font-extrabold">
              Peringati Hari Ibu, Srikandi BUMN beri dukungan terhadap Employee
              Well-Being Concern
            </p>
            <p className="px-4 py-2 text-xs text-gray-600">
              Jakarta, 13 Desember 2023 - Dalam rangka memperingati Hari Ibu
              2023, Srikandi BUMN menggelar kegiatan inspiratif yang mengusung
              tema "Kesehatan, Kebangkitan, dan Keseimbangan Pekerja di BUMN".
              Kegiatan yang diselenggarakan di Graha Pertamina Jalan Medan
              Merdeka Timur, Jakarta Pusat ini dihadiri lebih dari 500 Srikandi
              BUMN.
            </p>
            <div className="flex items-end justify-end px-10 py-3">
              <button className=" flex items-center justify-end text-xs text-red-700">
                Read More <MdArrowOutward size={30} className="pl-3" />
              </button>
            </div>
          </Link>
        </div>
        <div className="w-[50vw] max-w-xs rounded-lg border-2 bg-blue-100 hover:border-red-700">
          <Link href={"#"}>
            <div className="flex items-center justify-center rounded-lg bg-cyan-800">
              <Image
                className="h-[180px] w-[270px] rounded-lg"
                src={"/card4.jpg"}
                width={500}
                height={500}
                alt="card"
                priority={true}
                quality={100}
              />
            </div>
            <div className="flex justify-between px-4 py-3 text-[10px]">
              <span>By: Forum Human Capital Indonesia</span>
              <span>03 Des 2023</span>
            </div>
            <p className="title-card px-4 text-xs font-extrabold">
              Lebih dari 2.000 Lowongan Kerja di Rekrutmen BUMN (RBB) 2023.
            </p>
            <p className="px-4 py-2 text-xs text-gray-600">
              JAKARTA, 11 Mei 2023 – Kementerian Badan Usaha Milik Negara
              bersama Forum Human Capital Indonesia (FHCI) kembali membuka
              kesempatan bagi putra-putri terbaik bangsa untuk bergabung menjadi
              bagian dari Badan Usaha Milik Negara (BUMN) melalui Program RBB
              2023. Program ini menjadi komitmen nyata BUMN yang secara
              konsisten mendukung penciptaan lapangan kerja nasional. Bahkan
              pada RBB 2023, kesempatan tersebut terbuka semakin luas karena
              menjangkau lintas entitas (BUMN, Anak Perusahaan BUMN, dan Cucu
              Perusahaan BUMN), jenjang pendidikan yang semakin beragam
              (SMA/SMK/sederajat s.d. S2), serta status pekerjaan baik
              organik/PKWTT maupun kontrak/PKWT.
            </p>
            <div className="flex items-end justify-end px-10 py-3">
              <button className=" flex items-center justify-end text-xs text-red-700">
                Read More <MdArrowOutward size={30} className="pl-3" />
              </button>
            </div>
          </Link>
        </div>
      </div>
      <div className=" px-[100px] py-5">
        <button className="flex h-[40px] w-[160px] items-center justify-center rounded-br-3xl rounded-tl-3xl border-2 border-red-500 bg-red-600 text-white">
          Berita Lainnya <MdArrowOutward size={30} className="pl-3" />
        </button>
      </div>
      <div className="bg-gray-100 py-5">
        <div className=" h-auto">
          <div className="flex flex-row-reverse items-end justify-between gap-3 px-[100px] py-4">
            <h1 className=" w-[90px] text-xl font-extrabold ">Podcast</h1>
            <hr className="px-auto w-full border-b border-black" />
          </div>
        </div>
        <div className="flex items-end justify-end px-[100px] py-4">
          <button className="flex h-[40px] w-[160px] items-center justify-center rounded-br-3xl rounded-tl-3xl border-2 border-red-500 bg-red-600 text-white">
            Podcast <MdArrowOutward size={30} className="pl-3" />
          </button>
        </div>
      </div>
      <div className="flex items-end justify-between gap-3 px-[100px] py-10">
        <h1 className=" w-[120px] text-xl font-extrabold ">Testimonial</h1>
        <hr className="w-full border-b border-black" />
      </div>
    </>
  );
}
