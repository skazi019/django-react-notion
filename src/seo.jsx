import React from 'react';
import logo from './assets/logos/KS logo-04.png'
import { Helmet } from 'react-helmet';

export default function SEO({ title, url, description }) {

    return (
        <Helmet>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <link rel="manifest" href="../public/manifest.json" />


            <title>{title}</title>
            <link rel="canonical" href={url} />
            <link rel="icon" href={logo} />
            <link rel="apple-touch-icon" href={logo} />

            <meta name="description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={logo} />
            <meta property="og:image:alt" content="Kaushal Sharma Logo" />
            <meta property="og:type" content="website" />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@Kaushal_Shawrma" />
            <meta name="twitter:creator" content="@Kaushal_Shawrma" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={logo} />

        </Helmet>
    )
}
