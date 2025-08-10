import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const AboutMeSection = (): JSX.Element => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-32 px-6 md:px-[168px] py-16 md:py-24 relative w-full">
      {/* CHANGE: Reduced padding for mobile and matched screenshot spacing */}

      {/* Background gradient */}
      <div className="absolute w-[300px] md:w-[432px] h-[500px] md:h-[696px] top-[60px] md:top-[120px] left-12 md:left-36 rounded-[500px] blur-[28px] bg-[linear-gradient(178deg,rgba(254,250,238,1)_0%,rgba(252,214,139,1)_34%,rgba(249,120,76,1)_66%,rgba(156,53,109,1)_94%)]" />

      {/* Profile image */}
      <div className="relative z-10">
        <img
          className="w-[300px] md:w-[432px] h-[500px] md:h-[696px] rounded-[500px] object-cover"
          alt="Profile image"
          src="Author.jpg"
        />
      </div>

      {/* Content */}
      <Card className="bg-transparent border-none shadow-none z-10">
        <CardContent className="flex flex-col items-start gap-6 md:gap-10 p-0">
          <div className="flex flex-col items-start gap-4">
            <div className="flex flex-col items-start gap-2">
              <div className="w-full md:w-[544px] font-desktop-tagline font-[number:var(--desktop-tagline-font-weight)] text-[#f9784ccc] text-[length:var(--desktop-tagline-font-size)] tracking-[var(--desktop-tagline-letter-spacing)] leading-[var(--desktop-tagline-line-height)] [font-style:var(--desktop-tagline-font-style)]">
                ABOUT
              </div>

              <h2 className="w-full md:w-[544px] font-desktop-headline-2 font-[number:var(--desktop-headline-2-font-weight)] text-dark text-[length:var(--desktop-headline-2-font-size)] tracking-[var(--desktop-headline-2-letter-spacing)] leading-[var(--desktop-headline-2-line-height)] [font-style:var(--desktop-headline-2-font-style)]">
                Full-stack AI maverick building smart, seamless software
              </h2>
            </div>

            <p className="w-full md:w-[544px] font-desktop-paragraph-1 font-[number:var(--desktop-paragraph-1-font-weight)] text-[#171717cc] text-[length:var(--desktop-paragraph-1-font-size)] tracking-[var(--desktop-paragraph-1-letter-spacing)] leading-[var(--desktop-paragraph-1-line-height)] [font-style:var(--desktop-paragraph-1-font-style)]">
              With a B.Tech degree, my journey began as a web developer,
              crafting dynamic web applications. I then transitioned into
              full-stack development, mastering both front-end and back-end
              technologies. My passion for AI led me to specialize in machine
              learning, where I developed intelligent systems that learn and
              adapt. My expertise spans across the software development
              lifecycle, from initial concept to deployment and maintenance.
              I thrive on solving complex problems and delivering innovative
              solutions that drive business success.
            </p>
          </div>

          <Button
            variant="outline"
            className="rounded-[40px] px-6 py-3 border border-solid border-neutral-900"
          >
            <span className="font-desktop-button-text font-[number:var(--desktop-button-text-font-weight)] text-dark text-[length:var(--desktop-button-text-font-size)] tracking-[var(--desktop-button-text-letter-spacing)] leading-[var(--desktop-button-text-line-height)] [font-style:var(--desktop-button-text-font-style)]">
              SCHEDULE A CALL
            </span>
          </Button>
        </CardContent>
      </Card>
    </section>
  );
};
