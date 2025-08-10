import React from "react";
import { Button } from "../../../../components/ui/button";

export const HeroBannerSection = (): JSX.Element => {
  return (
    <section
      className="
        flex flex-col w-full items-start gap-8 md:gap-10
        px-4 sm:px-6 md:px-14 py-12 sm:py-16 md:py-24 relative
        bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]
        text-white
      "
    >
      {/* Tagline */}
      <div className="flex flex-col gap-4 md:gap-6 items-start">
        <div
          className="
            font-desktop-tagline
            text-sm sm:text-base md:text-lg
          "
        >
          👋 HEY, I AM DEBADARSHAN
        </div>

        {/* Main Heading */}
        <h1
          className="
            max-w-[900px] md:max-w-[1102px]
            bg-[linear-gradient(178deg,rgba(254,250,238,1)_0%,rgba(252,214,139,1)_34%,rgba(249,120,76,1)_66%,rgba(156,53,109,1)_94%)]
            [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent]
            text-transparent
            font-desktop-headling-1
            text-[clamp(2rem,6vw,4rem)]
            leading-tight
          "
        >
          A YOUNG SOFTWARE DEVELOPER BASED IN BHUBANESWAR, ODISHA, INDIA
        </h1>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-[17px]">
        {/* MY WORKS Button */}
        <a href="#my-works" className="no-underline">
          <Button
            variant="outline"
            className="rounded-[40px] border-[#F9784C] text-[#F9784C] hover:bg-[#F9784C] hover:text-white transition-colors px-6 py-3 h-auto"
          >
            <span className="text-sm sm:text-base">MY WORKS</span>
          </Button>
        </a>

        {/* LET'S TALK Button */}
        <a href="#contact" className="no-underline">
          <Button
            variant="default"
            className="rounded-[40px] bg-white text-black hover:bg-gray-200 transition-colors px-6 py-3 h-auto"
          >
            <span className="text-sm sm:text-base">LET&apos;S TALK</span>
          </Button>
        </a>
      </div>
    </section>
  );
};
