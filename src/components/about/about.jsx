import "./about.scss";
import BackendImg from './Backend.png';
import FrontendImg from './Frontend.png';
import OtherImg from './Other.png';
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";

import DjangoImg from '../../../public/django.png';

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
  const backend = [
    {name: "Django"},
    {name: "FastAPI"},
    {name: "MySQL"},
    {name: "Postgresql"},
  ];
  return <></>; 
};

const Skills = () => {
    const skills = [
        { name: "Backend", img: BackendImg },
        { name: "Frontend", img: FrontendImg },
        { name: "Other", img: OtherImg },
      ];
      return (
        <div className="stackContainer">
          {skills.map((skill, index) => (
            <div key={index} className="stackCard">
                <div className="title">
                    <img src={skill.img} alt={skill.name} />
                    <h2>{skill.name}</h2>
                </div>
            </div>
          ))}
        </div>
      );
};

const slidTextVariants = {
  initial:{
      x: 2000,
  },
  animate: {
      x: "-220%" ,
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
  transition:{
    duration: 0.5,
    delay: 1,
    ease: [0, 0.71, 0.2, 1.01]
  }
};

export default About;
