import React from "react";
import { Button } from "@material-ui/core";
import { NavHashLink as NavLink } from "react-router-hash-link";
import { makeStyles } from "@material-ui/core/styles";
import { socialsData } from "../../data/socialData";
import "./Landing.css";

import { headerData } from "../../data/headerData";

import { pinkThemeDark } from "../../theme/theme.js";
import { FaLinkedin, FaGithub } from "react-icons/fa";
const useStyles = makeStyles((t) => ({
  resumeBtn: {
    color: pinkThemeDark.primary,
    borderRadius: "30px",
    textTransform: "inherit",
    textDecoration: "none",
    width: "150px",
    fontSize: "1rem",
    fontWeight: "500",
    height: "50px",
    fontFamily: "var(--primaryFont)",
    border: `3px solid ${pinkThemeDark.primary}`,
    transition: "100ms ease-out",
    "&:hover": {
      backgroundColor: pinkThemeDark.tertiary,
      color: pinkThemeDark.secondary,
      border: `3px solid ${pinkThemeDark.tertiary}`,
    },
    [t.breakpoints.down("sm")]: {
      width: "180px",
    },
  },
  contactBtn: {
    backgroundColor: pinkThemeDark.primary,
    color: pinkThemeDark.secondary,
    borderRadius: "30px",
    textTransform: "inherit",
    textDecoration: "none",
    width: "150px",
    height: "50px",
    fontSize: "1rem",
    fontWeight: "500",
    fontFamily: "var(--primaryFont)",
    border: `3px solid ${pinkThemeDark.primary}`,
    transition: "100ms ease-out",
    "&:hover": {
      backgroundColor: pinkThemeDark.secondary,
      color: pinkThemeDark.tertiary,
      border: `3px solid ${pinkThemeDark.tertiary}`,
    },
    [t.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));
function Landing() {
  const classes = useStyles();

  return (
    <div className="landing">
      <div className="landing--container">
        <div
          className="landing--container-left"
          style={{ backgroundColor: pinkThemeDark.primary }}
        >
          <div className="lcl--content">
            <a href={socialsData.linkedIn} target="_blank" rel="noreferrer">
              <FaLinkedin
                className="landing--social"
                style={{ color: pinkThemeDark.secondary }}
                aria-label="LinkedIn"
              />
            </a>

            <a href={socialsData.github} target="_blank" rel="noreferrer">
              <FaGithub
                className="landing--social"
                style={{ color: pinkThemeDark.secondary }}
                aria-label="GitHub"
              />
            </a>
          </div>
        </div>
        <img
          src="https://avatars.githubusercontent.com/u/65354235?v=4"
          alt="Profile pic"
          className="landing--img"
          style={{
            borderColor: pinkThemeDark.secondary,
          }}
        />
        <div
          className="landing--container-right"
          style={{ backgroundColor: pinkThemeDark.secondary }}
        >
          <div
            className="lcr--content"
            style={{ color: pinkThemeDark.tertiary }}
          >
            <h6>{headerData.title}</h6>
            <h1>{headerData.name}</h1>
            <p>{headerData.desciption}</p>

            <div className="lcr-buttonContainer">
              {headerData.resumePdf && (
                <a
                  href={headerData.resumePdf}
                  download="resume"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button className={classes.resumeBtn}>Download CV</Button>
                </a>
              )}
              <NavLink to="/#contacts" smooth={true} spy="true" duration={2000}>
                <Button className={classes.contactBtn}>Contact</Button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
