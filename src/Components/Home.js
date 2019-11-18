import React from 'react';
import { Element } from 'react-scroll'
import { Link } from 'react-router-dom';

import logo from '../logo.svg';



function Home() {
    return (
        <div id="right" className="column">
            <div className="bottom" id="containerElement">
                <Element name="about">
                    <div className="about-me">
                        <h1>Hello, I am</h1>
                        <h2>Salaheddine</h2>
                        <h2>STA</h2>
                        <h3>PhD Student</h3>
                    </div>
                    <div>
                        <h1>About Me</h1>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <p> I am currently doing my PhD thesis in computer vision entitled "Robuste Pose Estimation for medical instrument",
                            under the colaboration of IMT Atlantique engineer school and the laboratory LaTIM - UMR1101....</p>
                            <button className="btn btn-primary">Downlows cv</button>
                        </div>
                        <div className="col-md-6">
                            <h5>name : Salaheddine STA </h5>
                            <h5>Birth : September 1994</h5>
                            <h5>Nationality : Algerian</h5>
                            <h5>Personal mail : saleh.sta@live.fr</h5>
                            <h5>Pro. mail : salaheddine.sta@imt-atlantique.fr</h5>
                        </div>
                    </div>
                </Element>
                
                <hr/>
                <Element name="education" className="education">
                    <div className="row">
                        <div className="col-md-4">
                            <p>in progress</p>
                            <p>PhD thesis in Computer vision(Robust 6D Pose estimation for medical instrument)</p>
                            <p>IMT Atlantique - Brest, France</p>
                        </div>
                        <hr/>
                        <div className="col-md-4">
                            <p>June 2018</p>
                            <p>Master in Computer vision</p>
                            <p>University of science and thecnologies Houari Boumedinne - Algiers, Algeria</p>
                        </div>
                        <hr/>
                        <div className="col-md-4">
                            <p>June 2016</p>
                            <p>Licence in Software Engineering</p>
                            <p>University of science and thecnologies Houari Boumedinne - Algiers, Algeria</p>
                        </div>
                        <hr/>
                        {/* <div>
                            <h3>June 2013</h3>
                            <h1>Baccalaureate Science series</h1>
                            <h2>Polyvalent High school - Algiers, Algeria</h2>
                        </div>
                        <hr/> */}
                    </div>
                </Element>
                <hr/>
                <Element name="experience" className="experience">
                        <div className="row">
                            <div className="col-md-4">
                                <p>April 2018 - August 2018</p>
                                <p>Master's Final project</p>
                                <p>Développement d’un système de Réalité Augmentée pour la fusion d’informations pré-/per-opératoires (IRM/Echo). Application en chirurgie
                                    orthopédique.</p>
                                <p>IMT Atlantique - Brest, France</p>
                            </div>
                            <div className="col-md-4">
                                <p>September 2016 - February 2017</p>
                                <p>Web Developper</p>
                                <p>Intégrateur de sites web en utilisant le CMS Wordpress au sein de l’entreprise ITCreative.</p>
                                <p>ITCREATIVE - Algiers, Algeria</p>
                            </div>
                            <div className="col-md-4">
                                <p>January 2016 - June 2016</p>
                                <p>Licence Final project</p>
                                <p>Stage de fin d’études Licence sur le thème de : Réalisation d’un Data Warehouse dans le service capitainerie de l’entreprise portuaire d’Alger.</p>
                                <p>ENTREPRISE PORTUAIRE D’ALGER - Algiers, Algeria</p>
                            </div>
                            <hr/>
                        </div>
                        <hr/>
                </Element>
                <hr/>
                <Element name = "Partenariat" className = "partenariat">
                    <div className="row">
                        <div className="col-md-6">
                            <h6>June 2016 - October 2018</h6>
                            <h4>Microsoft Student Partner</h4>
                            <h5>MICROSOFT</h5>
                        </div>
                        <div className="col-md-6">
                            <h6>September 2015 - June 2018</h6>
                            <h4>Micro Club Membership</h4>
                            <h5>University of science and thecnologies Houari Boumedinne - Algiers, Algeria</h5>
                        </div>
                    </div>
                    <hr/>
                </Element>
                <hr/>
                <Element name="skills" className="skills">
                    <div className="row">
                        <div className="col-md-6">
                            <h4>Skills:</h4>
                            <div>
                                <h5>Image processing</h5>
                                <h6>Filtrage, Segmentation, Classification, Descripteur, Recalage, Analyse spatio-temporelle</h6>
                            </div>
                            <div>
                                <h5>Computer Vision</h5>
                                <h6>Détection / Suivi d’objets, Flot optique, Estimation de pose</h6>
                            </div>
                            <div>
                                <h5>Other</h5>
                                <h6>Analyse de données, Synthèse d’images et manipulation de scènes 3D, visualisation de données, développement
                                    d’applications multimédia</h6>
                            </div>
                        </div>
                        <hr/>
                        <div className="col-md-6">
                            <h4>tools and programming language:</h4>
                            <div>
                                <h5>Programming</h5>
                                <h6>Java, C#, C, C++. </h6>
                                <h6>Libraries : Processing, OpenCV, VTK, PCL,GMP. </h6>
                            </div>
                            <div>
                                <h5>Web</h5>
                                <h6>PHP, HTML, CSS, JavaScript.</h6>
                                <h6>Libraries : Leaflet.js, D3.js, THREE.js, WORDPRESS, ReactJS.</h6>
                            </div>
                            <div>
                                <h5>Mobile</h5>
                                <h6>Androis</h6>
                            </div>
                            <div>
                                <h5>DataBase</h5>
                                <h6>MySQL, SQL Server, ORACLE</h6>
                            </div>
                            <div>
                                <h5>Game Engine</h5>
                                <h6>Unity</h6>
                            </div>
                            <div>
                                <h5>Cloud</h5>
                                <h6>Azure</h6>
                            </div>
                        </div>
                    </div>

                </Element>
                <hr/>
                <Element name="portfolio" className="portfolio">
                    
                    <div className="row">
                        <div className="col-md-4">
                        <div className="card mb-4 shadow-sm">
                        <Link to="/Portfolio_ReactApp">
                            <img src={logo} alt={"logo"} className="Imglogo"/>
                        </Link>
                        </div>
                        </div>
                        <div className="col-md-4">
                        <div className="card mb-4 shadow-sm">
                            <Link to="/Portfolio_ReactApp">
                                <img src={logo} alt={"logo"} className="Imglogo"/>
                            </Link>
                        </div>
                        </div>
                        <div className="col-md-4">
                        <div className="card mb-4 shadow-sm">
                            <Link to="/Portfolio_ReactApp">
                                <img src={logo} alt={"logo"} className="Imglogo"/>
                            </Link>
                        </div>
                        </div>
                        <div className="col-md-4">
                        <div className="card mb-4 shadow-sm">
                            <Link to="/Portfolio_ReactApp">
                                <img src={logo} alt={"logo"} className="Imglogo"/>
                            </Link>
                        </div>
                        </div>
                    </div>
                </Element>
                <hr/>
                <Element name="reaserch" className="reaserch">
                    <div>
                        <h6>S. Sta, G. Dardenne, J. Ogor, J. Bert, H. Letissier, E. Stindel, C. Hamitouche. Towards a markerless Computer Assisted Orthopaedic Surgery system. Computer Assisted Radiology and Surgery (2019).</h6>
                        <a href="https://link.springer.com/article/10.1007/s11548-019-01969-3">Link</a>
                    </div>
                    <div>
                        <h6>S. Sta, G. Dardenne, J. Ogor, J. Bert, H. Letissier, E. Stindel, C. Hamitouche. Towards a markerless Computer Assisted Orthopaedic Surgery system. Computer Assisted Radiology and Surgery (2019).</h6>
                        <a href="https://link.springer.com/article/10.1007/s11548-019-01969-3">Link</a>
                    </div>
                    <hr/>
                </Element>
                <hr/>
                <Element name="Activities" className="activities" >
                    <div className="row">
                        <div className="col-md-4">
                            <h6>July 2018</h6>
                            <h5>Salon National des Produits de la recherche</h5>
                            <h6>Exposant</h6>
                            <p>Exposition et démonstration en utilisant des Hololens au salon national des produits de la recherche, de l’application de Réalité mixte développée
                                pendant le stage à IMT Atlantique / LaTIM INSERM U1101.</p>
                            <h6>Algiers, Algeria</h6>
                        </div>
                        
                        <div className="col-md-4">
                            <h6>2017</h6>
                            <h5>GameZanga 2017, Algeria Game Challenge 2017, Global Game Jam 2017</h5>
                            <h6>Participant</h6>
                            <p>Devlopping a game in 48H under a spesific theme</p>
                            <h6>Algiers, Algeria</h6>
                        </div>
                        
                        <div className="col-md-4">
                            <h6>june 2016</h6>
                            <h5>DaleCarnegie (communication et leadership)</h5>
                            <h6>Formation</h6>
                            <p>Cette formation est la référence en développement personnel, elle permet de voir comment assimuler durablement les attitudes positives et
                                les réflexes indispensables pour réussir sur le plan professionnel et personnel.</p>
                            <h6>Algiers, Algeria</h6>
                        </div>
                    </div>
                    <hr/>
                </Element>
                <hr/>
                <Element name="language-skills">
                    <div>
                        <h1>language-skills</h1>
                        <h3>Arabe</h3>
                        <h3>French</h3>
                        <h3>English</h3>
                    </div>
                </Element>
                <hr/>
                <Element name="Inerest">
                    <div>
                        <h1>Inerest</h1>
                        <h3>Video Games</h3>
                        <h3>Martial art sport and CrossFit</h3>
                        <h3>Hiking</h3>
                    </div>
                </Element>
                <hr/>
                <hr/>
                <Element name="contact" className="contact">
                    <div>
                        <h2>Tel : (+33) 761-479-815</h2>
                        <h2>Add : 47 Rue Vauban - 29200 - Brest - France</h2>
                        <h2>mail : saleh.sta@live.fr</h2>
                        <hr/>
                        <button className="btn btn-primary">Send Nudes</button>
                        <hr/>
                    </div>
                </Element>
            </div>
        </div>
    );
}

export default Home;
