import React from "react";
import {
  UserRound,
  Settings,
  UsersRound,
  ShieldCheck,
  Crown,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import membershipImg from "../images/engineering.png";

export default function MembershipPathway() {
  const steps = [
    {
      icon: UserRound,
      title: "Associate\nEngineer",
      text: "For engineering graduates and early-career professionals.",
    },
    {
      icon: Settings,
      title: "Professional\nEngineer",
      text: "For experienced engineers with proven technical competence.",
    },
    {
      icon: UsersRound,
      title: "Fellow\nEngineer",
      text: "For senior professionals with significant achievements.",
    },
    {
      icon: ShieldCheck,
      title: "Chartered\nEngineer",
      text: "For experts demonstrating exceptional competence.",
    },
    {
      icon: Crown,
      title: "Executive\nMember",
      text: "For leaders driving innovation, strategy and transformation.",
    },
  ];

  const logos = ["SIEMENS", "SAP", "RENK", "BMW\nGROUP", "PORSCHE", "iABG", "EDAG", "BOSCH", "AIRBUS"];

  return (
    <section className="bg-[#f6f6f4] text-[#111]">
      <div className=" mx-auto px-5 lg:px-10 pt-4 pb-8">
        <div className="grid lg:grid-cols-[420px_1fr] gap-[75px] items-start">
          <div className="h-[365px] w-full overflow-hidden shadow-sm">
            <img
              src={membershipImg}
              alt="Engineering membership"
              className="h-full w-full object-cover grayscale"
            />
          </div>

          <div className="pt-1">
            <p className="text-[#ed1c1c] text-[13px] font-semibold font-black uppercase tracking-[0.5px] mb-3">
              MEMBERSHIP PATHWAY
            </p>

            <h2 className="text-[30px] md:text-[34px] leading-[1.18] font-semibold tracking-[0.3px] max-w-[650px] mb-8">
              Advance Your Engineering Career <br />
              With Professional Recognition
            </h2>

            <div className="grid grid-cols-5 gap-5 items-start">
              {steps.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="relative">
                    <Icon
                      size={40}
                      strokeWidth={1.45}
                      className="text-[#ff6b6b] mb-4"
                    />

                    <h3 className="whitespace-pre-line text-[17px] leading-[1.35] font-semibold mb-4">
                      {item.title}
                    </h3>

                    <p className="text-[12px] leading-[1.65] text-[#303030] font-medium max-w-[118px]">
                      {item.text}
                    </p>

                    {index !== steps.length - 1 && (
                      <ChevronRight
                        size={45}
                        strokeWidth={1.1}
                        className="absolute top-[47px] right-[-18px] text-[#5e5e5e]"
                      />
                    )}
                  </div>
                );
              })}
            </div>

            <button className="mt-12 h-[46px] w-[335px] font-bold border-2 border-[#ff6b6b] text-[#ed1c1c] bg-transparent text-[12px] font-black uppercase tracking-[0.4px] flex items-center justify-center gap-12">
              View All Membership Programs
              <ArrowRight size={17} />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white border-t border-[#eeeeee] py-4">
        <h3 className="text-center text-[14px] font-black tracking-[0.6px] uppercase mb-5">
          Trusted By Industry Leaders Worldwide
        </h3>

        <div className="max-w-[1120px] mx-auto px-5 flex flex-wrap items-center justify-center gap-x-11 gap-y-5">
          {logos.map((logo) => (
            <div
              key={logo}
              className="whitespace-pre-line text-center text-[22px] leading-[0.95] font-black text-[#111] opacity-75 grayscale"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}