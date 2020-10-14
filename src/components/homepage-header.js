import React from "react"


import bubble from './../images/bubble2.png'
import Particles from 'react-particles-js';




function HomepageHeader({ siteTitle, logoImg }) {

return (
        <header>
            <div className="hero h-screen">
            <Particles 
                    width="100%"
                    height="90vh" 
                    params={{
                      "particles": {
                        "number": {
                          "value": 150,
                          "density": {
                            "enable": true,
                            "value_area": 868.0624057955
                          }
                        },
                        "color": {
                          "value": "#ecd018"
                        },
                        shape: {
                          type: 'images',
                          images: [
                              {src: bubble, height: 200, width: 200},
                          ]
                      },
                        "opacity": {
                          "value": 0.1,
                          "random": true,
                          "anim": {
                            "enable": false,
                            "speed": 2,
                            "opacity_min": 0.1,
                            "sync": false
                          }
                        },
                        "size": {
                          "value": 6,
                          "random": true,
                          "anim": {
                            "enable": false,
                            "speed": 40,
                            "size_min": 0.3,
                            "sync": false
                          }
                        },
                        "line_linked": {
                          "enable": false,
                        },
                        "move": {
                          "enable": true,
                          "speed": 5,
                          "direction": "none",
                          "random": true,
                          "straight": false,
                          "out_mode": "out",
                          "bounce": false,
                          "attract": {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 1200
                          }
                        }
                      },
                      "interactivity": {
                        "detect_on": "canvas",
                        "events": {
                          "onhover": {
                            "enable": true,
                            "mode": "bubble"
                          },
                          "onclick": {
                            "enable": false,
                            "mode": "push"
                          },
                          "resize": false
                        },
                        "modes": {
                          "bubble": {
                            "distance": 250,
                            "duration": 2,
                            "opacity": .1,
                            "size": 1
                          },
                          "bubble": {
                            "distance": 400,
                            "size": 10,
                            "duration": 2,
                            "opacity": .4,
                            "speed": 3
                          },
                          "repulse": {
                            "distance": 400,
                            "duration": 0.4
                          },
                          "push": {
                            "particles_nb": 4
                          },
                          "remove": {
                            "particles_nb": 2
                          }
                        }
                      },
                      "retina_detect": true
                    }}
                    style={{
                      "backgroundColor":"transparent",
                      "position": "absolute",
                      "width": "100%",
                      "height": "100%"
                    }}
                  />
            </div>
        </header>
);
                }

export default HomepageHeader
