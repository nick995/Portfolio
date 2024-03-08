import "./about.scss";
import BackendImg from "./Backend.png";
import FrontendImg from "./Frontend.png";
import OtherImg from "./Other.png";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";

import DjangoImg from "../../../public/django.png";
import FastAPIImg from "../../../public/FastAPI.png";
import PsqlImg from "../../../public/psql.png";
import MySQL from "../../../public/MySQL.png";
import Python from "../../../public/python.png";
import Postman from "../../../public/Postman.png";


import ReactImg from "../../../public/react.png";
import HTMLImg from "../../../public/HTML5.png";
import TailImg from "../../../public/TailwindCSS.png";
import CSS3Img from "../../../public/CSS3.png";
import JWTImg from "../../../public/JWT.png";

import GitImg from "../../../public/Git.png";
import GitHubImg from "../../../public/GitHub.png";
import AWS from "../../../public/aws.png";
import Java from "../../../public/Java.png";
import CSharp from "../../../public/CSharp.png";
import VSCode from "../../../public/VSCode.png";


// import FastAPIImg from "./"

const About = () => {
  return (
    <div className="about">
      <div className="wrapper">
        <IntroContainer />
        <StackContainer />
      </div>
    </div>
  );
};

const IntroContainer = () => {
  return (
    <div className="introContainer">
      <IntroCard />
    </div>
  );
};

const StackContainer = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("animate"); // Changed from "visible" to "animate" to match the variant key
    } else {
      controls.start("initial"); // Optionally reset to initial state when not in view
    }
  }, [controls, inView]);

  return (
    <motion.div
      className="stackPage"
      ref={ref}
      animate={controls}
      initial="initial"
      variants={skillVariants}
    >
      <h2>My Skills</h2>
      <Skills />
    </motion.div>
  );
};

const IntroCard = () => {
  return (
    <div className="introCard">
      {" "}
      An enthusiastic programmer who seeks to learn and constantly improve with
      4+ years of experience in development. I am aiming full stack Developer
      with a passion for building beautiful and user-friendly websites. I have a
      strong understanding of both front-end and back-end development. and I am
      excited to put my skills to use in a professional setting. I am quick
      learner and a team player, and I am confident that I can be avaluable
      asset to any web development team.
    </div>
  );
};

const BackendList = () => {
  const backends = [
    { name: "Django", img: DjangoImg },
    { name: "FastAPI", img: FastAPIImg },
    { name: "Postgresql", img: PsqlImg },
    { name: "MySQL", img: MySQL },
    { name: "Postman", img: Postman},
    { name: "Python", img: Python},
  ];

  return (
    <div>
      {backends.map((backend, index) => (
        <div className="tech">
          <motion.img
            src={backend.img}
            key={backend.img}
            variants={techStackVariants}
            whileHover="whileHover"
          ></motion.img>
          {backend.name}
        </div>
      ))}
    </div>
  );
};

const FrontendList = () => {
  const frontends = [
    { name: "HTML", img: HTMLImg },
    { name: "CSS", img: CSS3Img },
    { name: "React", img: ReactImg },
    { name: "Tailwind CSS", img: TailImg },
    { name: "JWT", img: JWTImg },

  ];

  return (
    <div>
      {frontends.map((frontend, index) => (
        <div className="tech">
          <motion.img
            src={frontend.img}
            key={frontend.name}
            variants={techStackVariants}
            whileHover="whileHover"
          ></motion.img>
          {frontend.name}
        </div>
      ))}
    </div>
  );
};

const OhterList = () => {
  const Others = [
    { name: "Git", img: GitImg },
    { name: "GitHub", img: GitHubImg },
    { name: "AWS", img: AWS },
    { name: "Java", img: Java },
    { name: "C#", img: CSharp },
    { name: "VS Code", img: VSCode },

  ];

  return (
    <div>
      {Others.map((other, index) => (
        <div className="tech">
          <motion.img
            src={other.img}
            key={other.name}
            variants={techStackVariants}
            whileHover="whileHover"
          ></motion.img>
          {other.name}
        </div>
      ))}
    </div>
  );
};



const Skills = () => {
  const skills = [
    { name: "Backend", img: BackendImg, list: <BackendList /> },
    { name: "Frontend", img: FrontendImg, list: <FrontendList/> },
    { name: "Other", img: OtherImg, list: <OhterList/> },
  ];
  return (
    <div className="stackContainer">
      {skills.map((skill, index) => (
        <div key={index} className="stackCard">
          <div className="title">
            <img src={skill.img} alt={skill.name} />
            <h2>{skill.name}</h2>
          </div>
          <div className="techList">{skill.list}</div>
        </div>
      ))}
    </div>
  );
};

const slidTextVariants = {
  initial: {
    x: 2000,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const skillVariants = {
  initial: { opacity: 0, scale: 0.5 },
  animate: { opacity: 1, scale: 1 },
  transition: {
    duration: 0.5,
    delay: 1,
    ease: [0, 0.71, 0.2, 1.01],
  },
};

const techStackVariants = {
  whileHover: {
    opacity: 1,
    scale: 2,
    rotate: 360,
  },
};

export default About;
