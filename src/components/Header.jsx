import React, { useContext } from 'react';
import { Badge, Container, Dropdown, FormControl, Nav, Navbar } from 'react-bootstrap';
import { HiShoppingCart } from 'react-icons/hi'
import { useGlobalContext } from '../context/Context';
import {  Link} from "react-router-dom";

function Header() {
    const [{baskets}] = useGlobalContext();
    return (
        <Navbar bg="dark" variant="dark" style={{height : 80}}>
            <Container>
                <Link to="/">
                    <Navbar.Brand>
                        <a href='/'>Shopping Cart</a>
                    </Navbar.Brand>
                </Link>
                <Navbar.Text className="search">
                    <FormControl style= {{width:500}} placeholder="Search for Product" className="m-auto"/>
                </Navbar.Text>
                <Nav>
                    <Link to="/cart">
                        <Dropdown>
                            <Dropdown.Toggle variant="success">
                                <HiShoppingCart style={{fontSize :25, marginRight: 5}} />
                                <Badge>{baskets?.length}</Badge>
                            </Dropdown.Toggle>
                        </Dropdown>
                    </Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header
