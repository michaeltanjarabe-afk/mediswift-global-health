export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <div className="mx-auto max-w-5xl rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="text-4xl font-bold text-slate-900">
          Mediswift Clinic OS
        </h1>

        <p className="mt-3 text-slate-600">
          Patient management, appointments, and POS billing system
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <a
            href="/patients"
            className="block rounded-xl border p-5 transition hover:shadow-lg"
          >
            <h2 className="text-xl font-semibold text-slate-900">Patients</h2>
            <p className="mt-2 text-sm text-slate-600">
              Register and manage patient profiles
            </p>
          </a>

          <a
            href="/appointments"
            className="block rounded-xl border p-5 transition hover:shadow-lg"
          >
            <h2 className="text-xl font-semibold text-slate-900">Appointments</h2>
            <p className="mt-2 text-sm text-slate-600">
              Schedule and track consultations
            </p>
          </a>

          <a
            href="/billing"
            className="block rounded-xl border p-5 transition hover:shadow-lg"
          >
            <h2 className="text-xl font-semibold text-slate-900">POS Billing</h2>
            <p className="mt-2 text-sm text-slate-600">
              Process payments and issue receipts
            </p>
          </a>
        </div>
      </div>
    </main>
  );
}