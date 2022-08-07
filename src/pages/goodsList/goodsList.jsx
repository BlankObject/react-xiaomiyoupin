import './goodsList.scss'
import React from 'react';
import Header from '../main/header/header';
import HeaderBar from '../main/headerBar/headerBar';
import FixedBar from '../../components/fixedBar/index';
import Footer from '../main/footer/footer';
import GoodsItem from './goodsItem/goodsItem';
import { useSearchParams } from 'react-router-dom';
import { useEffect ,useState} from 'react';
import { getCatList } from '../../utils/api/cat';
import { Pagination } from 'antd';
export default function GoodsList(props) {
    const [searchParams, setSearchParams] = useSearchParams()
    const [catGoods, setcatGoods] = useState({});
    useEffect(() => {
        getGoodsList()
        return () => {
            
        }
    },[])
    const getGoodsList = async () => {
        let queryId = searchParams.get('queryId')
        let categoryName = searchParams.get('categoryName')
        let result = await getCatList({ queryId, queryString: categoryName, pageIdx: 0, pageSize: 20, source: 'searchPage' })
        console.log(result.data)
        if (result.code === 200) {
            setcatGoods(result.data)
        }
    }
    const onChangePage = (page, pageSize) => {
        console.log(page,pageSize)
    }
    return (
        <div>
            <Header></Header>
            <HeaderBar></HeaderBar>
            <FixedBar></FixedBar>
            <div className='goodsList-container'>
                <div className='goodsList-container-temp'>
                    <div style={{'marginBottom':'5px'}}>
                        <span>为您找到</span><span style={{'color':'#845f3f'}}>{ catGoods.total}</span><span>条结果</span>
                    </div>
                    <div style={{'display':'flex','flexWrap':'wrap'}}>
                        {
                            catGoods?.data?.goods.map((item, index) => {
                                return (
                                    <div key={item.data.goodsInfo.gid} style={{marginLeft:index%4===0?'0px':'5px'}}>
                                        <GoodsItem data={item.data}></GoodsItem>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='yiho-cat-pagination'>
                    <Pagination onChange={onChangePage} defaultCurrent={1} defaultPageSize={20} total={51} showSizeChanger={false}></Pagination>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}