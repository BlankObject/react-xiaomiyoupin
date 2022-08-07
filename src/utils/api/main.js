import axios from './index'

export const getMainContent = async () => {
    return await axios.post('/main')
}

export const getRecommend = async () => {
    return await axios.post('/main/recommend')
}

export const getSearchWord = async () => {
    return await axios.post('/main/searchWord')
}