import React, { FC } from 'react';
import './flex.css';
import { BaseBox } from './baseBox';

type MetaInfoProps = {
    carMeta?: any | undefined;
    skyMeta?: any | undefined;
    camMeta?: any | undefined;
}

export const MetaInfo:FC<MetaInfoProps> = ({
    carMeta,
    skyMeta,
    camMeta
}) => {
    return(
        <BaseBox title="Meta">
            <div id="metaInfo" className="flex-container">
                {carMeta && (<div id="carMeta" className="flex-third">
                    <h2>Car Meta</h2>
                    <img src={carMeta.image_url} />
                    <div>{carMeta.description}</div>
                </div>)}
            </div>
        </BaseBox>
    )
}