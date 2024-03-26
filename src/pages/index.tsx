import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`${inter.className} pb-32`}>
      <nav className="flex items-center justify-between w-full max-w-screen-lg py-5 mx-auto">
        <img src="/logo.png" />
        <div className="space-x-6 text-sm font-medium text-[#064F57]">
          <a href="#" className="text-[#F75B03] font-semibold">
            Utama
          </a>
          <a href="#">Tadabbur+</a>
          <a href="#">Program</a>
          <a href="#">Produk</a>
        </div>
      </nav>
      {/* main section */}
      <section className="relative px-[200px] py-[120px] bg-gradient-to-b from-[#006559] to-[#064F57] ">
        <div className="flex items-center space-x-8">
          <div className="flex-1 space-y-8">
            <h1 className="text-6xl font-semibold text-white">
              Al-Qur&apos;an
              <br />
              Untuk Semua
            </h1>
            <p className="text-sm text-white">
              Tadabbur Centre ditubuhkan untuk menyahut rasa dahaga masyarakat
              kepada pengisian Al Quran.
            </p>
            <form className="flex w-10/12 space-x-4">
              <input
                className="flex flex-grow px-3 py-2 text-sm border rounded-md border-input bg-background ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="faris@gmail.com"
              />
              <button className="flex-shrink bg-[#F75B03] text-white px-3 py-2 rounded text-sm">
                Langgan
              </button>
            </form>
          </div>
          <img className="flex-1" src="/banner.png" />
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <div className="grid max-w-screen-md grid-cols-4 gap-3 mx-auto -mb-24">
            {[
              { title: "2.3k+", description: "Pelajar Seluruh Malaysia" },
              { title: "30", description: "Siri Kelas Telah Dijalankan" },
              { title: "50", description: "Buah Buku Ilmiah Diterbitkan" },
              { title: "20", description: "Modul Tadabbur Al-Qur’an" },
            ].map((c) => (
              <div
                key={c.title}
                className="p-6 space-y-4 bg-white border rounded-lg shadow"
              >
                <p className="text-5xl font-medium text-[#064F57]">{c.title}</p>
                <hr className="h-[2px] w-[60px] bg-[#F75B03] border-0" />

                <p className="text-gray-600">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative pt-[200px] pb-[100px]">
        <img className="absolute top-0 right-0 mt-20" src="/pattern.png" />
        <img
          className="absolute bottom-0 left-0 rotate-180 mb-36"
          src="/pattern.png"
        />
        <div className="flex items-center justify-between max-w-screen-lg mx-auto">
          <img className="w-[510px]" src="/sub-1.png" />
          <div className="flex flex-col py-[52px] space-y-8 w-[400px]">
            <h2 className="text-2xl font-semibold text-[#064F57]">
              Mengapa Tadabbur?
            </h2>
            <hr className="h-[2px] w-[60px] bg-[#F75B03] border-0" />
            <div className="space-y-4">
              <p>
                Tadabbur disebut di dalam Al-Quran sebanyak empat kali, dan
                kesemuanya merujuk kepada matlamat yang perlu dicapai bagi
                seseorang yang berinteraksi dengan kitab Allah.
              </p>
              <p>
                Tadabbur adalah sesuatu yang dirasai di dalam hati selepas
                seseorang memahami maksud tersurat di sebalik setiap ayat dengan
                berpandukan penjelasan tafsir daripada para ulama.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row-reverse items-center justify-between max-w-screen-lg mx-auto">
          <img className="w-[510px]" src="/sub-2.png" />
          <div className="flex flex-col py-[52px] space-y-8 w-[400px]">
            <div className="space-y-4">
              <p>
                Tadabbur adalah proses menunaikan hak ayat Allah iaitulah
                menghayati sedalam-dalamnya makna sebenar setiap
                ayat seolah-olah ayat berkenaan baru sahaja diturunkan,
              </p>
              <p>
                disasarkan pula penurunannya kepada pembaca dan penurunan itu
                berlaku disebabkan permasalahan semasa yang baru sahaja kita
                hadapi, yang kita kebuntuan mencari dimanakah solusinya.
              </p>
              <p>
                Dalam bahasa mudah, tadabbur adalah kita bertanya soalan berikut
                setiap kali selepas kita membaca sesuatu ayat:
              </p>
              <p className="font-semibold">— Dimanakah aku dalam ayat ini?</p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center py-[100px] bg-[#F6F9F9] space-y-10">
        <h2 className="text-2xl font-bold text-[#064F57]">Matlamat Kami</h2>
        <hr className="h-[2px] w-[60px] bg-[#F75B03] border-0" />
        <div className="grid max-w-screen-lg grid-cols-3 gap-10 mx-auto">
          {[
            {
              icon: "/icon-1.png",
              title: "Pusat Pendidikan",
              desc: "Menawarkan pengajian tadabbur secara fizikal dan atas talian",
            },
            {
              icon: "/icon-2.png",
              title: "Pusat Penyelidikan",
              desc: "Menerbitkan pelbagai jenis buku tadabbur yang berpotensi untuk dijadikan rujukan umum",
            },
            {
              icon: "/icon-3.png",
              title: "Pusat Latihan",
              desc: "Memberi latihan kepada graduan pengajian Tafsir & al-Quran untuk menyampaikan mesej al-Quran kepada masyarakat",
            },
          ].map((item) => (
            <div
              key={item.icon}
              className="w-[330px] bg-white rounded-2xl px-10 py-12 space-y-6 border-2 border-[#F2F2F2]"
            >
              <img src={item.icon} className="w-20 h-20" />
              <p className="text-[#064F57] text-2xl font-medium">
                {item.title}
              </p>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
