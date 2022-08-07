import './goodsSku.scss';
import { useState, useEffect } from "react";
export default function GoodsSku(props) {
    const [shopTags, setshopTags] = useState(props.shopTags);
    const [skuIndex, setskuIndex] = useState(0);
    const [productInfo, setProductInfo] = useState(props.productInfo);
    const [currentSku, setCurrentSku] = useState({});
    const [goodsNum, setgoodsNum] = useState(1);
    const shopTagsTemp = props.shopTags
    const productInfoTemp=props.productInfo
    useEffect(() => {
        handleShopTag()
        setProductInfo(props.productInfo)
        fristCurrentSku()
        return () => {
            
        };
    }, [shopTagsTemp, productInfoTemp]);
    const handleShopTag = () => {
        if (props.shopTags) {
            let temp= props.shopTags.map((item, index) => {
                return {
                    ...item,
                    index:0
                }
            })
            setshopTags(temp)

        }
    }
    //进来默认选中最低的价格
    const fristCurrentSku = () => {
        if(!props.productInfo)return
        let productInfo = Object.values(props.productInfo).find(item => item.price === props.priceMin)
        if (productInfo) {
            //修改sku的索引
            let temp = [...props.shopTags]
            productInfo.attributeValues.forEach((item, index) => {
                temp[index].tags.forEach((item1, index1) => {
                    if (item === item.name) {
                        temp[index].index=index1
                    }
                })
            })
            setCurrentSku(productInfo)
        }
    }
    const handleCurrentSku = (fatherIndex,index) => {
        let skuStr = ''
        shopTags.forEach((item, index) => {
            skuStr+=item.tags[item.index].name
        })
        console.log(skuStr)
        let currentPro = Object.values(productInfo).find((item, index) => {
            let proStr=''
            item.attributeValues.forEach((item1) => {
                proStr+=item1
            })
            // console.log(skuStr,proStr)
            if (skuStr === proStr) {
                return true
            }
        })
        //没有此sku搭配
        if (!currentPro) {
            currentPro = Object.values(productInfo).find((item) => {
                let proStr=''
                item.attributeValues.forEach((item1) => {
                    proStr+=item1
                })
                if (proStr.indexOf(shopTags[fatherIndex].tags[index].name)!==-1) {
                    return true
                }
            })

            //更新索引
            let temp = [...shopTags]
            let currentClick=shopTags[fatherIndex].tags[index].name
            currentPro.attributeValues.forEach((item, index) => {
                if (item !== currentClick) {
                    temp[index].tags.forEach((item1, index1) => {
                        if (item === item1.name) {
                            temp[index].index=index1
                        }
                    })
                }
            })
            setshopTags(temp)
        }
        console.log(currentPro)
        setCurrentSku(currentPro)
        return currentPro
    }
    const handleSkuClick = (fatherIndex,index) => {
        let temp = [...shopTags]
        temp[fatherIndex].index = index
        setshopTags(temp)
        let currentPro=handleCurrentSku(fatherIndex,index)
        // console.log(currentPro)
    }
    const handelgoodsNum = (type) => {
        if (type === 0) {
            setgoodsNum(goodsNum>1?goodsNum-1:1)
        } else {
            setgoodsNum(goodsNum+1)
        }
    }
    const handleInputGoodsNum = (e) => {
        console.log(e.nativeEvent.data)
    }
    return (
        <div className='yiho-goods-sku'>
            <div className='goods-sku-container'>
                <div className='sku-name'>
                    <span>{ currentSku.name}</span>
                </div>
                <div className='sku-name-tab'>
                    <span>{ currentSku.summary}</span>
                </div>
                <div className='sku-promotion-box'>
                    {
                        props.couponsInfo && props.couponsInfo.pidCoupons&&props.couponsInfo.pidCoupons[currentSku?.pid]?.fetchableCoupons.length>0?
                            (
                                <div className='sku-coupons'>
                                    <div className='promotion-left' style={{'width':'40px'}}>
                                        <span style={{'width':'40px'}}>优惠券:</span>
                                    </div>
                                    <div className='sku-coupons-btn'>
                                        <span>领劵</span>
                                    </div>
                                    <div className='sku-coupons-des' style={{'marginLeft':0}}>
                                        <span>{props.couponsInfo.pidCoupons[currentSku?.pid]?.fetchableCoupons[0]?.couponDesc?.valueDesc
                                            + props.couponsInfo.pidCoupons[currentSku?.pid]?.fetchableCoupons[0]?.couponDesc?.nameDesc}</span>
                                    </div>
                                </div>
                        ):<></>
                    }
                    {
                        props.activity && props.activity.pidAct&&props.activity.pidAct[currentSku?.pid]?.salePromotion?.length>0 ?
                            (<div className='other-box'>
                                <div className='promotion-left'>
                                    <span>促销:</span>
                                </div>
                                <div className='other-des'>

                                        {
                                            props.activity.pidAct[currentSku?.pid]?.salePromotion?.map((item, index) => {
                                                return (
                                                    <div key={index}>
                                                        <span className='other-des-logo'>{ item.tagName}</span>
                                                        <span>{ item.name}</span>
                                                    </div>
                                                )
                                            })
                                        }
                                        
                                </div>
                                {/* <div className='other-btn'>
                                    <a target='_blank' href={props.operation.wzl.href} className='other-btn'> { props.operation.wzl.hyperlinkWords}</a>
                                </div> */}
                            </div>
                        ):<></>
                    }
                    {
                        props.operation && props.operation.wzl ?
                            (<div className='other-box'>
                                <div className='promotion-left'>
                                    <span>更多:</span>
                                </div>
                                <div className='other-des'>
                                    <span>{props.operation.wzl.staticWords}</span>
                                    <a target='_blank' href={props.operation.wzl.href} className='other-btn'> { props.operation.wzl.hyperlinkWords}</a>
                                </div>
                                <div className='other-btn'>
                                    {/* <a target='_blank' href={props.operation.wzl.href} className='other-btn'> { props.operation.wzl.hyperlinkWords}</a> */}
                                </div>
                            </div>
                        ):<></>
                    }
                    
                </div>
                <div className='sku-price'>
                    <div className='sku-price-row'>
                        <div className='row-title'>
                            <span>售价</span>
                        </div>
                        <div className='row-price'>
                            <span className='price-1'>¥</span>
                            <span className='price-2'>{ currentSku.price?currentSku.price/100:0}</span>
                        </div>
                        <div className='old-price'>
                            <span>¥{ currentSku.marketPrice/100}</span>
                        </div>
                    </div>
                    <div className='sku-server'>
                        <div className='row-title'>
                            <div className='title-box'>
                                <span>服务</span>
                                <div className='row-title-icon'>!</div>
                            </div>
                        </div>
                        <div className='service-box'>
                            <div className='service-item'>
                                <div className='service-item-icon'></div>
                                <div className='service-item-text'>
                                    <span>{ props.services &&Object.values(props.services)[Object.values(props.services).length-1].text}</span>
                                </div>
                            </div>
                            {
                                props.services && Object.values(props.services).slice(0, Object.values(props.services).length - 1).map((item, index) => {
                                    return(
                                        <div key={index} className='service-item'>
                                            <div className='service-item-icon'></div>
                                            <div className='service-item-text'>
                                                <span>{item.text}</span>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <div className='service-item'>
                                <div className='service-item-icon'></div>
                                <div className='service-item-text'>
                                    <span>由{ props.brand&&props.brand.merchantName}发货并提供售后</span>
                                    <span style={{'marginLeft':'8px',lineHeight:'18px',color: '#9f8052',cursor:'pointer'}}>(查看商家资质)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='sku-address'>
                    <div className='address-left'>
                        <span>配送区域</span>
                    </div>
                    <div className='address-right'>
                        <span>广东 </span>
                        <span>广州市 </span>
                        <span>白云区 </span>
                        <span>{ currentSku.inventory>0?'有货':'无货'}</span>
                        <span style={{'marginLeft': '10px','color': '#666',cursor:'pointer'}}>修改</span>
                    </div>
                </div>
                <div className='sku-options'>
                    {
                        shopTags && shopTags.map((item, index) => {
                            return (
                                <div key={index} className='options-item'>
                                    <div className='options-item-name'>
                                        <span>{ item.name}</span>
                                    </div>
                                    <div className='item-select-box'>
                                        {
                                            item.tags.map((item1, index1) => {
                                                return (
                                                    <div onClick={()=>handleSkuClick(index,index1)} key={index1} className={index1===item.index?'item-select-sku item-select-sku-active':'item-select-sku'}>
                                                        <span>{ item1.name}</span>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='sku-num'>
                    <div className='num-left'>
                        <span>数量</span>
                    </div>
                    <div className='num-right'>
                        <div className='num-jian' onClick={()=>handelgoodsNum(0)}>
                            <div>
                                <svg style={{'transform': 'scale(0.5)'}} width="30px" height="30px" fill={goodsNum>1?'#9f8052':'#ccc'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 4">
                                    <rect width="40" height="4" rx="2" ry="2"></rect>
                                </svg>
                            </div>
                        </div>
                        <input className='num-input' value={goodsNum} onChange={handleInputGoodsNum}></input>
                        <div className='num-add'  onClick={()=>handelgoodsNum(1)}>
                            <div style={{'transform': 'scale(0.5)',width:"30px",height:"30px"}}>
                                <svg fill="#9f8052" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
                                    <path d='M38,17.1H22V2a2,2,0,0,0-4,0V17.1H2a2,2,0,0,0-2,2H0a2,2,0,0,0,2,2H18V38a2,2,0,0,0,4,0V21.1H38a2,2,0,0,0,2-2h0A2,2,0,0,0,38,17.1Z'></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='sku-btn'>
                    <div className='add-cart'>
                        <span>加入购物车</span>
                    </div>
                    <div className='add-pay'>
                        <span>立即购买</span>
                    </div>
                    <div className='add-co'>
                        <div className='con-icon'>

                        </div>
                        <div>
                            <span>收藏</span>
                        </div>
                    </div>
                    <div className='add-kf'>
                        <div className='kf-icon'>

                        </div>
                        <div>
                            <span>客服</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}