export default function HeroDecoration() {
  return (
    <>
      {/* Watermark */}
      <h1
        className="
        pointer-events-none
        absolute
        left-1/2
        top-1/2
        -translate-x-1/2
        -translate-y-1/2
        select-none
        text-[22rem]
        font-semibold
        opacity-[0.03]
        tracking-[30px]
        text-white
        hidden
        xl:block
      "
        style={{
          fontFamily: "var(--font-heading)",
        }}
      >
        JH
      </h1>

      {/* Gold Line 1 */}
      <div
        className="
        absolute
        left-[-180px]
        top-[120px]
        h-[2px]
        w-[520px]
        rotate-[18deg]
        rounded-full
        bg-gradient-to-r
        from-transparent
        via-[#D6BA74]
        to-transparent
        opacity-40
      "
      />

      {/* Gold Line 2 */}
      <div
        className="
        absolute
        right-[-220px]
        bottom-[120px]
        h-[2px]
        w-[600px]
        -rotate-[18deg]
        rounded-full
        bg-gradient-to-r
        from-transparent
        via-[#D6BA74]
        to-transparent
        opacity-30
      "
      />

      {/* Circle */}
      <div
        className="
        absolute
        left-[8%]
        top-[20%]
        hidden
        h-24
        w-24
        rounded-full
        border
        border-[#D6BA74]/15
        lg:block
      "
      />

      {/* Circle */}
      <div
        className="
        absolute
        right-[12%]
        bottom-[15%]
        hidden
        h-40
        w-40
        rounded-full
        border
        border-[#D6BA74]/10
        lg:block
      "
      />
    </>
  );
}