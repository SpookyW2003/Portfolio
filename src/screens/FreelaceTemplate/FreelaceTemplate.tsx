import React from "react";
import { Button } from "../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";
import { Separator } from "../../components/ui/separator";
import { AboutMeSection } from "./sections/AboutMeSection";
import { ContactFooterSection } from "./sections/ContactFooterSection";
import { HeroBannerSection } from "./sections/HeroBannerSection";
import { PortfolioProjectsSection } from "./sections/PortfolioProjectsSection/PortfolioProjectsSection";
import { ServicesOfferSection } from "./sections/ServicesOfferSection";

export const FreelaceTemplate = (): JSX.Element => {
  const navItems = [
    { label: "ABOUT ME", href: "#about" },
    { label: "PORTFOLIO", href: "#portfolio" },
    { label: "SKILLS", href: "#skills" },
    { label: "SERVICES", href: "#services" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <div className="bg-[#fefaee] flex flex-col items-center w-full">
      <div className="bg-light overflow-hidden w-full max-w-[1440px] relative">
        {/* Navigation Bar */}
        <header className="flex w-full items-center justify-between px-14 py-4 absolute top-0 left-0 z-10 rounded-[40px] backdrop-blur-[25px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(25px)_brightness(100%)]">
          <div className="flex items-center justify-center h-6">
            <span className="font-['Montserrat',Helvetica] font-semibold text-light text-sm">
              DEBADASHAN PARIDA
            </span>
          </div>

          <NavigationMenu>
            <NavigationMenuList className="flex gap-10">
              {navItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink
                    href={item.href}
                    className="font-desktop-button-text font-[number:var(--desktop-button-text-font-weight)] text-[#fdfaee99] text-[length:var(--desktop-button-text-font-size)] tracking-[var(--desktop-button-text-letter-spacing)] leading-[var(--desktop-button-text-line-height)] [font-style:var(--desktop-button-text-font-style)]"
                  >
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <Button className="px-6 py-3 bg-light text-dark rounded-[40px] font-desktop-button-text font-[number:var(--desktop-button-text-font-weight)] text-[length:var(--desktop-button-text-font-size)] tracking-[var(--desktop-button-text-letter-spacing)] leading-[var(--desktop-button-text-line-height)] [font-style:var(--desktop-button-text-font-style)]">
            GET IN TOUCH
          </Button>
        </header>

        {/* Main Content Sections */}
        <HeroBannerSection />
        <AboutMeSection />
        <Separator className="mx-14 my-0" />
        <PortfolioProjectsSection />
        <Separator className="mx-14 my-0" />
        <ServicesOfferSection />
        <ContactFooterSection />
      </div>
    </div>
  );
};
