import React, { useEffect, useState } from 'react'
import { Header, RowContainer, Container, Section, Row, Info, InputsContainer, Timeline } from './Style'
import EditClientData from './popups/EditClientData/Popup.jsx'
import EditCostsData from './popups/EditCostsData/Popup.jsx'
import EditProjectData from './popups/EditProjectData/Popup.jsx'
import CreateEditInput from './popups/CreateEditInput/Popup.jsx'
import Input from './components/Input/Component.jsx'
import { useNavigate, useParams } from 'react-router-dom'
import DBI from '../../services/DBInterface'
import { BiEditAlt, BiTrash } from 'react-icons/bi'

function Page() {

  const [editClientDataPopup, setEditClientDataPopup] = useState()
  const [editProjectDataPopup, setEditProjectDataPopup] = useState()
  const [editCostsDataPopup, setEditCostsDataPopup] = useState()
  const [createEditInputPopup, setCreateEditInputPopup] = useState()

  const [data, setData] = useState()
  const { projectId } = useParams()

  const loadProject = async () => {
    const response = await DBI.getProject(projectId)
    console.log(response)
    setData(response)
  }
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'brl',
  })

  function editClientData () {
    if(editClientDataPopup === true) setEditClientDataPopup(false)
    else setEditClientDataPopup(true)
  }
  function editProjectData () {
    if(editProjectDataPopup === true) setEditProjectDataPopup(false)
    else setEditProjectDataPopup(true)
  }
  function editCostsData () {
    if(editCostsDataPopup === true) setEditCostsDataPopup(false)
    else setEditCostsDataPopup(true)
  }
  function createEditInput () {
    if(createEditInputPopup === true) setCreateEditInputPopup(false)
    else setCreateEditInputPopup(true)
  }

  function loadNewData(projectData, clientData, costsData){
    var newProjectData = data.projectData;
    if(projectData !== '')
    newProjectData = projectData

    var newClientData = data.clientData
    if(clientData !== '')
    newClientData = clientData

    var newCostsData = data.costs
    if(costsData !== '')
    newCostsData = costsData

    const newData = {
      ...data,
      "projectData": newProjectData,
      "clientData": newClientData,
      "costs": newCostsData
    }
    setData(newData)
  }

  useEffect(() => {
    loadProject()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  useEffect(() => {
    DBI.saveProject(data)
  },[data])

  let navigate = useNavigate()

  return data && (
    <Container>
      <Header></Header>
      <EditClientData save={loadNewData} data={data} trigger={editClientDataPopup} setTrigger={editClientData}/>
      <EditProjectData save={loadNewData} data={data} trigger={editProjectDataPopup} setTrigger={editProjectData}/>
      <EditCostsData save={loadNewData} data={data} trigger={editCostsDataPopup} setTrigger={editCostsData}/>
      <CreateEditInput save={loadNewData} data={data} trigger={createEditInputPopup} setTrigger={setCreateEditInputPopup}/>
      <p>{projectId}</p>
      <button onClick={() => navigate('/projects')}>voltar</button>
      <button onClick={() => loadProject()}>carregar</button>
      <RowContainer>
        <Row>
          <Section>
            <div className='TitleAndButtons'>
              <h1>{data.clientData.name !== '' ? data.clientData.name : 'Novo projeto'}</h1>
              <div className='buttons'>
                  <BiEditAlt className='button' color='#003117' size={'20px'} onClick={() => editClientData()}/>
              </div>
            </div>
            <div className='Infos'>
              <h2>Dados do cliente:</h2>
              <Info>
                <h3>{data.clientData.number !== '' ? data.clientData.number : 'n/a'}</h3>
                <p>Número</p>
              </Info>
              <Info>
                <h3>{data.clientData.cpf !== '' ? data.clientData.cpf : 'n/a'}</h3>
                <p>CPF</p>
              </Info>
              <Info>
                <h3>{data.clientData.address !== '' ? data.clientData.address : 'n/a'}</h3>
                <p>Endereço</p>
              </Info>
              <Info>
                <h3>{data.clientData.email !== '' ? data.clientData.email : 'n/a'}</h3>
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
                <h3>{data.projectData.start !== '' ? new Date(data.projectData.start).toLocaleDateString("pt-BR") : 'n/a'}</h3>
                <p>Início</p>
              </Info>
              <Info>
                <h3>{data.projectData.end !== '' ? new Date(data.projectData.end).toLocaleDateString("pt-BR") : 'n/a'}</h3>
                <p>Entrega</p>
              </Info>
              <Info>
                <h3>{data.projectData.ambients.length !== 0 ? data.projectData.ambients.join(', ') + '.' : 'n/a'}</h3>
                <p>Ambientes</p>
              </Info>
              <Info>
                <h3>{data.projectData.batch !== '' ? data.projectData.batch : 'n/a'}</h3>
                <p>Lote</p>
              </Info>
              <Info>
                <h3>{data.projectData.designers.length !== 0 ? data.projectData.designers.join(', ') + '.' : 'n/a'}</h3>
                <p>Projetistas</p>
              </Info>
              <Info>
                <h3>{data.projectData.totalValue !== '' ? formatter.format(data.projectData.totalValue) : 'n/a'}</h3>
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
                  <BiEditAlt className='button' color='#003117' size={'20px'} onClick={() => editCostsData()}/>
              </div>
            </div>
            <div className='Infos'>
              <Info>
                <h3>{data.costs.designers !== '' ? data.costs.designers : 'n/a'}</h3>
                <p>Projetistas</p>
              </Info>
              <Info>
                <h3>{data.costs.assembler !== '' ? data.costs.assembler : 'n/a'}</h3>
                <p>Montador</p>
              </Info>
              <Info>
                <h3>{data.costs.freight !== '' ? data.costs.freight : 'n/a'}</h3>
                <p>Frete</p>
              </Info>
              <Info>
                <h3>{data.costs.factory !== '' ? data.costs.factory : 'n/a'}</h3>
                <p>Fábrica</p>
              </Info>
              <Info>
                <h3>{data.costs.taxes !== '' ? data.costs.taxes : 'n/a'}</h3>
                <p>Impostos</p>
              </Info>
              <Info>
                <h3>{data.costs.inputs !== '' ? data.costs.inputs : 'n/a'}</h3>
                <p>Insumos</p>
              </Info>
              <Info>
                <h3>{data.costs.totalValue !== '' ? data.costs.totalValue : 'n/a'}</h3>
                <p>Valor total</p>
              </Info>
            </div>
          </Section>
          <Section>
            <div className='TitleAndButtons'>
              <h2>Linha do tempo</h2>
            </div>
            <Timeline>
              {data && data.timeline.map((timestamp, id) => {
                return <div key={id}>
                  <h3>{timestamp.output}</h3>
                  <p>{timestamp.time} - {timestamp.issuer}.</p>
                  </div>
              })}
            </Timeline>
          </Section>
        </Row>
      </RowContainer>
      <InputsContainer>
        <h1>Insumos</h1>
        <div className='inputs'>
          {data.inputs !== null && data.inputs.map((input, id) => {
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
          <h2 onClick={() => createEditInput()}>+ Adicionar insumo</h2>
        </div>
      </InputsContainer>
    </Container>
  )
}

export default Page