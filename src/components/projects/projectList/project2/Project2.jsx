import "./project2.scss";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView, useScroll, useTransform } from "framer-motion";


const TinVariant = {
    hidden : {
        opacity: 0,
        y: "70vh"
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            delay: 0.5
        }
    }
}

function Project2() {

    return (
        <motion.div className="project2 shadow-sm p-3 mb-5 bg-body rounded"
            variants={TinVariant}
            initial="hidden"
            animate="visible"
        >
            <a href="https://97clinton.github.io/Tindog-App/" className="slider-2"><img src="./tindog.png" alt="" /></a>
            
            <div className="content slider-2">
                <a href="https://97clinton.github.io/Tindog-App/"><h3>TINDOG </h3></a>
                <p>This is website for dog lovers and dog feeds. FrontEnd only, HTML / CSS. </p>
                <div className="stack">
                    <ul>
                        <li class="shadow-sm p-1 mb-1 rounded">HTML</li> 
                        <li class="shadow-sm p-1 mb-1 rounded">CSS</li>
                    </ul>
                </div>
                <div className="links">
                    <a href="https://github.com/97Clinton/Tindog-App">Code <i class="fa-brands fa-square-github fa-beat"></i></a>
                    <a href="https://97clinton.github.io/Tindog-App/">Live Demo <i class="fa-regular fa-globe fa-beat"></i></a>
                </div>
            </div>
        </motion.div>
    )
};

export default Project2;