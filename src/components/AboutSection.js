import React from 'react';
import home1 from '../img/home1.png';

// Styled Components
import { About, Description, Image, Hide } from "../styles";

//Framer motion
import {motion} from 'framer-motion';

const AboutSection = () => {
    return(
        <About>
            <Description>
                <div className="title">
                    <Hide>
                        <motion.h2 initial={{opacity: 0}} animate={{opacity: 1, transition:{duration: 2}}}>We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2>you <span>dreams</span> come</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2>true.</motion.h2>
                    </Hide>
                </div>
                <p>Contact us for any photography or videography ideas that you have. 
                    We have professionals with amazing skills.</p>
                <button>Contact Us</button>
            </Description>
            <Image>
                <img src={home1} alt="Guy with a camera" />
            </Image>
        </About>
    );
};

export default AboutSection;