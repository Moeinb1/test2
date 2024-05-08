import axios, { AxiosHeaders, InternalAxiosRequestConfig } from 'axios'

interface IAxiosRequest extends InternalAxiosRequestConfig {
    notUseToken?: boolean
    manualToken?: string
}

let baseURL = 'https://reqres.in'

const axiosInstance = axios.create({
    baseURL,
})

axiosInstance.interceptors.request.use(
    (request: IAxiosRequest) => {
        return request
    },
    (error) => {
        return Promise.reject(error)
    },
)

axiosInstance.interceptors.response.use(
    (response) => {
        return response
    },
    async function (error) {
        return Promise.reject(error)
    },
)

export default axiosInstance
