import React from "react";
import { Card, CardContent, CardHeader } from "../../../../components/ui/card";

export const ClientTestimonialsSection = (): JSX.Element => {
  // Testimonial data for mapping
  const testimonials = [
    {
      logo: "/logo.svg",
      company: "TechStartup Xperience",
      person: "SARAH THOMPSON",
      text: "Ability to capture the essence of our vision and translate it into a visually stunning logo exceeded our expectations.",
      date: "February 2024",
    },
    {
      logo: "/logo-1.svg",
      company: "GlorifiedBrand",
      person: "SARAH THOMPSON",
      text: "Ability to capture the essence of our vision and translate it into a visually stunning logo exceeded our expectations.",
      date: "January 2024",
    },
    {
      logo: "/logo-2.svg",
      company: "WorldofStartups",
      person: "SARAH THOMPSON",
      text: "Ability to capture the essence of our vision and translate it into a visually stunning logo exceeded our expectations.",
      date: "November 2023",
    },
    {
      logo: "/logo-3.svg",
      company: "StartupNation",
      person: "SARAH THOMPSON",
      text: "Ability to capture the essence of our vision and translate it into a visually stunning logo exceeded our expectations.",
      date: "April 2023",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-10 px-14 py-24 w-full bg-dark">
      <header className="flex flex-col items-center gap-2">
        <span className="font-desktop-tagline font-[number:var(--desktop-tagline-font-weight)] text-[#f9784ccc] text-[length:var(--desktop-tagline-font-size)] tracking-[var(--desktop-tagline-letter-spacing)] leading-[var(--desktop-tagline-line-height)] whitespace-nowrap [font-style:var(--desktop-tagline-font-style)]">
          TESTIMONIALS
        </span>

        <h2 className="font-desktop-headline-2 font-[number:var(--desktop-headline-2-font-weight)] text-light text-[length:var(--desktop-headline-2-font-size)] tracking-[var(--desktop-headline-2-letter-spacing)] leading-[var(--desktop-headline-2-line-height)] whitespace-nowrap [font-style:var(--desktop-headline-2-font-style)]">
          WHAT PEOPLE SAY
        </h2>
      </header>

      <div className="flex flex-wrap max-w-[1328px] items-center justify-center gap-[18px_16px]">
        {testimonials.map((testimonial, index) => (
          <Card
            key={`testimonial-${index}`}
            className="flex flex-col w-[656px] items-start gap-6 p-6 rounded-2xl border border-solid border-[#17171729] bg-[linear-gradient(135deg,rgba(252,214,139,1)_0%,rgba(255,255,255,1)_100%)]"
          >
            <CardHeader className="flex flex-row items-center gap-4 p-0 w-full">
              <img className="w-14 h-14" alt="Logo" src={testimonial.logo} />
              <div className="flex flex-col items-start justify-center gap-2 flex-1">
                <h3 className="self-stretch mt-[-1.00px] [font-style:var(--desktop-header-3-font-style)] text-dark text-[length:var(--desktop-header-3-font-size)] tracking-[var(--desktop-header-3-letter-spacing)] leading-[var(--desktop-header-3-line-height)] font-desktop-header-3 font-[number:var(--desktop-header-3-font-weight)]">
                  {testimonial.company}
                </h3>
                <p className="self-stretch text-dark leading-[var(--desktop-project-tagline-line-height)] font-desktop-project-tagline font-[number:var(--desktop-project-tagline-font-weight)] text-[length:var(--desktop-project-tagline-font-size)] tracking-[var(--desktop-project-tagline-letter-spacing)] [font-style:var(--desktop-project-tagline-font-style)]">
                  {testimonial.person}
                </p>
              </div>
            </CardHeader>

            <CardContent className="p-0 space-y-4">
              <p className="self-stretch text-dark font-desktop-paragraph-1 font-[number:var(--desktop-paragraph-1-font-weight)] text-[length:var(--desktop-paragraph-1-font-size)] tracking-[var(--desktop-paragraph-1-letter-spacing)] leading-[var(--desktop-paragraph-1-line-height)] [font-style:var(--desktop-paragraph-1-font-style)]">
                {testimonial.text}
              </p>
              <span className="block w-fit text-[#17171766] leading-[var(--small-text-line-height)] font-small-text font-[number:var(--small-text-font-weight)] text-[length:var(--small-text-font-size)] tracking-[var(--small-text-letter-spacing)] [font-style:var(--small-text-font-style)]">
                {testimonial.date}
              </span>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
