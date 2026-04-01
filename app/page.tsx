export default function Home() {
  return (
    <main className="min-h-screen bg-white p-10">
      <section className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-slate-900">
          Mediswift Global Health
        </h1>

        <p className="mt-4 text-xl text-slate-600">
          Integrated clinic, hospital, and patient management platform
        </p>

        <div className="grid grid-cols-2 gap-6 mt-10">
          <a
            href="/appointments"
            className="rounded-xl border p-6 hover:shadow-lg"
          >
            <h2 className="text-2xl font-semibold">Appointments</h2>
            <p className="mt-2 text-slate-500">
              Schedule and manage consultations
            </p>
          </a>

          <a
            href="/billing"
            className="rounded-xl border p-6 hover:shadow-lg"
          >
            <h2 className="text-2xl font-semibold">Billing & POS</h2>
            <p className="mt-2 text-slate-500">
              Payments, invoices, and receipts
            </p>
          </a>

          <a
            href="/dashboard"
            className="rounded-xl border p-6 hover:shadow-lg"
          >
            <h2 className="text-2xl font-semibold">Dashboard</h2>
            <p className="mt-2 text-slate-500">
              Clinic performance and analytics
            </p>
          </a>

          <a
            href="/patients"
            className="rounded-xl border p-6 hover:shadow-lg"
          >
            <h2 className="text-2xl font-semibold">Patient Portal</h2>
            <p className="mt-2 text-slate-500">
              Medical records and follow-up visits
            </p>
          </a>
        </div>
      </section>
    </main>
  );
}