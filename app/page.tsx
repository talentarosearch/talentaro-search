export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-white py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <div className="inline-block bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium">
              Talentaro Search
            </div>

            <h1 className="mt-6 text-5xl md:text-6xl font-bold leading-tight">
              Premium Recruiting For Modern Teams
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Talentaro Search helps fast-growing companies hire exceptional
              talent across technology, finance, healthcare, and operations.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="bg-emerald-700 hover:bg-emerald-800 text-white px-7 py-4 rounded-2xl font-semibold transition">
                Hire Talent
              </button>

              <button className="border border-emerald-700 text-emerald-700 px-7 py-4 rounded-2xl font-semibold transition">
                View Jobs
              </button>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
            <div className="grid grid-cols-2 gap-4">

              <div className="bg-emerald-50 rounded-2xl p-5">
                <h3 className="font-semibold text-lg">Technology</h3>
                <p className="text-sm text-gray-500 mt-2">
                  Engineering & Product
                </p>
              </div>

              <div className="bg-emerald-50 rounded-2xl p-5">
                <h3 className="font-semibold text-lg">Finance</h3>
                <p className="text-sm text-gray-500 mt-2">
                  Accounting & FP&A
                </p>
              </div>

              <div className="bg-emerald-50 rounded-2xl p-5">
                <h3 className="font-semibold text-lg">Healthcare</h3>
                <p className="text-sm text-gray-500 mt-2">
                  Clinical & Operations
                </p>
              </div>

              <div className="bg-emerald-50 rounded-2xl p-5">
                <h3 className="font-semibold text-lg">Leadership</h3>
                <p className="text-sm text-gray-500 mt-2">
                  Executive Search
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">

          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold">
              Recruiting Services
            </h2>

            <p className="mt-5 text-lg text-gray-600">
              Strategic recruiting solutions designed for scaling companies.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

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
                className="border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition"
              >
                <h3 className="text-2xl font-semibold">{service}</h3>

                <p className="mt-4 text-gray-600">
                  Premium hiring support tailored to your business goals.
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto bg-emerald-900 rounded-[32px] p-12 text-white">

          <h2 className="text-4xl font-bold leading-tight">
            Build Your Team With Confidence
          </h2>

          <p className="mt-5 text-emerald-100 text-lg max-w-2xl">
            Talentaro Search partners with startups and enterprises to deliver
            world-class talent globally.
          </p>

          <button className="mt-8 bg-white text-emerald-900 px-8 py-4 rounded-2xl font-semibold">
            Schedule a Consultation
          </button>

        </div>
      </section>

    </main>
  );
}