import HeroImage from "@/components/HeroImage";
import ContactForm from "@/components/contact/ContactForm";
import React from "react";

type Props = {};

export default function contact(prop: Props) {
  return (
    <div>
      <HeroImage title="Contact Us" />
      <ContactForm />
    </div>
  );
}
