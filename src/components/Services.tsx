"use client";

import Reveal from "@/components/Reveal";

const washPackages = [
  {
    title: "Basic",
    monthly: "19.99",
    single: "9",
    features: ["Exterior tunnel wash", "High-pressure rinse", "Blow dry"],
    gradient: "linear-gradient(180deg, #6B3A1F 0%, #A0602A 30%, #7A4820 65%, #3D1F0A 100%)",
    bannerBg: "rgba(30,12,4,0.85)",
    borderColor: "#CD8B4A",
    bannerText: "#F0A868",
    priceColor: "#FFD4A3",
    subColor: "#C8905A",
    glint: "rgba(255,180,100,0.15)",
    shadowColor: "rgba(139,69,19,0.45)",
  },
  {
    title: "Silver",
    monthly: "23.99",
    single: "12",
    features: ["Everything in Basic", "Tire shine", "Spot-free rinse"],
    gradient: "linear-gradient(180deg, #5A5A5A 0%, #B0B0B0 30%, #808080 65%, #3A3A3A 100%)",
    bannerBg: "rgba(20,20,20,0.85)",
    borderColor: "#D0D0D0",
    bannerText: "#F0F0F0",
    priceColor: "#FFFFFF",
    subColor: "#C0C0C0",
    glint: "rgba(255,255,255,0.12)",
    shadowColor: "rgba(80,80,80,0.45)",
  },
  {
    title: "Gold",
    monthly: "25.99",
    single: "15",
    features: ["Everything in Silver", "Rain-X treatment", "Triple foam"],
    gradient: "linear-gradient(180deg, #7A5800 0%, #D4A000 30%, #A07800 65%, #4A3000 100%)",
    bannerBg: "rgba(30,18,0,0.85)",
    borderColor: "#FFD700",
    bannerText: "#FFE566",
    priceColor: "#FFE566",
    subColor: "#D4A800",
    glint: "rgba(255,220,80,0.18)",
    shadowColor: "rgba(200,150,0,0.55)",
  },
  {
    title: "VIP",
    monthly: "29.99",
    single: "18",
    features: ["Everything in Gold", "Ceramic sealant", "Tire dressing", "Air freshener"],
    gradient: "linear-gradient(180deg, #1A1A2E 0%, #4A4A7A 30%, #2A2A50 65%, #0A0A1A 100%)",
    bannerBg: "rgba(8,8,20,0.9)",
    borderColor: "#A0A0F0",
    bannerText: "#C8C8FF",
    priceColor: "#E0E0FF",
    subColor: "#9090C0",
    glint: "rgba(160,160,255,0.15)",
    shadowColor: "rgba(80,80,200,0.45)",
  },
];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-16 bg-sky pt-10 pb-20 sm:pt-12 sm:pb-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <Reveal>
          <p className="font-display text-xl tracking-[0.3em] text-teal">What We Do</p>
          <h2 className="font-display mt-2 text-5xl text-ink sm:text-6xl">Express Drive-Thru</h2>
          <div className="road-line mt-5 w-40" />
        </Reveal>

        <Reveal delay={80}>
          <p className="mt-6 max-w-3xl text-ink/80">
            Fast, automated tunnel wash — in and out in minutes. Go monthly and save with unlimited washes, cancel anytime.
          </p>
        </Reveal>

        {/* Shield badge pricing */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 sm:gap-10">
          {washPackages.map((pkg, i) => (
            <Reveal key={pkg.title} delay={i * 80}>
              <div className="flex flex-col items-center">

                {/* Shield */}
                <div
                  style={{
                    width: 170,
                    height: 210,
                    clipPath: "polygon(0 0, 100% 0, 100% 76%, 50% 100%, 0 76%)",
                    background: pkg.gradient,
                    boxShadow: `0 12px 40px ${pkg.shadowColor}, inset 0 1px 0 ${pkg.glint}`,
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Inner glint line */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: "10%",
                      right: "10%",
                      height: 1,
                      background: `linear-gradient(90deg, transparent, ${pkg.borderColor}88, transparent)`,
                    }}
                  />

                  {/* Top banner */}
                  <div
                    style={{
                      background: pkg.bannerBg,
                      borderBottom: `1.5px solid ${pkg.borderColor}`,
                      padding: "10px 0 8px",
                      textAlign: "center",
                    }}
                  >
                    <span
                      className="font-display"
                      style={{
                        color: pkg.bannerText,
                        fontSize: 17,
                        letterSpacing: "0.25em",
                      }}
                    >
                      {pkg.title.toUpperCase()}
                    </span>
                  </div>

                  {/* Price */}
                  <div
                    style={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      paddingBottom: 40,
                      gap: 2,
                    }}
                  >
                    {/* Monthly price */}
                    <div style={{ display: "flex", alignItems: "flex-start", lineHeight: 1 }}>
                      <span
                        className="font-display"
                        style={{ color: pkg.priceColor, fontSize: 20, marginTop: 6 }}
                      >
                        $
                      </span>
                      <span
                        className="font-display"
                        style={{ color: pkg.priceColor, fontSize: 56, lineHeight: 1 }}
                      >
                        {pkg.monthly.split(".")[0]}
                      </span>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          marginTop: 8,
                        }}
                      >
                        <span
                          className="font-display"
                          style={{ color: pkg.priceColor, fontSize: 22, lineHeight: 1 }}
                        >
                          .{pkg.monthly.split(".")[1]}
                        </span>
                        <span
                          style={{ color: pkg.subColor, fontSize: 12, marginTop: 2 }}
                        >
                          /mo
                        </span>
                      </div>
                    </div>

                    {/* Separator */}
                    <div
                      style={{
                        width: 60,
                        height: 1,
                        background: `linear-gradient(90deg, transparent, ${pkg.borderColor}88, transparent)`,
                        marginTop: 6,
                      }}
                    />

                    {/* Single wash */}
                    <div style={{ textAlign: "center", marginTop: 4 }}>
                      <span style={{ color: pkg.subColor, fontSize: 12 }}>
                        Single wash&nbsp;&nbsp;
                      </span>
                      <span
                        className="font-display"
                        style={{ color: pkg.priceColor, fontSize: 16 }}
                      >
                        ${pkg.single}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Features below badge */}
                <ul className="mt-4 space-y-1 text-center">
                  {pkg.features.map((f) => (
                    <li key={f} className="text-sm text-ink/70">
                      <span className="text-teal mr-1">✓</span>{f}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Membership CTA */}
        <Reveal delay={100}>
          <div id="membership" className="scroll-mt-20 mt-16 rounded-2xl bg-ink px-8 py-10 text-center text-white shadow-xl">
            <p className="font-display text-xl tracking-[0.3em] text-teal-light">Save More Every Month</p>
            <h3 className="font-display mt-2 text-4xl sm:text-5xl">Join Our Membership</h3>
            <p className="mx-auto mt-4 max-w-xl text-white/75">
              Unlimited washes, every day. Lock in your price and keep your car looking its best — no contracts, cancel anytime.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {washPackages.map((pkg) => (
                <div
                  key={pkg.title}
                  style={{ borderColor: pkg.borderColor + "44" }}
                  className="rounded-xl border bg-white/10 px-6 py-4 text-center backdrop-blur"
                >
                  <p className="font-display text-lg text-teal-light">{pkg.title}</p>
                  <p className="font-display mt-1 text-3xl text-white">
                    ${pkg.monthly}
                    <span className="text-base text-white/60">/mo</span>
                  </p>
                </div>
              ))}
            </div>
            <a
              href="tel:+19096200356"
              className="mt-8 inline-block rounded-full bg-teal px-8 py-3.5 font-display text-xl tracking-wider text-white shadow-lg shadow-teal/40 transition-all hover:bg-teal-dark"
            >
              Call to Sign Up — (909) 620-0356
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
