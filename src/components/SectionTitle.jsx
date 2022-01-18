import { useState, useEffect } from 'react'
import { Box, SectionDivider, Spacer, Title } from '../styles/globalStyles'

const SectionTitle = ({ title }) => {
    const [currentWidth, setCurrentWidth] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setCurrentWidth(window.innerWidth);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Box padding="1rem 0">
            <Spacer space={currentWidth > 600 ? 30 : 0} />
            <Title>
                {title}
            </Title>
            <SectionDivider />
            <Spacer space="30" />
        </Box>
    )
}

export default SectionTitle
