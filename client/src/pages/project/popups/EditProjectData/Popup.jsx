import React, { useState } from 'react'
import { Container, Confirm } from './Style'
import DatePicker, { registerLocale } from 'react-datepicker'
import ptBR from 'date-fns/locale/pt-BR'
import 'react-datepicker/dist/react-datepicker.css'
import AmbientPicker from '../../components/ambientPicker/Component.jsx'
registerLocale ('ptBR', ptBR)

function Popup({ trigger, setTrigger }) {

  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  return trigger && (
    <Container>
      <div className='content'>
        <div className='row'>
          <h1>Editando dados do projeto</h1>
          <h2 onClick={() => setTrigger()}>Cancelar</h2>
        </div>
        <div>
          <div>
            <div style={{width: '400px', height: '20px', backgroundColor: 'Orange', textAlign: 'Center', paddingTop: '5px', borderRadius: '5px', fontFamily: 'Inter'}}>Medir até 15/06</div>
          </div>
          <div className='row'>
            <div className='field cpfcelphone'>
              <h3>Data de início</h3>
              <DatePicker
              selected={startDate}
              onChange={(date) =>
              setStartDate(date)}
              dateFormat="dd/MM/yyyy"
              locale="ptBR"
              />
            </div>
            <div className='field cpfcelphone'>
              <h3>Data de entrega</h3>
              <DatePicker
              selected={endDate}
              onChange={(date) =>
              setEndDate(date)}
              dateFormat="dd/MM/yyyy"
              locale="ptBR"
              />
            </div>
          </div>
          <div className='field'>
            <h3>Ambientes</h3>
            <AmbientPicker/>
          </div>
          <div className='row'>
            <div className='field cpfcelphone'>
              <h3>Lote</h3>
              <input type="text" />
            </div>
            <div className='field cpfcelphone'>
              <h3>Valor Total</h3>
              <input type="text" />
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='field cpfcelphone'>
              <h3>Valor Total</h3>
              <input type="text" />
          </div>
          <Confirm>Confirmar</Confirm>
        </div>
      </div>
    </Container>
  )
}

export default Popup