import axios from 'axios'

export default class DBInterface {

    static getData() {
        const callApi = async () => {
            try {
                const options = {
                    method: 'get',
                    url: 'http://localhost:4444',
                    headers: {
                        'content-type': 'application/json'
                    },
                    data:
                    {
                        operation: 'getProjects'
                    }
                }
                const apiRes = await axios.request(options)
                return apiRes.data
            } catch (error) {
                console.log(error)
            }
        }
        return callApi()
    }
    static getProject(projectId) {
        const callApi = async () => {
            try {
                const options = {
                    method: 'get',
                    url: `http://localhost:4444/project/${projectId}`,
                    headers: {
                        'content-type': 'application/json'
                    }
                }
                const apiRes = await axios.request(options)
                return apiRes.data;
            } catch (error) {
                return error
            }
        }
        return callApi()
    }
    static saveProject(newProjectData) {
        // const options = {
        //     method: 'POST',
        //     url: `http://localhost:4444/saveProject`,
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     data: {
                
        //     }
        // }
        axios.post(`http://localhost:4444/saveProject`, {
            "newProjectData": newProjectData
        },{
            headers:{
            'content-type': 'application/json'
            }
        })

        // axios.request(options)
        //     .then((res) => console.log(res.data))
        //     .catch((error) => {
        //         console.log(error.response.data)
        //     })

        // const callApi = async () => {
        //     try {
        //         const reqData = {
        //             newProjectData: JSON.stringify(newProjectData)
        //         }
        //         const apiRes = await axios.post('http://localhost:4444/saveProject', reqData, { headers: { "Content-Type": "application/json" } })
        //         return apiRes.data
        //     } catch (error) {
        //         console.log(error)
        //     }
        // }
        // callApi()
    }
    static createProject () {
        const callApi = async () => {
            try {
                const options = {
                    method: 'get',
                    url: `http://localhost:4444/createProject`
                }
                const apiRes = await axios.request(options)
                return apiRes.data;
            } catch (error) {
                return error
            }
        }
        return callApi()
    }
}