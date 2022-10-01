import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { BollardsInfo } from '../infoBlocks/BollardsInfo';
import { CountryInfo } from '../infoBlocks/CountryInfo';
import { MetaInfo } from '../infoBlocks/MetaInfo';

const countryData = {
    country: {
		flag_url: "https://calico-cut-geo-tools.s3.amazonaws.com/argentina-flag.png",
		map_url: "https://calico-cut-geo-tools.s3.amazonaws.com/argentina-map.png",
		continent: 'South America',
		capital:"Buenos Aires",
		languages: ["Spanish"],
		phone_numbers: ["+54"],
		notes: [
			"Argentina is a big country and a big part of it is covered by Street View",
			"Argentina is a very flat country except for the western border with Chile and the south around Ushuaia",
			"The southern part lacks any real vegetation, exception is the southern part near Ushuaia",
			"The middle line often consists of a dashed white line next to a yellow, continuous line",
			"Some Argentinian license plates have a distinctive black point in the middle of the plate",
        ],
        right_drive: true,
		meta_info: [
			{
				image_url:    "https://calico-cut-geo-tools.s3.amazonaws.com/argentina-meta-1.png",
				description: "The google car in Argentina is black. You can see it by panning down.",
			},
		],
		bollards_and_extras: {
			notes: ["Argentina generally lacks bollards, it's not worth focusing on them"],
			info: [
				{
					image_url:    "https://calico-cut-geo-tools.s3.amazonaws.com/argentina-bus-sign.png",
					description: "This sign is commonly seen at gas stations",
				},
				{
					image_url:    "https://calico-cut-geo-tools.s3.amazonaws.com/argentina-street-name-sign.png",
					description: "Street name signs are dark and perpendicular",
				},
				{
					image_url:    "https://calico-cut-geo-tools.s3.amazonaws.com/argentina-gas-station-sign.png",
					description: "Bus stop sign",
				},
				{
					image_url:    "https://calico-cut-geo-tools.s3.amazonaws.com/argentina-highway-marker.png",
					description: "Highway marker",
				},
				{
					image_url:    "https://calico-cut-geo-tools.s3.amazonaws.com/argentina-bollards.png",
					description: "Bollards",
				},
            ],
		},
		signage_and_traffic: {
			yield_signs: [
				{
					image_url:    "https://calico-cut-geo-tools.s3.amazonaws.com/argentina-yield-1.png",
					description: "",
				},
				{
					image_url:    "https://calico-cut-geo-tools.s3.amazonaws.com/argentina-yield-2.png",
					description: "",
				},
            ],
			stop_signs: [
				{
					image_url:    "https://calico-cut-geo-tools.s3.amazonaws.com/argentina-stop.png",
					description: "",
				},
            ],
			pedestrian_signs: [
				{
					image_url:    "https://calico-cut-geo-tools.s3.amazonaws.com/argentina-pedestrian.png",
					description: "",
				},
            ],
			direction_signs: [
				{
					image_url:    "https://calico-cut-geo-tools.s3.amazonaws.com/argentina-direction.png",
					description: "",
				},
            ],
			speed_signs: [
				{
					image_url:    "https://calico-cut-geo-tools.s3.amazonaws.com/argentina-speed.png",
					description: "",
				},
            ],
			chevrons: [
				{
					image_url:    "https://calico-cut-geo-tools.s3.amazonaws.com/argentina-chevron-blue.png",
					description: "",
				},
				{
					image_url:    "https://calico-cut-geo-tools.s3.amazonaws.com/argentina-chevron-left-red.png",
					description: "",
				},
				{
					image_url:    "https://calico-cut-geo-tools.s3.amazonaws.com/argentina-chevron-right-red.png",
					description: "",
				},
				{
					image_url:    "https://calico-cut-geo-tools.s3.amazonaws.com/argentina-chevron-yellow-black.png",
					description: "",
				},
            ],
			license_plates: [
				{
					image_url:    "https://calico-cut-geo-tools.s3.amazonaws.com/argentina-license-plate-new.png",
					description: "New",
				},
				{
					image_url:    "https://calico-cut-geo-tools.s3.amazonaws.com/argentina-license-plate-old.png",
					description: "Old",
				},
            ],
			highway_signs: [
				{
					image_url:    "https://calico-cut-geo-tools.s3.amazonaws.com/argentina-highway.png",
					description: "",
				},
            ],
			street_lines: [
				{
					image_url:    "https://calico-cut-geo-tools.s3.amazonaws.com/argentina-street-line-1.png",
					description: "",
				},
				{
					image_url:    "https://calico-cut-geo-tools.s3.amazonaws.com/argentina-street-line-2.png",
					description: "",
				},
            ],
		},
		area_codes: [
			{
				code:     "11",
				location: "Buenos Aires",
			},
			{
				code:     "264",
				location: "San Juan",
			},
			{
				code:     "341",
				location: "Rosario",
			},
			{
				code:     "342",
				location: "Santa Fe",
			},
			{
				code:     "351",
				location: "Cordoba",
			},
        ],
		utility_poles: {
			extra_notes: '',
			poles: [
				{
					image_url:    "https://calico-cut-geo-tools.s3.amazonaws.com/argentina-utility-pole-1.png",
					description: "",
				},
				{
					image_url:    "https://calico-cut-geo-tools.s3.amazonaws.com/argentina-utility-pole-2.png",
					description: "",
				},
				{
					image_url:    "https://calico-cut-geo-tools.s3.amazonaws.com/argentina-utility-pole-blue.png",
					description: "This pole can normally be found in Ushuaia, the southernmost point of Argentina.",
				},
            ],
		},
		misc: [
			{
				image_url:    "https://calico-cut-geo-tools.s3.amazonaws.com/argentina-misc-1.png",
				description: "Most parts of Argentina are covered in grassy field. Picture in the area south of Rosario/Buenos Ares.",
			},
			{
				image_url:    "https://calico-cut-geo-tools.s3.amazonaws.com/argentina-misc-2.png",
				description: "The southern most point of Argentina near Ushuaia. Alpine feeling, a lot of bushy green and snow.",
			},
			{
				image_url:    "https://calico-cut-geo-tools.s3.amazonaws.com/argentina-misc-3.png",
				description: "Dry soil and patches of grass and low bushes. Mostly in the southern part of Argentina, picture from Sierra Nevada.",
			},
			{
				image_url:    "https://calico-cut-geo-tools.s3.amazonaws.com/argentina-misc-4.png",
				description: "The north of Argentina. A lot of green vegetation.",
			},
        ],
	}
}


export const Country: FC = () => {
    const params = useParams();
    console.log(params)

    return(
        <div>
            <h1>{params.country?.charAt(0).toUpperCase()}{params.country?.slice(1)}!</h1>
            <CountryInfo
				capital={countryData.country.capital}
				continent={countryData.country.continent}
                flagUrl={countryData.country.flag_url}
				languages={countryData.country.languages}
                mapUrl={countryData.country.map_url}
                notes={countryData.country.notes}
				phoneNumbers={countryData.country.phone_numbers}
            />
			<MetaInfo
				carMeta={countryData.country.meta_info[0]}
			/>
			<BollardsInfo
				bollards={countryData.country.bollards_and_extras}
			/>
        </div>
    )
}