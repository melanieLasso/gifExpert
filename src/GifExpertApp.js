import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

    const [ categorias , setCategorias] = useState(['Shingeki', 'Naruto']);
    
    // const handleAdd = () => {
    //     setCategorias([...categorias, 'Full Metal']); //Hace una copia del arreglo y agrega la nueva al final
    //     //setCategorias(['Full Metal', ...categorias, ]); Hace una copia del arreglo y agrega la nueva al inicio
    // }
    return (
        <>
            
            <h2>GifExpertApp</h2>
            <hr />

            <AddCategory 
                setCategorias = { setCategorias }
            />

            <ol>
                {categorias.map( (categoria) => {
                    return (
                        <li key = {categoria}> {categoria} </li>
                    );
                })}
            </ol>

        </>
    )
}