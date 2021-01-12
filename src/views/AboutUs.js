import React, {Component} from 'react';
import {
    Row,
    Col,
  } from "reactstrap";
import PanelHeader from "components/PanelHeader/PanelHeader.js";

function AboutUs(){ 
    return (
        <>
        <PanelHeader
            content={
                <div className="header text-center">
                    <Row style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                        <Col md={8} xs={12}>
                            <Row>
                                <Col md={6} xs={12} style={{justifyContent:'center', alignItems:'center', paddingTop: '70px'}}>
                                    <h2 className="title" style={{textAlign:"left"}}>Selamat datang di DolanKuy</h2>
                                    <p className="category" style={{textAlign:"left"}}>
                                        DolanKuy adalah Aplikasi referensi wisata yang ada di Indonesia, 
                                        berbasis 3 platform yaitu mobile, website dan desktop. dengan DolanKuy 
                                        user bisa melihat list wisata dan akomodasi pada tempat wisata dengan 
                                        membandingkan review dari user lain
                                    </p>
                                </Col>
                                <Col md={1} xs={0}/>
                                <Col md={5} xs={12}>
                                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                        <img style={{width: '100%'}}
                                            alt="..."
                                            className="avatar border-gray"
                                            src={require("assets/img/mobil.png")}
                                        />
                                    </a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            }
        />
        <div className="content">
            <Row style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <Col md={8} xs={12}>
                    <h4 className="title" style={{textAlign:"center"}}>Developer Team</h4>
                    <Row>
                        <Col md={2} xs={4} style={{justifyContent:'center', alignItems:'center', height: '100%'}}>
                            <div class="card" style={{width: '100%'}}>
                                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                    <img style={{width: '100%'}} src={require("assets/img/Shabrina.jpg")} />
                                </a>
                                <p style={{marginTop:"8px", textAlign:"center"}}>
                                    Ulima Inas Shabrina
                                </p>
                                <p className="category" style={{textAlign:"center"}}>
                                    2110181048
                                </p>
                            </div>
                        </Col>
                        <Col md={2} xs={4} style={{justifyContent:'center', alignItems:'center', height: '100%'}}>
                            <div class="card" style={{width: '100%'}}>
                                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                    <img style={{width: '100%'}} src={require("assets/img/Belinda.jpg")} />
                                </a>
                                <p style={{marginTop:"8px", textAlign:"center"}}>
                                    Belinda Anindya K W
                                </p>
                                <p className="category" style={{textAlign:"center"}}>
                                    2110181038
                                </p>
                            </div>
                        </Col>
                        <Col md={2} xs={4} style={{justifyContent:'center', alignItems:'center', height: '100%'}}>
                            <div class="card" style={{width: '100%'}}>
                                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                    <img style={{width: '100%'}} src={require("assets/img/Eka.jpg")} />
                                </a>
                                <p style={{marginTop:"8px", textAlign:"center"}}>
                                    Eka Darma Widhyana
                                </p>
                                <p className="category" style={{textAlign:"center"}}>
                                    2110181039
                                </p>
                            </div>
                        </Col>
                        <Col md={2} xs={4} style={{justifyContent:'center', alignItems:'center', height: '100%'}}>
                            <div class="card" style={{width: '100%'}}>
                                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                    <img style={{width: '100%'}} src={require("assets/img/Gilang.jpg")} />
                                </a>
                                <p style={{marginTop:"8px", textAlign:"center"}}>
                                    Gilang Taufiq Arsyannur
                                </p>
                                <p className="category" style={{textAlign:"center"}}>
                                    2110181044
                                </p>
                            </div>
                        </Col>
                        <Col md={2} xs={4} style={{justifyContent:'center', alignItems:'center', height: '100%'}}>
                            <div class="card" style={{width: '100%'}}>
                                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                    <img style={{width: '100%'}} src={require("assets/img/Zul.jpg")} />
                                </a>
                                <p style={{marginTop:"8px", textAlign:"center"}}>
                                   Zul Fauzi Oktaviansyah
                                </p>
                                <p className="category" style={{textAlign:"center"}}>
                                    2110181056
                                </p>
                            </div>
                        </Col>
                        <Col md={2} xs={4} style={{justifyContent:'center', alignItems:'center', height: '100%'}}>
                            <div class="card" style={{width: '100%'}}>
                                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                    <img style={{width: '100%'}} src={require("assets/img/Kresna.jpg")} />
                                </a>
                                <p style={{marginTop:"8px", textAlign:"center"}}>
                                    I Gede Kresna Aryawan
                                </p>
                                <p className="category" style={{textAlign:"center"}}>
                                    2110181059
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <h4 className="title" style={{textAlign:"center", marginTop:"20px"}}>Supervisor & Mentor</h4>
                    <Row>
                        <Col md={4} xs={6} style={{justifyContent:'center', alignItems:'center', height: '100%'}}>
                            <ul>
                                <li>
                                    <p style={{marginTop:"8px", textAlign:"left"}}>
                                        Umi Sa'adah
                                    </p>
                                    <p className="category" style={{textAlign:"left"}}>
                                        Dosen Teknik Informatika PENS
                                    </p>
                                </li>
                                <li>
                                    <p style={{marginTop:"8px", textAlign:"left"}}>
                                        Desy Intan Permatasari
                                    </p>
                                    <p className="category" style={{textAlign:"left"}}>
                                        Dosen Teknik Informatika PENS
                                    </p>
                                </li>
                                <li>
                                    <p style={{marginTop:"8px", textAlign:"left"}}>
                                        Andhik Ampuh Yunanto
                                    </p>
                                    <p className="category" style={{textAlign:"left"}}>
                                        Dosen Teknik Informatika PENS
                                    </p>
                                </li>
                                <li>
                                    <p style={{marginTop:"8px", textAlign:"left"}}>
                                        Maulidan Bagus Afridian Rasyid 
                                    </p>
                                    <p className="category" style={{textAlign:"left"}}>
                                        Founder Maulidan Games & Rasyid Technologies
                                    </p>
                                </li>
                                <li>
                                    <p style={{marginTop:"8px", textAlign:"left"}}>
                                        Willy Achmat Fauzi 
                                    </p>
                                    <p className="category" style={{textAlign:"left"}}>
                                        CEO Sindika
                                    </p>
                                </li>
                                <li>
                                    <p style={{marginTop:"8px", textAlign:"left"}}>
                                        Verent Flourencia Irene
                                    </p>
                                    <p className="category" style={{textAlign:"left"}}>
                                        UX Designer Maulidan Games
                                    </p>
                                </li>
                            </ul>
                        </Col>
                        <Col md={4} xs={6} style={{justifyContent:'center', alignItems:'center', height: '100%'}}>
                            <ul>
                                <li>
                                    <p style={{marginTop:"8px", textAlign:"left"}}>
                                        Mayshella Ainun Wakhidah
                                    </p>
                                    <p className="category" style={{textAlign:"left"}}>
                                        Mahasiswa Teknik Informatika PENS
                                    </p>
                                </li>
                                <li>
                                    <p style={{marginTop:"8px", textAlign:"left"}}>
                                        Andika Ahmad Ramadhan
                                    </p>
                                    <p className="category" style={{textAlign:"left"}}>
                                        Mahasiswa Teknik Informatika PENS
                                    </p>
                                </li>
                                <li>
                                    <p style={{marginTop:"8px", textAlign:"left"}}>
                                        Fandi Ahmad
                                    </p>
                                    <p className="category" style={{textAlign:"left"}}>
                                        Mahasiswa Teknik Informatika PENS
                                    </p>
                                </li>
                                <li>
                                    <p style={{marginTop:"8px", textAlign:"left"}}>
                                        Ardian Kristya Pratama
                                    </p>
                                    <p className="category" style={{textAlign:"left"}}>
                                        Mobile Developer AlinaMed & Ikkat Inovasi Teknologi
                                    </p>
                                </li>
                                <li>
                                    <p style={{marginTop:"8px", textAlign:"left"}}>
                                        Angga Pradipta Kurnia Putra
                                    </p>
                                    <p className="category" style={{textAlign:"left"}}>
                                        CTO AlinaMed & Mobile Developer Ikkat Inovasi Teknologi
                                    </p>
                                </li>
                                <li>
                                    <p style={{marginTop:"8px", textAlign:"left"}}>
                                        Muhammad Alif Pradipta ADP
                                    </p>
                                    <p className="category" style={{textAlign:"left"}}>
                                        Mobile Developer Sindika
                                    </p>
                                </li>
                            </ul>
                        </Col>
                        <Col md={4} xs={6} style={{justifyContent:'center', alignItems:'center', height: '100%'}}>
                            <ul>
                                <li>
                                    <p style={{marginTop:"8px", textAlign:"left"}}>
                                        Rafly Arief Kanza
                                    </p>
                                    <p className="category" style={{textAlign:"left"}}>
                                        Owner & Full Stack Developer punggawastudio.com
                                    </p>
                                </li>
                                <li>
                                    <p style={{marginTop:"8px", textAlign:"left"}}>
                                        Ahmad Jarir At Thobari
                                    </p>
                                    <p className="category" style={{textAlign:"left"}}>
                                        Software Engineer Rasyid Technologies
                                    </p>
                                </li>
                                <li>
                                    <p style={{marginTop:"8px", textAlign:"left"}}>
                                        Ajie Dibyo Respati
                                    </p>
                                    <p className="category" style={{textAlign:"left"}}>
                                        Mahasiswa Teknik Informatika PENS
                                    </p>
                                </li>
                                <li>
                                    <p style={{marginTop:"8px", textAlign:"left"}}>
                                        Achmad Zulkarnain
                                    </p>
                                    <p className="category" style={{textAlign:"left"}}>
                                        CEO & Co-Founder TrustMedis
                                    </p>
                                </li>
                                <li>
                                    <p style={{marginTop:"8px", textAlign:"left"}}>
                                        Arie Affianto
                                    </p>
                                    <p className="category" style={{textAlign:"left"}}>
                                        Founder Profilku Mobile & Samsung Developer Warrior
                                    </p>
                                </li>
                                <li>
                                    <p style={{marginTop:"8px", textAlign:"left"}}>
                                        Tegar Imansyah
                                    </p>
                                    <p className="category" style={{textAlign:"left"}}>
                                        Software RnD in System Architect Alterra
                                    </p>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                    <h4 className="title" style={{textAlign:"center"}}>Sponsors</h4>
                    <Row>
                        <Col md={2} xs={4} style={{justifyContent:'center', alignItems:'center', height: '100%'}}>
                            <div class="card" style={{width: '100%'}}>
                                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                    <img style={{width: '100%'}} src={require("assets/img/Profilku.png")} />
                                </a>
                            </div>
                        </Col>
                        <Col md={2} xs={4} style={{justifyContent:'center', alignItems:'center', height: '100%'}}>
                            <div class="card" style={{width: '100%'}}>
                                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                    <img style={{width: '100%'}} src={require("assets/img/Virtuahive.png")} />
                                </a>
                            </div>
                        </Col>
                        <Col md={2} xs={4} style={{justifyContent:'center', alignItems:'center', height: '100%'}}>
                            <div class="card" style={{width: '100%'}}>
                                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                    <img style={{width: '100%'}} src={require("assets/img/Trustmedis.png")} />
                                </a>
                            </div>
                        </Col>
                        <Col md={2} xs={4} style={{justifyContent:'center', alignItems:'center', height: '100%'}}>
                            <div class="card" style={{width: '100%'}}>
                                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                    <img style={{width: '100%'}} src={require("assets/img/Sindika.png")} />
                                </a>
                            </div>
                        </Col>
                        <Col md={2} xs={4} style={{justifyContent:'center', alignItems:'center', height: '100%'}}>
                            <div class="card" style={{width: '100%'}}>
                                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                    <img style={{width: '100%'}} src={require("assets/img/Rasyid.png")} />
                                </a>
                            </div>
                        </Col>
                        <Col md={2} xs={4} style={{justifyContent:'center', alignItems:'center', height: '100%'}}>
                            <div class="card" style={{width: '100%'}}>
                                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                    <img style={{width: '100%'}} src={require("assets/img/RasyidT.png")} />
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
        </>
    );
}

export default AboutUs;