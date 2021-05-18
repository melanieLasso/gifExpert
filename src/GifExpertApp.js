import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
import 'bootstrap/dist/css/bootstrap.min.css';

export const GifExpertApp = () => {

    const [ categorias , setCategorias] = useState(['Naruto']);

    return (
        <>
            
            <h1 className="my-4">GifExpertApp</h1>
            <h5 className="mx-5 my-4 text-center"><strong>Descripción del proyecto </strong></h5>
            <h6 className="mx-5 my-4 text-center">Pequeña aplicación que hace llamadas a giphy.com para encontrar gifs de lo que ingresa el usuario por teclado.</h6>
            
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