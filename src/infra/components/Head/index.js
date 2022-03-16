import React from 'react'
import PropTypes from 'prop-types'
import NextHead from 'next/head'

function Head({title, favicon}) {
    return (
        <NextHead>
            <title>{title}</title>
            <link rel="icon" href={favicon} />
        </NextHead>
    );
}

Head.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Head