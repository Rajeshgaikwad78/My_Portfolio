import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header.layout";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from "../Footer/Footer";
import SidebarShow from "../Sidebar/SidebarShow.layout";
const Main=()=>{
    return(
<React.Fragment>
      <Row>
      <Header/>
      </Row>
      <Row>
        <SidebarShow />
        <Col sm={8}> 
        <Outlet/>
        </Col>
      </Row>
      <Col>
          <Footer/>
        </Col>
    </React.Fragment>
    )
}

export default Main;