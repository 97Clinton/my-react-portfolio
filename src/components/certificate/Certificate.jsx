import Navbar from '../navbar/Navbar';
import './certificate.scss';
import * as React from "react";
import { Timeline } from '@mui/lab';
import { TimelineItem } from '@mui/lab';
import { TimelineSeparator } from '@mui/lab';
import { TimelineConnector } from '@mui/lab';
import { TimelineContent } from '@mui/lab';
import { TimelineDot } from '@mui/lab';
import { TimelineOppositeContent } from '@mui/lab';
import { useRef } from "react";
import { motion, useAnimation, useInView, useScroll, useTransform } from "framer-motion";


const TimeVariants = {
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

export function Cert2() {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"],
    });

    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1.5]);

    return (
        <motion.div className="zuriContainer"
          ref={containerRef}
          style={{
              scale: scaleProgress,
              opacity: opacityProgress,
          }}
        >
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineOppositeContent color="text.secondary">
                <div className="logo shadow p-3 mb-5 bg-body rounded">
                    <img src="/CISCO-IC3.png" alt="" />
                </div>
            </TimelineOppositeContent>
            
          </TimelineItem>
        </motion.div>
    )
}

export function Cert3() {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"],
    });

    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1.5]);

    return (
        <motion.div className="zuriContainer"
          ref={containerRef}
          style={{
              scale: scaleProgress,
              opacity: opacityProgress,
          }}
        >
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
                <div className="logo shadow p-3 mb-5 bg-body rounded">
                    <img src="/Udemy-PM.jpg" alt="" />
                </div>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary"/>
              <TimelineConnector />
            </TimelineSeparator>
          </TimelineItem>
        </motion.div>
    )
}

export function Cert4() {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"],
    });

    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1.5]);

    return (
        <motion.div className="zuriContainer"
          ref={containerRef}
          style={{
              scale: scaleProgress,
              opacity: opacityProgress,
          }}
        >
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>    
            <TimelineOppositeContent color="text.secondary">
                <div className="logo shadow p-3 mb-5 bg-body rounded">
                    <img src="/CISCO-IT.png" alt="" />
                </div>
            </TimelineOppositeContent>
            
          </TimelineItem>
        </motion.div>
    )
}


function Certification() {

    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"],
    });

    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1.5]);

    const imgs = [<Cert2 />, <Cert3 />, <Cert4 />]


    return (
        <div className="cert">

            <Navbar />

            <div className="container">
                <div className="header">
                    <h2>Certifications</h2>
                </div>

                <div className="content">
                    <Timeline position="alternate">
                      <motion.div
                        variants={TimeVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        <TimelineItem>
                          <TimelineOppositeContent color="text.secondary">
                            <div className="logo shadow p-3 mb-5 bg-body rounded">
                              <img src="/Udemy-WebDev.jpg" alt="" />
                            </div>
                          </TimelineOppositeContent>
                          <TimelineSeparator>
                            <TimelineDot color="primary" />
                            <TimelineConnector />
                          </TimelineSeparator>
                        </TimelineItem>
                      </motion.div>

                      <TimelineItem></TimelineItem>

                      {imgs.map((img) => {
                        return (
                            <>
                                {img}
                                <TimelineItem></TimelineItem>
                            </>
                        )
                        
                      })}
                      
                    </Timeline>
                </div>
            </div>
        </div>
    );
};

export default Certification;