import React, { useState } from 'react'
import { Container, Background, Info, Confirm, Cancel } from './Style'
import 'react-datepicker/dist/react-datepicker.css'

function Popup({ data, save, trigger, setTrigger }) {

  const [assembler, setAssembler] = useState(data.costs.assembler)
  const [taxes, setTaxes] = useState(data.costs.taxes)
  const [freight, setFreight] = useState(data.costs.freight)
  const [factory, setFactory] = useState(data.costs.factory)

  function done (operation) {
    if (operation === 'abort') {
      setAssembler(data.costs.assembler)
      setTaxes(data.costs.taxes)
      setFreight(data.costs.freight)
      setFactory(data.costs.factory)
    } else {
      const costs = {
        "designers": data.costs.designers,
        "inputs": data.costs.inputs,
        "assembler": assembler,
        "taxes": taxes,
        "freight": freight,
        "factory": factory,
        "totalValue": 
        parseInt(assembler) +
        parseInt(taxes) +
        parseInt(freight) +
        parseInt(factory) +
        parseInt(data.costs.inputs) +
        parseInt(data.costs.designers)
      }
      save('', '', costs)
      console.log(costs)
    }
    setTrigger()
  }

  return trigger && (
    <Background>
      <Container>
        <h1>Editando dados do cliente</h1>
        <Cancel onClick={() => done('abort')}>Cancelar</Cancel>
        <Info small>
          <h3 className='title'>Montador</h3>
          <input onChange={(e) => setAssembler(e.target.value)} value={assembler} className='input' type="text" />
        </Info>
        <Info small>
          <h3 className='title'>Impostos</h3>
          <input onChange={(e) => setTaxes(e.target.value)} value={taxes} className='input' type="text" />
        </Info>
        <Info small>
          <h3 className='title'>Frete</h3>
          <input onChange={(e) => setFreight(e.target.value)} value={freight} className='input' />
        </Info>
        <Info small>
          <h3 className='title'>Fábrica</h3>
          <input onChange={(e) => setFactory(e.target.value)} value={factory} className='input' type="text" />
        </Info>
        <Confirm
          onClick={() => done()}>Confirmar</Confirm>
      </Container>
    </Background>
  )
}

export default Popup