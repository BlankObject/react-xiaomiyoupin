import './user.scss'
import { useState,useEffect } from 'react';
import { Outlet, Link, Router, NavLink, useNavigate, useParams,useLocation} from 'react-router-dom'
function User() {
    const params = useLocation()
    const [leftTab, setLeftTab] = useState();
    const updateTab = () => {
        setLeftTab(params.pathname === "/user/register" ? 64 : 0)
    }
    useEffect(() => {
        updateTab()
    });
    return (
        <div className="container flex">
            <div className='yiho-sider-layout__sider'>
                <div className="yiho-sider-layout__banner" style={{'backgroundImage':"url(https://cdn.web-global.fds.api.mi-img.com/mcfe--mi-account/static/static/media/banner.5b1efcd8.jpg)"}}>

                </div>
            </div>
            <div className='flex-auto'>
                <div>
                    <div  className='tabular-num p-5 overflow-hidden'>
                        <div className='text-2xl font-semibold leading-10 flex float-left'>
                            <img src="https://s02.mifile.cn/assets/static/image/logo-mi2.png" className='w-10 h-10 mr-3' alt="error_logo" />
                            <div>
                                小米账号
                            </div>
                        </div>
                        <div className=' float-right text-sm font-normal yiho-nav__item' style={{color:'#838383'}}>
                            <a className=' h-10 leading-10 mr-3 ml-3 yiho-nav__item1' >用户协议</a>
                            <a className=' h-10 leading-10 mr-3 ml-3 yiho-nav__item1' >隐私政策</a>
                            <a className=' h-10 leading-10 mr-3 ml-3 yiho-nav__item1'>帮助中心</a>
                            <div className=' ml-3 mr-3 border-r inline-block w-0 h-3' style={{borderColor:'#DDD','borderRightStyle':'solid'}}></div>
                            <div className='ml-3 mr-3 inline-block'>
                                <div>
                                ‎中文(简体)‎
                                    <svg width="14" height="14" className=' inline-block'>
                                        <path d="M10.732 5H3.268c-.224 0-.349.245-.21.413l3.732 4.49a.277.277 0 00.42 0l3.732-4.49c.139-.168.014-.413-.21-.413z" fill="currentColor" fillRule="nonzero"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' pt-5 relative center'>
                        <div className=' relative pt-10 pb-10 mr-auto ml-auto mt-0 mb-20 overflow-hidden rounded' style={{height:'517px', 'maxWidth': '450px','boxShadow':'0 20px 50px 0 hsl(0deg 0% 64% / 10%)','paddingLeft':'45px',paddingRight:'45px'}}>

                            <div className=' code absolute w-16 h-16 opacity-40 cursor-pointer' style={{ 'border': '32px solid #ff5c00', 'transition': 'all .3s cubic-bezier(0.65, 0.05, 0.36, 1)', 'right': '0px', 'top': '0px', 'borderLeftColor': 'rgba(0,0,0,0)', 'borderBottomColor': 'rgba(0,0,0,0)' }}>
                                    <span role={'img'} className=" absolute"style={{'right':'-24px','top':'-22px'}}>
                                        <svg width={'1em'} height={'1em'} fill="currentColor" aria-hidden="true" focusable="false" className=' text-4xl'>
                                            <path fill="#FFF" fillRule="nonzer" d="M0 16.977H16.94V.036H0v16.941zM4.235 4.271h8.47v8.47h-8.47v-8.47zM19.06.036v16.941h16.94V.036H19.06zm12.706 12.706h-8.471v-8.47h8.47v8.47zM6.353 10.624h4.235V6.39H6.353v4.235zM0 36.036H16.94V19.095H0v16.94zM4.235 23.33h8.47v8.47h-8.47v-8.47zM29.647 6.389h-4.235v4.235h4.235V6.39zM19.059 36.036h4.235V31.8h-4.235v4.235zm4.235-12.706v8.47h4.235v-8.47h-4.235zm8.47 8.47H27.53v4.236H36v-8.47h-4.234V31.8zm0-8.47H36v-4.235h-4.235v4.235zM19.06 19.095v4.235h4.235v-4.235h-4.235zM6.353 29.683h4.235v-4.235H6.353v4.235z"></path>
                                        </svg>
                                </span>
                                <div style={{'width':'64px','height':'30px','backgroundColor':'#ff5c00','left': '-102px','top':'-22px','lineHeight':'30px','textAlign':'center'}} className=" absolute hidden text-white">
                                    扫码登录
                                    <div className="code-arrow">

                                    </div>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <div style={{ 'fontSize': '22px' }} className=' mb-4 relative'>
                                        <div className=' inline-block font-normal cursor-pointer mr-5'>
                                            <NavLink to="/user/login"  style={({ isActive }) => isActive ? {'color': '#333','fontWeight':'500'} : {'color':'#DDD'}}>登录</NavLink>
                                        </div>
                                        <div className=' inline-block font-normal cursor-pointer mr-5'>
                                            <NavLink to="/user/register" style={({ isActive }) => isActive ? {'color': '#333','fontWeight':'500'} : {'color':'#DDD'}}>
                                                注册
                                            </NavLink>
                                        </div>
                                        <div className=' w-11 h-1 absolute' style={{'background': '#ff5c00','left':leftTab,'transition': 'width .3s,left .3s,right .3s'}}></div>
                                    </div>
                                </div>
                                <div style={{padding:'13px 2px'}}>
                                    <Outlet></Outlet>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default User