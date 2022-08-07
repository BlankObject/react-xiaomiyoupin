import React,{useState} from 'react';
import './goodsDetail.scss';
import Footer from '../main/footer/footer';
// const Header = React.lazy(() => import('../main/header/header'))
// const HeaderBar=React.lazy(()=>import('../main/headerBar/headerBar'))
import Header from '../main/header/header';
import HeaderBar from '../main/headerBar/headerBar';
import GoodsBanner from './goodsBanner/goodsBanner';
import GoodsSku from './goodsSku/goodsSku';
import FixedBar from "../../components/fixedBar/index";
import GoodsInfo from './goodsInfo/goodsInfo';
import {getGoodsDetail} from "../../utils/api/goods"
import { useEffect } from "react";
import { useSearchParams } from 'react-router-dom';
import LazyLoading from '../../components/lazyLoading/lazyLoading'
export default function GoodsDetail() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [detailInfo, setdetailInfo] = useState({});
    useEffect(() => {
        window.scrollTo(0, 0);
        getGoodsDetailInfo()
    }, [])
    const getGoodsDetailInfo = async () => {
        let pid = searchParams.get('pid')
        let gid = searchParams.get('gid')
        let result = await getGoodsDetail({ pid, gid, groupName: 'details' })
        // let temp = []
        // result.data.goods.shopTags.forEach((item, index) => {
        //     item.tags.forEach((item1) => {
        //         result.data.goods.propTags.forEach((item2) => {
        //             if (item1.tid === item2.tid) {
        //                 temp.push(item2)
        //             }
        //         })
        //     })
        // })
        // console.log(temp)
        // result.data.goods.propTags.forEach((item) => {
        // //    result.data.goods.productInfo[item.pid].tid=item.tid
        // })
        setdetailInfo(result.data)
        console.log(result.data)
    }
    return (
        <div>
            {
                Object.values(detailInfo).length>0 ? (
                    <>
                        <Header></Header>
                        <HeaderBar></HeaderBar>
                        <FixedBar></FixedBar>
                        <div style={{'paddingTop':'60px',width:'1080px',margin:'0 auto',display:'flex',justifyContent:'space-between'}}>
                            <GoodsBanner carouselMapList={detailInfo?.goods?.carouselMapList}></GoodsBanner>
                            <GoodsSku couponsInfo={detailInfo.couponsInfo} activity={detailInfo.activity} operation={detailInfo.operation} priceMin={detailInfo?.goods?.goodsInfo?.priceMin} productInfo={detailInfo?.goods?.productInfo} services={detailInfo?.goods?.services} brand={detailInfo?.goods?.brand} shopTags={detailInfo?.goods?.shopTags}></GoodsSku>
                        </div>
                        <div style={{width:'1080px',margin:'0 auto',marginTop:'67px'}}>
                            <GoodsInfo brand={detailInfo?.goods?.brand}></GoodsInfo>
                        </div>
                        <Footer></Footer>
                    </>
                ):<LazyLoading></LazyLoading>
            }
        </div>
    )
}