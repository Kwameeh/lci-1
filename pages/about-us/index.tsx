import Card from "@/components/Card";
import HeroImage from "@/components/HeroImage";
import Posts from "@/components/Posts";
import Separator from "@/components/Separator";
import TeamCards from "@/components/TeamCards";
import Ministries from "@/components/ministries/Ministries";
import React from "react";

type Props = {};

export default function index({}: Props) {
  return (
    <div>
      <HeroImage title="About Us" />
      <Separator />
      <Posts title="Our story" />
      <Card />
      <Separator />
      <TeamCards />
      <Posts title="Our story" />
      <Separator />
      <Ministries />
    </div>
  );
}
