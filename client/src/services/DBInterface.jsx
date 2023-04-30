import axios from 'axios'

export default class DBInterface {

    static getData () {
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
    static getProject (projectId) {
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
}