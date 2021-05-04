import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [ categorias , setCategorias] = useState(['Naruto']);

    return (
        <>
            
            <h2>GifExpertApp</h2>
            
            <AddCategory 
                setCategorias = { setCategorias }
            />
            <br></br>
            <hr />

            <ol>
                {categorias.map( (categoria, index) => (
                        <GifGrid 
                            key={index}
                            categoria={categoria}
                        />
                ))}
            </ol>

        </>
    )
}