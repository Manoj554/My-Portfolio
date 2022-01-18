import { Grid, Typography } from "@mui/material";
import { SkillBar, SkillBox } from "../styles/componentStyles/skills";
import { Spacer } from "../styles/globalStyles";
import SectionTitle from "./SectionTitle";

const Skill = ({ skillName, skillLevel, animate }) => (
    <Grid item lg={6} sm={6} xs={12}>
        <Typography variant="h6" component="h3" color="whitesmoke">
            {skillName}
        </Typography>
        <Spacer space={10} />
        <SkillBox>
            <SkillBar skill={skillLevel} animate={animate}>
                {skillLevel + " %"}
            </SkillBar>
        </SkillBox>
    </Grid>
)

const Skills = ({ scrollY, innerWidth }) => {
    return (
        <>
            <SectionTitle title="Skills" />
            <Grid container spacing={4} width={"100%"}>
                <Skill skillName="HTML" skillLevel={90} animate={scrollY > (innerWidth > 630 ? 1500 : 2100) ? true : false} />
                <Skill skillName="CSS" skillLevel={90} animate={scrollY > (innerWidth > 630 ? 1500 : 2100) ? true : false} />
                <Skill skillName="JAVASCRIPT" skillLevel={85} animate={scrollY > (innerWidth > 630 ? 1500 : 2100) ? true : false} />
                <Skill skillName="C++" skillLevel={80} animate={scrollY > (innerWidth > 630 ? 1500 : 2100) ? true : false} />
                <Skill skillName="REACTJS" skillLevel={85} animate={scrollY > (innerWidth > 630 ? 1500 : 2100) ? true : false} />
                <Skill skillName="NEXTJS" skillLevel={80} animate={scrollY > (innerWidth > 630 ? 1500 : 2100) ? true : false} />
                <Skill skillName="NODEJS" skillLevel={80} animate={scrollY > (innerWidth > 630 ? 1500 : 2100) ? true : false} />
                <Skill skillName="REDUX" skillLevel={75} animate={scrollY > (innerWidth > 630 ? 1500 : 2100) ? true : false} />
            </Grid>
        </>
    )
}

export default Skills;
