import React, { FC, useEffect, useState } from 'react';
import './flex.css';
import { BaseBox } from './baseBox';
import { SignageAndTraffic } from './geolearnrTypes';

type SignageAndTrafficProps = {
    signs: SignageAndTraffic;
}

export const SignageAndTrafficInfo:FC<SignageAndTrafficProps> = ({
    signs
}) => {
    const [keys, setKeys] = useState<string[]>([])

    useEffect(() => {
        if (signs) {
            setKeys(Object.keys(signs))
        }
    }, [])
    
    return(
        <BaseBox title="Signage, Roads, and Traffic">
            <div id="signageAndTrafficInfo" className="flex-container top-level-container">
                {keys && keys.map(key => (<div id="signs" className="sign-flex-1">
                    <h4 key={key} style={{textAlign: 'center'}}>{key}</h4>
                    <div className="flex-container" style={{border: 'double', alignItems: 'center', justifyContent: 'space-around'}}>
                    {signs[key as keyof SignageAndTraffic].map(sign => (
                        <div className="flex-fifths" style={{display: 'flex', justifyContent: 'center'}}>
                            <img src={sign.image_url} style={{minHeight: '100px'}} />
                            <div>{sign.description}</div>
                        </div>
                    ))}
                    </div>
                </div>))}
            </div>
        </BaseBox>
    )
}