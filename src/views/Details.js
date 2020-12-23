import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    Row,
    Col,
    Container,
    CardImg
} from "reactstrap";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} from "react-google-maps";
import { FaMapMarkerAlt } from 'react-icons/fa';
import { TiStar } from 'react-icons/ti';
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import bg1 from "assets/img/bg4.jpg";
import { BrowserRouter as Link } from 'react-router-dom';
import { baseURL } from '../Utils/api';
import axios from "axios";
import { useParams } from 'react-router-dom';
import { IMAGE_URL } from '../Utils/api';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';

function Details(props){
    const { id } = useParams();
    const [location, setLocation] = React.useState([]);
    const [galery, setGalery] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [lang, setLang] = React.useState(5);
    const [lat, setLat] = React.useState(34);
    const [zoom, setZoom] = React.useState(2);
    const [map, setMap] = React.useState();
    const [mapContainer, setMapContainer] = React.useState('');
    
    React.useEffect(() => {
        axios
        .get(`${baseURL}locations/${id}`)
        .then((res) => {
            console.log(res);
            setGalery(res.data.currentGalery);
            setLocation(res.data.detail_location);
        })
        .catch((err) => {
            console.log(err);
        })
        .then(() => {
            setLoading(false);
        });
        return () => {};
    }, []);
    
    React.useEffect(() => {
        if (mapContainer !== '') {
            mapboxgl.accessToken = "pk.eyJ1IjoiYmFyYmllc2hhYnJpbmEiLCJhIjoiY2s4ZDZoYzd2MHF6ZjNmdDdvdzl4cW5hdSJ9.YKh51Ej18Qm2_PiD267B0w"
            setMap(new mapboxgl.Map({
                container: mapContainer,
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [lang, lat],
                zoom: zoom
            }));
        }
    }, [mapContainer, lang, lat, zoom]);

    return (
        <>
        <PanelHeader />
        {loading ?
            (<h1>Error</h1>) : (
            <>
            <div className="content">
                <Row style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                    <Col md={8} xs={12}>
                        <Card>
                            <CardBody>
                                <Row className="my-0">
                                {galery.map((item) => {
                                    return (
                                        <Col key={item.id}>
                                        <CardImg
                                            id="galeri"
                                            src={IMAGE_URL + item.filename}
                                            alt={item.filename}
                                        />
                                        </Col>
                                    );
                                })}
                                </Row>
                                <br/>
                                <h2>{location.name}</h2>
                                <h4 style={{ fontWeight: "bold" }}>
                                    4.5
                                    <TiStar id="icon" />
                                </h4>
                                <p id="deskripsi">
                                    {location.description}
                                </p>
                                <p style={{ fontFamily: "Roboto" }}>
                                    <FaMapMarkerAlt /> <strong>Location:</strong> Nginden Intan
                                    Timur II No.A2-41, Ngenden Jangkungan, Kec. Sukolilo, Kota
                                    SBY, Jawa Timur 60118
                                </p>
                                <h3>Maps</h3>
                                <div>Longitude: {lang} | Latitude: {lat} | Zoom: {zoom}</div>
                                <div ref={el => setMapContainer(el)} className='mapContainer' />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
        )} 
        </>  
    ); 
}

export default Details;