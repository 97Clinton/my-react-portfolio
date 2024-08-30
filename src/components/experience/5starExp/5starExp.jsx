import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView, useScroll, useTransform } from "framer-motion";
import './5starExp.scss';

const starVariants = {
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


function StarExp() {

    // const containerRef = useRef(null);

    // const { scrollYProgress } = useScroll({
    //     target: containerRef,
    //     offset: ["start end", "end end"],
    // });

    // const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
    // const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1.5]);

    
    // const isInView = useInView(containerRef, {once: true});
    // const mainControls = useAnimation();

    // useEffect(() => {
    //     if (isInView) {
    //         mainControls.start("visible");
    //     }
    // }, [isInView]);

    return (
        <motion.div className="starExp"
            // ref={containerRef}
            // style={{
            //     scale: scaleProgress,
            //     opacity: opacityProgress,
            // }}

            variants={starVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="top">
                <h2>5star Company</h2>
            </div>
            <div className="role">
                <p>May, 2024 till date</p>
                <h5><span>Role:</span> Frontend developer</h5>
            </div>
        </motion.div>
    );
};

export default StarExp;