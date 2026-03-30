export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b bg-white">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
    
    <div className="flex items-center gap-3">
      <img
        src="/mediswift-logo.png"
        alt="Mediswift Logo"
        className="h-20 w-20 rounded-xl object-contain"
      />

      <div>
        <h1 className="text-2xl font-bold">Mediswift Global Health Inc.</h1>
        <p className="text-sm text-slate-500">
          Healthcare services, technology, and patient care
        </p>
      </div>
    </div>

    <nav className="hidden gap-6 md:flex">
      <a
        href="#services"
        className="text-sm font-medium hover:text-slate-600"
      >
        Services
      </a>
      <a
        href="#about"
        className="text-sm font-medium hover:text-slate-600"
      >
        About
      </a>
      <a
        href="#contact"
        className="text-sm font-medium hover:text-slate-600"
      >
        Contact
      </a>
      <a
        href="/dashboard"
        className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white"
      >
        Clinic Dashboard
      </a>
    </nav>
  </div>
</header>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Mediswift Global Health Inc.
            </p>

            <h2 className="mt-4 text-5xl font-bold leading-tight md:text-6xl">
              Modern healthcare for patients, clinics, and future franchise partners
            </h2>

            <p className="mt-6 max-w-xl text-lg text-slate-600">
              Mediswift combines healthcare services, patient experience, and digital
              systems into one connected platform for long-term growth.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-xl bg-slate-900 px-6 py-3 font-medium text-white transition hover:opacity-90"
              >
                Book an Inquiry
              </a>

              <a
                href="#services"
                className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-medium transition hover:shadow"
              >
                Explore Services
              </a>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <h3 className="text-2xl font-semibold">Why Mediswift</h3>

            <div className="mt-6 grid gap-4">
              <div className="rounded-2xl border p-5">
                <h4 className="font-semibold">Patient-centered care</h4>
                <p className="mt-2 text-sm text-slate-600">
                  Easy booking, follow-up, and stronger long-term patient relationships.
                </p>
              </div>

              <div className="rounded-2xl border p-5">
                <h4 className="font-semibold">Clinic technology</h4>
                <p className="mt-2 text-sm text-slate-600">
                  Integrated systems for patient records, appointments, and billing.
                </p>
              </div>

              <div className="rounded-2xl border p-5">
                <h4 className="font-semibold">Scalable healthcare model</h4>
                <p className="mt-2 text-sm text-slate-600">
                  Built to support branches, partners, and future franchise expansion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h3 className="text-3xl font-bold">Our Services</h3>
          <p className="mt-3 max-w-2xl text-slate-600">
            Mediswift is designed to support both direct patient care and healthcare
            business operations.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border p-6 shadow-sm">
              <h4 className="text-xl font-semibold">Clinic Services</h4>
              <p className="mt-3 text-slate-600">
                Consultations, follow-ups, wellness support, and patient care programs.
              </p>
            </div>

            <div className="rounded-2xl border p-6 shadow-sm">
              <h4 className="text-xl font-semibold">Vaccination & Preventive Care</h4>
              <p className="mt-3 text-slate-600">
                Preventive care solutions supported by efficient patient management.
              </p>
            </div>

            <div className="rounded-2xl border p-6 shadow-sm">
              <h4 className="text-xl font-semibold">Healthcare Technology</h4>
              <p className="mt-3 text-slate-600">
                Digital systems for clinics, staff, patients, and future network growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-3xl bg-slate-900 p-10 text-white shadow-xl">
            <h3 className="text-3xl font-bold">About Mediswift</h3>
            <p className="mt-4 max-w-3xl text-slate-300">
              Mediswift aims to build a connected healthcare platform that improves
              patient access, operational efficiency, and long-term scalability for
              modern clinics and healthcare businesses.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="rounded-3xl border bg-slate-50 p-8 shadow-sm">
            <h3 className="text-3xl font-bold">Contact Us</h3>
            <p className="mt-3 text-slate-600">
              Start your inquiry with Mediswift Global Health.
            </p>

            <form className="mt-8 space-y-4">
              <input
                className="w-full rounded-xl border border-slate-300 bg-white p-4"
                placeholder="Full Name"
              />
              <input
                className="w-full rounded-xl border border-slate-300 bg-white p-4"
                placeholder="Email Address"
              />
              <input
                className="w-full rounded-xl border border-slate-300 bg-white p-4"
                placeholder="Phone Number"
              />
              <textarea
                className="min-h-[140px] w-full rounded-xl border border-slate-300 bg-white p-4"
                placeholder="How can we help you?"
              />
              <button
                type="submit"
                className="rounded-xl bg-slate-900 px-6 py-3 font-medium text-white transition hover:opacity-90"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}