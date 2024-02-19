import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};


const Links = () =>{

const links = ["Homepage", "Portfolio", "Contact", "About"];


    return(
        <div className="links"> {links.map((link) => (
            <a href= {`#${link}`} key={link}>
                {link}
            </a>
            ))} </div>
    )
}

export default Links