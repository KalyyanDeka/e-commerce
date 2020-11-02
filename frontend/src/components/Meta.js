import React from 'react'
import { Helmet } from "react-helmet"

const Meta = ( { title, description, keywords } ) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name='keyword' content={keywords} />
        </Helmet>
    )
}

Meta.defaultProps = {
    title: "Welcome to FlyBuy",
    description: "We sell the best top rated products",
    keywords: "electionics, buy electronics"
}

export default Meta
