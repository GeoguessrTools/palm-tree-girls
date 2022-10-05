import React, { FC } from 'react';
import './flex.css';
import { BaseBox } from './baseBox';
import { Hint } from './geolearnrTypes';

type MetaInfoProps = {
    carMeta?: Hint[] | undefined;
    skyMeta?: Hint[] | undefined;
    camMeta?: Hint[] | undefined;
}

export const MetaInfo:FC<MetaInfoProps> = ({
    carMeta,
    skyMeta,
    camMeta
}) => {
    return(
        <BaseBox title="Meta">
            <div id="metaInfo" className="flex-container" style={{justifyContent: 'space-around'}}>
                {carMeta && (<h2 className="flex-full">Car Meta</h2>)}
                {carMeta && carMeta.map(hint => (
                <div id="carMeta" className="flex-third">
                    <img src={hint.image_url} style={{minHeight: '100px', maxHeight: '200px'}} />
                    <div>{hint.description}</div>
                </div>
                ))}
            </div>
        </BaseBox>
    )
}