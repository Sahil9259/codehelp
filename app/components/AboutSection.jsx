"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import Link from "next/link";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="flex ">
        <li>
          <span className="font-bold pb-2">Web Developer</span> 
        <ul className="list-disc ml-8">
          <li>React</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>MongoDB</li>
          <li>JavaScript</li>
          <li>Next.js</li>
        </ul>
        </li>
        <li className="ml-9">
        <span className=" font-bold">Programming Language </span> 
        <ul className="list-disc pl-2 ml-8">
          <li>C++</li>
          <li>C</li>
          <li>Python</li>
        </ul>
        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="">
        <li>
          <b>Harcourt Butler Technical University</b>, Kanpur, UP
            <ul className="list-disc pl-5 ml-4 pb-2">
              <li>B.Tech. in Computer Science and Engineering</li>
              <li>CGPA: 7.86</li>
            </ul>
        </li>
        <li>
          <b>Babu Lal Jain Inter College</b>, Aligarh, UP
            <ul className="list-disc pl-5 ml-4 pb-2">
              <li>Intermediate in PCM, UP Board</li>
              <li>Percentage: 76.80%</li>
            </ul>
        </li>
        <li>
          <b>Babu Lal Jain Inter College</b>, Aligarh, UP
            <ul className="list-disc pl-5 ml-4 pb-2">
              <li>High School, UP Board</li>
              <li>Percentage: 78.67%</li>
            </ul>
        </li>
      </ul>
    ),
  },
  {
    title: "Coding Profile",
    id: "codingprofiles",
    content: (
      <ul className="list-disc pl-2">
        <Link href="https://codeforces.com/profile/Sahil9259" target="_blank"><li>Codeforces</li></Link>
        <Link href="https://leetcode.com/sahil9259/" target="_blank"><li>LeetCode</li></Link>
        <Link href="https://www.codechef.com/users/alonewarrior07" target="_blank"><li>Codechef</li></Link>
        <Link href="https://auth.geeksforgeeks.org/user/sahil9259" target="_blank"><li>GeekforGeeks</li></Link>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("education");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-7 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          alt="about image"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for
            creating interactive and responsive web applications. I have
            experience working with JavaScript, React, Redux, Node.js, Express,
            MongoDB, Next.js, HTML, CSS, and Git. I am a quick learner and
            I am always looking to expand my knowledge and skill set. I am a
            team player and I am excited to work with others to create amazing
            applications.
          </p>
          <div className="flex flex-row text-lg justify-start mt-4">
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("codingprofiles")}
              active={tab === "codingprofiles"}
            >
              {" "}
              Coding Profiles{" "}
            </TabButton>
          </div> 
          <div className="mt-2">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
