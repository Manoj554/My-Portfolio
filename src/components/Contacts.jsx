import { Typography } from "@mui/material";
import { Item, SocialMedia, TextItem } from "../styles/componentStyles/contacts";
import { Box, Container, ContentHolder, Spacer } from "../styles/globalStyles";
import SectionTitle from "./SectionTitle";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFacebookSquare } from 'react-icons/fa';
import { AnimatedBox } from "../styles/animation";

const Contacts = ({ scrollY, innerWidth }) => {
    return (
        <>
            <SectionTitle title="Contacts" />
            <Typography variant="h5" component="h2" color="GrayText">
                Reach out to me!!!
            </Typography>
            <Spacer space="50" />
            <Container justify="space-evenly" padding="1rem" responsive={{ At: 850, align: 'flex-start' }}>
                <ContentHolder responsiveAt={850}>
                    <Box padding="1rem">
                        <Typography variant="h5" component="h3" color="whitesmoke">
                            EMAIL
                        </Typography>
                        <a href="mailto:manojkumarmondal@outlook.com">
                            <TextItem>
                                manojkumarmondal@outlook.com
                            </TextItem>
                        </a>
                    </Box>
                    <Box padding="1rem">
                        <Typography variant="h5" component="h3" color="whitesmoke">
                            Phone
                        </Typography>
                        <a href="tel:+918144607288">
                            <TextItem>
                                +91 8144607288
                            </TextItem>
                        </a>
                    </Box>
                </ContentHolder>
                <AnimatedBox width="50%" animation={scrollY > (innerWidth > 630 ? 4300 : 8600) ? true : false} animationName="shake">
                    <SocialMedia>
                        <a href="https://github.com/Manoj554" target="_blank" rel="noreferrer" title="github">
                            <Item color="white">
                                <FaGithub />
                            </Item>
                        </a>
                        <a href="https://www.linkedin.com/in/manoj-kumar-mondal-3a189b19a" target="_blank" rel="noreferrer" title="linkedin">
                            <Item color="darkblue">
                                <FaLinkedin />
                            </Item>
                        </a>
                        <a href="https://twitter.com/MKM_554" target="_blank" rel="noreferrer" title="twitter">
                            <Item color="#2196f3">
                                <FaTwitter />
                            </Item>
                        </a>
                        <a href="https://www.facebook.com/manojkumar.mondal.102" target="_blank" rel="noreferrer" title="facebook">
                            <Item color="blue">
                                <FaFacebookSquare />
                            </Item>
                        </a>
                        <a href="https://www.instagram.com/manoj_kumar_mondal" target="_blank" rel="noreferrer" title="instagram">
                            <Item color="#cc006e">
                                <FaInstagram />
                            </Item>
                        </a>
                    </SocialMedia>
                </AnimatedBox>
            </Container>
        </>
    )
}

export default Contacts;
