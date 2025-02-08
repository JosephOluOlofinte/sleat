
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Fragment } from "react/jsx-runtime"
import About from "./About"
import Achievements from "./Achievements"
import OurGoals from "./OurGoals"
import Together from "./Together"
import { Helmet } from "react-helmet-async"

const AboutComp = () => {

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace("#", "");
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // Delay to ensure sections are rendered
    }
  }, [location]);

  return (
    <Fragment>
      <Helmet>
        <title>All you need to know about Sleat. The unified LMS platform | Sleat </title>
        <meta name="description" content="Everything there is to know about Sleat: our people, mission, vision, core values, and processes." />
      </Helmet>
      <About id="company" />
      <Achievements id="achievements" />
      <OurGoals id="goals" />
      <Together />
    </Fragment>
  )
}

export default AboutComp