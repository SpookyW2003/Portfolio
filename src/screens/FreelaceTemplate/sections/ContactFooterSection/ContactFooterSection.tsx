import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Checkbox } from "../../../../components/ui/checkbox";
import { Input } from "../../../../components/ui/input";
import { Separator } from "../../../../components/ui/separator";
import { Textarea } from "../../../../components/ui/textarea";

export const ContactFooterSection = (): JSX.Element => {
  // Contact information data
  const contactInfo = [
    {
      title: "Location",
      details: "Bhubanswar, Odisha, India",
    },
    {
      title: "Phone:",
      details: "+919937130721",
    },
    {
      title: "Email",
      details: "debadarshanparida59@gmail.com",
    },
  ];

  // Service options data
  const serviceOptions = [
    { id: "Web-Dev", label: "Full-stack Developer" },
    { id: "App-Dev", label: "Flutter Developer" },
    {
      id: "AI/ML",
      label: "Machine Learing using python Streamlit-based web application",
    },
    { id: "Cloud Computing", label: "AWS,Azure,Devops", checked: true },
  ];

  // Function to handle button click
  const handleSubmitClick = () => {
    window.location.href = "https://yourwebsite.com/success"; // ✅ Redirects to target page
  };

  return (
    <section className="w-full bg-dark text-light py-24 px-14">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-10 md:gap-[342px]">
          {/* Left column - Contact information */}
          <div className="flex flex-col w-full md:w-[432px] gap-9">
            <div className="flex flex-col gap-4">
              <h2 className="font-desktop-headline-2 font-[number:var(--desktop-headline-2-font-weight)] text-[length:var(--desktop-headline-2-font-size)] tracking-[var(--desktop-headline-2-letter-spacing)] leading-[var(--desktop-headline-2-line-height)]">
                CONTACT
              </h2>
              <p className="font-desktop-paragraph-1 font-[number:var(--desktop-paragraph-1-font-weight)] text-[length:var(--desktop-paragraph-1-font-size)] tracking-[var(--desktop-paragraph-1-letter-spacing)] leading-[var(--desktop-paragraph-1-line-height)]">
                Ready to elevate your digital experience?I&#39;m here to bring
                your creative visions to life. Feel free to reach out
              </p>
            </div>

            <Separator className="bg-[#fefaee3d]" />

            <div className="flex justify-between">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <h3 className="font-desktop-bold-text font-[number:var(--desktop-bold-text-font-weight)] text-[length:var(--desktop-bold-text-font-size)] tracking-[var(--desktop-bold-text-letter-spacing)] leading-[var(--desktop-bold-text-line-height)]">
                    {info.title}
                  </h3>
                  <p className="w-[161px] text-[#fefaeecc] font-desktop-paragraph-2 font-[number:var(--desktop-paragraph-2-font-weight)] text-[length:var(--desktop-paragraph-2-font-size)] tracking-[var(--desktop-paragraph-2-letter-spacing)] leading-[var(--desktop-paragraph-2-line-height)]">
                    {info.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - Contact form */}
          <Card className="bg-transparent border-none w-full md:w-[554px]">
            <CardContent className="p-0 space-y-10">
              <div className="flex flex-wrap gap-[16px_6px]">
                {/* Name fields */}
                <div className="flex flex-col gap-4 w-full md:w-[274px]">
                  <label className="font-desktop-bold-text font-[number:var(--desktop-bold-text-font-weight)] text-[length:var(--desktop-bold-text-font-size)] tracking-[var(--desktop-bold-text-letter-spacing)] leading-[var(--desktop-bold-text-line-height)]">
                    First Name
                  </label>
                  <Input
                    placeholder="Your First Name"
                    className="rounded-3xl border-[#fefaee3d] bg-transparent px-6 py-3 h-auto text-[#fefaee99] font-desktop-small-text font-[number:var(--desktop-small-text-font-weight)] text-[length:var(--desktop-small-text-font-size)] tracking-[var(--desktop-small-text-letter-spacing)] leading-[var(--desktop-small-text-line-height)]"
                  />
                </div>

                <div className="flex flex-col gap-4 w-full md:w-[274px]">
                  <label className="font-desktop-bold-text font-[number:var(--desktop-bold-text-font-weight)] text-[length:var(--desktop-bold-text-font-size)] tracking-[var(--desktop-bold-text-letter-spacing)] leading-[var(--desktop-bold-text-line-height)]">
                    Last Name
                  </label>
                  <Input
                    placeholder="Your Last Name"
                    className="rounded-3xl border-[#fefaee3d] bg-transparent px-6 py-3 h-auto text-[#fefaee99] font-desktop-small-text font-[number:var(--desktop-small-text-font-weight)] text-[length:var(--desktop-small-text-font-size)] tracking-[var(--desktop-small-text-letter-spacing)] leading-[var(--desktop-small-text-line-height)]"
                  />
                </div>

                {/* Email field */}
                <div className="flex flex-col gap-4 w-full">
                  <label className="font-desktop-bold-text font-[number:var(--desktop-bold-text-font-weight)] text-[length:var(--desktop-bold-text-font-size)] tracking-[var(--desktop-bold-text-letter-spacing)] leading-[var(--desktop-bold-text-line-height)]">
                    Email Address
                  </label>
                  <Input
                    placeholder="Email Address"
                    className="rounded-3xl border-[#fefaee3d] bg-transparent px-6 py-3 h-auto text-[#fefaee99] font-desktop-small-text font-[number:var(--desktop-small-text-font-weight)] text-[length:var(--desktop-small-text-font-size)] tracking-[var(--desktop-small-text-letter-spacing)] leading-[var(--desktop-small-text-line-height)]"
                  />
                </div>

                {/* Service selection */}
                <div className="flex flex-col gap-6 w-full">
                  <label className="font-desktop-bold-text font-[number:var(--desktop-bold-text-font-weight)] text-[length:var(--desktop-bold-text-font-size)] tracking-[var(--desktop-bold-text-letter-spacing)] leading-[var(--desktop-bold-text-line-height)]">
                    Select Service
                  </label>
                  <div className="flex flex-wrap gap-[63px]">
                    <div className="flex flex-col gap-4">
                      {serviceOptions.slice(0, 2).map((service) => (
                        <div
                          key={service.id}
                          className="flex items-center gap-4"
                        >
                          <Checkbox
                            id={service.id}
                            className="w-4 h-4 rounded-lg bg-light border-[#fefaee3d]"
                          />
                          <label
                            htmlFor={service.id}
                            className="font-desktop-small-text font-[number:var(--desktop-small-text-font-weight)] text-[#fefaee99] text-[length:var(--desktop-small-text-font-size)] tracking-[var(--desktop-small-text-letter-spacing)] leading-[var(--desktop-small-text-line-height)]"
                          >
                            {service.label}
                          </label>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col gap-4">
                      {serviceOptions.slice(2, 4).map((service) => (
                        <div
                          key={service.id}
                          className="flex items-center gap-4"
                        >
                          <Checkbox
                            id={service.id}
                            defaultChecked={service.checked}
                            className={`w-4 h-4 rounded-lg border-[#fefaee3d] ${
                              service.checked ? "bg-color-3" : "bg-light"
                            }`}
                          />
                          <label
                            htmlFor={service.id}
                            className="font-desktop-small-text font-[number:var(--desktop-small-text-font-weight)] text-[#fefaee99] text-[length:var(--desktop-small-text-font-size)] tracking-[var(--desktop-small-text-letter-spacing)] leading-[var(--desktop-small-text-line-height)]"
                          >
                            {service.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Message field */}
                <div className="flex flex-col gap-4 w-full">
                  <label className="font-desktop-bold-text font-[number:var(--desktop-bold-text-font-weight)] text-[length:var(--desktop-bold-text-font-size)] tracking-[var(--desktop-bold-text-letter-spacing)] leading-[var(--desktop-bold-text-line-height)]">
                    Message
                  </label>
                  <Textarea
                    placeholder="Write your message here"
                    className="w-full h-40 rounded-2xl border-[#fefaee3d] bg-transparent px-6 py-3 text-[#fefaee99] font-desktop-small-text font-[number:var(--desktop-small-text-font-weight)] text-[length:var(--desktop-small-text-font-size)] tracking-[var(--desktop-small-text-letter-spacing)] leading-[var(--desktop-small-text-line-height)]"
                  />
                </div>
              </div>

              {/* Submit button and terms */}
              <div className="flex flex-col md:flex-row items-start gap-4">
                <Button
                  className="px-8 py-2.5 rounded-3xl border border-[#fefaee] bg-transparent hover:bg-[#fefaee20] transition-colors"
                  onClick={handleSubmitClick} // ✅ Added click handler
                >
                  <span className="font-button-text font-[number:var(--button-text-font-weight)] text-[length:var(--button-text-font-size)] tracking-[var(--button-text-letter-spacing)] leading-[var(--button-text-line-height)]">
                    SUBMIT
                  </span>
                </Button>
                <p className="md:w-[415px] text-[#fefaee99] font-desktop-small-text font-[number:var(--desktop-small-text-font-weight)] text-[length:var(--desktop-small-text-font-size)] tracking-[var(--desktop-small-text-letter-spacing)] leading-[var(--desktop-small-text-line-height)]">
                  By submitting this form you read and agree to the Terms &amp;
                  Conditions and our privacy policy.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <footer className="mt-10 pt-6 border-t border-[#fefaee29] flex flex-wrap justify-between items-center gap-4">
          <div className="font-semibold text-light text-sm [font-family:'Montserrat',Helvetica]">
            Debadarshan Parida
          </div>

          <div className="text-[#fefaeecc] font-desktop-small-text font-[number:var(--desktop-small-text-font-weight)] text-[length:var(--desktop-small-text-font-size)] tracking-[var(--desktop-small-text-letter-spacing)] leading-[var(--desktop-small-text-line-height)]">
            All rights reserved @debadarshanparidatemplate
          </div>

          <div className="flex gap-[39px]">
            <a
              href="#"
              className="font-medium text-[#fefaeecc] text-sm tracking-[0.28px] underline [font-family:'Montserrat',Helvetica]"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="font-medium text-[#fefaeecc] text-sm tracking-[0.28px] underline [font-family:'Montserrat',Helvetica]"
            >
              Cookie Policy
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
};
