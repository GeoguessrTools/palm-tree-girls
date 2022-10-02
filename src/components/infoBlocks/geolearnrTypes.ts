export type ImageWithDescription = {
    image_url: string;
    description: string;
}

export type BollardsAndExtra = {
    notes: string[],
    info: ImageWithDescription[]
}

export type SignageAndTraffic = {
	yield_signs:     ImageWithDescription[],
	stop_signs:      ImageWithDescription[],
	pedestrian_signs:ImageWithDescription[],
	direction_signs: ImageWithDescription[],
	speed_signs:     ImageWithDescription[],
	chevrons:       ImageWithDescription[],
	license_plates:  ImageWithDescription[],
	highway_signs:   ImageWithDescription[],
	street_lines:    ImageWithDescription[]
}

export type Meta = {
	car: ImageWithDescription[];
	sky: ImageWithDescription[];
	camera: ImageWithDescription[];
}

export type AreaCode = {
	code: string,
	location: string
}

export type UtilityPoles = {
	poles: ImageWithDescription[],
	extra_notes: string[]
}