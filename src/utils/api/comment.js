import axios from './index';
export const getGoodsCommentTab = async(gid) => {
    return await axios.post('/goods/comment/tab',{gid})
}

export const getGoodsComments = async (info) => {
    return await axios.post('/goods/comment',info)
}