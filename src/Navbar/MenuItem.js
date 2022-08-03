import * as React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];
// const list = ['Home', 'Portfolio', 'About', 'Contact'];
const list = [
  { tab: 'Home', link: 'home' },
  { tab: 'Portfolio', link: 'whole-section' },
  { tab: 'About', link: 'about-me' },
  { tab: 'Contacts', link: 'footer-bg' },
];
export const MenuItem = ({ i }) => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        to={list[i].link}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <p className="tabs" >{list[i].tab}</p>
      </Link>
    </motion.li>
  );
};
