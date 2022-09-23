import React, { FC, useState, useEffect } from 'react';
import { MapContainer, TileLayer, GeoJSON, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

type CountryOutlineProps = {
    country: string;
    onEachFeature: (feature: any, layer: any) => void;
}

const CountryOutline:FC<CountryOutlineProps> = ({country, onEachFeature}) => {
    const [countryData, setCountryData] = useState<any>(null);

    const getData = async () => {
        const data = await axios.get('countries/' + country + '.geojson').catch((err) => {
            console.log(err)
        })
        if(data?.status != 200) {
            console.log(country)
        } else {
            setCountryData({
                "type": "FeatureCollection",
                "features": [data?.data]
            })
        }
    }

    useEffect(() => {
        getData()
    }, [])

    if (countryData) {
        return <GeoJSON data={countryData} onEachFeature={onEachFeature}/>;
    } else {
        return null;
    }
}


export const WorldMap: FC = () => {
    const navigate = useNavigate();
    const countries = [
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
        "Uganda",
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
        "United Arab Emirates",
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
        "United Kingdom",
        "Canada",
        "Curacao",
        "Dominican Republic",
        "Greenland",
        "Guatemala",
        "Mexico",
        "Puerto Rico",
        "United States",
        "Virgin Islands",
        "American Samoa",
        "Australia",
        "Guam",
        "New Zealand",
        "Northern Mariana Islands",
        "Argentina",
        "Bolivia",
        "Brazil",
        "Chile",
        "Colombia",
        "Ecuador",
        "Peru",
        "Uruguay"
    ]

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
    }
    
    const handleEachFeature = (feature: any, layer: any) => {
        layer.on({
            click: (e: any) => {
                navigate('/country/' + e?.target?.feature?.properties.ADMIN)
            }
        });
    };

    return(
        <div>
            <div style={{width: '20%', display: 'inline-block'}}>
                {Object.keys(areas).map(area => (
                    <div> {area}
                        {/* <ol>

                            {areas[area].map(country => (
                                <li>{country}</li>
                            ))}
                        </ol> */}
                    </div>
                ))}
            </div>
            <MapContainer center={[25, 0]} maxBounds={[[85,-180], [-85,180]]} dragging={true} zoom={3} style={{height: '100vh', width: '80%', display: 'flex'}} >
                    <>
                        <TileLayer
                            noWrap={true}
                            maxZoom={5}
                            minZoom={3}
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png"
                        />
                        {countries.map(country => (
                            <CountryOutline country={country} onEachFeature={handleEachFeature} />
                        ))}
                    </>
            </MapContainer>
        </div>
    )
}