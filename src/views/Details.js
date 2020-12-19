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
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import bg1 from "assets/img/bg4.jpg";
import { BrowserRouter as Link } from 'react-router-dom';
import { baseURL } from '../Utils/api';
import axios from "axios";
import { useParams } from 'react-router-dom';

function Details(){
    const { id } = useParams();
    const [location, setLocation] = React.useState();
    const [galery, setGalery] = React.useState();
    const [loading, setLoading] = React.useState(true);
    
    React.useEffect(() => {
        axios
        .get(`${baseURL}locations/${id}`)
        .then((res) => {
            console.log(res);
            console.log(res.data);
            setLoading(false);
            setLocation(res.data[0]);
            setGalery(res.data[1]);
        })
        .catch((err) => {
            console.log(err);
            setLoading(false);
        });
        return () => {};
    }, []);

return (
    <>
    <PanelHeader
        content={
        <div className="header text-center">
            <h2 className="title">Selamat datang di DolanKuy</h2>
            <p className="category">
            DolanKuy adalah Aplikasi referensi wisata yang ada di Indonesia, 
            berbasis 3 platform yaitu mobile, website dan desktop. dengan DolanKuy 
            user bisa melihat list wisata dan akomodasi pada tempat wisata dengan 
            membandingkan review dari user lain
            </p>
        </div>
        }
    />
    <div className="content">
        <Row style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
        <Col md={9} xs={12}>
        
        </Col>
        </Row>
    </div>
    </>
);
}

export default Details;
