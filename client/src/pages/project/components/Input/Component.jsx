import React from 'react'
import { Container, Info } from './Style'
import { BiTrash, BiEditAlt } from 'react-icons/bi'

function Component({ name, inputId, supplier, amount, size, value, color, setEdit, setDelete }) {

    let backgroundColor
    if (inputId % 2 === 0) {
        backgroundColor = '#F7F7F7'
    } else {
        backgroundColor = '#EEEEEE'
    }

    return (
        <Container style={{ backgroundColor: backgroundColor }}>
            <div className='infoContainer'>
                <h3>{name}</h3>
                <Info>
                    <h3>{supplier}</h3>
                    <p>Lote</p>
                </Info>
                <Info>
                    <h3>{amount}</h3>
                    <p>Lote</p>
                </Info>
                <Info>
                    <h3>{size}</h3>
                    <p>Lote</p>
                </Info>
                <Info>
                    <h3>{value}</h3>
                    <p>Lote</p>
                </Info>
                <Info>
                    <h3>{color}</h3>
                    <p>Lote</p>
                </Info>
                <div className='buttons'>
                    <BiEditAlt color='#003117' size={'20px'} onClick={() => setEdit()}/>
                    <BiTrash color='#003117' size={'20px'} onClick={() => setDelete()}/>
                </div>
            </div>
        </Container>
    )
}

export default Component