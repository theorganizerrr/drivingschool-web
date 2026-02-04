"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL || "";
  const [health, setHealth] = useState<any>({ loading: true });

  useEffect(() => {
    if (!apiBase) {
      setHealth({ ok: false, error: "NEXT_PUBLIC_API_BASE_URL is missing" });
      return;
    }

    (async () => {
      try {
        const res = await fetch(`${apiBase}/health`);
        const data = await res.json();
        setHealth(data);
      } catch (e: any) {
        setHealth({ ok: false, error: e?.message ?? "failed" });
      }
    })();
  }, [apiBase]);

  return (
    <main style={{ padding: 24 }}>
      <h1>Driving School Web</h1>
      <p>API Base: {apiBase || "(missing)"}</p>
      <h2>API Health</h2>
      <pre>{JSON.stringify(health, null, 2)}</pre>
      <h2>Tenant test</h2>
      <a href="/t/hasnemdrivingschool">Open /t/hasnemdrivingschool</a>
    </main>
  );
}
