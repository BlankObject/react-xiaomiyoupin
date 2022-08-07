import "./seckill.scss";
import { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom"
//秒杀
export default function Seckill(props) {
    const [time, settime] = useState('12:12:12');
    const [leftNum, setleftNum] = useState(0);
    const [goodsData, setgoodsData] = useState(props.data.data.goods);
    let timer = null
    const navigate = useNavigate()
    useEffect(() => {
        if(timer)clearInterval(timer)
        timer=setInterval (function () {
            handleCountdown()
        }, 1000);
        return () => {
            clearInterval(timer)
        }
    })
    
    const handleCountdown = () => {
        let nowtime = new Date();
        let endtime = new Date(props.data.data.end_time*1000);
        let lefttime = endtime.getTime() - nowtime.getTime(), 
        //leftd = Math.floor(lefttime/(1000*60*60*24)),  
        lefth = Math.floor(lefttime/(1000*60*60))>9?Math.floor(lefttime/(1000*60*60)):'0'+Math.floor(lefttime/(1000*60*60)),  
        leftm = Math.floor(lefttime/(1000*60)%60)>9?Math.floor(lefttime/(1000*60)%60):'0'+Math.floor(lefttime/(1000*60)%60), 
        lefts = Math.floor(lefttime / 1000 % 60)>9?Math.floor(lefttime / 1000 % 60):'0'+Math.floor(lefttime / 1000 % 60);  
        settime(lefth + ":" + leftm + ":" + lefts)
        //return lefth + ":" + leftm + ":" + lefts;  
    }
    const handleMove = (type) => {
        if((type===0&&leftNum===0)||(type&&leftNum===(-271*goodsData.length-4*-271)))return
        type ? setleftNum(leftNum - 271) : setleftNum(leftNum + 271)
        
    }
    const toGoodsDetai = (index) => {
        // navigate('/goodsDetail', { target: '_blank' })
        console.log(goodsData[index])
        let navigate = window.open('_black')
        let url=`/goodsDetail?gid=${goodsData[index].gid}&pid=${goodsData[index].pid}`
        navigate.location.href = url 
    }
    return (
        <div className="yiho-seckill">
            <div className="yiho-seckill-container">
                <div className="seckill-title">
                    <div className="seckill-title-left">
                        <span className="title-left-1">有品秒杀</span>
                        <div className="title-left-2">
                            <img style={{'width':'18px','height':'18px','marginRight':'3px'}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODE4NDU0MzZBMUNFMTFFODhFQUZGMUEzNDU1MUNGRjUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODE4NDU0MzdBMUNFMTFFODhFQUZGMUEzNDU1MUNGRjUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4MTg0NTQzNEExQ0UxMUU4OEVBRkYxQTM0NTUxQ0ZGNSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4MTg0NTQzNUExQ0UxMUU4OEVBRkYxQTM0NTUxQ0ZGNSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjQBja0AAANrSURBVHja7JhbSFRRFIbPMZWKykwjJQgs0Ihq6KXMKAfKQNOKohJ6kIh66/YmlUXY5SEqSSroRaSHSssiFYuKktJqXlKE6GqPJuS1C5jJ9G/4J1bDuextI/nQgo9ZM2fvdf69zz5rrz12OBy2xpPFR5yauSn/XMzWzh4rzhpn5icoHTwA30G5R7vT4Bs/3ewU29wDM90a2ZE15PDIFoEGMIffu0GaS5wfIAH85KeTDYBp9D+AQvBa95GtBS1CzBDYI65ngAPgFngjRKg1+Q7c5vUM0Uf1H6Y/D7SC1ToztANcFgu+F2wET8AqUMZAtsaSUMEfguOgmf1ugiReVwJ3giteM1QpxKjRZoNX4DqDrtEUY7Gdav+Y/dvACvCR19XMnvFb1OfAINdPDpgIXqoBiDZqrdSDXSDAEdv8DPD3erb7vUQYJ46DVIu7H1zUXdQWg6vRTRePoAYc5drxsyxwjGJssbhzQbtpHlKvfJMQowIVgWJNMRbbFbNfP39LYtx00zxULTr1cFSNo8xDql+QcSKDrTYRtBnk0R8BW5ymWNg+MBns92jTzrgj/J7HuFqCjgj/PHjk82gSovdGF1NvaYX4XqYjaBlYTP8rc0gs7QTjRnaDbD9BG4Rfz8QYS+tj3Iit9xOUI/y6MdrU61zu5ygoS/ihMRIUcrmfo6Bk4Xdr3mBY+Gka7T+53M+3HkrUFDQk/BdgocFs2X6C+oQ/WzPobtZEFkuWpyxh3EzOYq+fILktzNcUdJUCesX20MhSxsmWCP+tn6BW4a8zmPpm5pT3IklWuLQtFH6Ln6A7wlcb4wwDUap+Ws480+MiKJlxZa7zFPQcdNCfAg4bvtKfmexSWaZE2yHGtXifZzpvmTxh7OVOHwvLjdqAy3U311pwn/4E1sGBvxSj+t9gPIvxa03qoRKRwFJYORaMUkwBK4ZUkRhLTAu0LpDPStFi5ajq7GsgU1NIJts3iIw8wLhdnmd7F1MdJ0Vl1W0stJr4RoZ4ivgCpvIstpQLO9/hHoncUNtMBZWCk/TVKeSuOHnEs04uMnhstRSpBniBa6nS5JGViZNGKWcmyLO+7n84kYNikIM56FUt+s1QFdjOIJdENm7mY9kEVoIFYBbP7YPMQx086aqjdqeIeVaIqTL9s+H//0N/zNB4sV8CDACpgNIYcitWCgAAAABJRU5ErkJggg==" alt="" />
                            <span>{ new Date(props.data.data.start_time).getDate()}:00场</span>
                            <div className="seckill-time">
                                <div className="time-item">
                                    {time.split(':')[0]}
                                </div>:
                                <div className="time-item">
                                    {time.split(':')[1]}
                                </div>:
                                <div className="time-item">
                                    {time.split(':')[2]}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="seckill-title-right">
                        <div>
                            <span>更多</span>
                        </div>
                        <div className="seckill-title-right-icon">

                        </div>
                    </div>
                </div>
                <div className="yiho-seckill-goods-container">
                    <div className="seckill-goods-list" style={{left:leftNum}}>
                        {
                            goodsData.map((item, index) => {
                                return (
                                    <div key={item.iid} className="seckill-goods-item" onClick={()=>toGoodsDetai(index)}>
                                        <div className="goods-item-img">
                                            {/* https://img.youpin.mi-img.com/shop-fe/2593d60a_382e_4ecd_af72_3878521c553f.jpeg */}
                                            <img style={{'width':'100%',height:'100%'}} src={item.imgs.img_square} alt="" />
                                        </div>
                                        <div className="goods-item-des">
                                            <div>
                                                <span title={ item.name}>{ item.name}</span>
                                            </div>
                                            <div className="goods-item-price">
                                                <div className="item-price-left">
                                                    <span style={{'fontSize':'14px'}}>¥</span>
                                                    <span style={{ 'fontSize': '22px' }}>{ item.flash_price/100}</span>
                                                    <span style={{'fontSize':'12px'}}>起</span>
                                                </div>
                                                <div style={{paddingTop:'5px','marginLeft':'5px'}}>
                                                    <span style={{'fontSize':'9px'}}>¥</span>
                                                    <span style={{ 'fontSize': '14px' }}>{ item.market_price/100}</span>
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