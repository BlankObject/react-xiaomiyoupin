import axios from './index';
//获取分类数据
export const getCategory = async() => {
    return await axios.post('/cat/list')
}

export const getCatDetail = async (catId) => {
    return await axios.post(
        '/cat/detail', {
            catId
        }
    )
}

export const getCatList = async (query)=>{
    return await axios.post(
        '/goods/catList',
        query
    )
}