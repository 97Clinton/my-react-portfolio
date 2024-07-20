import "./project5.scss";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView, useScroll, useTransform } from "framer-motion";

function Project5() {

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
        <motion.div className="project4 shadow p-3 mb-5 bg-body rounded"
            ref={containerRef}
        >
            <motion.a 
                style={{translateX: projectImgValue}}
                href="https://github.com/97Clinton/To-Do-list-App/tree/master" className="slider-5"><img src="./todo.png" alt="" />

            </motion.a>

            <motion.div className="content slider-4"
                style={{translateX: projectTextValue}}
            >
                <a href="https://github.com/97Clinton/To-Do-list-App/tree/master"><h3>To-Do LIST</h3></a>
                <p>A to-do list website made with REACT.JS, Node.js. It can take in inputs, saves temporarily. </p>
                <div className="links">
                    <a href="https://github.com/97Clinton/To-Do-list-App/tree/master">Code <i class="fa-brands fa-square-github fa-beat"></i></a>
                    <a href="/">Live Demo <i class="fa-regular fa-globe fa-beat"></i></a>
                </div>
            </motion.div>
            
        </motion.div>
    )
};

export default Project5;