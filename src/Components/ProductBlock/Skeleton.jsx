import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
    <ContentLoader
        className="berry-block"
        speed={2}
        width={280}
        height={452}
        viewBox="0 0 280 452"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}>
        <rect x="0" y="301" rx="10" ry="10" width="280" height="84" />
        <rect x="119" y="408" rx="30" ry="30" width="161" height="44" />
        <rect x="0" y="255" rx="10" ry="10" width="280" height="24" />
        <rect x="0" y="416" rx="10" ry="10" width="92" height="27" />
        <rect x="0" y="21" rx="11" ry="11" width="280" height="200" />
    </ContentLoader>
);

export default Skeleton;
