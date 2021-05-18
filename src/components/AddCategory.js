import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { Button, Input, InputGroup, InputGroupAddon } from 'reactstrap';

export const AddCategory = ({setCategorias}) => {

    const [inputValue, setInputValue] = useState('');
    
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if( inputValue.trim().length > 2) {
            setCategorias( categorias => [inputValue, ...categorias]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <InputGroup style={{width: "90%"}} className="mx-5">
                <Input ype="text" value={inputValue} onChange={ handleInputChange }/>
                <InputGroupAddon addonType="append">
                    <Button onClick={handleSubmit}>Buscar</Button>
                </InputGroupAddon>
            </InputGroup>
        </form>
    )
}


AddCategory.propTypes = {
    setCategorias: PropTypes.func.isRequired
}