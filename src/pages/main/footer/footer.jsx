import './footer.scss';
export default function Footer() {
    return (
        <div className='yiho-footer'>
            <div className='yiho-footer-container'>
                <div style={{'width':'123px','height':'45px'}}>
                    <img style={{'width':'123px','height':'45px'}} src="https://cdn.cnbj1.fds.api.mi-img.com/youpin-pc/production/YouPin_PC/static3/media/logo@2x.30cd8c00.png" alt="" />
                </div>
                <div className='yiho-footer-right'>
                    <div>
                        <div className='footer-info-item'>
                            <span className='info-item-text'>©xiaomiyoupin.com</span>
                            <span className='info-item-text'>苏B2-20180351 苏ICP备18025642号-1</span>
                            <img style={{'width':'15px',height:'15px'}} src='https://cdn.cnbj1.fds.api.mi-img.com/youpin-pc/production/YouPin_PC/static3/media/record-icon.0c577066.png'></img>
                            <a style={{'color':'#666','fontSize':'12px'}} href='http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32010502010244'>苏公网安备 32010502010244号</a>
                        </div>
                        <div className='footer-info-item'>
                            <span className='info-item-text'>企业名称：有品信息科技有限公司</span>
                            <span className='info-item-text'>关于我们</span>
                            <span className='info-item-text'>入驻有品</span>
                            <span>知识产权侵权投诉</span>
                        </div>
                        <div className='footer-info-item'>
                            <span className='info-item-text'>平台运营资质证照</span>
                            <span>医疗器械网络交易服务第三方平台备案凭证</span>
                        </div>
                        <div className='footer-info-item'>
                            <span>小米有品平台运营主体变更公告</span>
                        </div>
                        <div className='footer-info-item'>
                            <span>南京市建邺区白龙江东街8号3栋9层</span>
                        </div>
                    </div>
                    <div style={{'width':'100px','height':'36px',marginLeft:'50px'}}>
                        <img style={{'width':'100px','height':'36px'}} src='https://cdn.cnbj1.fds.api.mi-img.com/youpin-pc/production/YouPin_PC/static3/media/f-logo.76889756.png'></img>
                    </div>
                </div>
            </div>
        </div>
    )
}