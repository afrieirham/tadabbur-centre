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
              <button className="flex-shrink bg-[#F75B03] text-white px-3 py-2 rounded text-sm font-medium">
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
              <h3 className="text-[#064F57] text-2xl font-medium">
                {item.title}
              </h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-[30px] my-[70px] w-full flex space-x-5 overflow-scroll">
        {[1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6].map((p) => (
          <img src={`/slide-${p}.png`} className="object-cover h-36 w-60" />
        ))}
      </section>
      <section className="bg-[#064F57] py-[100px] flex flex-col items-center space-y-10">
        <h2 className="text-4xl font-semibold text-white">
          Projek Tadabbur Centre
        </h2>
        <hr className="h-[2px] w-[60px] bg-[#F75B03] border-0" />
        <div className="flex bg-[#054249] p-14 rounded-2xl space-x-10">
          <img src="/sub-3.png" className="w-[452px]" />
          <div className="flex flex-col text-white w-[392px] space-y-5">
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
              <button className="flex-shrink bg-[#F75B03] text-white px-3 py-2 rounded text-sm font-medium">
                Jadual Program
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-row-reverse bg-[#054249] p-14 rounded-2xl space-x-10 space-x-reverse">
          <img src="/sub-4.png" className="w-[452px]" />
          <div className="flex flex-col text-white w-[392px] space-y-5">
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
              <button className="flex-shrink bg-[#F75B03] text-white px-3 py-2 rounded text-sm font-medium">
                Kedai Online
              </button>
            </div>
          </div>
        </div>
        <div className="flex bg-[#054249] p-14 rounded-2xl space-x-10">
          <img src="/sub-5.png" className="w-[452px]" />
          <div className="flex flex-col text-white w-[392px] space-y-5">
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
              <button className="flex-shrink bg-[#F75B03] text-white px-3 py-2 rounded text-sm font-medium">
                Sertai Kami
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-[100px] bg-[#F6F9F9] space-y-10">
        <div className="flex items-center justify-between w-full max-w-screen-lg mx-auto">
          <h2 className="text-2xl font-semibold text-[#064F57]">
            Bacaan & Buah Fikir
          </h2>
          <button className="px-3 py-2 bg-white rounded-lg text-[#36364A] text-sm font-medium border">
            Lihat Semua
          </button>
        </div>
        <div className="grid max-w-screen-lg grid-cols-3 gap-8 mx-auto">
          <div className="space-y-10">
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
          </div>
          <div className="space-y-10">
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
          </div>
          <div className="space-y-10">
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
          </div>
        </div>
      </section>
      <section className="bg-white py-[100px] flex flex-col items-center space-y-10">
        <h2 className="text-2xl font-semibold text-[#064F57]">
          Dengar Cerita Pelajar-pelajar Kami
        </h2>
        <hr className="h-[2px] w-[60px] bg-[#F75B03] border-0" />
        <div className="flex flex-col max-w-screen-lg mx-auto space-y-5">
          <div className="grid grid-cols-3 gap-3">
            <div className="space-y-3">
              {[
                {
                  avatarUrl:
                    "https://s3-alpha-sig.figma.com/img/1404/823a/60b6a548849e906ffd7fc068877a354f?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q4aGYE2eucLvO4fdWd5uVaSGE0qY0nLuY471oULnR4woC5i2drM-ogP2Q~oTzJ20pYKgGyxdmmTCJ6o7mzbkSc1~dlp-QCO0TLRAzBMzNoPq6194V8cIBhxAJ341yX5wpuiKHZnjUBQOXaKTHoKSyxi1815fuxk~CQ8f~~hoUC0f9HM4tLPA10X3wIR3A3fONcmNs3DqZpK3q3Mh-Wz9mJmkgipy06hKysKubhkv12HRa9a~7NX61Vu6vnrkievpjHcxIlMGkQbc1vSpfag~Ru2jRq8XSTtnesk-awkGaQ0OJZqtjzBdk3jJZu0-VIwxWoXqCCy23~IRv8uX0poRpQ__",
                  name: "Guillermo Rauch",
                  title: "CEO, Vercel",
                  testimony:
                    "The @mintlify team absolutely nailed combining docs search and AI Q&A in a delightful experience.",
                },
                {
                  avatarUrl:
                    "https://s3-alpha-sig.figma.com/img/c4f4/b867/4b6fa8ccb330701919917101d452e1ea?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PZsTyHBEZT3q1gBE1VU8kmSQQ3Twt5JZIYjF6F1wglD~Fu~mkYy4XpNF5YJajM50xr-6hleDHvrP9SyqnnugDrpRS3jjB4rASFFuPqCIHBCVSAHuUFtc0GIM1v7YctjVlcGU4TFf0K8ZmX~n6ISM2f0wFeoJX0w8ue9y9u0wGUTtfVSIDCBX7lkWcLviB-mAqiOLzjUm1da~mIc9o2hcHttTTcnbkQDpkyTEGE7fh2VBDSxHu~r85MGeZCRvorQcmr~j9xMeKkBB~hFKCK9FMDWYje798hbduylaPtDya-sGkNyQo~269OgIsYnSktDQLD7QGsdNwOsMhpsodeYqMw__",
                  name: "Vlad Matsiiako",
                  title: "Co-founder, Infisical",
                  testimony:
                    "Satu usaha yang baik menyediakan platform untuk masyarakat memahami isi al Quran. Barakallahu fiikum buat team TC.",
                },
                {
                  avatarUrl:
                    "https://s3-alpha-sig.figma.com/img/c155/9e60/ca26672497523eb518f0c81fc4b5331a?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ib68i8qMp3GatXTDC0fYWkf3qibSTbOTKU0QSkdoV54HIjQFBXEdzf210LdljvFSd5jZXHvIxoGb7vkYkcRheAERDiUtCgADx45UeZTEL8VV~6q1jb3hBawD9TfJmqeScI5jY2ar3UuF1kK5Y3-bEapW6SFVNovq3EM5HBHXPEGhnqcnOEy09MbgPJLSu856nUpZjNPCOEj-W7RegRxE8~myUoUG~X0SP69nt6iJPnvE2AXJnACy4oh6I1Hyuw18p6Z-J0fupQTbpBzQLZbxVzME5l6uRUnfR4S8tESiiXC~uxjMxAo7qXVuJMJiRY1xdjmVprygr4-ha6tagdMuxg__",
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
                  avatarUrl:
                    "https://s3-alpha-sig.figma.com/img/c504/6f40/7a0ecca4239f7d65625672a6fa032486?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=paghl4Wcf5RkIbc9kkQBZKNs81JrwZtNGPZcTo66YRZMmtEKOQEiFep2ZC1D4ipBSUTxj5vutr7c~JtAhcQuwVtgUzbckUPI~oHVfFY2ISnXl40SV~KyJquXOygqAvmKMkt03EusqAevx2gVBvqBP3W9dR-QRy1aB39xm9ho0l8ZnboqpFrVZt665FkJOxx0gRioQY64bGQuE3WGSi83y18w-6bfrAZXWHpvcxzCpVG~97pikWdCeeP8zjmgH0m2ZzSgeJ~ShXWJWkAalwA4vDhdDCX33-GW9LVutSkH6e20GPvDCOdeqr32Qyw~cXv7aqnh7aZT1qeMcAfRFW~iOA__",
                  name: "Zeno Rocha",
                  title: "CEO, Resend",
                  testimony:
                    "The only one in Malaysia yang membentangkan dan memberikan ajaran terbaik  untuk memahami Al-Quran secara tadabbur yang merupakan perkara penting dalam memahami Al-Quran ! Semoga Allah berkati usaha ini.",
                },
                {
                  avatarUrl:
                    "https://s3-alpha-sig.figma.com/img/7e12/d0a0/8e7141bb44cbfb67b83244b69538f90f?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Cyx7nSd1F1jCIZD~iNFnugZO3y3JkgpsyoAH61HiXIa9KGpGSz21z-kstzXtmuq-BeJLqYbf8SvsHAebmMkko4aZ2wk751Cn1Q3ICFb7iWwMyVOlqAHkF2UrHVIjtvzDGzm~FJg7SDyPtw6ZWNbtRmPBodyLYleKWC2uEQkZMGE2M1CbOdIX2Koc3CYEqbB~8DoUYOe0yCMfeOSstMn~Ptq6Z0UpE84WRR~cAfpsGFCPF9ycu3Tl7jle1tr3YdWfuLuv~IkxRje~S~8iUvW7RgL5-ndNKkIgKfW9WUHBjeUmyyV65bWW8mRLxv-TueeIBvGEZ5VrHrGcHn2OkSZlEA__",
                  name: "Adam Carrigan",
                  title: "Co-founder, MindsDB",
                  testimony:
                    "Explanation very simple but clear. Easy to follow.",
                },
                {
                  avatarUrl:
                    "https://s3-alpha-sig.figma.com/img/b52e/9c36/d86e495ee839e4cf05ec811a43580555?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RAzI3MiL5oRVz75rmxRQ2WBmOp~2fxVpNjVmsrn3xeIe1gC8SjEL9mhTGy-AkCvqL0tNV6WZA4toi~j~VhETq-s4LBzrSUlCwiWHUA-~WwzG1OjxvBCJ4ycy4LDv9HThV1EiNHapUNEK4fbo9lHCowrfCsBJc65sOdLoig3R19IufA2IRFpWBDo-pEKDPVQRn62vgu77YKsSfVNURJFiJxGXVkGqONFrVVuUUYa8nI~n5djIXInNJZQwGLRdmBHKpuOFLcluAKAkXboEo93iXVij0npUJp5BExEkk5lk~AVJ07t-TvG95IiPIx-egMZUN2aW4HjfrD3vkHRGp2zZHQ__",
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
                  avatarUrl:
                    "https://www.figma.com/file/29nxg1GUf0Vz4SL97ffP5c/image/f7a0739a815ab34e79a1081de8d9a402cab4675d",
                  name: "Chun Jiang",
                  title: "CEO, Monterey AI",
                  testimony:
                    "Good center for learning and understanding Quran better.",
                },
                {
                  avatarUrl:
                    "https://www.figma.com/file/29nxg1GUf0Vz4SL97ffP5c/image/901d814075d4d3902fa1617877d225040fa95352",
                  name: "Charly Poly",
                  title: "CEO, Defer",
                  testimony:
                    "MasyaAllah Alhamdulillah Syukur I was so inspired with their method & approach of explanation of The Amazing Quran since 2010 I've been following radio IKIM fm where I heard ya Ustaz Syaari Abdul Rahman every Monday 5:15pm 'Ibrah' program.",
                },
                {
                  avatarUrl:
                    "https://s3-alpha-sig.figma.com/img/27b1/531f/4b353b3410e71d55d2bdeef1e3c52b6c?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gLb6YEGW-sYlsagjuWFfm7V-J10tzZ76CGD4gHKLGkZpVGD6zJh7hcMcVDJZQ-K0aupt~XPVpu83mx2zhwAoZlsuI99rO3zwqrMoXkmTwTkoByO2t4~UH8sokBkrwFwfKzqN2wkEp~bDN3L7YQjmfsZXlOZxa6wTb5DSib0jr6ozJcda0ajjOc6R7LA0gevbad-kGfk7gbwAif9sDdILirhbuj6LPyQIk172nCGWnQJlacbPe~8KV7xTf5pfWXsSsNcMtLa2rl2ahW-tFecw9S3gvNgrabwsEYSKeVIpDM2tfdgix17TjbMbxrhw7AGtKtkKSd7Mzmyhj6X9Wh5qjQ__",
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
          <button className="w-20 py-1 mx-auto text-sm border rounded-full">
            Lagi
          </button>
        </div>
      </section>
    </div>
  );
}
