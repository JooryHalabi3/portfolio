export default function Background() {
  return (
    <>
      {/* Main Background */}
      <div className="fixed inset-0 -z-50 bg-[#081B38]" />

      {/* Gold Glow */}
      <div className="fixed left-[-220px] top-[-180px] -z-40 h-[520px] w-[520px] rounded-full bg-[#D6BA74]/10 blur-[150px]" />

      <div className="fixed bottom-[-260px] right-[-220px] -z-40 h-[650px] w-[650px] rounded-full bg-[#D6BA74]/5 blur-[170px]" />

      {/* Soft Grid */}
      <div
        className="fixed inset-0 -z-30 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />
    </>
  );
}