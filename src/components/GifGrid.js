import React from 'react';
import { useFetchGif } from '../hooks/useFetchGifs';
import { GiftGridItem } from './GiftGridItem';

export const GifGrid = ({categoria}) => {

    const { data:images, loading } = useFetchGif(categoria);

    return (
        <>
            { loading ? <p className="animate__animated animate__flash">Cargando...</p> :
                <>
                    <h3 className="animate__animated animate__flip">Gifs de {categoria}</h3>
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
            }
            
        </>
    )
}
