export { WorldMap } from './map/WorldMap';
export { CountryPage } from './country/Country';
export { CountryInfo } from './infoBlocks/CountryInfo';
export { MetaInfo } from './infoBlocks/MetaInfo';
export { BollardsInfo } from './infoBlocks/BollardsInfo';
export { SignsInfo } from './infoBlocks/SignsInfo';

export const capitalStr = (str: string) => {return str.replace(/\b\w/g, c => c.toUpperCase())}