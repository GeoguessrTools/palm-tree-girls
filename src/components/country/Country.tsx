import React, { FC } from 'react';
import { useParams } from 'react-router-dom'

export const Country: FC = () => {
    const params = useParams();
    console.log(params)

    return(
        <div>Its-a-me. {params.country?.charAt(0).toUpperCase()}{params.country?.slice(1)}!</div>
    )
}