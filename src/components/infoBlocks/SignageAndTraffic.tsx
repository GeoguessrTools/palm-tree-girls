import React, { FC } from 'react';
import './flex.css';
import { BaseBox } from './baseBox';
import { SignageAndTraffic } from './geolearnrTypes';

type SignageAndTrafficProps = {
    signs?: SignageAndTraffic | undefined;
}

export const MetaInfo:FC<SignageAndTrafficProps> = ({
    signs
}) => {
    return(
        <BaseBox title="Signage, Roads, and Traffic">
            <div id="signageAndTrafficInfo" className="flex-container">
                {signs && Object.keys(signs).map(sign => (<div id="signs" className="flex-third">
                    {
                        
                    }
                    <img src={signs[sign]} />
                    <div>{carMeta.description}</div>
                </div>))}
            </div>
        </BaseBox>
    )
}