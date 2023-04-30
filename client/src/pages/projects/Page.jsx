import React, { useEffect, useState } from 'react'
import DBI from '../../services/DBInterface';
import { Header, Container, AddProjectButton, ProjectsContainer } from './Style'
import Project from './components/project/Component.jsx'

function Page() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getData()
  },[])

  async function getData () {
    console.log('botão')
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
          name={projects[Id].name}
          ambientCount={projects[Id].projectData.ambients}
          start={projects[Id].projectData.start}
          end={projects[Id].projectData.end}
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