import './newProduct.scss';
import { useState } from 'react';
export default function NewProduct(props) {
    const [leftNum, setleftNum] = useState(0);
    const [goodsData, setgoodsData] = useState(props.data.data.items);
    const handleMove = (type) => {
        if((type===0&&leftNum===0)||(type&&leftNum===(-271*goodsData.length-4*-271)))return
        type ? setleftNum(leftNum - 271) : setleftNum(leftNum + 271)
        
    }
    const handleClick = (value) => {
        console.log(value)
        const navigate = window.open('_blank')
        navigate.location.href=`/goodsDetail?gid=${value.gid}`
    }
    return (
        <div className="yiho-new-product">
            <div className="yiho-new-product-container">
                <div className="new-product-title">
                    <div className="new-product-title-left">
                        <span className="title-left-1">每日新品</span>
                        <span className="title-left-2">每天10点 惊喜不断</span>
                    </div>
                    <div className="new-product-title-right">
                        <div>
                            <span>更多</span>
                        </div>
                        <div className="new-product-title-right-icon">

                        </div>
                    </div>
                </div>
                <div className="yiho-new-product-goods-container">
                    <div className="new-product-goods-list" style={{left:leftNum}}>
                        {
                            goodsData.map((item, index) => {
                                return (
                                    <div key={index} className="new-product-goods-item" onClick={()=>handleClick(item)}>
                                        <div className="goods-item-img">
                                            <img style={{'width':'100%',height:'100%'}} src={item.pic_url} alt="" />
                                        </div>
                                        <div className="goods-item-des">
                                            <div>
                                                <span title={ item.name}>{ item.name}</span>
                                            </div>
                                            <div style={{'fontSize':'14px','color':'#666','height':'18px',lineHeight:'18x',marginTop:'8px'}}>
                                                <span title={ item.summary.slice(0,item.summary.length/2+2)}>{ item.summary.slice(0,item.summary.length/2+2)}...</span>
                                            </div>
                                            <div className="goods-item-price">
                                                <div className="item-price-left">
                                                    <span style={{'fontSize':'14px'}}>¥</span>
                                                    <span style={{ 'fontSize': '22px' }}>{ item.price_min/100}</span>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='yiho-banner-btn yiho-banner-left' onClick={()=>handleMove(0)}></div>
                    <div className='yiho-banner-btn yiho-banner-right' onClick={()=>handleMove(1)}></div>
                </div>
            </div>
        </div>
    )
}