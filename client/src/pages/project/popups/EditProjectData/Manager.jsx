import DBI from "../../../../services/DBInterface"

export const saveData = async (id, info) => {
   const data = await DBI.getProject(id)
   const newData = {
    ...data,
    "projectData": info
   }
   console.log(newData)
}