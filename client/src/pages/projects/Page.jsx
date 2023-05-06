import React, { useEffect, useState } from 'react'
import DBI from '../../services/DBInterface';
import { Header, Container, AddProjectButton, ProjectsContainer } from './Style'
import Project from './components/project/Component.jsx'
import DatePicker from 'react-datepicker'

function Page() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getData()
  },[])

  async function getData () {
    const data = await DBI.getData()
    setProjects(data)
  }

  return projects && (
    <Container>
      <Header>
        <AddProjectButton onClick={() => getData()}>+ Adicionar projeto</AddProjectButton>
      </Header>
      <ProjectsContainer>
        {projects.map((Item, Id) => {
          return <Project
          key={Id}
          projectId={Id}
          name={projects[Id].clientData.name}
          ambientCount={projects[Id].projectData.ambientCount}
          start={new Date(projects[Id].projectData.start).toLocaleDateString("pt-BR")}
          end={new Date(projects[Id].projectData.end).toLocaleDateString("pt-BR")}
          totalInputs={projects[Id].costs.inputs}
          totalValue={projects[Id].projectData.totalValue}
          designers={projects[Id].name}
          ></Project>
        })}
      </ProjectsContainer>
    </Container>
  )
}

export default Page