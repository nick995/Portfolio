import React from "react";
import "./Introduce.scss"
import { motion } from "framer-motion";

const textVariants = {
    initial:{
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition:{
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};

const imageVariants = {
    initial:{
        x: 500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition:{
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};

const techStackVariants = {
    whileHover:{
        opacity: 1, scale: 2, rotate: 360,
    }
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


const Introduce = () => {
    return (
      <div className="intro">
        <div className="wrapper">
          <motion.div
            className="textContainer"
            variants={textVariants}
            initial="initial"
            animate="animate"
          >
            <h1>Back-End & Cloud Developer </h1>
            <p>
              Hi I'm Min-Gyu Jung. A passionate Back-End & Cloud Developer based
              in SLC, UT.
            </p>

            <div className="techStack">
              Tech Stack
              <img src="/tech-stack.png"></img>
              <motion.img
                variants={techStackVariants}
                whileHover="whileHover"
                src={"django.png"}
                key={"django.png"}
              />
              <motion.img
                src={"react.png"}
                key={"react.png"}
                variants={techStackVariants}
                whileHover="whileHover"
              ></motion.img>
              <motion.img
                src={"psql.png"}
                key={"psql.png"}
                variants={techStackVariants}
                whileHover="whileHover"
              ></motion.img>
              <motion.img
                src={"aws.png"}
                key={"aws.png"}
                variants={techStackVariants}
                whileHover="whileHover"
              ></motion.img>
              <motion.img
                src={"python.png"}
                key={"python.png"}
                variants={techStackVariants}
                whileHover="whileHover"
              ></motion.img>
            </div>
          </motion.div>

          <motion.div
            className="imageContainer"
            variants={imageVariants}
            initial="initial"
            animate="animate"
          >
            <img src="/me.jpg"></img>
          </motion.div>

        <motion.div className="slidingTextContainer" variants= {slidTextVariants} initial= "initial" animate = "animate"> 
            안녕하세요
        </motion.div>

        </div>
      </div>
    );
}

export default Introduce