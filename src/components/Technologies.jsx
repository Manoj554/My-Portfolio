import { Typography } from "@mui/material";
import { AnimatedBox } from "../styles/animation";
import { Container, Spacer } from "../styles/globalStyles";
import SectionTitle from "./SectionTitle";
import { SiNextdotjs, SiMaterialui, SiCplusplus } from 'react-icons/si';
import { FaReact, FaCss3Alt, FaServer, FaNodeJs } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { ContentHolder } from "../styles/globalStyles";

const Technology = ({ animationName, Icon1, Icon2, title, details, scrollY, innerWidth }) => (
    <AnimatedBox width="50%" padding="1rem" align="flex-start" animationName={animationName} animation={scrollY > (innerWidth > 630 ? 800 : 1250) ? true : false} >
        <div style={{ fontSize: '2rem', color: 'white' }}>
            {{ ...Icon1 }} {" "} {{ ...Icon2 }}
        </div>
        <Typography variant="h4" component="h4" color="white" fontWeight="bold">
            {title}
        </Typography>
        <Typography variant="h6" component="p" color="gray">
            Experience With
            <br />
            {details}
        </Typography>
    </AnimatedBox>
);

const Technologies = ({ scrollY, innerWidth }) => {

    return (
        <>
            <SectionTitle title="Technologies" />
            <Typography variant="h5" component="h2" color="GrayText">
                I have worked with various range of technologies.
            </Typography>
            <Spacer space="50" />
            <Container padding="1rem" justify="space-evenly" responsive={{ At: 960 }}>

                <ContentHolder responsiveAt={960} row>
                    <Technology
                        scrollY={scrollY}
                        animationName="moveleft"
                        Icon1={<FaReact />}
                        Icon2={<SiNextdotjs />}
                        title="Front-End"
                        details="ReactJs & NextJs"
                        innerWidth={innerWidth}
                    />

                    <Technology
                        scrollY={scrollY}
                        animationName="movetop"
                        Icon1={<FaServer />}
                        Icon2={<FaNodeJs />}
                        title="Back-End"
                        details="NodeJs & Express"
                        innerWidth={innerWidth}
                    />
                </ContentHolder>

                <ContentHolder responsiveAt={960} row>
                    <Technology
                        scrollY={scrollY}
                        animationName="moveright"
                        Icon1={<FaCss3Alt />}
                        Icon2={<SiMaterialui />}
                        title="UX/UI"
                        details="MaterialUi & styled-components"
                        innerWidth={innerWidth}
                    />
                    <Technology
                        scrollY={scrollY}
                        animationName="movedown"
                        Icon1={<IoLogoJavascript />}
                        Icon2={<SiCplusplus />}
                        title="Programming Language"
                        details="JavaScript & C++"
                        innerWidth={innerWidth}
                    />
                </ContentHolder>

            </Container>
        </>
    )
}

export default Technologies;
