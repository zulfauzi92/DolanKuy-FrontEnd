import React from "react";
import {
    Card,
    CardTitle,
    CardBody,
    CardText,
    Row,
    Col,
    Button,
} from "reactstrap";
import CarouselHeader from "components/CarouselHeader/CarouselHeader.js";
import bg1 from "assets/img/bg4.jpg";
import { BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

function Search(){

    return (
        <>
        <CarouselHeader/>
        <div className="content">
            <Row style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
            <Col md={8} xs={12}>
                <Card className="card mb-6" style={{width: '100%'}}>
                <div className="row no-gutters">
                    <div className="col-md-5">
                    <img width="100%" height="100%" src={bg1} alt="Card image cap" />
                    </div>
                    <div className="col-md-7">
                    <CardBody>
                        <CardTitle>Nama</CardTitle>
                        <CardText>Deskripsi</CardText>
                        <Link id="buttonCard">
                            <Button id="buttonCard" color="primary" block>Details</Button>
                        </Link>
                    </CardBody>
                    </div>
                </div>
                </Card>
            </Col>
            </Row>
        </div>
        </>
    );
}

export default Search;
