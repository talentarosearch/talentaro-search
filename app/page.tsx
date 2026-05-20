export default function Home() {
  const services = [
    {
      title: "Technology",
      desc: "Engineering, Product & AI Talent",
    },
    {
      title: "Finance",
      desc: "Accounting, FP&A & Strategy",
    },
    {
      title: "Healthcare",
      desc: "Clinical & Operational Leadership",
    },
    {
      title: "Executive",
      desc: "C-Level & Leadership Search",
    },
  ];

  const bottomServices = [
    "Executive Search",
    "Permanent Hiring",
    "Global Recruitment",
    "Tech Hiring",
    "Finance Recruitment",
    "Leadership Advisory",
  ];

  return (
    <main className="bg-[#f6f6f4] overflow-x-hidden min-h-screen">
      {/* GLOBAL ALIGNMENT CONTAINER (Centers the entire page structure) */}
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 relative">
        
        {/* NAVBAR */}
        <div className="w-full pt-7 relative z-50">
          <div className="bg-white rounded-[24px] shadow-sm py-5 px-8 flex items-center justify-between border border-gray-100">
            <div className="flex items-center gap-4">
              <div className="grid grid-cols-2 gap-1">
                <div className="w-4 h-4 bg-[#0b8f67] rounded-tl-sm"></div>
                <div className="w-4 h-4 bg-[#3fd3ab] rounded-tr-sm"></div>
                <div className="w-4 h-4 bg-[#3fd3ab] rounded-bl-sm"></div>
                <div className="w-4 h-4 bg-[#0b8f67] rounded-br-sm"></div>
              </div>

              <h1 className="text-[20px] md:text-[24px] font-bold tracking-tight text-[#0b8f67]">
                talentaro search
              </h1>
            </div>
          </div>
        </div>

        {/* HERO SECTION */}
        <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-visible">
          
          {/* DECORATIVE LEFT SHAPES (Anchored to the layout container bounds) */}
          <div className="absolute -left-24 top-[40px] w-[440px] h-[440px] bg-[#e8f3ef] rounded-br-[220px] -z-10 pointer-events-none" />
          <div className="absolute -left-24 top-[40px] w-[90px] h-[90px] bg-[#3db39b] -z-10 pointer-events-none" />
          <div
            className="absolute -left-24 top-[40px] w-[90px] h-[90px] bg-[#2b9d89] -z-10 pointer-events-none"
            style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
          />

          {/* DECORATIVE RIGHT SHAPES (Anchored to prevent shifting past content borders) */}
          <div className="absolute -right-32 top-[100px] w-[380px] h-[480px] bg-[#f3efe7] rotate-45 translate-x-12 -z-10 pointer-events-none" />
          <div className="absolute -right-16 top-[180px] -z-10 pointer-events-none">
            <div className="relative">
              <div className="absolute right-5 top-5 w-[110px] h-[110px] bg-pink-200 rounded-bl-[55px]" />
              <div className="w-[110px] h-[110px] bg-pink-600 rounded-bl-[55px]" />
            </div>
          </div>

          {/* HERO CONTENT */}
          <div className="relative z-10 w-full mt-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              {/* LEFT SIDE CONTENT BLOCK */}
              <div className="lg:col-span-7">
                <div className="inline-block bg-[#d8f3e6] text-[#0b8f67] text-xs tracking-[2px] font-bold px-3 py-1.5 rounded-full uppercase mb-6">
                  Talentaro Search
                </div>

                <h1 className="text-[44px] sm:text-[56px] lg:text-[68px] leading-[1.05] font-black tracking-[-2px] text-[#020826]">
                  Elite Talent
                  <br />
                  For Modern
                  <br />
                  Companies
                </h1>

                <p className="mt-6 text-[17px] sm:text-[19px] leading-[1.65] text-gray-600 max-w-[540px]">
                  Talentaro Search partners with ambitious startups and global
                  businesses to deliver exceptional hiring across technology,
                  finance, healthcare, operations, and executive leadership.
                </p>

                <button className="mt-8 bg-[#00684b] hover:bg-[#00543d] text-white text-[16px] font-semibold px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all">
                  Contact Us
                </button>
              </div>

              {/* RIGHT SIDE FEATURE GRID */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="bg-white/90 backdrop-blur-sm rounded-[28px] p-6 shadow-xl border border-gray-100 w-full max-w-[480px]">
                  <div className="grid grid-cols-2 gap-4">
                    {services.map((item) => (
                      <div
                        key={item.title}
                        className="bg-[#f4f8f6] rounded-[20px] p-5 flex flex-col justify-between min-h-[190px]"
                      >
                        <div className="w-10 h-10 rounded-full bg-[#d8f3e6]" />
                        <div>
                          <h3 className="mt-4 text-[18px] font-bold leading-tight text-[#020826]">
                            {item.title}
                          </h3>
                          <p className="mt-1 text-[13px] leading-normal text-gray-500">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECOND SECTION */}
        <section className="py-16 lg:py-24 border-t border-gray-200/60">
          <div>
            <p className="text-[#0b8f67] tracking-[4px] text-xs font-semibold uppercase">
              Recruiting Services
            </p>

            <h2 className="mt-4 text-[38px] sm:text-[48px] leading-[1.1] font-black text-[#020826]">
              Strategic Hiring
              <br />
              Built For Growth
            </h2>

            <p className="mt-4 text-[17px] sm:text-[19px] leading-[1.65] text-gray-600 max-w-[720px]">
              We help high-growth companies scale with precision by delivering
              world-class recruiting solutions tailored to modern business needs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
              {bottomServices.map((service) => (
                <div
                  key={service}
                  className="bg-white rounded-[24px] border border-gray-100 p-6 min-h-[200px] shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#d8f3e6]" />

                  <h3 className="mt-5 text-[20px] font-bold leading-tight text-[#020826]">
                    {service}
                  </h3>

                  <p className="mt-2 text-[14px] leading-relaxed text-gray-500">
                    Premium recruiting solutions designed to help companies hire
                    exceptional talent globally.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}