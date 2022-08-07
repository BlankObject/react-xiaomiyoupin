import './header.scss';
export default function Header() {
    const handleLOginOrReg = (type) => {
        const naviagte = window.open('_blank')
        naviagte.location.href=`/user/${type===0?'login':'register'}`
    }
    return (
        <div className="yiho-header">
            <div style={{width:'1080px'}}>
                <div className='header-content'>
                    <div style={{'marginRight':'8px'}}>
                        <span className=' cursor-pointer' onClick={()=>handleLOginOrReg(0)}>登录</span>
                        <span className=' cursor-pointer' style={{'marginLeft':'8px'}} onClick={()=>handleLOginOrReg(1)}>注册</span>
                    </div>
                    <span className='header-border'></span>
                    <div style={{'marginRight':'8px',marginLeft:'11px',cursor:'pointer'}}>
                        <span>帮助中心</span>
                    </div>
                    <span className='header-border'></span>
                    <div style={{ 'marginRight': '8px', marginLeft: '5px' }} className=" relative">
                        <span className='phone-icon'></span>
                        <span className=' cursor-pointer' style={{'paddingLeft':'30px'}}>下载 APP</span>
                    </div>
                    <span className='header-border'></span>
                    <div className=" relative header-temp">
                        <div className=' flex items-center cursor-pointer' style={{'paddingRight':'40px','paddingLeft':'11px'}}>
                            <span>资质证照 / 协议规则</span>
                            <div style={{ width: '13px', height: '13px', cursor: 'default',top:'20px',right:'10px'}} className=" absolute">
                                <svg fill="#ccc" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 22.5">
                                    <path d='M39.28.72h0a2.49,2.49,0,0,0-3.5,0L20,16.53,4.23.72A2.48,2.48,0,0,0,.72,4.23L18.24,21.78A2.48,2.48,0,0,0,20,22.5a2.52,2.52,0,0,0,1.77-.72L39.28,4.23A2.5,2.5,0,0,0,39.28.72Z'></path>
                                </svg>
                            </div>
                        </div>
                        <div style={{ 'boxShadow': '0 3px 28px rgb(0 0 0 / 10%)' }} className='header-select-con'>
                            <div style={{'textAlign': 'center',height:'35px',lineHeight:'35px'}} className="header-select-item">
                                <span>资质证照</span>
                            </div>
                            <div  style={{'textAlign': 'center',height:'35px',lineHeight:'35px'}} className="header-select-item">
                                <span>协议规则</span>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    )
}