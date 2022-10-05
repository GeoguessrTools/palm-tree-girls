import { float } from "aws-sdk/clients/lightsail";

export type Hint = {
    image_url: string | undefined;
	alt_image_url: string | undefined;
	google_maps_example: string | undefined;
    description: string | undefined;
	significance: string | undefined;
	region_specificity: float | undefined;
	country_specificity: float | undefined;
	frequency: float | undefined;
	identifier: string | undefined;
	tags: string[] | undefined;
}

export type Signs = {
	yield:     Hint[],
	stop:      Hint[],
	pedestrian:Hint[],
	direction: Hint[],
	speed:     Hint[],
	chevrons:  Hint[],
	street:    Hint[],
	transit:   Hint[]
}

export type Road = {
	street_lines: Hint[],
	material: Hint[],
	quality: float;
}

export type Meta = {
	car: Hint[];
	sky: Hint[];
	camera: Hint[];
}

export type AreaCode = {
	code: string,
	location: string
}

export type UtilityPoles = {
	poles: Hint[],
	extra_notes: string[]
}