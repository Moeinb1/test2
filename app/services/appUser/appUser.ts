import axiosInstance from '@/app/config/axios'

const url = 'api/users'

//user-table
export const userList = (params: {
    sort?: string | number
    per_page?: number
    page?: number
    direction?: number | string
}) => {
    return axiosInstance({
        method: 'get',
        url: url,
        params,
    })
}

//userInfoProfile
export const getUserDetails = (params: { id?: string | number }) => {
    return axiosInstance({
        method: 'get',
        url: url + '/' + params.id,
    })
}
//userInfoProfile
export const deleteUser = (params: { id?: string | number }) => {
    return axiosInstance({
        method: 'delete',
        url: url + '/' + params.id,
    })
}
