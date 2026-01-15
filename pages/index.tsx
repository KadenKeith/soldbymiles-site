export default function Home() {
  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0a", color: "#fff", padding: "40px", fontFamily: "Arial" }}>
      <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>Keith Miles</h1>
      <h2 style={{ color: "#aaa", marginBottom: "30px" }}>
        Luxury Real Estate · Orlando · Kissimmee · ChampionsGate · Davenport
      </h2>

      <p style={{ maxWidth: "600px", lineHeight: "1.6", marginBottom: "30px" }}>
        High-intent buyer, seller, and investor representation built on strategy,
        leverage, and results.
      </p>

      <div style={{ marginBottom: "40px" }}>
        <button style={{ padding: "12px 20px", marginRight: "10px" }}>Get Home Value</button>
        <button style={{ padding: "12px 20px" }}>Search Homes</button>
      </div>

      <p style={{ fontSize: "14px", color: "#bbb" }}>
        Call/Text: (407) 235-6746<br />
        Keith@PropertiesInTown.com
      </p>
    </div>
  );
}
