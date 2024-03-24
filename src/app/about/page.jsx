import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";

export const metadata = {
  title: "About Us - Clone FHCI BUMN",
  description: "About Us Page",
};

export default function AboutPage() {
  return (
    <>
      <div className="py-10 md:px-[100px]">
        {/* <div className="text-4xl font-extrabold tracking-wide"> */}
        <h1 className="text-4xl font-extrabold tracking-wide">About FHCI</h1>
        {/* </div> */}
        <div className="py-7 text-justify text-sm">
          <p>
            Kementerian BUMN memprakarsai pertemuan seluruh Direktur Sumber Daya
            Manusia pada tanggal sebelas Nopember dua ribu enam (11-11-2006)
            sampai tanggal tiga belas Nopember dua ribu enam (13-11-2006) di
            Bali, dengan tema Sumber Daya Manuasia BUMN sebagai penentu daya
            saing Indonesia. Diharapkan Sumber Daya Manusia BUMN dapat menjadi
            agen perubahan terciptanya perusahaan yang prima (excellence) dan
            tumbuh berkembang berkesinambungan. Dalam rangka membangun BUMN yang
            kuat, tangguh, dan mampu bersaing dalam globalisasi. Maka diperlukan
            sebuah lembaga yang menjadi agen perubahan terciptanya perusahaan
            yang prima (excellence) dan tumbuh berkembang berkesinambungan.
            Fungsi Manajemen Sumber Daya Manusia BUMN dilingkungan BUMN sepakat
            untuk membentuk Forum Human Capital Indonesia (FHCI).
          </p>
          <br />
          <p>
            Forum ini telah memberikan gagasan-gagasan untuk mendukung
            Kementerian BUMN antara lain konsep Remunerasi Direktur, Generic
            Model Human Capital, Executive Development System, Human Capital
            Competency Directory dan Human Capital Management Synergy.
          </p>
          <br />
          <p>
            Pengurus FHCI telah menjalani 5 periode. Saat ini Ketua FHCI adalah
            Alexandra Askandar (Wakil Direktur Bank Mandiri), sedangkan
            Sekretaris Jenderal adalah Dharma Syahputra (Direktur Human Capital
            Kimia Farma).
          </p>
        </div>
      </div>
      <div className="mobile:flex-col flex justify-between gap-7 bg-blue-200 py-10 md:flex-row md:px-[100px]">
        <div className="w-full py-2 text-justify">
          <h1 className="text-lg font-bold">Visi</h1>
          <p className="py-4 text-sm">
            Menjadi mitra strategis pemerintah dalam membangun Human Capital
            Unggul.
          </p>
        </div>
        <div className="w-full py-2 text-justify">
          <h1 className="text-lg font-bold">Misi</h1>
          <p className="py-4 text-sm">
            Memajukan dan mengembangkan pengelolaan Human Capital Indonesia yang
            berkualitas dan berdaya saing global serta peduli terhadap kegaiatan
            sosial kemasyarakatan.
          </p>
        </div>
        <div className="w-full py-2 text-justify">
          <h1 className="text-lg font-bold">Motto</h1>
          <p className="py-4 text-sm">
            Kami hadir, kami bergerak, kami bekerja, kami bersinergi{" "}
            <i>Employee Value Proposition (EVP) </i>atau Prosisi Nilai Karyawan
            BUMN Belajar, Bertumbuh Berkontribusi untuk Indonesia.
          </p>
        </div>
      </div>
      <div className=" h-auto">
        <div className="flex flex-row-reverse items-end justify-between gap-3 pt-[100px] md:px-[100px]">
          <h1 className=" w-[120px] text-xl font-extrabold ">Team FHCI</h1>
          <hr className="px-auto w-full border-b border-black" />
        </div>
      </div>
      <div className="mobile:justify-center flex w-auto overflow-hidden sm:justify-center">
        <div className="grid grid-cols-1 items-center justify-center gap-2 py-[100px] text-justify md:px-[100px] lg:grid-cols-3">
          <div className=" max-w-xs rounded-lg ">
            <div className="flex items-center justify-center rounded-lg bg-blue-500 pt-4">
              <Image
                className="h-[300px] w-[300px]"
                src={"/poto1.png"}
                width={1000}
                height={1000}
                alt="card"
                // priority={true}
                quality={100}
              />
            </div>
            <p className="title-card py-5 text-lg font-extrabold text-blue-400">
              Alexandra Askandar
            </p>
            <p className="text-sm text-gray-600">Ketua Umum</p>
          </div>
          <div className=" max-w-xs rounded-lg ">
            <div className="flex items-center justify-center rounded-lg bg-blue-500 pt-4">
              <Image
                className=" h-[300px] w-[300px]"
                src={"/poto2.png"}
                width={1000}
                height={1000}
                alt="card"
                // priority={true}
                quality={100}
              />
            </div>
            <p className="title-card py-5 text-lg font-extrabold text-blue-400">
              Dharma Syahputra
            </p>
            <p className="text-sm text-gray-600">Sekertaris Jendral</p>
          </div>
          <div className=" max-w-xs rounded-lg ">
            <div className="flex items-center justify-center rounded-lg bg-blue-500 pt-4">
              <Image
                className=" h-[300px] w-[300px]"
                src={"/poto3.png"}
                width={1000}
                height={1000}
                alt="card"
                // priority={true}
                quality={100}
              />
            </div>
            <p className="title-card py-5 text-lg font-extrabold text-blue-400">
              Nina Kurnia Dewi
            </p>
            <p className="text-sm text-gray-600">Komunikasi Public</p>
          </div>
        </div>
      </div>
      <div className="pb-10">
        <h1 className="text-center text-4xl font-extrabold tracking-wide">
          Core Value <span className="text-blue-500">AKHLAK</span>
        </h1>
      </div>
      {/* Layer terakhir */}
      <div className="grid grid-cols-1 items-center justify-center gap-4 pb-10 md:px-[100px] lg:grid-cols-6">
        <div className="collapse w-full bg-blue-100">
          <input type="checkbox" name="my-accordion-1" />
          <div className="collapse-title font-medium tracking-wide">
            <h1 className="text-xl text-blue-500">
              <span className="text-blue-900">A</span>manah
            </h1>
            <p className="pt-2 text-xs">
              Memegang teguh kepercayaan yang diberikan
            </p>
          </div>
          <div className="collapse-content text-xs">
            <p>1. Memenuhi Janji dan Komitmen</p>
            <p>
              2. Bertanggung jawab atas tugas, keputusan dan tindakan yang
              dilakukan
            </p>
            <p>3. Berpegang teguh kepada nilai moral dan etika</p>
          </div>
        </div>
        <div className="collapse w-full bg-gray-100">
          <input type="checkbox" name="my-accordion-1" />
          <div className="collapse-title font-medium tracking-wide">
            <h1 className="text-xl text-blue-500">
              <span className="text-blue-900">K</span>ompeten
            </h1>
            <p className="pt-2 text-xs">
              Terus belajar dan mengembangkan kapabilitas
            </p>
          </div>
          <div className="collapse-content text-xs">
            <p>
              4. Meningkatkan kompetensi diri untuk menjawab tantangan yang
              selalu berubah
            </p>
            <p>5. Membantu orang lain belajar</p>
            <p>6. Menyelesaikan tugas dengan kualitas terbaik</p>
          </div>
        </div>
        <div className="collapse w-full bg-blue-100">
          <input type="checkbox" name="my-accordion-1" />
          <div className="collapse-title font-medium tracking-wide">
            <h1 className="text-xl text-blue-500">
              <span className="text-blue-900">H</span>armonis
            </h1>
            <p className="pt-2 text-xs">
              Saling peduli dan menghargai perbedaan
            </p>
          </div>
          <div className="collapse-content text-xs">
            <p>7. Menghargai setiap orang apapun latar belakangnya</p>
            <p>8. Suka menolong orang lain</p>
            <p>9. Membangun lingkungan kerja yang kondusif</p>
          </div>
        </div>
        <div className="collapse w-full bg-gray-100">
          <input type="checkbox" name="my-accordion-1" />
          <div className="collapse-title font-medium tracking-wide">
            <h1 className="text-xl text-blue-500">
              <span className="text-blue-900">L</span>oyal
            </h1>
            <p className="pt-2 text-xs">
              Berdedikasi dan mengutamakan kepentingan Bangsa dan Negara
            </p>
          </div>
          <div className="collapse-content text-xs">
            <p>
              10. Menjaga nama baik sesama karyawan, pimpinan, BUMN dan Negara
            </p>
            <p>11. Rela berkorban untuk mencapai tujuan yang lebih besar</p>
            <p>
              12. Patuh kepada pimpinan sepanjang tidak bertentangan dengan
              hukum dan etika
            </p>
          </div>
        </div>
        <div className="collapse w-full bg-blue-100">
          <input type="checkbox" name="my-accordion-1" />
          <div className="collapse-title font-medium tracking-wide">
            <h1 className="text-xl text-blue-500">
              <span className="text-blue-900">A</span>daptif
            </h1>
            <p className="pt-2 text-xs">
              Terus berinovasi dan antusias dalam menggerakkan ataupun
              menghadapi perubahaan
            </p>
          </div>
          <div className="collapse-content text-xs">
            <p>13. Cepat menyesuaikan diri untuk menjadi lebih baik</p>
            <p>
              14. Terus menerus melakukan perbaikan mengikuti perkembangan
              teknologi
            </p>
            <p>15. Bertindak positif</p>
          </div>
        </div>
        <div className="collapse w-full bg-gray-100">
          <input type="checkbox" name="my-accordion-1" />
          <div className="collapse-title font-medium tracking-wide">
            <h1 className="text-xl text-blue-500">
              <span className="text-blue-900">K</span>olaboratif
            </h1>
            <p className="pt-2 text-xs">Membangun kerjasama yang sinergis</p>
          </div>
          <div className="collapse-content text-xs">
            <p>
              16. Memberi kesempatan kepada berbagai pihak untuk berkontribusi
            </p>
            <p>17. Terbuka dalam kerjsama untuk menghasilkan nilai tambah</p>
            <p>
              18. Menggerakkan pemanfaatan berbagai sumber daya untuk tujuan
              bersama
            </p>
          </div>
        </div>
      </div>
      {/* Layer Terakhir */}
    </>
  );
}
