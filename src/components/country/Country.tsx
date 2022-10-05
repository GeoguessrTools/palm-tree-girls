import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BollardsInfo } from '../infoBlocks/BollardsInfo';
import { CountryInfo } from '../infoBlocks/CountryInfo';
import { MetaInfo } from '../infoBlocks/MetaInfo';
import { SignsInfo } from '../infoBlocks/SignsInfo';
import { AreaCode, Hint, Meta, Road, Signs, UtilityPoles } from '../infoBlocks/geolearnrTypes';
import axios, { AxiosResponse } from 'axios';
import { capitalStr } from '..';

type Country = {
	name: string,
	flag_url: string,
	map_url: string,
	continent: string,
	capital: string,
	languages: string[],
	phone_numbers: string[],
	notes: string[],
	right_drive: boolean,
	meta: Meta,
	bollards_barricades_snowpoles: Hint[],
	signs: Signs,
	area_codes: AreaCode[],
	utility_poles: UtilityPoles,
	misc: Hint[],
	vehicles: Hint[],
	license_plates: Hint[],
	road: Road,
}

export const CountryPage: FC = () => {
    const [countryData, setCountryData] = useState<Country>()
	const params = useParams();
    const [country, setCountry] = useState<string>(params?.country?.toLowerCase() || '')

	const getCountryData = async () => {
		console.log("Country", country)
		await axios.get(process.env.REACT_APP_API_VER + `/countries/${country.replaceAll(' ', '-')}`).then(data => {
			console.log("Data", data)
			setCountryData(data.data)
		})
	}

	useEffect(() => {
		getCountryData();		
	}, [country])

    return(
        <div>
            {/* <h1>{country?.charAt(0).toUpperCase()}{country?.slice(1)}!</h1> */}
            <h1>{capitalStr(country)}!</h1>
            {countryData && (
			<div>
				<CountryInfo
					capital={countryData.capital}
					continent={countryData.continent}
					flagUrl={countryData.flag_url}
					languages={countryData.languages}
					mapUrl={countryData.map_url}
					notes={countryData.notes}
					phoneNumbers={countryData.phone_numbers}
				/>
				<MetaInfo
					carMeta={countryData.meta.car}
					skyMeta={countryData.meta.sky}
					camMeta={countryData.meta.camera}
				/>
				<BollardsInfo
					bollards={countryData.bollards_barricades_snowpoles}
				/>
				<SignsInfo
					signs={countryData.signs}
				/>
			</div>)}
        </div>
    )
}