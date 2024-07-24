import React from 'react';

const SvgIcon = ({ name, size = 24, color = 'currentColor' }) => {
    const svgPath = `../assets/icon/${name}.svg`;

    return (
        <svg width={size} height={size}>
            <use href={svgPath} fill={color} />
        </svg>
    );
};

export default SvgIcon;
