import React from 'react'
import { GrCircleInformation } from 'react-icons/gr'
import { Container, InfoContainer,StatusBar, Info, Status } from './Style'
import { useNavigate } from 'react-router-dom'

function Component({projectId, name, ambientCount, start, end, totalInputs, totalValue, designers}) {

  let navigate = useNavigate()

  let backgroundColor
  if(projectId % 2 === 0){
    backgroundColor = 'white'
  }else{
    backgroundColor = '#F7F7F7'
  }

  return (
    <Container>
      <StatusBar style={{backgroundColor: 'red'}}/>
      <InfoContainer style={{backgroundColor: backgroundColor}}>
        <Info>
          <p>{name !== '' ? name : 'vazio'}</p>
          <p className='subtitle'>Cliente</p>
        </Info>
        <Info>
          <p>{ambientCount !== '' ? ambientCount : 'vazio'}</p>
          <p className='subtitle'>Ambientes</p>
        </Info>
        <Info>
          <p>{start !== 'Invalid Date' ? start : 'vazio'}</p>
          <p className='subtitle'>Início</p>
        </Info>
        <Info>
          <p>{end !== 'Invalid Date' ? end : 'vazio'}</p>
          <p className='subtitle'>Entrega</p>
        </Info>
        <Info>
          <p>{totalInputs !== '' ? totalInputs : 'vazio'}</p>
          <p className='subtitle'>Total insumos</p>
        </Info>
        <Info>
          <p>{totalValue !== '' ? totalValue : 'vazio'}</p>
          <p className='subtitle'>Valor total</p>
        </Info>
        <Info>
          <p>{designers.length !== 0 ? designers[0] : 'vazio'}{designers.length > 1 && designers !== '' && ` +${designers.length - 1}`}</p>
          <p className='subtitle'>Responsável</p>
        </Info>
        <Status>Engenharia</Status>
        <GrCircleInformation size={'25px'} color={'lightgrey'} onClick={() => navigate(`/projectview/${projectId}`)}/>
      </InfoContainer>
    </Container>
  )
}

export default Component