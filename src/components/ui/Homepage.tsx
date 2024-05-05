import React from 'react';
import { NavbarDemo } from '../Navbar';
import { MaskContainer } from './MaskContainer';
import { Vortex } from './Vortex';
import { TypewriterEffect } from './Typewriter';
import { ContainerScroll } from './container-scroll-animation';
import { HoverEffect } from './card-hover-effect';
import { StickyScroll } from './sticky-scroll-reveal';

const cardItems = [
  {
    title: "Incoming intern @ Barclays!",
    description: "Technology Developer Role ",
    link: "https://home.barclays/"
  },
  {
    title: "Founding Engineer @ Stealth",
    description: "Currently building a language-learning startup",
    link: "#"
  },
  {
    title: "Undergraduate Researcher @SJSU",
    description: "Applications of Deep Learning in Bioinformatics",
    link: ""
  },
  {
    title: "Hackathon Team @SJSU",
    description: "Social Media Person",
    link: "https://www.acmsjsu.org"
  },
  {
    title: "Lead Developer + Treasurer @ ML@SJSU ",
    description: "Working on mostly computer vision and natural language processing projects",
    link: "https://www.mlatsjsu.com"
  },
  {
    title: "Machine Learning Engineer Intern @ JagaurDB",
    description: "Mostly worked on applications of ML models with JaguarDB's database. Made contributions to Langchain repo",
    link: "#"
  }
];



export function Homepage() {
  return (
    <div className="pt-2 pb-10">
      <NavbarDemo />
      <div className="relative">
        {/* Background gradient covering the whole area */}
        <Vortex>
          <div className="text-center mt-20 md:mt-32 z-10 relative">
            <TypewriterEffect words={[{ text: "Daniel Ung" }]} /> 
            <h2 className="text-3xl text-white">Computer Science at San Jose State University</h2>
          </div>
        </Vortex>
        <ContainerScroll titleComponent={"About Me"}>
          {/* Ensure the iPad or any component inside doesn't inherit the background */}
          <div className="bg-white dark:bg-black"> {/* Use the appropriate color or styles here */}
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              About Me!
            </h1>
          <HoverEffect items={cardItems} className="w-full" />
          </div>
        </ContainerScroll>
        <StickyScroll content={cardItems} />
      </div>
    </div>
  );
};
