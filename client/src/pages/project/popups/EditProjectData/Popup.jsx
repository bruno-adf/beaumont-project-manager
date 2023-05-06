import React, { useState } from 'react'
import { Container, Background, Info, Confirm, Cancel } from './Style'
import DatePicker, { registerLocale } from 'react-datepicker'
import ptBR from 'date-fns/locale/pt-BR'
import 'react-datepicker/dist/react-datepicker.css'
import TagInput from '../../components/tagInput/Component'

registerLocale ('ptBR', ptBR)

function Popup({ data, save, trigger, setTrigger }) {

  const [startDate, setStartDate] = useState(new Date(data.projectData.start))
  const [endDate, setEndDate] = useState(new Date(data.projectData.end))
  const [ambients, setAmbients] = useState(data.projectData.ambients)
  const [batch, setBatch] = useState(data.projectData.batch)
  const [totalValue, setTotalValue] = useState(data.projectData.totalValue)
  const [designers, setDesigners] = useState(data.projectData.designers)

  function handleAmbientChange (value){ setAmbients(value) }
  //function handleDesignersChange (value){ setDesigners(value) }

  function done(operation){
    setTrigger()
    if(operation === 'abort'){
      setStartDate(new Date(data.projectData.start))
      setEndDate(new Date(data.projectData.end))
      setAmbients(data.projectData.ambients)
      setBatch(data.projectData.batch)
      setTotalValue(data.projectData.totalValue)
      setDesigners(data.projectData.designers)
    }else{
      const projectData = {
        "start": startDate.toString(),
        "end": endDate.toString(),
        "ambients": ambients,
        "ambientCount": ambients.length,
        "batch": batch,
        "totalValue": totalValue,
        "designers": designers
      }
      save(projectData, '', '')
    }
  }

  return trigger && (
    <Background>
      <Container>
        <h1>Editando dados do projeto</h1>
        <Cancel onClick={() => done('abort')}>Cancelar</Cancel>
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
          <TagInput onChange={handleAmbientChange} value={ambients} />
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
        onClick={() => done('')}>Confirmar</Confirm>
      </Container>
    </Background>
  )
}

export default Popup