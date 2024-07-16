import "./project3.scss";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView, useScroll, useTransform } from "framer-motion";

function Project3() {

    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"],
    });

    const projectImgValue = useTransform(
        scrollYProgress,
        [0, 1],
        ["-100%", "0%"],
    )
    const projectTextValue = useTransform(
        scrollYProgress,
        [0, 1],
        ["100%", "0%"]
    )

    
    const isInView = useInView(containerRef, {once: true});
    const mainControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView]);


    return (
        <motion.div className="project3"
            ref={containerRef}
        >
            <motion.a 
                style={{translateX: projectImgValue}}
                href="https://clinestate.vercel.app/" className="slider-3"><img src="./clinestate.png" alt="" />

            </motion.a>

            <motion.div className="content slider-3"
                style={{translateX: projectTextValue}}
            >
                <a href="https://clinestate.vercel.app/"><h3>CLINESTATE</h3></a>
                <p>A real estate website made with REACT.JS framework, has different functionalities such as a Map direction, saved list, pages of different apartments of choice, filter and lots more. </p>
                <div className="links">
                    <a href="https://github.com/97Clinton/Real-Estate-ReactApp">Code <i class="fa-brands fa-square-github fa-beat"></i></a>
                    <a href="https://clinestate.vercel.app/">Live Demo <i class="fa-regular fa-globe fa-beat"></i></a>
                </div>
            </motion.div>
            
        </motion.div>
    )
};

export default Project3;