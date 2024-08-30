import React from "react";
import "./projectSinglePage.scss";
import Navbar from "../../navbar/Navbar";
import { motion } from "framer-motion";
import Project2 from "../projectList/project2/Project2";
import Project4 from "../projectList/project4/Project4";
import Project5 from "../projectList/project5/Project5";


const headerVariants = {
    hidden : {
        opacity: 0,
        y: "50vh"
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,

        }
    }
}

function ProjectSinglePage() {

    const projArray = [<Project2 />, <Project4 />, <Project5 />]

    return(
        <div className="projectSinglePage">
            <Navbar />

            <div className="bigContainer">
                <motion.div className="top"
                    variants={headerVariants}
                    initial= "hidden"
                    animate= "visible"
                >
                    <h2>PROJECTS</h2>
                </motion.div>

                <div className="containers">
                    {projArray.map((proj) => 
                        <div class="container shadow p-3 mb-5 bg-body rounded">
                            {proj}
                        </div>
                     )}
                    
                </div>
            </div>
        </div>
    )
}

export default ProjectSinglePage;