import React from 'react'

export const GiftGridItem = ( { title, url} ) => {
    console.log(url);
    return (
        <div className="card">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}
