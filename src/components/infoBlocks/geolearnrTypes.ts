export type ImageWithDescription = {
    image_url: string;
    description: string;
}

export type BollardsAndExtra = {
    notes: string[],
    info: ImageWithDescription[]
}

export type SignageAndTraffic = {
	yieldSigns:     ImageWithDescription[],
	stopSigns:      ImageWithDescription[],
	pedestrianSigns:ImageWithDescription[],
	directionSigns: ImageWithDescription[],
	speedSigns:     ImageWithDescription[],
	chevrons:       ImageWithDescription[],
	licensePlates:  ImageWithDescription[],
	highwaySigns:   ImageWithDescription[],
	streetLines:    ImageWithDescription[]
}