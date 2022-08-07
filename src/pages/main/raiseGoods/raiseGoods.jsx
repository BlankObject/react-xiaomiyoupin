import "./raiseGoods.scss";
import { useState } from "react";

//众筹
export default function RaiseGoods(props) {
    const [data, setdata] = useState(props.data.data.items);
    console.log(data)
    return (
        <div className="yiho-raise-goods">
            <div className="yiho-raise-goods-container">
                <div className="raise-goods-title">
                    <div className="raise-goods-title-left">
                        <span className="title-left-1">小米有品众筹</span>
                        <span className="title-left-2">永远好奇 永远年轻</span>
                    </div>
                    <div className="raise-goods-title-right">
                        <div>
                            <span>更多</span>
                        </div>
                        <div className="raise-goods-title-right-icon">

                        </div>
                    </div>
                </div>
                <div className="raise-goods">
                    <div className="raise-goods-item">
                        <div className="raise-goods-item-info">
                            <div>
                                <div className="goods-item-name">
                                    <span title={ data[0].name}>{ data[0].name}</span>
                                </div>
                                <div className="goods-item-des">
                                    <span title={ data[0].summary}>{ data[0].summary.slice(0,15)+(data[0].summary.length>15?'...':'')}</span>
                                </div>
                                <div className="goods-item-price">
                                    <span style={{'fontSize':'14px','verticalAlign':'top','marginRight':'7px'}}>¥</span>
                                    <span>{ data[0].market_price/100}</span>
                                </div>
                            </div>
                            <div className="goods-item-img">
                                <img style={{'width':'100%','height':'100%'}} src={data[0].pic_url} alt="" />
                            </div>
                        </div>
                        <div className="raise-goods-item-progress">
                            <div className="raise-goods-item-progress1" style={{width:data[0].progress<100?data[0].progress+'%':100+'%'}}></div>
                        </div>
                        <div className="item-progress-num">
                            <div style={{'display':'flex','alignItems':'center'}}>
                                <span className="progress-num1">{ data[0].saled_count}</span>
                                <span>人支持</span>
                                <span className="progress-hot-icon">火</span>
                            </div>
                            <div>
                                <span className="progress-num2">{ data[0].progress}</span><span style={{'fontSize':'14px','color': '#a92112'}}>%</span>
                            </div>
                        </div>
                    </div>
                    <div className="raise-goods-item1">
                        <div className="raise-goods-item-info1">
                            <div className="goods-item-name1">
                                <span title={ data[1].name}> { data[1].name}</span>
                            </div>
                            <div className="goods-item-price1">
                                <div style={{'lineHeight': '24px'
                                ,'height': '24px'}}>
                                    <span>¥</span><span>{ data[1].market_price/100}</span>
                                </div>
                                <div style={{float:'right',marginTop:'-10px'}}>
                                    <img style={{'width':'130px','height':'130px'}} src={data[1].pic_url}></img>
                                </div>
                            </div>
                        </div>
                        <div className="raise-goods-item-progress">
                            <div className="raise-goods-item-progress1" style={{width:data[1].progress<100?data[1].progress+'%':100+'%'}}></div>
                        </div>
                        <div className="item-progress-num">
                            <div style={{'display':'flex','alignItems':'center'}}>
                                <span className="progress-num1">{ data[1].saled_count}</span>
                                <span>人支持</span>
                                <span className="progress-hot-icon">火</span>
                            </div>
                            <div>
                                <span className="progress-num2">{ data[1].progress}</span><span style={{'fontSize':'14px','color': '#a92112'}}>%</span>
                            </div>
                        </div>
                    </div>
                    <div className="raise-goods-item1">
                        <div className="raise-goods-item-info1">
                            <div className="goods-item-name1">
                                <span title={ data[2].name}>{ data[2].name}</span>
                            </div>
                            <div className="goods-item-price1">
                                <div style={{'lineHeight': '24px'
                                ,'height': '24px'}}>
                                    <span>¥</span><span>{ data[2].market_price/100}</span>
                                </div>
                                <div style={{float:'right',marginTop:'-10px'}}>
                                    <img style={{'width':'130px','height':'130px'}} src={data[2].pic_url}></img>
                                </div>
                            </div>
                        </div>
                        <div className="raise-goods-item-progress">
                            <div className="raise-goods-item-progress1" style={{width:data[2].progress<100?data[2].progress+'%':100+'%'}}></div>
                        </div>
                        <div className="item-progress-num">
                            <div style={{'display':'flex','alignItems':'center'}}>
                                <span className="progress-num1">{ data[2].saled_count}</span>
                                <span>人支持</span>
                                <span className="progress-hot-icon">火</span>
                            </div>
                            <div>
                                <span className="progress-num2">{ data[2].progress}</span><span style={{'fontSize':'14px','color': '#a92112'}}>%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}