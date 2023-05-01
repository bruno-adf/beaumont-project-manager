import React, { useEffect, useState } from 'react'
import { Header, RowContainer, Container, Section, Row, Info, InputsContainer } from './Style'
import EditClientData from './popups/EditClientData/Popup.jsx'
import EditProjectData from './popups/EditProjectData/Popup.jsx'
import Input from './components/Input/Component.jsx'
import { useNavigate, useParams } from 'react-router-dom'
import DBI from '../../services/DBInterface'
import { BiEditAlt, BiTrash } from 'react-icons/bi'

function Page() {

  const [editClientDataPopup, setEditClientDataPopup] = useState()
  const [editProjectDataPopup, setEditProjectDataPopup] = useState()

  const [data, setData] = useState()
  const { projectId } = useParams();

  const getProject = async () => {
    const data = await DBI.getProject(projectId)
    setData(data)
    console.log(data)
  }

  function editClientData () {
    if(editClientDataPopup === true) setEditClientDataPopup(false)
    else setEditClientDataPopup(true)
  }
  function editProjectData () {
    if(editProjectDataPopup === true) setEditProjectDataPopup(false)
    else setEditProjectDataPopup(true)
  }

  useEffect(() => {
    getProject()
  }, [])

  let navigate = useNavigate()

  return data && (
    <Container>
      <Header></Header>
      <EditClientData trigger={editClientDataPopup} setTrigger={editClientData}/>
      <EditProjectData trigger={editProjectDataPopup} setTrigger={editProjectData}/>
      <p>{projectId}</p>
      <button onClick={() => navigate('/projects')}>voltar</button>
      <button onClick={() => getProject()}>carregar</button>
      <RowContainer>
        <Row>
          <Section>
            <div className='TitleAndButtons'>
              <h1>{data.name}</h1>
              <div className='buttons'>
                  <BiEditAlt className='button' color='#003117' size={'20px'} onClick={() => editClientData()}/>
              </div>
            </div>
            <div className='Infos'>
              <h2>Dados do cliente:</h2>
              <Info>
                <h3>{data.clientData.number}</h3>
                <p>Número</p>
              </Info>
              <Info>
                <h3>{data.clientData.cpf}</h3>
                <p>CPF</p>
              </Info>
              <Info>
                <h3>{data.clientData.address}</h3>
                <p>Endereço</p>
              </Info>
              <Info>
                <h3>{data.clientData.email}</h3>
                <p>E-mail</p>
              </Info>
            </div>
          </Section>
          <Section>
            <div className='TitleAndButtons'>
              <h2>Dados do projeto</h2>
              <div className='buttons'>
                  <BiEditAlt className='button' color='#003117' size={'20px'} onClick={() => editProjectData()}/>
                  <BiTrash style={{marginLeft: '10px'}} className='button' color='#003117' size={'20px'}/>
              </div>
            </div>
            <div className='Infos'>
              <Info>
                <h3>{data.projectData.start}</h3>
                <p>Início</p>
              </Info>
              <Info>
                <h3>{data.projectData.end}</h3>
                <p>Entrega</p>
              </Info>
              <Info>
                <h3>{data.projectData.ambientCount}</h3>
                <p>Ambientes</p>
              </Info>
              <Info>
                <h3>{data.projectData.batch}</h3>
                <p>Lote</p>
              </Info>
              <Info>
                <h3>{data.projectData.designers}</h3>
                <p>Projetistas</p>
              </Info>
              <Info>
                <h3>{data.projectData.totalValue}</h3>
                <p>Valor Total</p>
              </Info>
            </div>
          </Section>
        </Row>
        <Row>
          <Section>
            <div className='TitleAndButtons'>
              <h2>Custos</h2>
              <div className='buttons'>
                  <BiEditAlt className='button' color='#003117' size={'20px'}/>
              </div>
            </div>
            <div className='Infos'>
              <Info>
                <h3>{data.costs.designers}</h3>
                <p>Projetistas</p>
              </Info>
              <Info>
                <h3>{data.costs.assembler}</h3>
                <p>Montador</p>
              </Info>
              <Info>
                <h3>{data.costs.freight}</h3>
                <p>Frete</p>
              </Info>
              <Info>
                <h3>{data.costs.factory}</h3>
                <p>Fábrica</p>
              </Info>
              <Info>
                <h3>{data.costs.taxes}</h3>
                <p>Impostos</p>
              </Info>
              <Info>
                <h3>{data.costs.inputs}</h3>
                <p>Insumos</p>
              </Info>
              <Info>
                <h3>{data.costs.totalValue}</h3>
                <p>Valor total</p>
              </Info>
            </div>
          </Section>
          <Section>4</Section>
        </Row>
      </RowContainer>
      <InputsContainer>
        <h1>Insumos</h1>
        <div className='inputs'>
          {data.inputs.map((input, id) => {
            return <Input key={id}
            inputId={id} 
            name={input.name}
            supplier={input.supplier}
            amount={input.amount}
            size={input.size}
            value={input.totalValue}
            color={input.color}
            setEdit={editClientData}
            ></Input>
          })}
          <h2>+ Adicionar insumo</h2>
        </div>
      </InputsContainer>
    </Container>
  )
}

export default Page