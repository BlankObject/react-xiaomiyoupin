import axios from './index';
/**
 * 获取商品详情信息
 * @param {*} info 
 * @returns 
 */
export const getGoodsDetail = async (info) => {
    return await axios.post('/goods/detail',info)
}

export const getImageDetail = async (gid) => {
    return await axios.post('/goods/getImageDetails',{gid})
}

export const getDetailRecommend = async (gid) => {
    return await axios.post('/goods/getDetailRecommend',{gid})
}
