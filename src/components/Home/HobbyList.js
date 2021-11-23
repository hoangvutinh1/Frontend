import React from "react";
import './HobbyList.css';
import { Container,Row,Col } from "react-bootstrap";
function HobbyList(props){
    const {hobbyList,activeId,onHobbyClick}=props;
    const handleClick=(hobby)=>{
        if (onHobbyClick){
            onHobbyClick(hobby);
        }
    }
    return (
        <Container>
            <Row>
                <Col>1 of 1</Col>
            </Row>
        </Container>
    )
}
export default HobbyList;