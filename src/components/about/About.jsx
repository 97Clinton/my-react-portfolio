import "./about.scss";
import { motion, useScroll } from "framer-motion";

const motionContainerVariants = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.25,
        },
    },
}

const motionChildrenVariants = {
    hidden: {opacity:0, y: 100}, 
    show: {opacity: 1, y: 0},
};

function About() {

    const {scrollYProgress: completionProgress} = useScroll();

    return (
        <section id="about">
            
            <div className="stack">
                <p>Tech Stack</p>
                <motion.div 
                    variants={motionContainerVariants} 
                    initial="hidden"
                    // animate="show" animates immediately after loading
                    whileInView="show" //animates while in view
                    // viewport={{ //animates once after one in-view
                    //     once: true,
                    // }} 
                    className="logos">

                <motion.i 
                    variants={motionChildrenVariants}
                    class="fa-brands fa-html5 fa-bounce" style={{color: "orangered"}}></motion.i>
                <motion.i 
                    variants={motionChildrenVariants}
                    class="fa-brands fa-css3 fa-bounce" style={{color: "#147efb"}}></motion.i>
                <motion.i 
                    variants={motionChildrenVariants}
                    class="fa-brands fa-bootstrap fa-bounce" style={{color: "#147efb"}}></motion.i>
                <motion.i 
                    variants={motionChildrenVariants}
                    class="fa-brands fa-js fa-bounce" style={{color: "rgba(240, 219, 79)"}}></motion.i>
                <motion.i 
                    variants={motionChildrenVariants}
                    class="fa-brands fa-react fa-bounce" style={{color: "rgb(40, 165, 206)"}} ></motion.i>
                <motion.i 
                    variants={motionChildrenVariants}
                    class="fa-brands fa-sass fa-bounce" style={{color: "rgb(255, 99, 125)"}} ></motion.i>
                <motion.i 
                    variants={motionChildrenVariants}
                    class="fa-brands fa-git-alt fa-bounce" style={{color: "#fd3917"}}></motion.i>
                <motion.i 
                    variants={motionChildrenVariants}
                    class="fa-brands fa-node fa-bounce" style={{color: "#3c873a"}}></motion.i>
            </motion.div>
        </div>
            <div className="about-me">
                <div 
                    className="coding-img">
                    <motion.img src="./coding.jpg" alt="" className="image"
                        animate={{
                        scale: [1, 1.2, 1.2, 1],
                        rotate: [0, 90, 90, 0],
                        borderRadius: ["10%", "50%", "50%", "10%" ],
                        }}
                        transition={{ duration: 5, ease: "easeInOut", repeat: Infinity, repeatDelay:3}}
                        style={{width: "250px", height: "250px"}}
                    />
                </div>

                <div className="content">
                    <h3>ABOUT ME</h3>
                    <h4>Front-end Developer based in Nigeria.</h4>
                    <p>My name is Atayero Clinto, and I`m a graduate, also a Front-end developer for over 2years with proficiency at converting designs to a responsive web development that suits the purpose. </p>
                    <p>Most importantly, I`ve had the experience of being a Team Leader in creating a Fullstack web project.</p>
                </div>
            </div>
            
        </section>
    )
}

export default About;