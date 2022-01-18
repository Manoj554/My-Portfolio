import Navbar from './Navbar';
import BgAnimation from "./Animation/BgAnimation";
import TextAnimation1 from "./Animation/TextAnimation1";
import { Typography } from "@mui/material";
import { BackgroundAnimationArea, Header, Intro, LearnMoreButton, TitleText } from "../styles/componentStyles/header";
import { Box, Container, Spacer } from "../styles/globalStyles";


const HeaderComponent = ({ scrollY, innerWidth }) => {

    const handleLearnMore = () => {
        window.open('https://github.com/manoj554', '_blank');
    }

    return (
        <>
            <Header>
                <Navbar scrollY={scrollY} innerWidth={innerWidth} />
                <Spacer space="100" />
                <Intro>
                    <Container>
                        <Box width="100%" padding="1rem">
                            <TitleText>
                                Welcome To My Portfolio
                            </TitleText>
                            <TextAnimation1 text="I'M Manoj Kumar Mondal" />
                            <Spacer space="20" />
                            <Typography variant={innerWidth < 660 ? "h6" : "h5"} color="gray" component="h3">
                                Full Stack Developer | Web Designer
                            </Typography>
                            <Spacer space="60" />
                            <LearnMoreButton onClick={handleLearnMore}> Learn More </LearnMoreButton>
                        </Box>
                    </Container>
                    <BackgroundAnimationArea>
                        <BgAnimation />
                    </BackgroundAnimationArea>
                </Intro>
            </Header>
        </>
    )
}

export default HeaderComponent;
