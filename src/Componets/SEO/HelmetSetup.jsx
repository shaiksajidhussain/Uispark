import React from 'react';
import { Helmet } from 'react-helmet';

const HelmetSetup = ({ title, description, keywords }) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            {/* Add other head elements or meta tags as needed */}
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="canonical" href={window.location.href} />
        </Helmet>
    );
};

export default HelmetSetup;