import './goodsItem.scss';
export default function GoodsItem(props) {
    const handleClick = () => {
        console.log(props.data)
        let {goodsInfo} =props.data
        const navigate = window.open('_black')
        let url = `/goodsDetail?gid=${goodsInfo.gid}&pid=${goodsInfo.pid}`
        navigate.location.href = url
    }
    return (
        <div className="recommend-goods-list-item" onClick={handleClick}>
            <div className="goods-list-item-top">
                <div style={{'width':'195px'}}>
                    <img style={{'width':'195px'}} src={props.data.goodsInfo.img800s} alt={props.data.goodsInfo.name} />
                </div>
            </div>
            <div className="goods-list-item-bottom">
                <div className="item-bottom-tab">
                    {
                        props.data.label.doubleRow?props.data.label.doubleRow.map((item, index) => {
                            return (
                                <img key={index} style={{'height':'20px','marginLeft':'8px'}} src={JSON.parse(item?.attrs).imageUrl}></img>
                            )
                        }):<div style={{'height':'20px'}}></div>
                    }
                    {/* <img style={{'width':'91px','height':'20px'}} src="https://img.youpin.mi-img.com/tag/4167059a2a83e6dece26ebc1300abaf8.png?w=192&h=42" alt="" />
                    <img style={{'width':'60px','height':'20px'}} src="https://img.youpin.mi-img.com/new_gms/ad04d64d_436f_4cf1_838e_96804dbdd88b.png"></img> */}
                </div>
                <div className="item-bottom-name">
                    <span title={ props.data.goodsInfo.name}>{props.data.goodsInfo.name.length>12?props.data.goodsInfo.name.slice(0,19)+'...':props.data.goodsInfo.name}</span>
                </div>
                <div className="item-bottom-price">
                    <span>¥</span><span >{ props.data.goodsInfo.priceMin/100}<span style={{'fontSize':'12px'}}>起</span></span>
                    {/* <span style={{ 'fontSize': '12px' }}>起</span> */}
                </div>
            </div>
        </div>
    )
}