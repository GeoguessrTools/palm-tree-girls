import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BollardsInfo } from '../infoBlocks/BollardsInfo';
import { CountryInfo } from '../infoBlocks/CountryInfo';
import { MetaInfo } from '../infoBlocks/MetaInfo';
import { SignageAndTrafficInfo } from '../infoBlocks/SignageAndTraffic';
import { AreaCode, BollardsAndExtra, ImageWithDescription, Meta, SignageAndTraffic, UtilityPoles } from '../infoBlocks/geolearnrTypes';
import axios, { AxiosResponse } from 'axios';

type Country = {
	flag_url: string,
	map_url: string,
	continent: string,
	capital: string,
	languages: string[],
	phone_numbers: string[],
	notes: string[],
	right_drive: boolean,
	meta: Meta,
	bollards_and_extras: BollardsAndExtra,
	signage_and_traffic: SignageAndTraffic,
	area_codes: AreaCode,
	utility_poles: UtilityPoles,
	misc: ImageWithDescription[]
}

export const CountryPage: FC = () => {
    const [countryData, setCountryData] = useState<Country>()
	const params = useParams();
    const [country, setCountry] = useState<string>(params?.country?.toLowerCase() || '')

	const getCountryData = async () => {
		console.log("Country", country)
		await axios.get(process.env.REACT_APP_API_VER + `/countries/${country}`).then(data => {
			console.log("Data", data)
			setCountryData(data.data)
		})
	}

	useEffect(() => {
		getCountryData();		
	}, [country])

    return(
        <div>
            <h1>{country?.charAt(0).toUpperCase()}{country?.slice(1)}!</h1>
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
				/>
				<BollardsInfo
					bollards={countryData.bollards_and_extras}
				/>
				<SignageAndTrafficInfo
					signs={countryData.signage_and_traffic}
				/>
			</div>)}
        </div>
    )
}