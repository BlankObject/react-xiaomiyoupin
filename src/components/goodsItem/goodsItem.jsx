import './goodsItem.scss';
export default function GoodsItem(props) {
    const handleClick = () => {
        let { gid } = props?.data
        const navigate = window.open('_blank')
        navigate.location.href=`/goodsDetail?gid=${gid}`
    }
    return (
        <div className="recommend-goods-list-item" onClick={()=>handleClick()}>
            <div className="goods-list-item-top">
                <div style={{'width':'154px','height':'154px'}}>
                    <img style={{'width':'154px','height':'154px'}} src={props?.data?.img800s} alt="" />
                </div>
            </div>
            <div className="goods-list-item-top-name">
                <span title={ props?.data?.summary}>{ props?.data?.summary}</span>
            </div>
            <div className="goods-list-item-bottom">
                <div className="item-bottom-tab">
                    {
                        props.data && props.data.labels1.map((item, index) => {
                            return (
                                item.name.length < 5&&index<4 ? (
                                    item.attrs.imageUrl &&!item?.formatTextInfo? <img key={index} style={{ 'height': '20px' ,'marginLeft':'8px'}} src={item.attrs.imageUrl} alt="" /> :
                                        (
                                            <span style={{ 'background': item.attrs.bgColor, 'color': item.attrs.fontColor, 'borderColor': item.attrs.borderColor }} className='header-name-1' key={index}>
                                                {item?.formatTextInfo?item?.formatTextInfo?.formatText[0]:item.name}
                                            </span>
                                        )
                                ):undefined
                            )
                        })
                    }
                    {/* <img style={{'height':'20px'}} src="https://img.youpin.mi-img.com/tag/4167059a2a83e6dece26ebc1300abaf8.png?w=192&h=42" alt="" />
                    <img style={{'height':'20px'}} src="https://img.youpin.mi-img.com/new_gms/ad04d64d_436f_4cf1_838e_96804dbdd88b.png"></img> */}
                </div>
                <div className="item-bottom-name">
                    <span title={ props?.data?.name}>{ props?.data?.name}</span>
                </div>
                <div className="item-bottom-price">
                    <span>¥</span><span style={{ 'fontSize': '16px' }}>{ props?.data?.priceMin/100}</span>
                    {/* <span style={{ 'fontSize': '12px' }}>起</span> */}
                </div>
            </div>
        </div>
    )
}