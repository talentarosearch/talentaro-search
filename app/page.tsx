export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 overflow-hidden">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 via-white to-teal-50 py-28 px-6">

        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-40"></div>

        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Content */}
          <div>

            {/* Company Badge */}
            <div className="inline-flex items-center gap-3 bg-white border border-emerald-100 shadow-sm px-5 py-3 rounded-full">

              <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>

              <span className="text-xl md:text-2xl font-black tracking-tight bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent">
                Talentaro Search
              </span>

            </div>

            {/* Main Heading */}
            <h1 className="mt-8 text-6xl md:text-7xl font-black leading-[1.05] tracking-tight text-gray-900">

              Elite Talent for

              <span className="block bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent">
                High-Growth Companies
              </span>

            </h1>

            {/* Description */}
            <p className="mt-8 text-xl text-gray-600 leading-relaxed max-w-2xl">

              Talentaro Search partners with ambitious companies to hire
              exceptional professionals across technology, finance,
              healthcare, and executive leadership.

            </p>

          </div>

          {/* Right Card */}
          <div className="bg-white/90 backdrop-blur-xl rounded-[36px] shadow-2xl p-10 border border-gray-100">

            <div className="grid grid-cols-2 gap-5">

              {[
                {
                  title: "Technology",
                  desc: "Engineering & Product",
                },
                {
                  title: "Finance",
                  desc: "Accounting & FP&A",
                },
                {
                  title: "Healthcare",
                  desc: "Clinical & Operations",
                },
                {
                  title: "Leadership",
                  desc: "Executive Search",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-gradient-to-br from-emerald-50 to-white rounded-3xl p-6 border border-emerald-100 hover:shadow-lg transition-all duration-300"
                >

                  <h3 className="font-bold text-xl text-gray-900">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-500 mt-3 leading-relaxed">
                    {item.desc}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-6 bg-white">

        <div className="max-w-7xl mx-auto">

          <div className="text-center max-w-3xl mx-auto">

            <h2 className="text-5xl font-black tracking-tight text-gray-900">
              Recruiting Services
            </h2>

            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              Strategic recruiting solutions designed for fast-scaling companies.
            </p>

          </div>

          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              "Executive Search",
              "Permanent Hiring",
              "Contract Staffing",
              "Global Recruitment",
              "Tech Hiring",
              "Finance Recruitment",
            ].map((service) => (
              <div
                key={service}
                className="group border border-gray-100 rounded-[32px] p-8 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white"
              >

                <h3 className="text-2xl font-bold text-gray-900">
                  {service}
                </h3>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  Premium hiring support tailored to your business goals and growth strategy.
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-24 px-6">

        <div className="max-w-6xl mx-auto bg-gradient-to-r from-emerald-900 to-teal-800 rounded-[36px] p-14 text-white shadow-2xl">

          <h2 className="text-5xl font-black leading-tight tracking-tight">
            Build Your Team With Confidence
          </h2>

          <p className="mt-6 text-emerald-100 text-xl max-w-2xl leading-relaxed">

            Talentaro Search partners with startups and enterprises to deliver
            world-class talent globally.

          </p>

          <a
            href="mailto:sagar@talentarosearch.com"
            className="inline-block mt-10 bg-white text-emerald-900 px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Contact Us
          </a>

        </div>

      </section>

    </main>
  );
}