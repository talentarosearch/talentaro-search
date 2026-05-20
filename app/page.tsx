export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#eef7f4] via-white to-[#f7faf9] py-28 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold tracking-wide text-emerald-900">
              TALENTARO SEARCH
            </div>

            <h1 className="mt-8 text-6xl md:text-7xl font-black leading-[0.95] tracking-[-0.04em] text-gray-950">
              Elite Talent
              <br />
              For Modern
              <br />
              Companies
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-9 text-gray-600">
              Talentaro Search partners with ambitious startups and global
              businesses to deliver exceptional hiring across technology,
              finance, healthcare, operations, and executive leadership.
            </p>

            <a
              href="mailto:sagar@talentarosearch.com"
              className="mt-10 inline-flex items-center rounded-2xl bg-emerald-900 px-8 py-5 text-lg font-semibold text-white shadow-xl transition hover:scale-[1.02] hover:bg-black"
            >
              Contact Us
            </a>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-emerald-100 blur-3xl opacity-60"></div>

            <div className="relative rounded-[36px] border border-gray-100 bg-white p-8 shadow-2xl">
              <div className="grid grid-cols-2 gap-5">

                <div className="rounded-3xl bg-[#f4faf8] p-6 transition hover:-translate-y-1 hover:shadow-lg">
                  <h3 className="text-2xl font-bold">Technology</h3>
                  <p className="mt-3 text-gray-500">
                    Engineering, Product & AI Talent
                  </p>
                </div>

                <div className="rounded-3xl bg-[#f4faf8] p-6 transition hover:-translate-y-1 hover:shadow-lg">
                  <h3 className="text-2xl font-bold">Finance</h3>
                  <p className="mt-3 text-gray-500">
                    Accounting, FP&A & Strategy
                  </p>
                </div>

                <div className="rounded-3xl bg-[#f4faf8] p-6 transition hover:-translate-y-1 hover:shadow-lg">
                  <h3 className="text-2xl font-bold">Healthcare</h3>
                  <p className="mt-3 text-gray-500">
                    Clinical & Operational Leadership
                  </p>
                </div>

                <div className="rounded-3xl bg-[#f4faf8] p-6 transition hover:-translate-y-1 hover:shadow-lg">
                  <h3 className="text-2xl font-bold">Executive</h3>
                  <p className="mt-3 text-gray-500">
                    C-Level & Leadership Search
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto">

          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-700">
              Recruiting Services
            </p>

            <h2 className="mt-5 text-5xl font-black leading-tight tracking-tight">
              Strategic Hiring
              <br />
              Built For Growth
            </h2>

            <p className="mt-6 text-xl leading-9 text-gray-600">
              We help high-growth companies scale with precision by delivering
              world-class recruiting solutions tailored to modern business needs.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {[
              "Executive Search",
              "Permanent Hiring",
              "Global Recruitment",
              "Tech Hiring",
              "Finance Recruitment",
              "Leadership Advisory",
            ].map((service) => (
              <div
                key={service}
                className="group rounded-[32px] border border-gray-100 bg-white p-10 shadow-sm transition hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="mb-8 h-14 w-14 rounded-2xl bg-emerald-100"></div>

                <h3 className="text-3xl font-bold tracking-tight">
                  {service}
                </h3>

                <p className="mt-5 text-lg leading-8 text-gray-600">
                  Premium recruiting solutions designed to help companies hire
                  exceptional talent globally.
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>
    </main>
  );
}