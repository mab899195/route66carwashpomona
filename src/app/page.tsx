import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        {/* Quick info bar */}
        <section className="border-y border-teal/15 bg-sky">
          <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-teal/15 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            <div className="px-6 py-4 text-center">
              <p className="font-display text-lg tracking-widest text-teal">Open Daily</p>
              <p className="font-semibold text-ink">8:00 AM – 7:00 PM</p>
            </div>
            <a href="tel:+19096200356" className="px-6 py-4 text-center transition-colors hover:bg-teal/5">
              <p className="font-display text-lg tracking-widest text-teal">Call Us</p>
              <p className="font-semibold text-ink">(909) 620-0356</p>
            </a>
            <div className="px-6 py-4 text-center">
              <p className="font-display text-lg tracking-widest text-teal">Find Us</p>
              <p className="font-semibold text-ink">1650 W Holt Ave, Pomona, CA</p>
            </div>
          </div>
        </section>

        <Services />

        {/* Why us */}
        <section id="about" className="scroll-mt-16 bg-white pt-10 pb-20 sm:pt-12 sm:pb-28">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <p className="font-display text-xl tracking-[0.3em] text-teal">Why Route 66</p>
              <h2 className="font-display mt-2 text-5xl text-ink sm:text-6xl">
                The Best Wash on the Mother Road
              </h2>
              <div className="road-line mt-5 w-40" />
            </Reveal>
            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {[
                {
                  title: "Fast & Efficient",
                  body: "State-of-the-art automated tunnel equipment — in and out in minutes with a shiny, spotless result every time.",
                },
                {
                  title: "Unlimited Memberships",
                  body: "Wash every day for one low monthly price. Starting at $19.99/mo with no contracts and free cancellation anytime.",
                },
                {
                  title: "Pomona Proud",
                  body: "Serving the Pomona community with affordable, high-quality express washes. Part of the Route 66 Car Wash family.",
                },
              ].map((card, i) => (
                <Reveal key={card.title} delay={i * 120}>
                  <div className="card-light h-full rounded-2xl p-8">
                    <h3 className="font-display text-3xl text-teal">{card.title}</h3>
                    <p className="mt-3 text-ink/80">{card.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-16 bg-sky pt-10 pb-20 sm:pt-12 sm:pb-28">
          <div className="mx-auto max-w-4xl px-6">
            <Reveal>
              <p className="font-display text-xl tracking-[0.3em] text-teal">Find Us</p>
              <h2 className="font-display mt-2 text-5xl text-ink sm:text-6xl">Visit Us</h2>
              <div className="road-line mt-5 w-40" />
            </Reveal>
            <Reveal delay={100}>
              <div className="mt-10 card-light rounded-2xl p-8">
                <h3 className="font-display text-3xl text-ink">Hours</h3>
                <dl className="mt-4 space-y-2 text-ink/80">
                  <div className="flex justify-between border-b border-teal/15 pb-2">
                    <dt>Monday – Sunday</dt>
                    <dd className="font-semibold text-ink">8:00 AM – 7:00 PM</dd>
                  </div>
                </dl>
                <p className="mt-6 text-ink/80">
                  1650 W Holt Ave, Pomona, CA 91768
                  <br />
                  <a href="tel:+19096200356" className="text-teal hover:underline">
                    (909) 620-0356
                  </a>
                </p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <iframe
                title="Route 66 Car Wash Pomona location map"
                src="https://www.google.com/maps?q=1650+W+Holt+Ave,+Pomona,+CA+91768&output=embed"
                className="mt-6 h-80 w-full rounded-2xl border border-teal/20"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Reveal>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-teal/15 bg-white py-12">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <Image
            src="/images/logo-new.png"
            alt="Route 66 Car Wash Pomona logo"
            width={72}
            height={72}
            className="mx-auto"
          />
          <p className="font-display mt-4 text-2xl text-ink">Route 66 Car Wash Pomona</p>
          <p className="mt-1 text-ink/70">
            1650 W Holt Ave, Pomona, CA 91768 · (909) 620-0356
          </p>
          <div className="mt-5 flex justify-center gap-6 text-ink/70">
            <a href="https://www.facebook.com/rt66pomona/" target="_blank" rel="noopener noreferrer" className="hover:text-teal">Facebook</a>
            <a href="https://www.instagram.com/route66carwashpomona" target="_blank" rel="noopener noreferrer" className="hover:text-teal">Instagram</a>
            <a href="https://x.com/route66pomona" target="_blank" rel="noopener noreferrer" className="hover:text-teal">X</a>
            <a href="https://www.yelp.com/biz/route-66-car-wash-pomona-pomona-2" target="_blank" rel="noopener noreferrer" className="hover:text-teal">Yelp</a>
          </div>
          <p className="mt-6 text-sm text-ink/50">
            Copyright © 2026 Route 66 Car Wash Pomona — All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
