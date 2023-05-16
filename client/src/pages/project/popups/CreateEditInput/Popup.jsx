import React, { useState } from 'react'
import { Container, Background, Info, Confirm, Cancel } from './Style'
import 'react-datepicker/dist/react-datepicker.css'

function Popup({ data, save, trigger, setTrigger }) {

  const [name, setName] = useState(data.clientData.name)
  const [cpf, setCPF] = useState(data.clientData.cpf)
  const [celphone, setCelphone] = useState(data.clientData.number)
  const [address, setAddress] = useState(data.clientData.address)
  const [email, setEmail] = useState(data.clientData.email)

  function done (operation) {
    if (operation === 'abort') {
      setName(data.clientData.name)
      setCPF(data.clientData.cpf)
      setCelphone(data.clientData.number)
      setAddress(data.clientData.address)
      setEmail(data.clientData.email)
    } else {
      const clientData = {
        "name": name,
        "cpf": cpf,
        "number": celphone,
        "address": address,
        "email": email
      }
      save('', clientData, '')
    }
    setTrigger()
  }

  return trigger && (
    <Background>
      <Container>
        <h1>Novo insumo</h1>
        <Cancel onClick={() => done('abort')}>Cancelar</Cancel>
        <Info small>
          <h3 className='title'>Nome</h3>
          <input className='input' type="text" />
        </Info>
        <Info small>
          <h3 className='title'>Fornecedor</h3>
          <input className='input' type="text" />
        </Info>
        <Info small>
          <h3 className='title'>Quantidade</h3>
          <input className='input' />
        </Info>
        <Info small>
          <h3 className='title'>Tamanho</h3>
          <input className='input' type="text" />
        </Info>
        <Info small>
          <h3 className='title'>Valor unitário</h3>
          <input className='input' type="text" />
        </Info>
        <Info small>
          <h3 className='title'>Cor</h3>
          <input className='input' type="text" />
        </Info>
        <Confirm
          onClick={() => done()}>Confirmar</Confirm>
      </Container>
    </Background>
  )
}

export default Popup