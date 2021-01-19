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
import { FaMapMarkerAlt } from 'react-icons/fa';
import { TiStar } from 'react-icons/ti';
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import { baseURL } from '../Utils/api';
import axios from "axios";
import { useParams } from 'react-router-dom';
import { IMAGE_URL } from '../Utils/api';
import mapboxgl from 'mapbox-gl';

function Details(props){
    const { id } = useParams();
    const [location, setLocation] = React.useState([]);
    const [galery, setGalery] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [lang, setLang] = React.useState(5);
    const [lat, setLat] = React.useState(34);
    const [zoom, setZoom] = React.useState(10);
    const [map, setMap] = React.useState();
    const [mapContainer, setMapContainer] = React.useState('');
    
    React.useEffect(() => {
        axios
        .get(`${baseURL}locations/${id}`)
        .then((res) => {
            console.log(res);
            setGalery(res.data.currentGalery);
            setLocation(res.data.detail_location);
            setLat(res.data.detail_location.latitude);
            setLang(res.data.detail_location.longitude);
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
            var mapgl = new mapboxgl.Map({
                container: mapContainer,
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [lang, lat],
                zoom: zoom
            })
            new mapboxgl.Marker().setLngLat([lang, lat]).addTo(mapgl);
            setMap(mapgl);
        }
    }, [mapContainer, lang, lat, zoom]);

    return (
        <>
        <PanelHeader />
        <div className="content">
        {loading ?(<h1>Error</h1>) : (
            <>
                <div className="header text-center">
                    <Row style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                        <Col md={8} xs={12}>
                            <Row>
                                <Col md={8} xs={12} style={{justifyContent:'center', alignItems:'center'}}>
                                    <Card>
                                        <CardBody>
                                            <br/>
                                            <h2 style={{ fontFamily: "Roboto", textAlign:"left", fontWeight:600}}>{location.name}</h2>
                                            <p id="deskripsi" style={{ fontFamily: "Roboto", textAlign:"left"}}>
                                                {location.description}
                                            </p>
                                            <p style={{ fontFamily: "Roboto", textAlign:"left"}}>
                                                <FaMapMarkerAlt /><strong>Location:</strong> {location.address}
                                            </p>
                                            <h4 style={{ fontFamily: "Roboto", textAlign:"left", fontWeight:600}}>Maps</h4>
                                            <div id="map" style={{top: 0, bottom: 0, width: '100%', fontFamily: "Roboto", textAlign:"left",}}>Longitude: {lang} | Latitude: {lat} | Zoom: {zoom}</div>
                                            <div ref={el => setMapContainer(el)} className='mapContainer' />
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col md={4} xs={12}>
                                    {galery.map((item) => {
                                        return (
                                            <Col key={item.id}>
                                                <img
                                                    src={IMAGE_URL + item.filename} alt={item.filename}
                                                />
                                            </Col>
                                        );
                                    })}
                                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden'}}>
                                        <img height="210px" style={{flexShrink: 0, minWidth: '100%', minHeight: '100%'}} src={IMAGE_URL + location.image} alt="Image" />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </>
        )} 
        </div>
        </>  
    ); 
}

export default Details;