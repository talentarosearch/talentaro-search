export default function Home() {
  return (
    <main className="min-h-screen bg-[#fafaf7] text-gray-900 overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative py-28 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <div>

            <div className="inline-block bg-emerald-100 text-emerald-800 px-5 py-2 rounded-full text-sm font-semibold tracking-[0.2em] uppercase">
              Talentaro Search
            </div>

            <h1 className="mt-8 text-6xl md:text-7xl lg:text-[92px] font-black leading-[0.92] tracking-[-0.06em] text-gray-950">
              Elite Talent
              <br />
              For Modern
              <br />
              Companies
            </h1>

            <p className="mt-8 text-xl text-gray-600 leading-relaxed max-w-xl">
              Talentaro Search partners with ambitious startups and global
              businesses to deliver exceptional hiring across technology,
              finance, healthcare, operations, and executive leadership.
            </p>

            <div className="mt-10">
              <a
                href="mailto:sagar@talentarosearch.com"
                className="inline-flex items-center bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                Contact Us
              </a>
            </div>

          </div>

          {/* RIGHT SIDE CARDS */}
          <div className="bg-white/80 backdrop-blur rounded-[36px] shadow-2xl border border-gray-100 p-8">

            <div className="grid grid-cols-2 gap-5">

              <div className="bg-emerald-50 rounded-3xl p-6 hover:scale-[1.02] transition">
                <h3 className="text-2xl font-bold text-gray-900">
                  Technology
                </h3>

                <p className="mt-3 text-gray-600">
                  Engineering, Product & AI Talent
                </p>
              </div>

              <div className="bg-emerald-50 rounded-3xl p-6 hover:scale-[1.02] transition">
                <h3 className="text-2xl font-bold text-gray-900">
                  Finance
                </h3>

                <p className="mt-3 text-gray-600">
                  Accounting, FP&A & Strategy
                </p>
              </div>

              <div className="bg-emerald-50 rounded-3xl p-6 hover:scale-[1.02] transition">
                <h3 className="text-2xl font-bold text-gray-900">
                  Healthcare
                </h3>

                <p className="mt-3 text-gray-600">
                  Clinical & Operational Leadership
                </p>
              </div>

              <div className="bg-emerald-50 rounded-3xl p-6 hover:scale-[1.02] transition">
                <h3 className="text-2xl font-bold text-gray-900">
                  Executive
                </h3>

                <p className="mt-3 text-gray-600">
                  C-Level & Leadership Search
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="py-28 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="max-w-3xl">
            <p className="text-emerald-700 font-semibold uppercase tracking-[0.2em] text-sm">
              Recruiting Services
            </p>

            <h2 className="mt-5 text-5xl md:text-6xl font-black tracking-[-0.05em] leading-tight">
              Strategic Hiring
              <br />
              Built For Growth
            </h2>

            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              We help high-growth companies scale with precision by delivering
              world-class recruiting solutions tailored to modern business
              needs.
            </p>
          </div>

          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              "Executive Search",
              "Permanent Hiring",
              "Contract Staffing",
              "Global Recruitment",
              "Technology Hiring",
              "Finance Recruitment",
            ].map((service) => (
              <div
                key={service}
                className="bg-white rounded-[32px] border border-gray-100 p-10 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="text-3xl font-bold tracking-tight">
                  {service}
                </h3>

                <p className="mt-5 text-gray-600 leading-relaxed">
                  Premium recruiting solutions designed to help ambitious
                  companies hire exceptional talent faster and smarter.
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA SECTION */}
      <section className="pb-28 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="bg-gradient-to-br from-emerald-900 to-emerald-800 rounded-[40px] p-14 md:p-20 text-white relative overflow-hidden">

            <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>

            <div className="relative z-10 max-w-3xl">

              <p className="uppercase tracking-[0.2em] text-sm text-emerald-200 font-semibold">
                Talentaro Search
              </p>

              <h2 className="mt-6 text-5xl md:text-6xl font-black leading-[1] tracking-[-0.05em]">
                Build Exceptional
                <br />
                Teams With Confidence
              </h2>

              <p className="mt-8 text-xl text-emerald-100 leading-relaxed">
                We partner with startups, PE-backed companies, and global
                enterprises to deliver elite talent across critical business
                functions.
              </p>

              <a
                href="mailto:sagar@talentarosearch.com"
                className="inline-flex mt-10 bg-white text-emerald-900 px-8 py-4 rounded-2xl font-bold text-lg hover:scale-[1.03] transition"
              >
                Contact Us
              </a>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}