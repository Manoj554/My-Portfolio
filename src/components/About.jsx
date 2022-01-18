import SectionTitle from "./SectionTitle";
import { Typography } from "@mui/material";
import { AnimatedBox } from "../styles/animation";
import { ProfilePic } from "../styles/componentStyles/about";
import { Container, Spacer } from "../styles/globalStyles";
import profileImage from '../utils/images/profilePic.webp';
import { AboutData } from "../utils/Data/about";


const About = ({ scrollY }) => {
    return (
        <>
            <SectionTitle title="About" />
            <Typography variant="h5" component="h2" color="GrayText">
                Hello There...
            </Typography>
            <Spacer space="50" />
            <Container responsive={{ At: 900 }}>
                <AnimatedBox width="30%" padding="2rem" animationName="moveleft" animation={scrollY > 250 ? true : false} responsive={{ At: '900', padding: '2rem' }}>
                    <ProfilePic src={profileImage.src} alt="ProfilePic" />
                </AnimatedBox>
                <AnimatedBox width="70%" padding="2rem" animationName="moveright" animation={scrollY > 250 ? true : false} responsive={{ At: '900', padding: '1rem', width: '90%' }}>
                    <Typography variant="h6" color="gray">
                        {AboutData.description}
                    </Typography>
                </AnimatedBox>
            </Container>
        </>
    )
}

export default About;
