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
      <section className="px-[200px] py-[120px] bg-gradient-to-b from-[#006559] to-[#064F57] flex space-x-8 items-center">
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
      </section>
      <div className="grid max-w-screen-md grid-cols-4 gap-3 mx-auto -m-16">
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
  );
}
