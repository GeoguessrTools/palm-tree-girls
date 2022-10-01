import React, { FC } from 'react';
import './flex.css';
import { BaseBox } from './baseBox';

type CountryInfoProps = {
    flagUrl?: string | undefined;
    mapUrl?: string | undefined;
    continent?: string | undefined;
    capital?: string | undefined;
    languages?: string[] | undefined;
    phoneNumbers?: string[] | undefined;
    notes?: string[] | undefined;
}

export const CountryInfo:FC<CountryInfoProps> = ({
    flagUrl,
    mapUrl,
    continent,
    capital,
    languages,
    phoneNumbers,
    notes
}) => {
    return(
        <BaseBox title="Basic Information">
                <div id="countryInfo" className="flex-container">
                    <div id="textualGeneralInfo" className="flex-third">
                        {flagUrl && (
                            <div id="countryFlag" className="flex-third">
                                <img src={flagUrl} />
                            </div>
                        )}
                        {continent && (<div><b>Continent: </b>{continent}</div>)}
                        <br/>
                        {languages && (<div><b>Languages: </b>{languages.map(language => (
                            <span>{language}</span>
                            ))}
                        </div>)}
                        <br/>
                        {capital && (<div><b>Capital City: </b>{capital}</div>)}
                        <br/>
                        {phoneNumbers && (<div><b>Internation Area Code: </b>{phoneNumbers.map(numbers => (
                            <span>{numbers}</span>
                        ))}
                        </div>)}
                    </div>
                    {notes && (<ul  className="flex-two-third"><h2>Additional Notes</h2>
                        {notes && notes.map(note => (
                            <li>{note}</li>
                        ))}
                    </ul>)}
                    <div className="flex-break"></div>
                    {mapUrl && (
                        <div id="countryMap" className="flex-full">
                            <h2>General Map</h2>
                            <img src={mapUrl} />
                        </div>
                    )}
                </div>
        </BaseBox>
    )
}