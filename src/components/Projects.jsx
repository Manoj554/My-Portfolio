import { Grid, Typography } from "@mui/material";
import { Card, Button, CardSection, CardImage, CardButton, CardActionButtons, StackSection } from "../styles/componentStyles/projects";
import { Section, Spacer } from "../styles/globalStyles";
import SectionTitle from "./SectionTitle";
import { projectsList } from "../utils/Data/ProjectsDetails";

const Project = ({ imgSrc, title, description, scrollY, viewlink, sourcelink, stack, innerWidth }) => (
    <Grid item lg={4} md={4} sm={6} xs={12}>
        <Card animation={scrollY > (innerWidth > 630 ? 2200 : 3300) ? true : false}>
            <CardImage src={imgSrc?.src} alt="projectImage" />
            <CardSection>
                <Typography variant="h5" component="h3" color="#34bdff" fontWeight="bold">
                    {title}
                </Typography>
                <Spacer space="15" />
                <Typography variant="h6" component="p" color="pink">
                    {description}
                </Typography>
                <Spacer space="10" />
                <StackSection>
                    {stack.map((val, i) => (
                        <span key={i}>
                            &nbsp; {`#${val}`}
                        </span>
                    ))}
                </StackSection>
                <Spacer space="20" />
                <CardActionButtons>
                    <a href={viewlink} target="_blank" rel="noreferrer" >
                        <CardButton>View</CardButton>
                    </a>
                    <a href={sourcelink} target="_blank" rel="noreferrer" >
                        <CardButton disabled={sourcelink === "#" ? true : false} title={sourcelink === "#" ? 'Not Availabel' : ''}>Source</CardButton>
                    </a>
                </CardActionButtons>
                <Spacer space="15" />
            </CardSection>
        </Card>
    </Grid>

);

const Projects = ({ scrollY, innerWidth }) => {

    const handleClick = () => {
        window.open('https://github.com/Manoj554?tab=repositories', '_blank')
    }

    return (
        <>
            <SectionTitle title="Projects" />
            <Button onClick={handleClick}>View All Projects</Button>
            <Spacer space="40" />
            <Typography variant="h5" component="h2" color="GrayText">
                Here are some of my personal projects...
            </Typography>
            <Spacer space="50" />
            <Section padding="0">
                <Grid container spacing={8}>
                    {projectsList.length > 0 && projectsList.slice(0).reverse().map((val) => (
                        <Project
                            key={val.id}
                            scrollY={scrollY}
                            title={val.title}
                            description={val.description}
                            imgSrc={val.imgurl}
                            viewlink={val.viewlink}
                            sourcelink={val.sourcelink}
                            stack={val.stack}
                            innerWidth={innerWidth}
                        />
                    ))}
                </Grid>
            </Section>
        </>
    )
}

export default Projects;
