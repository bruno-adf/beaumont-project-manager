import React from 'react'
import { Container } from './Style'

function Popup({ trigger, setTrigger }) {
  return trigger && (
    <Container>
      <div className='content'>
        <div className='row'>
          <h1>Editando dados do cliente</h1>
          <h2 onClick={() => setTrigger()}>Cancelar</h2>
        </div>
        <div>
          <div className='field'>
            <h3>Nome</h3>
            <input />
          </div>
          <div className='row'>
            <div className='field cpfcelphone'>
              <h3>CPF</h3>
              <input />
            </div>
            <div className='field cpfcelphone'>
              <h3>Celular</h3>
              <input />
            </div>
          </div>
          <div className='field'>
            <h3>Endereço</h3>
            <input />
          </div>
          <div className='field'>
            <h3>E-mail</h3>
            <input />
          </div>
        </div>
        <button>Confirmar</button>
      </div>
    </Container>
  )
}

export default Popup