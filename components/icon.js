import React from "react";

// import the icons for rock, paper, scissors, lizard and spock from Font-Awesome
import {
  FaHandRock,
  FaHandPaper,
  FaHandScissors,
  FaHandLizard,
  FaHandSpock,
} from "react-icons/fa";

// Icon component returns the icon for the given value
const Icon = ({ choice }) => {
  switch (choice) {
    case "Rock":
      return <FaHandRock />;
    case "Paper":
      return <FaHandPaper />;
    case "Scissors":
      return <FaHandScissors />;
    case "Lizard":
      return <FaHandLizard />;
    case "Spock":
      return <FaHandSpock />;
    default:
      return null;
  }
};

export default Icon;
