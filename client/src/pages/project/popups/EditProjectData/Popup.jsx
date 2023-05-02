import React, { useState } from 'react'
import { Container, Background, Info, Confirm, Cancel } from './Style'
import DatePicker, { registerLocale } from 'react-datepicker'
import ptBR from 'date-fns/locale/pt-BR'
import { saveData } from './Manager.jsx'
import 'react-datepicker/dist/react-datepicker.css'
import TagInput from '../../components/tagInput/Component'

registerLocale ('ptBR', ptBR)

function Popup({ trigger, setTrigger }) {

  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [ambients, setAmbients] = useState(['Cozinha', 'Sala'])
  const [batch, setBatch] = useState()
  const [totalValue, setTotalValue] = useState()
  const [designers, setDesigners] = useState()

  function saveNewData(){
    const data = {
      "start": startDate,
      "end": endDate,
      "ambients": ambients,
      "ambientCount": ambients.length,
      "batch": batch,
      "totalValue": totalValue,
      "designers": designers
    }
    saveData(0, data)
    setTrigger()
  }

  return trigger && (
    <Background>
      <Container>
        <h1>Editando dados do projeto</h1>
        <Cancel onClick={() => setTrigger()}>Cancelar</Cancel>
        <Info small>
          <h3 className='title'>Data de início</h3>
          <DatePicker
          onChange={(date) => setStartDate(date)}
          selected={startDate}
          locale={'ptBR'}
          dateFormat={'dd/MM/yyy'}
          customInput={<input className='input'/>}
          />
        </Info>
        <Info small>
          <h3 className='title'>Data de entrega</h3>
          <DatePicker
          onChange={(date) => setEndDate(date)}
          selected={endDate}
          locale={'ptBR'}
          dateFormat={'dd/MM/yyy'}
          customInput={<input className='input'/>}
          />
        </Info>
        <Info big>
          <h3 className='title'>Ambientes</h3>
          <TagInput/>
        </Info>
        <Info small>
          <h3 className='title'>Lote</h3>
          <input onChange={(e) => setBatch(e.target.value)} value={batch} className='input' type="text" />
        </Info>
        <Info small>
          <h3 className='title'>Valor total</h3>
          <input onChange={(e) => setTotalValue(e.target.value)} value={totalValue} className='input' type="text" />
        </Info>
        <Info small>
          <h3 className='title'>Projetista</h3>
          <input className='input' type="text" />
        </Info>
        <Confirm
        onClick={() => saveNewData()}>Confirmar</Confirm>
      </Container>
    </Background>
  )
}

export default Popup