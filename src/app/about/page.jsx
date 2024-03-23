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
      <div className="px-[100px] py-10">
        {/* <div className="text-4xl font-extrabold tracking-wide"> */}
        <h1 className="text-4xl font-extrabold tracking-wide">About FHCI</h1>
        {/* </div> */}
        <div className="text-justify py-7 text-sm">
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
      <div className="flex bg-blue-200 px-[100px] py-10 gap-7 justify-between">
        <div className="text-justify py-2 w-full">
          <h1 className="font-bold text-lg">Visi</h1>
          <p className="py-4 text-sm">
            Menjadi mitra strategis pemerintah dalam membangun Human Capital
            Unggul.
          </p>
        </div>
        <div className="text-justify py-2 w-full">
          <h1 className="font-bold text-lg">Misi</h1>
          <p className="py-4 text-sm">
            Memajukan dan mengembangkan pengelolaan Human Capital Indonesia yang
            berkualitas dan berdaya saing global serta peduli terhadap kegaiatan
            sosial kemasyarakatan.
          </p>
        </div>
        <div className="text-justify py-2 w-full">
          <h1 className="font-bold text-lg">Motto</h1>
          <p className="py-4 text-sm">
            Kami hadir, kami bergerak, kami bekerja, kami bersinergi{" "}
            <i>Employee Value Proposition (EVP) </i>atau Prosisi Nilai Karyawan
            BUMN Belajar, Bertumbuh Berkontribusi untuk Indonesia.
          </p>
        </div>
      </div>
      <div className=" h-auto">
        <div className="pt-[100px] px-[100px] flex justify-between flex-row-reverse items-end gap-3">
          <h1 className=" font-extrabold text-xl w-[120px] ">Team FHCI</h1>
          <hr className="border-b border-black w-full px-auto" />
        </div>
      </div>
      <div className="w-auto overflow-hidden flex sm:justify-center">
      <div className="grid grid-cols-1 px-[100px] text-justify gap-2 lg:grid-cols-3 items-center justify-center py-[100px]">
        <div className=" rounded-lg max-w-xs ">
          <div className="flex justify-center pt-4 items-center rounded-lg bg-blue-500">
            <Image
              className="w-[300px] h-[300px]"
              src={"/poto1.png"}
              width={1000}
              height={1000}
              alt="card"
              priority={true}
              quality={100}
            />
          </div>
          <p className="text-lg title-card font-extrabold py-5 text-blue-400">
            Alexandra Askandar
          </p>
          <p className="text-sm text-gray-600">Ketua Umum</p>
        </div>
        <div className=" rounded-lg max-w-xs ">
          <div className="flex justify-center pt-4 items-center rounded-lg bg-blue-500">
            <Image
              className=" w-[300px] h-[300px]"
              src={"/poto2.png"}
              width={1000}
              height={1000}
              alt="card"
              priority={true}
              quality={100}
            />
          </div>
          <p className="text-lg title-card font-extrabold py-5 text-blue-400">
            Dharma Syahputra
          </p>
          <p className="text-sm text-gray-600">Sekertaris Jendral</p>
        </div>
        <div className=" rounded-lg max-w-xs ">
          <div className="flex justify-center pt-4 items-center rounded-lg bg-blue-500">
            <Image
              className=" w-[300px] h-[300px]"
              src={"/poto3.png"}
              width={1000}
              height={1000}
              alt="card"
              priority={true}
              quality={100}
            />
          </div>
          <p className="text-lg title-card font-extrabold py-5 text-blue-400">
            Nina Kurnia Dewi
          </p>
          <p className="text-sm text-gray-600">Komunikasi Public</p>
        </div>
      </div>
      </div>
      <div className="pb-10">
        <h1 className="text-4xl font-extrabold tracking-wide text-center">
          Core Value <span className="text-blue-500">AKHLAK</span>
        </h1>
      </div>
      {/* Layer terakhir */}
      <div className="px-[100px] flex items-center justify-center gap-4 pb-10">
        <div className="collapse bg-blue-100 w-full">
          <input type="checkbox" name="my-accordion-1" />
          <div className="collapse-title font-medium tracking-wide">
            <h1 className="text-blue-500 text-xl">
              <span className="text-blue-900">A</span>manah
            </h1>
            <p className="text-xs pt-2">
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
        <div className="collapse bg-gray-100 w-full">
          <input type="checkbox" name="my-accordion-1" />
          <div className="collapse-title font-medium tracking-wide">
            <h1 className="text-blue-500 text-xl">
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
        <div className="collapse bg-blue-100 w-full">
          <input type="checkbox" name="my-accordion-1" />
          <div className="collapse-title font-medium tracking-wide">
            <h1 className="text-blue-500 text-xl">
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
        <div className="collapse bg-gray-100 w-full">
          <input type="checkbox" name="my-accordion-1" />
          <div className="collapse-title font-medium tracking-wide">
            <h1 className="text-blue-500 text-xl">
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
        <div className="collapse bg-blue-100 w-full">
          <input type="checkbox" name="my-accordion-1" />
          <div className="collapse-title font-medium tracking-wide">
            <h1 className="text-blue-500 text-xl">
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
        <div className="collapse bg-gray-100 w-full">
          <input type="checkbox" name="my-accordion-1" />
          <div className="collapse-title font-medium tracking-wide">
            <h1 className="text-blue-500 text-xl">
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
