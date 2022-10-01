import React, { FC } from 'react';
import { BollardsAndExtra } from './geolearnrTypes';
import './flex.css';
import { BaseBox } from './baseBox';

type BollardsInfoProps = {
    bollards?: BollardsAndExtra | undefined;
}

export const BollardsInfo:FC<BollardsInfoProps> = ({
    bollards
}) => {
    return(
        <BaseBox title="Bollards">
            <div id="bollardInfo" className="flex-container">
                {bollards && bollards?.info.map(bollard => (
                    <div className="flex-fifths">
                        <img src={bollard.image_url} style={{width: '90%', display: 'block', margin: '0px auto', maxHeight: '200px'}}/>
                        <div style={{textAlign: 'center'}}>{bollard.description}</div>
                    </div>)
                )}
            </div>
        </BaseBox>
    )
}