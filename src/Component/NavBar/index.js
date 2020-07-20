import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
const NavBar = () => {
    return (
        <Navbar fixed="top" expand="lg" variant="light" bg="light">
            <Navbar.Brand href="/dashboard" className="body">{"91 Social"}</Navbar.Brand>
            <DropdownButton id="dropdown-basic-button" title="Choose Product">
                <Dropdown.Item href="/capsules">Capsules</Dropdown.Item>
                <Dropdown.Item href="/cores">Cores</Dropdown.Item>
                <Dropdown.Item href="/dragon">Dragons</Dropdown.Item>
                <Dropdown.Item href="/history">History</Dropdown.Item>
                <Dropdown.Item href="/landing">Landing Pads</Dropdown.Item>
                <Dropdown.Item href="/launches">Launches</Dropdown.Item>
                <Dropdown.Item href="/launchpad">Launch Pads</Dropdown.Item>
                <Dropdown.Item href="/missions">Missions</Dropdown.Item>
                <Dropdown.Item href="/payloads">Payloads</Dropdown.Item>
                <Dropdown.Item href="/rockets">Rockets</Dropdown.Item>
                <Dropdown.Item href="/roadster">Roadster</Dropdown.Item>
                <Dropdown.Item href="/ships">Ships</Dropdown.Item>
            </DropdownButton>
        </Navbar>
    )
}

export default NavBar;