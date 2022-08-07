import { useState } from 'react';
import './index.scss';
export default function FixedBar(props) {
    const [hoverList, sethoverList] = useState([-1610, -1236, -760, -1780, -1338]);
    const [oldList, setoldList] = useState([-1644, -1270, -794, -998, -1304]);
    const handleTop = () => {
        window.scrollTo(0,0)
    }
    return (
        <div className="yiho-fixed-bar-container" style={{'boxShadow': '0 0 18px rgb(0 0 0 / 10%)'}}>
            <div className='yiho-fixed-bar'>
                <div className='yiho-fixed-bar-item yiho-fixed-bar-item-lxkf'>
                    <div className='yiho-fixed-bar-item-kf yiho-fixed-bar-item-icon'>
                    </div>
                    <div className='yiho-fixed-bar-item-text'>
                        <span>联系客服</span>
                    </div>
                    <div className='yiho-fixed-bar-item-service'>
                        <div className='servicr-container'>
                            <p style={{margin:0,'marginTop': '8px','color': '#333','fontSize': '12px'}}>小米有品平台问题，建议反馈，商户和物流问题投诉等请拨打 小米有品客服热线</p>
                            <p style={{margin:0,'marginTop': '15px','color': '#845f3f','fontSize': '20px'}}>952899</p>
                            <p style={{margin:0,'marginTop': '1px','color': '#666','fontSize': '12px'}}>(周一至周日 8：00-22：00)</p>
                            <p style={{margin:0,'marginTop': '18px','color': '#333','fontSize': '12px'}}>小米/米家自营品牌，手机电视智能硬件商品或订单发货/退款售后问题 请拨打小米自营客服热线</p>
                            <p style={{margin:0,'marginTop': '15px','color': '#845f3f','fontSize': '20px'}}>400-100-5678</p>
                            <p style={{margin:0,'marginTop': '1px','color': '#666','fontSize': '12px'}}>(周一至周日 8：00-18：00)</p>
                        </div>
                        <span className='service-icon'></span>
                    </div>
                </div>
                <div className='yiho-fixed-bar-item yiho-fixed-bar-item-xzapp'>
                    <div className='yiho-fixed-bar-item-icon yiho-fixed-bar-item-app'>
                    </div>
                    <div style={{'display':'flex','flexDirection':'column'}} className='yiho-fixed-bar-item-text'>
                        <span>下载</span>
                        <span>APP</span>
                    </div>
                    <div className='yiho-fixed-item-app'>
                        <div className='app-container'>
                            <img style={{'width':'88px','height':'88px','margin': '0 auto 10px'}} src="//cdn.cnbj1.fds.api.mi-img.com/youpin-pc/production/YouPin_PC/static3/media/code.8d037abc.png"></img>
                            <span>下载小米有品APP<br/>得新人礼包</span>
                        </div>
                        <span className='service-icon'></span>
                    </div>
                </div>
                <div className='yiho-fixed-bar-item yiho-fixed-bar-item-xryl'>
                    <div className='yiho-fixed-bar-item-icon yiho-fixed-bar-item-new'>
                    </div>
                    <div className='yiho-fixed-bar-item-text'>
                        <span>新人有礼</span>
                    </div>
                    <div className='item-xryli'>
                        <div className='item-xryli-container'>
                            <div className='item-xryli-icon'></div>
                            <img className='item-xryli-icon1' src="//cdn.cnbj1.fds.api.mi-img.com/youpin-pc/production/YouPin_PC/static3/media/code.8d037abc.png" alt="" />
                            <span>立即扫码下载·小米有品 APP</span>
                        </div>
                        <span className='item-xryli-icon2'></span>
                    </div>
                </div>
                <div className='yiho-fixed-bar-item yiho-fixed-bar-item-gzwx'>
                    <div className='yiho-fixed-bar-item-icon yiho-fixed-bar-item-wx'>
                    </div>
                    <div className='yiho-fixed-bar-item-text'>
                        <span>关注微信</span>
                    </div>
                    <div className='item-wx'>
                        <div className='item-wx-container'>
                            <img className='item-wx-icon' src="//cdn.cnbj1.fds.api.mi-img.com/youpin-pc/production/YouPin_PC/static3/media/wx_code.08890cf0.png"></img>
                            <span>扫码关注「小米有品」微信服务号，签到积分赢大奖</span>
                        </div>
                        <span className='item-wx-icon1'></span>
                    </div>
                </div>
                <div className='yiho-fixed-bar-item yiho-fixed-bar-item-hdtb' style={{'borderBottom':0}} onClick={handleTop}>
                    <div className='yiho-fixed-bar-item-icon yiho-fixed-bar-item-top'>
                    </div>
                    <div className='yiho-fixed-bar-item-text'>
                        <span>回到顶部</span>
                    </div>
                </div>
            </div>
        </div>
    )
}