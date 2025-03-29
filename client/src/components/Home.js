import React from "react";
import { Link } from 'react-router-dom';
import './NavbarContent/Login.css';
import {Container,Col,Button} from "react-bootstrap";
import './NavbarContent/Login.css';
import background from '../img/home_img.avif'

function Home(){
    return(
        <div>
        <div style={{backgroundColor:"#f400a1",
        backdropFilter: "blur(8px)",
            backgroundImage: `url(${background})`,
            // backgroundImage: `url("https://images.unsplash.com/photo-1630053561093-3b52fb8a415c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80")`,
            height: '100vh',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            color:"#FFFFFF",
            paddingTop:"150px"
            }}
        >
            <Container>
                    <Col xs={12} lg={12} className="text-center flex-column align-items-center justify-content-center">
                        <h6>Ride together, save together with rideShareMate - safe, reliable, and convenient. Try it now!</h6>
                        <h2>On the move? Connect with a co-traveler or Snatch a seat for the ride!</h2>
                        <Link to="/SearchCabs">
                            <Button className="btn-get-started m-3">Get Started</Button>
                        </Link>
                    </Col>
            </Container>
        </div>
        </div>
    );
}

export default Home;