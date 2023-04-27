import React from 'react'
import { GrCircleInformation } from 'react-icons/gr'
import { Container, InfoContainer,StatusBar, Info, Status } from './Style'

function Component({projectId, name, ambientCount, start, end, totalInputs, totalValue, designers}) {

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
          <p>{name}</p>
          <p className='subtitle'>Cliente</p>
        </Info>
        <Info>
          <p>{ambientCount}</p>
          <p className='subtitle'>Ambientes</p>
        </Info>
        <Info>
          <p>{start}</p>
          <p className='subtitle'>Início</p>
        </Info>
        <Info>
          <p>{end}</p>
          <p className='subtitle'>Entrega</p>
        </Info>
        <Info>
          <p>{totalInputs}</p>
          <p className='subtitle'>Total insumos</p>
        </Info>
        <Info>
          <p>{totalValue}</p>
          <p className='subtitle'>Valor total</p>
        </Info>
        <Info>
          <p>{designers}</p>
          <p className='subtitle'>Responsável</p>
        </Info>
        <Status>Engenharia</Status>
        <GrCircleInformation size={'25px'} color={'lightgrey'}/>
      </InfoContainer>
    </Container>
  )
}

export default Component