import React, { FC, useState } from 'react';
import './flex.css';

type BaseBoxProps = {
    title: string;
    children: JSX.Element;
}

export const BaseBox:FC<BaseBoxProps> = ({
    title,
    children
}) => {
    const [isOpen, setIsOpen] = useState(true)
    return(
        <div className="accordion">
            <div className="accordion-item">
                <div className="accordion-title" onClick={() => setIsOpen(!isOpen)}>
                    <div>{title}</div> 
                    <div>{isOpen ? '-' : '+'}</div>
                </div>
                {isOpen && (<div className="accordion-content">
                    {children}
                </div>)}
            </div>
        </div>
    )
}