import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`${inter.className}`}>
      <nav className="flex items-center justify-between w-full max-w-screen-lg px-6 py-5 mx-auto sm:px-16 lg:px-8">
        <img src="/logo.png" className="md:w-72 w-52" />
        <div className="space-x-4 text-sm font-medium text-[#064F57] hidden md:block">
          <a
            href="#"
            className="text-[#F75B03] font-semibold px-3 py-2 transition-all rounded-lg hover:bg-gray-100"
          >
            Utama
          </a>
          <a
            href="#"
            className="px-3 py-2 transition-all rounded-lg hover:bg-gray-100"
          >
            Tadabbur+
          </a>
          <a
            href="#"
            className="px-3 py-2 transition-all rounded-lg hover:bg-gray-100"
          >
            Program
          </a>
          <a
            href="#"
            className="px-3 py-2 transition-all rounded-lg hover:bg-gray-100"
          >
            Produk
          </a>
        </div>
        <div className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 icon icon-tabler icon-tabler-menu-2"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#2c3e50"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6l16 0" />
            <path d="M4 12l16 0" />
            <path d="M4 18l16 0" />
          </svg>
        </div>
      </nav>
      {/* main section */}
      {/* <section className="relative px-6 sm:px-16 lg:px-8 pt-[60px] pb-[280px] sm:pb-[120px] md:py-[120px] bg-gradient-to-b from-[#006559] to-[#064F57] z-10"> */}
      <section className="relative px-6 sm:px-16 lg:px-8 pt-[60px] pb-[280px] sm:pb-[120px] md:py-[120px] hero z-10">
        <div className="flex flex-col items-center max-w-screen-lg mx-auto space-y-8 md:space-x-8 md:flex-row md:space-y-0">
          <div className="flex-1 space-y-8 text-center md:text-left">
            <h1 className="text-4xl font-semibold text-white sm:text-6xl">
              Al-Qur&apos;an
              <br />
              Untuk Semua
            </h1>
            <p className="text-sm text-white">
              Tadabbur Centre ditubuhkan untuk menyahut rasa dahaga masyarakat
              kepada pengisian Al Quran.
            </p>
            <form className="flex flex-col items-center justify-center w-full max-w-[400px] mx-auto space-y-4 md:space-y-0 md:space-x-4 md:flex-row md:w-10/12 md:mx-0">
              <input
                className="flex flex-grow w-full px-3 py-2 text-sm border rounded-md md:w-auto border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="faris@gmail.com"
              />
              <button className="flex-shrink w-full md:w-auto bg-[#F75B03] hover:bg-[#ff8b47] transition-all duration-300 text-white px-3 py-2 rounded text-sm font-medium">
                Langgan
              </button>
            </form>
          </div>
          <img
            className="w-full aspect-video md:aspect-auto rounded-lg object-cover md:max-w-[400px] lg:max-w-[510px]"
            src="/banner.png"
          />
        </div>
        <div className="absolute bottom-0 left-0 w-full px-8">
          <div className="grid max-w-screen-md grid-cols-2 gap-3 mx-auto -mb-20 sm:grid-cols-4 md:-mb-24">
            {[
              { title: "2.3k+", description: "Pelajar Seluruh Malaysia" },
              { title: "30", description: "Siri Kelas Telah Dijalankan" },
              { title: "50", description: "Buah Buku Ilmiah Diterbitkan" },
              { title: "20", description: "Modul Tadabbur Al-Qur’an" },
            ].map((c) => (
              <div
                key={c.title}
                className="p-4 space-y-4 bg-white border rounded-lg shadow md:p-6"
              >
                <p className="text-3xl md:text-5xl font-medium text-[#064F57]">
                  {c.title}
                </p>
                <hr className="h-[2px] w-[60px] bg-[#F75B03] border-0" />

                <p className="text-sm text-gray-500 md:text-base ">
                  {c.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative pt-[100px] sm:pt-[150px] lg:pt-[200px] pb-[50px] md:pb-[100px] space-y-4 md:space-y-0">
        <img
          className="absolute top-0 right-0 hidden -z-10 lg:block lg:mt-20"
          src="/pattern.png"
        />
        <img
          className="absolute bottom-0 left-0 hidden rotate-180 -z-10 lg:block mb-36"
          src="/pattern.png"
        />
        <div className="flex flex-col items-center justify-between max-w-screen-lg px-6 mx-auto bg-white sm:px-14 md:px-16 md:flex-row lg:px-8">
          <img
            className="w-full object-cover sm:h-[280px] rounded-lg md:w-[380px] lg:w-[510px]"
            src="/sub-1.png"
          />
          <div className="flex flex-col py-[30px] lg:py-[52px] space-y-4 md:space-y-8 w-full md:w-[400px]">
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
        <div className="flex flex-col items-center justify-between max-w-screen-lg px-6 mx-auto bg-white sm:px-14 md:px-16 md:flex-row-reverse lg:px-8 ">
          <img
            className="w-full object-cover sm:h-[280px] rounded-lg md:w-[380px] lg:w-[510px]"
            src="/sub-2.png"
          />
          <div className="flex flex-col py-[30px] lg:py-[52px] space-y-8 w-full md:w-[400px]">
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
      <section className="flex flex-col items-center py-[50px] md:py-[100px] bg-[#F6F9F9] space-y-5 md:space-y-10 px-6 ">
        <h2 className="text-2xl font-bold text-[#064F57]">Matlamat Kami</h2>
        <hr className="h-[2px] w-[60px] bg-[#F75B03] border-0" />
        <div className="grid max-w-screen-lg grid-cols-1 gap-5 mx-auto md:grid-cols-3 ">
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
              className="flex flex-col justify-center items-center sm:items-start sm:justify-start w-full sm:text-left text-center bg-white rounded-2xl px-8 py-6 sm:px-14 sm:py-12 space-y-6 border-2 border-[#F2F2F2]"
            >
              <img src={item.icon} className="w-20 h-20" />
              <h3 className="text-[#064F57] text-2xl font-medium">
                {item.title}
              </h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-[30px] my-[70px] w-full flex space-x-5 overflow-scroll">
        {[1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6].map((p, i) => (
          <img
            key={i}
            src={`/slide-${p}.png`}
            className="object-cover h-36 w-60"
          />
        ))}
      </section>
      <section className="bg-[#064F57] py-[50px] sm:py-[100px] flex flex-col items-center space-y-5 sm:space-y-10 px-6">
        <h2 className="text-2xl font-semibold text-center text-white sm:text-4xl sm:text-left">
          Projek Tadabbur Centre
        </h2>
        <hr className="h-[2px] w-[60px] bg-[#F75B03] border-0" />
        <div className="flex flex-col md:flex-row bg-[#054249] p-6 sm:p-14 rounded-2xl space-y-5 md:space-y-0 md:space-x-10">
          <img src="/sub-3.png" className="w-full max-w-[452px]" />
          <div className="flex flex-col text-white w-full md:w-[392px] space-y-5">
            <h3 className="text-2xl font-medium">Kuliah dan Seminar</h3>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                congue eu elit sed rhoncus.
              </p>
              <br />
              <p>
                Fusce ultrices erat sit amet vestibulum fermentum. Ut vitae nisl
                aliquam, vestibulum turpis a, viverra sapien.
              </p>
            </div>
            <div>
              <button className="w-full sm:w-auto flex-shrink bg-[#F75B03] hover:bg-[#ff8b47] transition-all duration-300 text-white px-3 py-2 rounded text-sm font-medium">
                Jadual Program
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse bg-[#054249] p-6 sm:p-14 rounded-2xl space-y-5 md:space-y-0 md:space-x-10">
          <img src="/sub-4.png" className="w-full max-w-[452px]" />
          <div className="flex flex-col text-white w-full md:w-[392px] space-y-5">
            <h3 className="text-2xl font-medium">Penerbitan</h3>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                congue eu elit sed rhoncus.
              </p>
              <br />
              <p>
                Fusce ultrices erat sit amet vestibulum fermentum. Ut vitae nisl
                aliquam, vestibulum turpis a, viverra sapien.
              </p>
            </div>
            <div>
              <button className="w-full sm:w-auto flex-shrink bg-[#F75B03] hover:bg-[#ff8b47] transition-all duration-300 text-white px-3 py-2 rounded text-sm font-medium">
                Kedai Online
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row bg-[#054249] p-6 sm:p-14 rounded-2xl space-y-5 md:space-y-0 md:space-x-10">
          <img src="/sub-5.png" className="w-full max-w-[452px]" />
          <div className="flex flex-col text-white w-full md:w-[392px] space-y-5">
            <h3 className="text-2xl font-medium">Tadabbur+</h3>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                congue eu elit sed rhoncus.
              </p>
              <br />
              <p>
                Fusce ultrices erat sit amet vestibulum fermentum. Ut vitae nisl
                aliquam, vestibulum turpis a, viverra sapien.
              </p>
            </div>
            <div>
              <button className="w-full sm:w-auto flex-shrink bg-[#F75B03] hover:bg-[#ff8b47] transition-all duration-300 text-white px-3 py-2 rounded text-sm font-medium">
                Sertai Kami
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-[50px] sm:py-[100px] bg-[#F6F9F9] space-y-5 sm:space-y-10 px-6">
        <div className="flex flex-col items-center justify-between w-full max-w-screen-lg px-4 mx-auto sm:flex-row ">
          <h2 className="text-2xl font-semibold text-[#064F57] ">
            Bacaan & Buah Fikir
          </h2>
          <button className="hidden sm:block px-3 py-2 bg-white rounded-lg text-[#36364A] hover:bg-gray-100 transition-all duration-300 text-sm font-medium border">
            Lihat Semua
          </button>
        </div>
        <div className="grid max-w-screen-lg grid-cols-1 gap-4 mx-auto md:grid-cols-3">
          <a
            href="#"
            className="p-4 space-y-10 transition-all duration-300 rounded-3xl hover:-translate-y-1 hover:bg-gray-200"
          >
            <img src="/article-1.png" />
            <div className="space-y-4">
              <h3 className="text-[#064F57] font-medium">
                Tidakkah Kamu Melihat?
              </h3>
              <hr className="h-[2px] w-[60px] bg-[#F75B03] border-0" />
              <p className="text-sm text-gray-500">23 Mac 2023</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                congue eu elit sed rhoncus.
              </p>
            </div>
          </a>
          <a
            href="#"
            className="p-4 space-y-10 transition-all duration-300 rounded-3xl hover:-translate-y-1 hover:bg-gray-200"
          >
            <img src="/article-2.png" />
            <div className="space-y-4">
              <h3 className="text-[#064F57] font-medium">
                Ibrah Peristiwa Palestin
              </h3>
              <hr className="h-[2px] w-[60px] bg-[#F75B03] border-0" />
              <p className="text-sm text-gray-500">20 Mac 2023</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                congue eu elit sed rhoncus.
              </p>
            </div>
          </a>
          <a
            href="#"
            className="p-4 space-y-10 transition-all duration-300 rounded-3xl hover:-translate-y-1 hover:bg-gray-200"
          >
            <img src="/article-3.png" />
            <div className="space-y-4">
              <h3 className="text-[#064F57] font-medium">
                Al-Qur’an dan Ramadan
              </h3>
              <hr className="h-[2px] w-[60px] bg-[#F75B03] border-0" />
              <p className="text-sm text-gray-500">06 Mac 2023</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                congue eu elit sed rhoncus.
              </p>
            </div>
          </a>
        </div>
        <div className="flex items-center justify-center w-full sm:hidden">
          <button className=" px-3 py-2 bg-white rounded-lg text-[#36364A] hover:bg-gray-100 transition-all duration-300 text-sm font-medium border">
            Lihat Semua
          </button>
        </div>
      </section>
      <section className="bg-white py-[50px] sm:py-[100px] flex flex-col items-center space-y-5 sm:space-y-10 px-6">
        <h2 className="text-2xl font-semibold text-[#064F57] text-center sm:text-left">
          Dengar Cerita Pelajar-pelajar Kami
        </h2>
        <hr className="h-[2px] w-[60px] bg-[#F75B03] border-0" />
        <div className="flex flex-col max-w-screen-lg mx-auto space-y-5">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            <div className="space-y-3">
              {[
                {
                  avatarUrl: "/avatar-1.jpeg",
                  name: "Guillermo Rauch",
                  title: "CEO, Vercel",
                  testimony:
                    "The @mintlify team absolutely nailed combining docs search and AI Q&A in a delightful experience.",
                },
                {
                  avatarUrl: "/avatar-2.jpeg",
                  name: "Vlad Matsiiako",
                  title: "Co-founder, Infisical",
                  testimony:
                    "Satu usaha yang baik menyediakan platform untuk masyarakat memahami isi al Quran. Barakallahu fiikum buat team TC.",
                },
                {
                  avatarUrl: "/avatar-3.jpeg",
                  name: "Maayan Salom",
                  title: "Co-founder, Elementary",
                  testimony:
                    "Highly recommended!!\nTerlalu banyak yang boleh dipelajari..\nMasya Allah.. lagi banyak yang dibaca.. semakin ku sedari banyak yang ku tak tahu.\nYa Allah.. begitu luasnya Ilmu Mu.. Sesungguhnya Engkau Maha Maha Bijaksana, Maha Mengetahui dan Pemilik segala Ilmu dan Alam ini!",
                },
              ].map((t) => (
                <div
                  key={t.avatarUrl}
                  className="flex flex-col p-6 space-y-5 text-sm bg-white border rounded-3xl"
                >
                  <div className="flex space-x-3">
                    <img src={t.avatarUrl} className="w-10 h-10 rounded-full" />
                    <div>
                      <p className="text-gray-800">{t.name}</p>
                      <p className="text-gray-400">{t.title}</p>
                    </div>
                  </div>
                  <p className="text-gray-500 whitespace-pre-wrap">
                    {t.testimony}
                  </p>
                </div>
              ))}
            </div>
            <div className="space-y-3">
              {[
                {
                  avatarUrl: "/avatar-4.jpeg",
                  name: "Zeno Rocha",
                  title: "CEO, Resend",
                  testimony:
                    "The only one in Malaysia yang membentangkan dan memberikan ajaran terbaik  untuk memahami Al-Quran secara tadabbur yang merupakan perkara penting dalam memahami Al-Quran ! Semoga Allah berkati usaha ini.",
                },
                {
                  avatarUrl: "/avatar-5.jpeg",
                  name: "Adam Carrigan",
                  title: "Co-founder, MindsDB",
                  testimony:
                    "Explanation very simple but clear. Easy to follow.",
                },
                {
                  avatarUrl: "/avatar-6.jpeg",
                  name: "Ashley Mulligan",
                  title: "Head of Product Engineering, Flatfile",
                  testimony:
                    "The best learning center to follow. Thanks for the effort by all the Centre members and who support it.",
                },
              ].map((t) => (
                <div
                  key={t.avatarUrl}
                  className="flex flex-col p-6 space-y-5 text-sm bg-white border rounded-3xl"
                >
                  <div className="flex space-x-3">
                    <img src={t.avatarUrl} className="w-10 h-10 rounded-full" />
                    <div>
                      <p className="text-gray-800">{t.name}</p>
                      <p className="text-gray-400">{t.title}</p>
                    </div>
                  </div>
                  <p className="text-gray-500 whitespace-pre-wrap">
                    {t.testimony}
                  </p>
                </div>
              ))}
            </div>
            <div className="space-y-3">
              {[
                {
                  avatarUrl: "/avatar-7.jpeg",
                  name: "Chun Jiang",
                  title: "CEO, Monterey AI",
                  testimony:
                    "Good center for learning and understanding Quran better.",
                },
                {
                  avatarUrl: "/avatar-8.jpeg",
                  name: "Charly Poly",
                  title: "CEO, Defer",
                  testimony:
                    "MasyaAllah Alhamdulillah Syukur I was so inspired with their method & approach of explanation of The Amazing Quran since 2010 I've been following radio IKIM fm where I heard ya Ustaz Syaari Abdul Rahman every Monday 5:15pm 'Ibrah' program.",
                },
                {
                  avatarUrl: "/avatar-9.jpeg",
                  name: "Mark Bao",
                  title: "Co-founder, Goody",
                  testimony:
                    "Well shared the concept of Al Quran. No where else I have heard such  explanation and sharing. Good proof of concept and relevance to our time.",
                },
              ].map((t) => (
                <div
                  key={t.avatarUrl}
                  className="flex flex-col p-6 space-y-5 text-sm bg-white border rounded-3xl"
                >
                  <div className="flex space-x-3">
                    <img src={t.avatarUrl} className="w-10 h-10 rounded-full" />
                    <div>
                      <p className="text-gray-800">{t.name}</p>
                      <p className="text-gray-400">{t.title}</p>
                    </div>
                  </div>
                  <p className="text-gray-500 whitespace-pre-wrap">
                    {t.testimony}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <button className="w-20 py-1 mx-auto text-sm transition-all duration-300 border rounded-full hover:bg-gray-100">
            Lagi
          </button>
        </div>
      </section>
      <footer className="py-20 bg-[#064F57] px-6">
        <div className="flex flex-col items-center justify-between w-full max-w-screen-lg py-5 mx-auto space-y-4 md:space-y-0 md:flex-row">
          <img src="/logo-white.png" className="w-72" />
          <div className="space-x-6 text-sm text-white">
            <a href="#">Utama</a>
            <a href="#">Tadabbur+</a>
            <a href="#">Program</a>
            <a href="#">Produk</a>
          </div>
        </div>
        <hr className="max-w-screen-lg mx-auto mt-20 opacity-70 mb-7" />
        <div className="flex flex-col items-center max-w-screen-lg mx-auto space-y-4 sm:space-y-0 sm:justify-between sm:flex-row">
          <p className="text-sm text-center text-white opacity-50 sm:text-left">
            Copyright of Tadabbur Centre © All Rights Reserved
          </p>
          <div className="flex space-x-2">
            <a href="#" className="opacity-50">
              <svg
                width="27"
                height="27"
                viewBox="0 0 27 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.666687"
                  y="0.728516"
                  width="26"
                  height="26"
                  rx="13"
                  fill="#FFFFFF"
                />
                <path
                  d="M16.6087 6.14502H13.7842V17.0663C13.7842 18.3675 12.6979 19.4364 11.346 19.4364C9.99415 19.4364 8.90781 18.3675 8.90781 17.0663C8.90781 15.7883 9.97001 14.7426 11.2736 14.6961V11.9542C8.40086 12.0007 6.08334 14.2546 6.08334 17.0663C6.08334 19.9012 8.44914 22.1784 11.3702 22.1784C14.2912 22.1784 16.657 19.8779 16.657 17.0663V11.4662C17.7192 12.2098 19.0228 12.6513 20.3988 12.6746V9.93261C18.2744 9.8629 16.6087 8.18985 16.6087 6.14502Z"
                  fill="#294F65"
                />
              </svg>
            </a>
            <a href="#" className="opacity-50">
              <svg
                width="27"
                height="27"
                viewBox="0 0 27 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.333374"
                  y="0.728516"
                  width="26"
                  height="26"
                  rx="13"
                  fill="#FFFFFF"
                />
                <path
                  d="M10.8062 13.7284C10.8062 12.3324 11.9376 11.2004 13.3337 11.2004C14.7298 11.2004 15.8618 12.3324 15.8618 13.7284C15.8618 15.1244 14.7298 16.2563 13.3337 16.2563C11.9376 16.2563 10.8062 15.1244 10.8062 13.7284ZM9.43959 13.7284C9.43959 15.879 11.183 17.6223 13.3337 17.6223C15.4844 17.6223 17.2278 15.879 17.2278 13.7284C17.2278 11.5777 15.4844 9.8344 13.3337 9.8344C11.183 9.8344 9.43965 11.5776 9.43965 13.7284M16.472 9.68001C16.4719 9.85999 16.5252 10.0359 16.6252 10.1856C16.7251 10.3353 16.8672 10.452 17.0334 10.521C17.1997 10.5899 17.3827 10.608 17.5592 10.573C17.7358 10.5379 17.8979 10.4513 18.0253 10.3241C18.1526 10.1969 18.2393 10.0348 18.2745 9.85826C18.3097 9.68175 18.2917 9.49877 18.2229 9.33246C18.1541 9.16616 18.0375 9.02399 17.8879 8.92393C17.7383 8.82388 17.5624 8.77044 17.3824 8.77037H17.382C17.1408 8.77048 16.9094 8.86634 16.7388 9.0369C16.5682 9.20745 16.4722 9.43876 16.472 9.68001ZM10.2699 19.9011C9.53053 19.8674 9.12866 19.7442 8.8616 19.6402C8.50753 19.5024 8.25491 19.3382 7.9893 19.073C7.72369 18.8077 7.55927 18.5554 7.42204 18.2013C7.31793 17.9344 7.19477 17.5324 7.16116 16.7931C7.1244 15.9937 7.11706 15.7536 7.11706 13.7285C7.11706 11.7034 7.125 11.4639 7.16116 10.6639C7.19483 9.92455 7.3189 9.52336 7.42204 9.25564C7.55988 8.90159 7.72405 8.64898 7.9893 8.38338C8.25454 8.11778 8.50693 7.95337 8.8616 7.81614C9.12854 7.71204 9.53053 7.58889 10.2699 7.55528C11.0693 7.51851 11.3094 7.51117 13.3337 7.51117C15.358 7.51117 15.5984 7.519 16.3984 7.5554C17.1378 7.58907 17.539 7.71313 17.8067 7.81626C18.1608 7.95349 18.4134 8.11826 18.679 8.3835C18.9446 8.64873 19.1084 8.90171 19.2463 9.25576C19.3504 9.5227 19.4735 9.92467 19.5071 10.664C19.5439 11.464 19.5512 11.7035 19.5512 13.7286C19.5512 15.7537 19.5439 15.9932 19.5071 16.7932C19.4735 17.5325 19.3497 17.9344 19.2463 18.2014C19.1084 18.5555 18.9443 18.8081 18.679 19.0731C18.4138 19.3381 18.1608 19.5025 17.8067 19.6403C17.5398 19.7444 17.1378 19.8676 16.3984 19.9012C15.599 19.938 15.3589 19.9453 13.3337 19.9453C11.3085 19.9453 11.069 19.938 10.2699 19.9012M10.2071 6.19094C9.39979 6.22771 8.84813 6.35571 8.36636 6.54317C7.86772 6.73676 7.44503 6.99648 7.02296 7.41787C6.60088 7.83926 6.34183 8.26198 6.14823 8.76121C5.96076 9.24327 5.83275 9.79461 5.79599 10.6019C5.75862 11.4105 5.75006 11.669 5.75006 13.7284C5.75006 15.7877 5.75862 16.0462 5.79599 16.8548C5.83275 17.6622 5.96076 18.2134 6.14823 18.6955C6.34183 19.1941 6.60094 19.6176 7.02296 20.0388C7.44497 20.46 7.86711 20.7194 8.36636 20.9135C8.84904 21.101 9.39979 21.229 10.2071 21.2658C11.0161 21.3025 11.2742 21.3117 13.3337 21.3117C15.3932 21.3117 15.6517 21.3031 16.4603 21.2658C17.2677 21.229 17.819 21.101 18.301 20.9135C18.7997 20.7194 19.2224 20.4602 19.6444 20.0388C20.0665 19.6174 20.325 19.1941 20.5192 18.6955C20.7066 18.2134 20.8352 17.6621 20.8714 16.8548C20.9082 16.0456 20.9167 15.7877 20.9167 13.7284C20.9167 11.669 20.9082 11.4105 20.8714 10.6019C20.8346 9.79454 20.7066 9.24296 20.5192 8.76121C20.325 8.26259 20.0658 7.83993 19.6444 7.41787C19.223 6.99581 18.7997 6.73676 18.3016 6.54317C17.819 6.35571 17.2676 6.2271 16.4609 6.19094C15.6522 6.154 15.3938 6.14502 13.3346 6.14502C11.2754 6.14502 11.0164 6.15357 10.2074 6.19094"
                  fill="#294F65"
                />
              </svg>
            </a>
            <a href="#" className="opacity-50">
              <svg
                width="26"
                height="27"
                viewBox="0 0 26 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_2_8965)">
                  <rect
                    y="0.728516"
                    width="26"
                    height="26"
                    rx="13"
                    fill="#FFFFFF"
                  />
                  <path
                    d="M18.0604 17.4863L18.6367 13.7285H15.0312V11.291C15.0312 10.2627 15.534 9.25977 17.1488 9.25977H18.7891V6.06055C18.7891 6.06055 17.3012 5.80664 15.8793 5.80664C12.9086 5.80664 10.9688 7.60684 10.9688 10.8645V13.7285H7.66797V17.4863H10.9688V26.5711C11.6314 26.6752 12.3094 26.7285 13 26.7285C13.6906 26.7285 14.3686 26.6752 15.0312 26.5711V17.4863H18.0604Z"
                    fill="#294F65"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2_8965">
                    <rect
                      y="0.728516"
                      width="26"
                      height="26"
                      rx="13"
                      fill="white"
                    />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
