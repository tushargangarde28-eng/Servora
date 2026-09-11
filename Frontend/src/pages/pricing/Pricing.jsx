import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";

function Pricing() {
  const [billing, setBilling] = useState("monthly"); // "monthly" | "yearly"

  const plans = [
    {
      name: "Starter",
      tagline: "For individuals getting started",
      priceMonthly: 0,
      priceYearly: 0,
      highlight: false,
      cta: "Get Started",
      features: [
        "Browse all service categories",
        "Up to 5 bookings per month",
        "Basic profile",
        "Email support",
        "Secure online payments",
      ],
    },
    {
      name: "Professional",
      tagline: "For growing service businesses",
      priceMonthly: 999,
      priceYearly: 9990,
      highlight: true,
      cta: "Start Free Trial",
      badge: "Most Popular",
      features: [
        "Everything in Starter",
        "Unlimited bookings",
        "Team management (up to 10)",
        "Custom business profile",
        "Automated invoicing",
        "Analytics dashboard",
        "Priority email & chat support",
      ],
    },
    {
      name: "Enterprise",
      tagline: "For large teams and operations",
      priceMonthly: 2999,
      priceYearly: 29990,
      highlight: false,
      cta: "Contact Sales",
      features: [
        "Everything in Professional",
        "Unlimited team members",
        "Multi-location support",
        "Advanced CRM & reporting",
        "API access",
        "Dedicated account manager",
        "24/7 phone support",
      ],
    },
  ];

  const formatINR = (amount) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Hero */}
      <section className="relative overflow-hidden px-4 pt-36 pb-12 sm:px-6 sm:pt-44 sm:pb-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[120px] sm:h-[600px] sm:w-[600px]"
        />

        <div className="relative z-10 mx-auto max-w-7xl text-center">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-slate-300 backdrop-blur-xl sm:text-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            Simple, Transparent Pricing
          </div>

          <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Plans that{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              grow with you
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            No hidden fees. Cancel anytime. Start free and upgrade when you're ready.
          </p>

          {/* Billing toggle */}
          <div className="mt-10 inline-flex items-center gap-1 rounded-xl border border-white/10 bg-white/5 p-1 backdrop-blur-xl">
            <button
              type="button"
              onClick={() => setBilling("monthly")}
              className={`rounded-lg px-5 py-2 text-sm font-semibold transition-all ${
                billing === "monthly"
                  ? "bg-white text-slate-950 shadow"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setBilling("yearly")}
              className={`relative rounded-lg px-5 py-2 text-sm font-semibold transition-all ${
                billing === "yearly"
                  ? "bg-white text-slate-950 shadow"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              Yearly
              <span className="ml-2 rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                Save 17%
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="relative px-4 pb-24 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => {
              const price =
                billing === "monthly" ? plan.priceMonthly : plan.priceYearly;
              const period = billing === "monthly" ? "/month" : "/year";

              return (
                <div
                  key={plan.name}
                  className={`relative overflow-hidden rounded-3xl border p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 sm:p-8 ${
                    plan.highlight
                      ? "border-blue-400/40 bg-gradient-to-b from-blue-600/10 via-violet-600/5 to-transparent shadow-2xl shadow-blue-500/10"
                      : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.06]"
                  }`}
                >
                  {plan.badge && (
                    <div className="absolute right-6 top-6 rounded-full border border-blue-400/40 bg-blue-500/15 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-300">
                      {plan.badge}
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-white sm:text-2xl">
                      {plan.name}
                    </h3>
                    <p className="mt-1.5 text-sm text-slate-400">{plan.tagline}</p>
                  </div>

                  {/* Price */}
                  <div className="mb-6 flex items-end gap-2">
                    <span className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                      {price === 0 ? "Free" : formatINR(price)}
                    </span>
                    {price !== 0 && (
                      <span className="pb-1.5 text-sm text-slate-400">{period}</span>
                    )}
                  </div>

                  {/* CTA */}
                  <Link
                    to={plan.name === "Enterprise" ? "/contact" : "/register"}
                    className={`group flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all ${
                      plan.highlight
                        ? "bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40"
                        : "border border-white/15 bg-white/5 text-white hover:border-white/25 hover:bg-white/10"
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>

                  {/* Features */}
                  <ul className="mt-7 space-y-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-slate-300">
                        <span
                          className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
                            plan.highlight
                              ? "bg-blue-500/20 text-blue-300"
                              : "bg-emerald-500/15 text-emerald-400"
                          }`}
                        >
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Trust strip */}
          <div className="mt-16 grid gap-4 sm:grid-cols-3">
            {[
              { label: "No setup fees", value: "₹0" },
              { label: "Cancel anytime", value: "100%" },
              { label: "Secure payments", value: "256-bit" },
            ].map((t) => (
              <div
                key={t.label}
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5 text-center backdrop-blur-xl"
              >
                <div className="text-2xl font-bold text-white">{t.value}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-slate-500">
                  {t.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 pb-24 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-10 text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Frequently asked questions
          </h2>

          <div className="space-y-3">
            {[
              {
                q: "Can I switch plans later?",
                a: "Absolutely. You can upgrade or downgrade at any time. Changes take effect at the start of your next billing cycle.",
              },
              {
                q: "Is there a free trial?",
                a: "Yes — the Professional plan includes a 14-day free trial. No credit card required to start.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept UPI, credit/debit cards, net banking, and wallets via Razorpay. All prices are in INR.",
              },
              {
                q: "Do you offer refunds?",
                a: "If you're not satisfied within 7 days of a paid plan, contact support and we'll issue a full refund.",
              },
              {
                q: "Are there any hidden charges?",
                a: "None. The plan price is the only charge. Payment gateway fees are absorbed by SERVORA.",
              },
            ].map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5 backdrop-blur-xl transition hover:border-white/20"
              >
                <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-white sm:text-base">
                  {item.q}
                  <span className="ml-4 text-slate-500 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-6 text-slate-400">{item.a}</p>
              </details>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-blue-600/10 via-violet-600/10 to-slate-950/0 p-8 text-center sm:p-12">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Still have questions?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-slate-400 sm:text-base">
              Our team is here to help you choose the right plan.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-white/10 transition-all hover:bg-slate-100 hover:shadow-white/20"
            >
              Talk to Sales
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Pricing;