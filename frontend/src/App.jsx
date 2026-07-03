import React, { useEffect, useState } from "react";
import HomePage from "./Pages/HomePage";
import WorkPage from "./Pages/WorkPage";
import SkillsPage from "./Pages/SkillsPage";
import InquiryPage from "./Pages/InquiryPage";
import Loader from "./components/Loader";
import Header from "./components/Header";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [currentProject] = useState({
    name: "Brain-Box",
    year: "2025",
    category: "Full Stack Platform",
    media: "/video2.mp4",
  });

  // Simple 1-second loader
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-active");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [isLoaded, currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case "work":
        return <WorkPage />;

      case "skills":
        return <SkillsPage />;

      case "inquiry":
        return <InquiryPage />;

      default:
        return <HomePage currentProject={currentProject} />;
    }
  };

  return (
    <div
      className={`bg-[#050505] text-white min-h-screen font-sans ${
        !isLoaded ? "overflow-hidden" : "overflow-x-hidden"
      }`}
    >
      <Loader isLoaded={isLoaded} />

      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        isMobileMenuOpen={isMobileMenuOpen}
      />

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 bg-black z-[65] flex flex-col items-center justify-center transition-transform duration-700 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-8 text-center">
          <button
            onClick={() => {
              setCurrentPage("work");
              setIsMobileMenuOpen(false);
            }}
            className="text-3xl sm:text-4xl font-bold tracking-tighter uppercase hover:text-zinc-700 transition"
          >
            PROJECTS
          </button>

          <button
            onClick={() => {
              setCurrentPage("skills");
              setIsMobileMenuOpen(false);
            }}
            className="text-3xl sm:text-4xl font-bold tracking-tighter uppercase hover:text-zinc-700 transition"
          >
            SKILLS
          </button>

          <a
            href="https://drive.google.com/file/d/19uK_1ZXT_LHe-eMfP7ayDLr0zA89N5ip/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-3xl sm:text-4xl font-bold tracking-tighter uppercase hover:text-zinc-700 transition"
          >
            RESUME
          </a>

          <button
            onClick={() => {
              setCurrentPage("inquiry");
              setIsMobileMenuOpen(false);
            }}
            className="mt-4 bg-white text-black px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest"
          >
            CONTACT
          </button>
        </div>
      </div>

      {/* Background Blur */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-white/[0.02] blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-white/[0.02] blur-[120px]" />
      </div>

      <main className="relative z-10 pt-20">
        {renderPage()}

        {currentPage === "home" && (
          <section className="max-w-7xl mx-auto px-6 sm:px-8 py-24 sm:py-32 lg:py-40 border-t border-white/[0.03] grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              { val: "01+", label: "Years Experience" },
              { val: "10+", label: "Live Deployments" },
              { val: "05+", label: "Real-World Projects" },
              { val: "300+", label: "DSA Problems Solved" },
            ].map((stat, i) => (
              <div
                key={i}
                className="reveal reveal-up"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-2 tracking-tighter text-zinc-200">
                  {stat.val}
                </div>

                <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-zinc-700 hover:text-white transition">
                  {stat.label}
                </div>
              </div>
            ))}
          </section>
        )}
      </main>

      <style
        dangerouslySetInnerHTML={{
          __html: `
          .reveal{
            opacity:0;
            transition:all 1.2s cubic-bezier(0.22,1,0.36,1);
            will-change:transform,opacity;
          }

          .reveal-up{
            transform:translateY(60px);
          }

          .reveal-left{
            transform:translateX(-60px);
          }

          .reveal-right{
            transform:translateX(60px);
          }

          .reveal-active{
            opacity:1!important;
            transform:translate(0,0)!important;
          }
        `,
        }}
      />
    </div>
  );
};

export default App;