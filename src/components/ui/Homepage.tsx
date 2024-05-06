import React from 'react';
import { NavbarDemo } from '../Navbar';
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
const projectItems = [
  {
    title: "Leetcode Coach",
    description: "SFHacks'24 Project - A platform that lets students practice their DSA skills verbally. Built with React, Next.js, GCP, Kubernates, and OpenAI's Whisper model",
  },
  {
    title: "CruzMaps",
    description: "A more modernized redesign of UCSC's map using MapBox GL JS. Built with React, Next.js, TailwindCSS, and Typescript",
  },
  {
    title: "Knits",
    description: "Social Media app made for CS157 : Intro to Database Management Systems. Built with React Native, Springboot, and MySQL",
  },
  {
    title: "Purrfect Match",
    description: "CalHacks Hack for Impact Project - A tinder-like app for matching cat lovers to homeless cats. Built with Flutter, and Firebase",
  },
  {
    title: "SJSU Parking",
    description: "Mobile app redeisgn for SJSU's parking system. Built with React Native, and Express/Node.js",
  },
  {
    title: "Selfcare.io",
    description: "App to help users identify their skin issues using an SVM. Built with React, Flask, and scikit-learn",
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
            <TypewriterEffect words={[{ text: "Daniel_Ung" }]} />
            <p>_</p>
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
        <StickyScroll content={projectItems} />
      </div>
    </div>
  );
};
