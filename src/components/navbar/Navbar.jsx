import "./navbar.scss";
import { motion } from "framer-motion";
import Menubar from "./menubar/MenuBar";

const NavBar = () => {
  return (
    <div className="navbar">
      <Menubar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          MinGyu Dev
        </motion.span>
        <div className="social">
          <a href="#">
            <img src="/linkedin.png"></img>{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
