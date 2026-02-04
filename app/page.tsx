"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL || "";
  const [health, setHealth] = useState<any>(null);

  useEffect(() => {
    let cancelled = false;

    async function run() {
      try {
        const res = await fetch(`${apiBase}/health`, {
          cache: "no-store",
        });
        const json = await res.json();
        if (!cancelled) setHealth(json);
      } catch (e: any) {
        if (!cancelled)
          setHealth({ ok: false, error: e?.message ?? "failed", apiBase });
      }
    }

    if (apiBase) run();
    else setHealth({ ok: false, error: "API base not set", apiBase });

    return () => {
      cancelled = true;
    };
  }, [apiBase]);

  return (
    <main style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1 style={{ fontSize: 28, fontWeight: 700 }}>Driving School Web</h1>

      <p style={{ marginTop: 8 }}>
        <b>API Base:</b> {apiBase || "(not set)"}
      </p>

      <h2 style={{ marginTop: 20, fontSize: 18, fontWeight: 600 }}>
        API Health
      </h2>

      <pre style={{ padding: 12, background: "#f5f5f5", borderRadius: 8 }}>
        {health ? JSON.stringify(health, null, 2) : "Loading..."}
      </pre>

      <h2 style={{ marginTop: 20, fontSize: 18, fontWeight: 600 }}>
        Tenant test
      </h2>
      <p>
        <a href="/t/hasnemdrivingschool">Open /t/hasnemdrivingschool</a>
      </p>
    </main>
  );
}
