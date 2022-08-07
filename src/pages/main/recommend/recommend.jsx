import "./recommend.scss";
import { useState, useEffect } from "react";
import {getRecommend} from '../../../utils/api/main'
export default function Recommend() {
    const [goodsData, setgoodsData] = useState([]);
    const getRecommendData = async () => {
        let result = await getRecommend()
        let temp = []
        result.data.feeds.items.forEach((item, index) => {
            if (item.data.goods) {
               temp.push(item)
            }
        })
        setgoodsData(temp)
    }
    useEffect(() => {
        getRecommendData()
        return () => {
            
        };
    }, []);
    const handleClick = (value) => {
        console.log(value)
        let { gid } = value.data.goods
        const navigate = window.open('_blank')
        navigate.location.href=`/goodsDetail?gid=${gid}`
    }
    return (
        <div className="yiho-recommend">
            <div className="yiho-recommend-container">
                <div className="recommend-title">
                    <span>为你推荐</span>
                </div>
                <div className="recommend-goods-list">
                    {
                        goodsData.map((item, index) => {
                            return (
                                <div onClick={()=>handleClick(item)} key={index} className="recommend-goods-list-item"  style={{marginLeft:index%4===0?'0':'5px'}}>
                                    <div className="goods-list-item-top">
                                        <div style={{'width':'195px','height':'195px'}}>
                                            <img style={{'width':'195px','height':'195px'}} src={item?.data?.goods?.picUrl} alt="" />
                                        </div>
                                        <div className="goods-list-item-top-name">
                                            <span>{item?.data?.goods?.summary }</span>
                                        </div>
                                    </div>
                                    <div className="goods-list-item-bottom">
                                        {/* <div> */}
                                        <div className="item-bottom-tab">
                                            {
                                                item.data.goods.labels.map((item1, index1) => {
                                                    return (
                                                        <img key={index1} style={{'height':'20px',display:item1.attrs.imageUrl?'block':'none',marginLeft:'8px'}} src={item1.attrs.imageUrl} alt="" />  
                                                    )
                                                })
                                            }
                                                {/* 会员 */}
                                                {/* <img style={{'width':'91px','height':'20px'}} src="https://img.youpin.mi-img.com/tag/4167059a2a83e6dece26ebc1300abaf8.png?w=192&h=42" alt="" /> */}
                                                {/* 价保 */}
                                                {/* <img style={{'width':'60px','height':'20px'}} src="https://img.youpin.mi-img.com/new_gms/ad04d64d_436f_4cf1_838e_96804dbdd88b.png"></img> */}
                                        </div>
                                        {/* </div> */}
                                        <div className="item-bottom-name">
                                            <span>{ item.data.goods.name}</span>
                                        </div>
                                        <div className="item-bottom-price">
                                            <span>¥</span><span style={{ 'fontSize': '20px', marginLeft: '5px' }}>{ item.data.goods.priceMin/100}</span><span style={{ 'fontSize': '12px' }}>起</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}