import { useState } from "react";
import Step1Method from "./Step1Method";
import Step2Account from "./Step2Account";
import Step3Role from "./Step3Role";
import Step4BusinessProfile from "./Step4BusinessProfile";
import Step4ProfessionalProfile from "./Step4ProfessionalProfile";
import Step5Success from "./Step5Success";

function RegisterFlow() {
  const [step, setStep] = useState(1);

  // Shared form data across all steps
  const [data, setData] = useState({
    // step 1
    method: null, // "google" | "email"

    // step 2
    fullName: "",
    email: "",
    password: "",

    // step 3
    role: null, // "BUSINESS_OWNER" | "PROFESSIONAL"

    // step 4 - business
    businessName: "",
    businessType: "",
    description: "",
    businessEmail: "",
    businessPhone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    logoUrl: "",

    // step 4 - professional
    professionalTitle: "",
    professionalBio: "",
    professionalPhone: "",
    professionalCity: "",
  });

  const update = (patch) => setData((d) => ({ ...d, ...patch }));

  const next = () => setStep((s) => s + 1);
  const back = () => setStep((s) => Math.max(1, s - 1));

  // Progress indicator
  const totalSteps = 5;
  const progress = (step / totalSteps) * 100;

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 px-4 pt-32 pb-20 text-white sm:px-6 sm:pt-40">
      {/* Background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[120px] sm:h-[600px] sm:w-[600px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 bottom-0 h-[300px] w-[300px] rounded-full bg-violet-600/15 blur-[120px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-xl">

        {/* Progress bar */}
        <div className="mb-8">
          <div className="mb-2 flex items-center justify-between text-xs font-medium text-slate-400">
            <span>Step {step} of {totalSteps}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
            <div
              className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Card */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 shadow-2xl backdrop-blur-xl sm:p-8">

          {step === 1 && (
            <Step1Method
              data={data}
              update={update}
              next={next}
            />
          )}

          {step === 2 && (
            <Step2Account
              data={data}
              update={update}
              next={next}
              back={back}
            />
          )}

          {step === 3 && (
            <Step3Role
              data={data}
              update={update}
              next={next}
              back={back}
            />
          )}

          {step === 4 && data.role === "BUSINESS_OWNER" && (
            <Step4BusinessProfile
              data={data}
              update={update}
              next={next}
              back={back}
            />
          )}

          {step === 4 && data.role === "PROFESSIONAL" && (
            <Step4ProfessionalProfile
              data={data}
              update={update}
              next={next}
              back={back}
            />
          )}

          {step === 5 && (
            <Step5Success data={data} />
          )}
        </div>

        {/* Footer */}
        {step < 5 && (
          <p className="mt-6 text-center text-xs text-slate-500">
            By continuing, you agree to our{" "}
            <a href="/terms" className="underline hover:text-slate-300">Terms</a>{" "}
            and{" "}
            <a href="/privacy" className="underline hover:text-slate-300">Privacy Policy</a>.
          </p>
        )}
      </div>
    </main>
  );
}

export default RegisterFlow;