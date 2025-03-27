import axios from "axios";

// export const deleteUser = async (id) => {
//     return axios.delete(`/api/users/${id}`)
// }

export const getCurrentUser = async () => {
    return axios.request({
        url: '/api/user/current',
        method: 'get',
    })
}

// export const deleteUser = async (id) => {
//     return myAxios.request({
//         url: `/api/users/${id}`,
//         method: 'delete' ,
//         data: id,
//         //header传递json格式的值
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
// }
