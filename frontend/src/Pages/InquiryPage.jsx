import { useEffect, useState } from "react";
import spotifyImg1 from "../assets/spotify1.png";
import { Linkedin, Github, Twitter, Mail, ArrowUpRight } from "lucide-react";

const InquiryPage = () => {
  const [song, setSong] = useState(null);

  useEffect(() => {
    fetch("/api/spotify")
      .then((res) => res.json())
      .then((data) => setSong(data))
      .catch((err) => console.error("Spotify error:", err));
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 xl:px-28 2xl:px-40 py-20 sm:py-24 lg:py-32">
      <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
        {/* LEFT */}
        <div className="reveal reveal-left">
          <div className="relative max-w-md lg:max-w-none mx-auto aspect-[4/5] rounded-3xl bg-[#0a0a0a] border border-white/[0.05] overflow-hidden grayscale group shadow-2xl">
            <div className="absolute inset-0 bg-white/[0.02] group-hover:bg-transparent transition-all duration-700" />

            <div className="w-full h-full flex flex-col items-center justify-center text-center p-8 sm:p-12 opacity-20 group-hover:opacity-40 transition-opacity">
              <div className="w-20 h-20 border border-white rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>

              <p className="text-[10px] uppercase tracking-[0.4em]">
                Profile Portrait Area
              </p>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          </div>
        </div>

        {/* RIGHT */}
        <div className="space-y-10 lg:space-y-12 reveal reveal-right">
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tighter mb-6">
              LET'S CONNECT.
            </h2>

            <p className="text-base sm:text-lg text-zinc-500 leading-relaxed">
              I’m open to internship and entry-level software development
              opportunities, collaborative projects, and discussions around
              development and problem-solving.
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                label: "LINKEDIN",
                link: "https://www.linkedin.com/in/dharmarajs001/",
                text: "linkedin.com/in/Dharmaraj",
                icon: <Linkedin size={18} />,
              },
              {
                label: "GITHUB",
                link: "https://github.com/Dharmaraj001",
                text: "github.com/Dharmaraj",
                icon: <Github size={18} />,
              },
              {
                label: "TWITTER / X",
                link: "https://x.com/Dharmaraj_SS",
                text: "x.com/Dharmaraj_SS",
                icon: <Twitter size={18} />,
              },
              {
                label: "G-MAIL",
                link: "mailto:dharmarajs877@gmail.com",
                text: "dharmarajs877@gmail.com",
                icon: <Mail size={18} />,
              },
            ].map((social, i) => (
              <a
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex justify-between items-center gap-4 border-b border-white/5 pb-6 hover:border-white transition-all duration-500"
              >
                <div className="flex flex-col min-w-0">
                  <span className="text-[9px] sm:text-[10px] text-zinc-600 font-bold tracking-[0.3em] mb-1">
                    {social.label}
                  </span>

                  <span className="text-xs sm:text-sm font-medium tracking-tight text-zinc-400 group-hover:text-blue-400 transition-colors break-all">
                    {social.text}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-zinc-700 group-hover:text-blue-400 transition-all group-hover:translate-x-1 shrink-0">
                  {social.icon}
                  <ArrowUpRight size={16} />
                </div>
              </a>
            ))}
          </div>

          <div className="pt-4">
            <p className="flex items-center gap-3 text-[10px] text-zinc-200 uppercase tracking-[0.4em] mb-4">
              Last Played on
              <img
                src={spotifyImg1}
                alt="Spotify"
                className="h-4 w-4 object-contain opacity-80"
              />
            </p>

            <div className="inline-flex max-w-full flex-wrap items-center gap-3 px-4 py-2 border border-zinc-800 rounded-full">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />

              {song && song.title ? (
                <a
                  href={song.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-bold text-zinc-300 hover:text-green-400 transition break-all"
                >
                  {song.title} — {song.artist}
                </a>
              ) : (
                <span className="text-[11px] font-bold text-zinc-500">
                  Not playing anything
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InquiryPage;