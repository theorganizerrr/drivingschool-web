export default function TenantHome({ params }: { params: { tenant: string } }) {
  return (
    <main style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1 style={{ fontSize: 24, fontWeight: 700 }}>
        Tenant: {params.tenant}
      </h1>
      <p style={{ marginTop: 8 }}>
        Path-based tenancy routing is working ✅
      </p>
    </main>
  );
}
