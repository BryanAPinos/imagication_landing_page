import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@material-tailwind/react/Navbar';
import NavbarContainer from '@material-tailwind/react/NavbarContainer';
import NavbarWrapper from '@material-tailwind/react/NavbarWrapper';
import NavbarBrand from '@material-tailwind/react/NavbarBrand';
import NavbarToggler from '@material-tailwind/react/NavbarToggler';
import NavbarCollapse from '@material-tailwind/react/NavbarCollapse';
import Nav from '@material-tailwind/react/Nav';
import NavLink from '@material-tailwind/react/NavLink';
import Button from '@material-tailwind/react/Button';

export default function DefaultNavbar() {
    const [openNavbar, setOpenNavbar] = useState(false);

    return (
        <Navbar color="white" navbar>
            <NavbarContainer>
                <NavbarWrapper>
                    <a
                        href="https://imagication.co"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <NavbarBrand
                            text-transform='normal-case'
                        >
                            <p class='text-black normal-case'>
                                Imagication
                            </p>
                        </NavbarBrand>
                    </a>
                    <NavbarToggler
                        onClick={() => setOpenNavbar(!openNavbar)}
                        color="white"
                    />
                </NavbarWrapper>

                <NavbarCollapse open={openNavbar}>
                    <Nav>
                        <div className="flex flex-col z-50 lg:flex-row lg:items-center">
                            <NavLink
                                href="https://imagication.co"
                                // target="_blank"
                                rel="noreferrer"
                                ripple="light"
                            >
                                <p class="text-black normal-case">
                                    Home
                                </p>
                            </NavLink>
                            <NavLink
                                href="https://imagication.co/ourstory"
                                to="/ourstory"
                                // target="_blank"
                                // rel="noreferrer"
                                ripple="light"
                            >
                                <p class="text-black normal-case">
                                    Our Story
                                </p>
                            </NavLink>
                            <NavLink
                                to="/forschools"
                                ripple="light"
                            >
                                <p class="text-black normal-case">
                                    For Schools
                                </p>
                            </NavLink>
                        </div>
                        <Button
                            color='purple'
                        >
                            <p class="normal-case">
                                Explore
                            </p>
                        </Button>
                    </Nav>
                </NavbarCollapse>
            </NavbarContainer>
        </Navbar>
    );
}
