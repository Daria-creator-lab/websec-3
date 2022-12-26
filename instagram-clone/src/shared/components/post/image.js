import React from 'react'

export default function Image({ src, caption }) {
    const image = require(`../../images${src}`);
    return <img src={image} alt={caption} />;
}