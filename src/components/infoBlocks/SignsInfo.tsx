import React, { FC, useEffect, useState } from 'react';
import './flex.css';
import { BaseBox } from './baseBox';
import { Signs } from './geolearnrTypes';

type SignsProps = {
    signs: Signs;
}

export const SignsInfo:FC<SignsProps> = ({
    signs
}) => {
    const [keys, setKeys] = useState<string[]>([])

    const getFlexClass = (numItems: Number) => {
        if (numItems <= 6) {
            return 'flex-fifths sign-flex-' + numItems.toString();
        }
    }

    useEffect(() => {
        if (signs) {
            setKeys(Object.keys(signs))
        }
    }, [])
    
    return(
        <BaseBox title="Signage, Roads, and Traffic">
            <div id="signageAndTrafficInfo" className="flex-container top-level-container" style={{justifyContent: "space-evenly"}}>
                {keys && keys.map(key => (<div id="signs" className={getFlexClass(signs[key as keyof Signs].length)}>
                    <h4 key={key} style={{textAlign: 'center'}}>{key.charAt(0).toUpperCase() + key.slice(1) + " Signs"}</h4>
                    <div className="flex-container" style={{border: 'double', alignItems: 'center', justifyContent: 'space-around'}}>
                    {signs[key as keyof Signs].map(sign => (
                        <div className="flex-fifths" style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                            <img src={sign.image_url} style={{minHeight: '100px', maxHeight: '200px'}} />
                            <div>{sign.description}</div>
                        </div>
                    ))}
                    </div>
                </div>))}
            </div>
        </BaseBox>
    )
}