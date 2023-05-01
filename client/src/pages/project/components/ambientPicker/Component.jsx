import React, { useState } from 'react'
import { Ambient, Container } from './Style'
import { AiOutlineClose, AiOutlinePlus } from 'react-icons/ai'

function Component({list}) {

    const [ambients, setAmbients] = useState(['Cozinha', 'Quarto', 'Sala'])

    function saveData () {

    }
    function deleteItem(item) {
        const index = ambients.indexOf(item)
        const newArray = ambients
        newArray.splice(index, 1)
        setAmbients(newArray)
    }
    function addItem() {
        const newArray = [...ambients, 'novo ambiente']
        setAmbients(newArray)
    }

  return (
    <Container>
        {ambients.map((item, id) => {
            return <Ambient key={id}>
                <AiOutlineClose size='12px' style={{marginRight: '5px'}} color='red' onClick={() => deleteItem(item)}/>
                {item}
            </Ambient>
        })}
        <AiOutlinePlus style={{marginTop: '6px'}} size='12px' onClick={() => addItem()}/>
    </Container>

  )
}

export default Component