import React, { useContext } from "react";
import "./Works.css";
import Mongo from "../../img/mongodb.png";
import Moralis from "../../img/moralis.png";
import Sql from "../../img/sql.jpg";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            My Domains 
          </span>
          <span>MY Working Environment</span>
          <spane>
            As a webdeveloper for backend purupose i store my db's in SQL Server &
            <br />
            MongoDB Cloud , Moralis server
            <br />
             used to save db fields and to retrive it on API
            <br />
            
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Mongo} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Sql} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Moralis} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Mongo} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Mongo} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
