import './headerBar.scss'
import { Input } from 'antd';
import { useState, useEffect } from 'react';
import { getSearchWord } from '../../../utils/api/main';
export default function HeaderBar() {
    const [stickyTop, setStickyTop] = useState(0)
    const [world, setworld] = useState('小米');
    useEffect(() => {
        document.addEventListener('scroll', () => {
            setStickyTop(window.pageYOffset?window.pageYOffset:document.documentElement.scrollTop)
        })
        getPlaceholder()
        return () => {
            
        };
    }, []);
    const getPlaceholder = async () => {
        let result = await getSearchWord()
        setworld(result.data.words[0].queryName)
    }
    return (
        <div className="yiho-suck-top" style={{'position':stickyTop>400?'sticky':'relative',top:stickyTop>400?'0':undefined}}>
                <div className="yiho-suck-top-container">
                    <div className="yiho-suck-top-logo"></div>
                    <div className="yiho-suck-top-tabs">
                        <div className="yiho-suck-top-tabs-item">
                            <span>有品秒杀</span>
                        </div>
                        <div className="yiho-suck-top-tabs-item">
                            <span>企业采购</span>
                        </div>
                    </div>
                    <div style={{'display':'flex','flex':1,justifyContent:'flex-end'}}>
                        <div className="yiho-search">
                            <div style={{'display':'flex','alignItems':'center'}}>
                                <div>
                                    <svg height='20px' width='20px' fill="#333" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                                        <path d="M47.27,43.74,37.5,34A21,21,0,1,0,34,37.5l9.78,9.77a2.5,2.5,0,0,0,3.53-3.53ZM5,21A16,16,0,1,1,21,37,16,16,0,0,1,5,21Z"></path>
                                    </svg>
                                </div>
                                <div style={{'marginLeft':'6px'}}>
                                    <Input style={{width:'249px'}} placeholder={world} bordered={false}></Input>
                                </div>
                            </div>
                        </div>
                        <div style={{'marginRight':'10px'}}>
                            <svg width="25px" height='25px' fill="#333" viewBox="0 0 41.97 41.04">
                                <path d="M31.74,33.24H16.66c-1.9,0-4.16-1.94-4.49-4.83-.11-.93-.36-3.91-.66-7.35-.39-4.61-.89-10.36-1.17-12.89C9.9,4.3,8.38,3,7.75,3H1.5V0H7.75c2.14,0,4.54,2.05,5.38,6.58H37a4.77,4.77,0,0,1,3.76,1.79,5.5,5.5,0,0,1,1.13,4.5l-.13.67c-.63,3.17-2.3,11.58-3.24,14.56C37.35,31.75,35.39,33.24,31.74,33.24ZM13.5,9.58c.29,2.94.68,7.46,1,11.23.3,3.41.55,6.36.65,7.26a2.5,2.5,0,0,0,1.52,2.17H31.74c2.07,0,3.07-.43,3.9-3,.89-2.82,2.59-11.42,3.15-14.25l.14-.67a2.48,2.48,0,0,0-.51-2A1.84,1.84,0,0,0,37,9.58Z"></path>
                                <circle cx={'16.47'} cy={'37.95'} r={'3'}></circle>
                                <circle cx={'34.42'} cy={'37.95'} r={'3'}></circle>
                                <circle cx={'1.5'} cy={'1.5'} r={'1.5'}></circle>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
    )
}