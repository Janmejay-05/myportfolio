import img1 from "../../assets/images/pro1.png";
import img2 from "../../assets/images/pro2.png";
import img3 from "../../assets/images/website-img-3.jpg";
import img4 from "../../assets/images/website-img-4.jpg";
import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Admin pannel",
    year: "Dec 2024",
    align: "right",
    image: `${img1}`,
    link: "https://javascript-final-project-two.vercel.app/",
  },
  {
    name: "Day/Night Mode App",
    year: "Jan2022",
    align: "left",
    image: `${img2}`,
    link: "https://bankingapp-liart.vercel.app/",
  },
  {
    name: "Tourzania",
    year: "Jan2023",
    align: "right",
    image: `${img3}`,
    link: "#",
  },
  {
    name: "Bank of Luck",
    year: "May2024",
    align: "left",
    image: `${img4}`,
    link: "#",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
