import "./project2.scss";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView, useScroll, useTransform } from "framer-motion";


function Project2() {

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
        <motion.div className="project2"
            ref={containerRef}
        >
            <motion.a 
                style={{translateX: projectImgValue}}
                href="https://97clinton.github.io/Tindog-App/" className="slider-2"
            ><img src="./tindog.png" alt="" /></motion.a>
            
            <motion.div className="content slider-2"
                style={{translateX: projectTextValue}}
            >
                <a href="https://97clinton.github.io/Tindog-App/"><h3>TINDOG </h3></a>
                <p>This is website for dog lovers and dog feeds. FrontEnd only, HTML / CSS. </p>
                <div className="links">
                    <a href="https://github.com/97Clinton/Tindog-App">Code <i class="fa-brands fa-square-github fa-beat"></i></a>
                    <a href="https://97clinton.github.io/Tindog-App/">Live Demo <i class="fa-regular fa-globe fa-beat"></i></a>
                </div>
            </motion.div>
        </motion.div>
    )
};

export default Project2;