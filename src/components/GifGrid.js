import React, { useEffect, useState } from 'react';
import { GiftGridItem } from './GiftGridItem';

export const GifGrid = ({categoria}) => {

    const [images, setimages] = useState([]);

    const getGifs = async () => {
        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}&limit=10&api_key=DlOC6b1zupjsx6PX5T2O04CnNuU8UZYD`;
        const resp = await fetch( url );
        const { data } = await resp.json();
        
        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        });
        console.log(gifs);
        setimages(gifs);
    }

    useEffect(() => {
        getGifs();
    }, [categoria])

    return (
        <>
            <h3>{categoria}</h3>
            <div className="card-grid">
                
                <ol>
                {images.map( img => (
                <GiftGridItem 
                        key={ img.id} 
                        {...img}
                    />
                    )  
                )}
                </ol>
            </div>
        </>
    )
}
