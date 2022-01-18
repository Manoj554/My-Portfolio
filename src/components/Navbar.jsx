import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@mui/material';
import { Logo, Nav, Navcontainer, NavItem, ResumeButton, ToggleMenuButton, ToggleMenu, CloseButton } from "../styles/componentStyles/navbar";
import { DiCssdeck } from 'react-icons/di';
import { FiMenu } from 'react-icons/fi';
import { ImCross } from 'react-icons/im';
import { FcViewDetails } from 'react-icons/fc';


const Navbar = ({ scrollY, innerWidth }) => {

    const [toggle, setToggle] = useState(false);

    const ToggleClick = () => {
        setToggle(prev => !prev);
    }

    const handleClick = () => {
        window.open('./manojkumarmondal.pdf', '_blank');
    }

    return (
        <>
            <Nav position={scrollY > 45 ? 'fixed' : null}>
                <ToggleMenuButton position={scrollY > 45 ? 'fixed' : null} onClick={ToggleClick}>
                    <FiMenu size={"2rem"} />
                </ToggleMenuButton>
                <Navcontainer width="220px">
                    <Link href="/" passHref>
                        <Logo>
                            <DiCssdeck fontSize="2rem" />
                            <span style={{ color: 'blue', marginLeft: '7px' }}>
                                Portfolio
                            </span>
                        </Logo>
                    </Link>
                </Navcontainer>
                <Navcontainer width="765px" id='navigationBar' toggle={toggle}>
                    <ToggleMenu>
                        <Link href="/">
                            Portfolio
                        </Link>
                        <CloseButton onClick={ToggleClick}>
                            <ImCross size={"1rem"} />
                        </CloseButton>
                    </ToggleMenu>
                    <NavItem>
                        <Link href="#about">
                            About
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link href="#tech">
                            Technologies
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link href="#skills">
                            Skills
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link href="#projects">
                            Projects
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link href="#timeline">
                            Timeline
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link href="#contacts">
                            Contacts
                        </Link>
                    </NavItem>
                </Navcontainer>
                <ResumeButton position={scrollY > 40 ? 'fixed' : null} onClick={handleClick}>
                    {innerWidth < 400 ? <FcViewDetails title='resume' fontSize="2rem" color='green' /> :
                        <Button variant='outlined' color="success">Resume</Button>
                    }
                </ResumeButton>
            </Nav>
        </>
    )
}

export default Navbar;