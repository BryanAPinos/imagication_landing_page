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
import Dropdown from '@material-tailwind/react/Dropdown';
import DropdownItem from '@material-tailwind/react/DropdownItem';
import Icon from '@material-tailwind/react/Icon';
import Button from '@material-tailwind/react/Button';

export default function DefaultNavbar() {
    const [openNavbar, setOpenNavbar] = useState(false);

    return (
        <Navbar navbar>
            <NavbarContainer>
                <NavbarWrapper>
                    <a
                        href="https://imagication.co"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <NavbarBrand>Imagication</NavbarBrand>
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
                                target="_blank"
                                rel="noreferrer"
                                ripple="light"
                            >
                                &nbsp;Home
                            </NavLink>
                            <NavLink
                                href="https://imagication.co/ourstory"
                                target="_blank"
                                rel="noreferrer"
                                ripple="light"
                            >
                                &nbsp;Our Story
                            </NavLink>
                            <NavLink
                                href="https:/imagication.so/forschools"
                                target="_blank"
                                rel="noreferrer"
                                ripple="light"
                            >
                                For Schools
                            </NavLink>
                        </div>
                    </Nav>
                </NavbarCollapse>
            </NavbarContainer>
        </Navbar>
    );
}
