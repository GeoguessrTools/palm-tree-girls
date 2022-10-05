import React, { FC } from 'react';
import { Hint } from './geolearnrTypes';
import './flex.css';
import { BaseBox } from './baseBox';

type BollardsInfoProps = {
    bollards?: Hint[] | undefined;
}

export const BollardsInfo:FC<BollardsInfoProps> = ({
    bollards
}) => {
    return(
        <BaseBox title="Bollards">
            <div id="bollardInfo" className="flex-container">
                {bollards && bollards.map(bollard => (
                    <div className="flex-fifths">
                        <div style={{textAlign: 'center'}}>{bollard.description}</div>
                        <img src={bollard.image_url} style={{width: '90%', display: 'block', margin: '0px auto', maxHeight: '200px'}}/>
                    </div>)
                )}
            </div>
        </BaseBox>
    )
}