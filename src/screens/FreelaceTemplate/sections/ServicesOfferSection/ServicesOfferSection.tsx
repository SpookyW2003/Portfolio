import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const ServicesOfferSection = (): JSX.Element => {
  // Service data for mapping
  const services = [
    {
      title: "Web Dev",
      description:
        "Crafting dynamic web applications with a focus on user experience, I build responsive and engaging websites that drive results.",
    },
    {
      title: "Flutter Dev",
      description:
        "Building cross-platform mobile applications with Flutter, I create intuitive and visually appealing apps that run smoothly on both iOS and Android.",
    },
    {
      title: "AI/ML",
      description:
        "Harnessing the power of AI and machine learning, I develop intelligent systems that learn from data and improve over time.",
    },
  ];

  return (
    <section className="flex flex-col md:flex-row items-start gap-8 md:gap-[198px] px-6 md:px-14 py-16 md:py-24 w-full">
      <div className="flex flex-col gap-10 items-start">
        <div className="flex flex-col items-start gap-2">
          <div className="font-desktop-tagline font-[number:var(--desktop-tagline-font-weight)] text-color-3 text-[length:var(--desktop-tagline-font-size)] tracking-[var(--desktop-tagline-letter-spacing)] leading-[var(--desktop-tagline-line-height)] whitespace-nowrap [font-style:var(--desktop-tagline-font-style)]">
            MY OFFER
          </div>

          <h2 className="max-w-[474px] font-desktop-headline-2 font-[number:var(--desktop-headline-2-font-weight)] text-dark text-[length:var(--desktop-headline-2-font-size)] tracking-[var(--desktop-headline-2-letter-spacing)] leading-[var(--desktop-headline-2-line-height)] [font-style:var(--desktop-headline-2-font-style)]">
            I OFFER A RANGE OF SERVICES TO HELP BETTER YOUR DEVELOPMENT NEEDS
          </h2>
        </div>

        <Button
          variant="outline"
          className="rounded-3xl border-neutral-900 font-desktop-button-text font-[number:var(--desktop-button-text-font-weight)] text-dark text-[length:var(--desktop-button-text-font-size)] tracking-[var(--desktop-button-text-letter-spacing)] leading-[var(--desktop-button-text-line-height)] [font-style:var(--desktop-button-text-font-style)]"
        >
          CONTACT ME
        </Button>
      </div>

      <div className="flex flex-col items-start gap-20 w-full max-w-[544px]">
        {services.map((service, index) => (
          <Card key={index} className="w-full border-none shadow-none">
            <CardContent className="flex items-start gap-8 p-0">
              <div className="flex items-center gap-8">
                <img className="w-8 h-8" alt="Star" src="/star.svg" />
                <Separator className="w-20 h-px" />
              </div>

              <div className="flex flex-col items-start gap-4 flex-1">
                <h3 className="self-stretch mt-[-1.00px] [font-style:var(--desktop-header-3-font-style)] text-dark text-[length:var(--desktop-header-3-font-size)] tracking-[var(--desktop-header-3-letter-spacing)] leading-[var(--desktop-header-3-line-height)] font-desktop-header-3 font-[number:var(--desktop-header-3-font-weight)]">
                  {service.title}
                </h3>

                <p className="self-stretch text-[#171717cc] text-[length:var(--desktop-paragraph-1-font-size)] tracking-[var(--desktop-paragraph-1-letter-spacing)] leading-[var(--desktop-paragraph-1-line-height)] font-desktop-paragraph-1 font-[number:var(--desktop-paragraph-1-font-weight)] [font-style:var(--desktop-paragraph-1-font-style)]">
                  {service.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
