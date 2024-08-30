import Navbar from "../navbar/Navbar";
import "./experience.scss";
import * as React from "react";
import { Timeline } from '@mui/lab';
import { TimelineItem } from '@mui/lab';
import { TimelineSeparator } from '@mui/lab';
import { TimelineConnector } from '@mui/lab';
import { TimelineContent } from '@mui/lab';
import { TimelineDot } from '@mui/lab';
import { TimelineOppositeContent } from '@mui/lab';
import StarExp from "./5starExp/5starExp";
import { useRef } from "react";
import { motion, useAnimation, useInView, useScroll, useTransform } from "framer-motion";
import ZuriExp from "./zuriExp/ZuriExp";


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

function Experience() {

    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"],
    });

    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1.5]);

    return (
        <div className="experience">
            <Navbar />

            <div className="container">
                <div className="header">
                    <h2>Work Experience</h2>
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
                            <div className="logo">
                              <img src="/5starlogo.svg" alt="" />
                            </div>
                          </TimelineOppositeContent>
                          <TimelineSeparator>
                            <TimelineDot color="primary" />
                            <TimelineConnector />
                          </TimelineSeparator>
                          <TimelineContent>
                              <StarExp />
                          </TimelineContent>
                        </TimelineItem>
                      </motion.div>

                      <TimelineItem></TimelineItem>

                      <motion.div className="zuriContainer"
                        ref={containerRef}
                        style={{
                            scale: scaleProgress,
                            opacity: opacityProgress,
                        }}
                      >
                        <TimelineItem>
                          <TimelineOppositeContent color="text.secondary">
                              <div className="logo2">
                                  <img src="/zuri-logo.jfif" alt="" />
                              </div>
                          </TimelineOppositeContent>
                          <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                          </TimelineSeparator>
                          <TimelineContent>
                              <ZuriExp />
                          </TimelineContent>
                        </TimelineItem>
                      </motion.div>
                      
                    </Timeline>
                </div>
            </div>
        </div>
    );
};

export default Experience;