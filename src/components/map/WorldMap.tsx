import React, { FC, useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, GeoJSON, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const WorldMap: FC = () => {
    const [paths, setPaths] = useState<any[]>([]);
    const [apiCountries, setApiCountries] = useState<string[]>(['argentina']);
    const navigate = useNavigate();
    const gameCountries = [
        "botswana",
        "eswatini",
        "ghana",
        "kenya",
        "lesotho",
        "madagascar",
        "nigeria",
        "senegal",
        "south africa",
        "tunisia",
        "uganda",
        "bangladesh",
        "bhutan",
        "cambodia",
        "india",
        "indonesia",
        "israel",
        "japan",
        "jordan",
        "kyrgyzstan",
        "laos",
        "malaysia",
        "mongolia",
        "philippines",
        "russia",
        "singapore",
        "south korea",
        "sri lanka",
        "taiwan",
        "thailand",
        "united arab emirates",
        "albania",
        "andorra",
        "austria",
        "belgium",
        "bulgaria",
        "croatia",
        "czech republic",
        "denmark",
        "estonia",
        "faroe islands",
        "finland",
        "france",
        "germany",
        "gibraltar",
        "greece",
        "hungary",
        "iceland",
        "ireland",
        "isle of man",
        "italy",
        "jersey",
        "latvia",
        "lithuania",
        "luxembourg",
        "malta",
        "monaco",
        "montenegro",
        "netherlands",
        "macedonia",
        "norway",
        "poland",
        "portugal",
        "romania",
        "san marino",
        "serbia",
        "slovakia",
        "slovenia",
        "spain",
        "sweden",
        "switzerland",
        "turkey",
        "ukraine",
        "united kingdom",
        "canada",
        "curacao",
        "dominican republic",
        "greenland",
        "guatemala",
        "mexico",
        "puerto rico",
        "united states",
        "virgin islands",
        "american samoa",
        "australia",
        "guam",
        "new zealand",
        "northern mariana islands",
        "argentina",
        "bolivia",
        "brazil",
        "chile",
        "colombia",
        "ecuador",
        "peru",
        "uruguay"
    ];

    const areas = {
        "Africa": [
            "Botswana",
            "Eswatini",
            "Ghana",
            "Kenya",
            "Lesotho",
            "Madagascar",
            "Nigeria",
            "Senegal",
            "South Africa",
            "Tunisia",
            "Uganda"
        ],
        "Asia": [
            "Bangladesh",
            "Bhutan",
            "Cambodia",
            "India",
            "Indonesia",
            "Israel",
            "Japan",
            "Jordan",
            "Kyrgyzstan",
            "Laos",
            "Malaysia",
            "Mongolia",
            "Philippines",
            "Russia",
            "Singapore",
            "South Korea",
            "Sri Lanka",
            "Taiwan",
            "Thailand",
            "United Arab Emirates"
        ],
        "Europe": [
            "Albania",
            "Andorra",
            "Austria",
            "Belgium",
            "Bulgaria",
            "Croatia",
            "Czech Republic",
            "Denmark",
            "Estonia",
            "Faroe Islands",
            "Finland",
            "France",
            "Germany",
            "Gibraltar",
            "Greece",
            "Hungary",
            "Iceland",
            "Ireland",
            "Isle of Man",
            "Italy",
            "Jersey",
            "Latvia",
            "Lithuania",
            "Luxembourg",
            "Malta",
            "Monaco",
            "Montenegro",
            "Netherlands",
            "Macedonia",
            "Norway",
            "Poland",
            "Portugla",
            "Romania",
            "San Marino",
            "Serbia",
            "Slovakia",
            "Slovenia",
            "Spain",
            "Sweden",
            "Switzerland",
            "Turkey",
            "Ukraine",
            "United Kingdom"
        ],
        "North America": [
            "Canada",
            "Curacao",
            "Dominican Republic",
            "Greenland",
            "Guatemala",
            "Mexico",
            "Puerto Rico",
            "United States",
            "Virgin Islands",
        ],
        "Oceania": [
            "American Samoa",
            "Australia",
            "Guam",
            "New Zealand",
            "Northern Mariana Islands",
        ],
        "South America": [
            "Argentina",
            "Bolivia",
            "Brazil",
            "Chile",
            "Colombia",
            "Ecuador",
            "Peru",
            "Uruguay"
        ]
    };

    const getData = async () => {
        const getter = axios.create({
            baseURL: 'http://localhost:3000'
        });

        getter.get('/countryPaths/mapdata.json').then(data => {
            setPaths(data.data)
        }).catch((err) => {
            console.log("error")
            console.log(err)
        });
    }

    const navigateToCountry = (country: string) => {
        console.log("Triggered", country)
        if (apiCountries.includes(country)) {
            navigate('/country/' + country)
        }
    }

    
    useEffect(() => {
        getData();

        // make svg zoomable and scrollable
        let shape = document.getElementsByTagName('svg')[0];

        let mouseStartPosition = {x: 0, y: 0};
        let mousePosition = {x: 0, y: 0};
        let viewboxStartPosition = {x: 0, y: 0};
        let viewboxPosition = {x: 0, y: 0};
        let viewboxSize = {x: 480, y: 480};
        let viewboxScale = 1.0;
        let mouseDown = false;
    
        const mousedown = (e: any) => {
            mouseStartPosition.x = e.pageX;
            mouseStartPosition.y = e.pageY;
            
            viewboxStartPosition.x = viewboxPosition.x;
            viewboxStartPosition.y = viewboxPosition.y;
            
            window.addEventListener("mouseup", mouseup);
            
            mouseDown = true;
        }
        const setviewbox = () => {
            var vp = {x: 0, y: 0};
            var vs = {x: 0, y: 0};
            
            vp.x = viewboxPosition.x;
            vp.y = viewboxPosition.y;
            
            vs.x = viewboxSize.x * viewboxScale;
            vs.y = viewboxSize.y * viewboxScale;
    
            shape = document.getElementsByTagName("svg")[0];
            shape.setAttribute("viewBox", vp.x + " " + vp.y + " " + vs.x + " " + vs.y);
        
        }
    
        const mouseup = (e: any) => {
            window.removeEventListener("mouseup", mouseup);
            
            mouseDown = false;
        }

        const mousemove = (e: any) => {
            mousePosition.x = e.offsetX;
            mousePosition.y = e.offsetY;
            
            if (mouseDown)
            {
                viewboxPosition.x = viewboxStartPosition.x + (mouseStartPosition.x - e.pageX) * viewboxScale;
                viewboxPosition.y = viewboxStartPosition.y + (mouseStartPosition.y - e.pageY) * viewboxScale;

                setviewbox();
            }
        }
    
        const wheel = (e: any) => {
            var scale = (e.deltaY < 0) ? 0.8 : 1.2;
            
            if ((viewboxScale * scale < 8.) && (viewboxScale * scale > 1./256.))
            {  
                var mpos = {x: mousePosition.x * viewboxScale, y: mousePosition.y * viewboxScale};
                var vpos = {x: viewboxPosition.x, y: viewboxPosition.y};
                var cpos = {x: mpos.x + vpos.x, y: mpos.y + vpos.y}
    
                viewboxPosition.x = (viewboxPosition.x - cpos.x) * scale + cpos.x;
                viewboxPosition.y = (viewboxPosition.y - cpos.y) * scale + cpos.y;
                viewboxScale *= scale;
            
                setviewbox();
            }
        }

        shape.addEventListener("wheel", wheel);
        shape.addEventListener("mousedown", mousedown);
        shape.addEventListener("mousemove", mousemove);
    }, [])

    useEffect(() => {
        apiCountries.forEach(country => {
            let el = document.getElementById(country);
            if (el) {
                el.setAttribute('fill', '#0dbdf7')
            }
        })
    }, [paths])

    return(
        <div key="outerDiv">
            <div key="worldMapContainer" style={{width: '55rem', position: 'relative', margin: '0 auto'}}>
                <svg key="worldMap" viewBox="130 20 700 510" style={{pointerEvents: 'all'}} width="820" height="520px" >
                    {paths && paths.map(path => (
                        // <div >
                            <path id={path.name} onClick={() => navigateToCountry(path.name)} fill={gameCountries.includes(path.name) ? "#e5dcce" : "#f1f1f1"} d={path.d_val}></path>
                        // </div>
                    ))}
                </svg>
            </div>
        </div>
    )
}