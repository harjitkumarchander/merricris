import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

class Footer extends Component {
    render() {
        return (
                <>                 
                  <Navbar bg="dark" variant="dark">
                        <marquee style={{color : "blue", fontWeight : "bold", fontSize : "45px", fontFamily: 'Times New Roman'}}>Merry Christmas from Navya & Heyan</marquee>
                  </Navbar>
                </>
        )
    }
}

export default Footer;
