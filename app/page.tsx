export default async function Home() {
  const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL || "";
  let health: any = null;

  try {
    const res = await fetch(`${apiBase}/health`, { cache: "no-store" });
    health = await res.json();
  } catch (e: any) {
    health = { ok: false, error: e?.message ?? "failed", apiBase };
  }

  return (
    <main style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1 style={{ fontSize: 28, fontWeight: 700 }}>Driving School Web</h1>

      <p style={{ marginTop: 8 }}>
        <b>API Base:</b> {apiBase || "(not set)"}
      </p>

      <h2 style={{ marginTop: 20, fontSize: 18, fontWeight: 600 }}>API Health</h2>
      <pre style={{ padding: 12, background: "#f5f5f5", borderRadius: 8 }}>
        {JSON.stringify(health, null, 2)}
      </pre>

      <h2 style={{ marginTop: 20, fontSize: 18, fontWeight: 600 }}>Tenant test</h2>
      <p>
        <a href="/t/legon-driving-school">Open /t/legon-driving-school</a>
      </p>
    </main>
  );
}
