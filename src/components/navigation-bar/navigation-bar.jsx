import React from "react";
import { Navbar, Container, Nav, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NavigationBar = ({username, onLoggedOut, onSearch}) => {
    const handleSearch = (searchString) => {
        onSearch(searchString);
    };
    return(
        <Navbar
            expand="lg"
            className="navbar"
        >
            <Container fluid>
                <Navbar.Brand>MyFlix Api</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link onClick={onLoggedOut}>Logout</Nav.Link>
                    </Nav>
                    <Nav className="mx-auto">
                        <Form className="d-flex">
                            <Form.Control
                                id="searchbar"
                                type="search"
                                placeholder="Search"
                                className=""
                                aria-label="Search"
                                onChange={(event) => handleSearch(event.target.value)}
                            />
                        </Form>
                    </Nav>
                    <Nav className="align-items-center">
                        <Nav.Link as={Link} to="/profile"><span>{username}</span></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>

        </Navbar>
    )
}