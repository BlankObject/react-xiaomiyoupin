import './index.scss'
import { UserOutlined } from '@ant-design/icons';
import { useState ,useEffect} from 'react'
import { Input, Empty } from 'antd';
function DropDown(props) {
    const [isFocus, setisFocus] = useState(false);
    const [region, setRegion] = useState(props.region ? props.region : []);
    const changeBorder = () => {
        setisFocus(true)
    }
    const changeBorder1 = () => {
        setisFocus(false)
    }
    const change = (e) => {
        if (!e.target.value) {
            setRegion(props.region)
            return
        }
        setRegion(
            props.region.filter(item => {
                return item.name.indexOf(e.target.value)!==-1||item.number.toString().indexOf(e.target.value)!==-1
            })
        )
    }
    const selectRegion = (e) => {
        props.changeRegion(e)
    }
    return (
        <div className='yiho-dro-down' style={{'boxShadow': '0 5px 29px 0 hsl(0deg 0% 64% / 20%)',boxShadow:'0 5px 29px 0 hsl(0deg 0% 64% / 20%)'}}>
            <div className='yiho-dro-down-input-box'>
                <div className={isFocus?'yiho-dro-down-input yiho-dro-down-input-active':'yiho-dro-down-input'} style={{'boxShadow':isFocus?'0 0 0 2px rgb(255 92 0 /20%)':undefined}}>
                    <div className='yiho-input-icon'>
                        <svg width={'16'} height={'16'}>
                            <path d="M6.857 1.143a5.714 5.714 0 014.116 9.678c.08.025.155.07.219.134l2.424 2.425a.571.571 0 01-.808.808l-2.424-2.425a.569.569 0 01-.157-.293 5.714 5.714 0 11-3.37-10.328z" strokeWidth="1.333" stroke="#AAA" fill="none" fillRule="evenodd">

                            </path>
                        </svg>
                    </div>
                    <Input onChange={change} onFocus={changeBorder} onBlur={changeBorder1} placeholder='搜索国家/地区名称' bordered={false}  style={{  'height': '46px' ,'paddingLeft':'46px','paddingRight':'20px'}} ></Input>
                </div>
            </div>
            <div className='yiho-virtual'>
                <div>
                <div className='yiho-virtual-holder'>
                    <div className='yiho-virtual-holder-inner'>
                        {/* <div className='yiho-virtual-group'>
                            A
                        </div> */}
                        {/* <div className='yiho-virtual-item'>
                            <div>
                                阿尔巴尼亚   
                            </div>
                            <div>
                                +355
                            </div>
                        </div> */}
                        {
                            region.length?region.map(item => {
                                return <div className='yiho-virtual-item' key={item.number} onClick={()=>selectRegion(item)}>
                                    <div>
                                        {item.name} 
                                    </div>
                                    <div>
                                        {item.name.length>1?'+'+item.number:undefined}
                                    </div>
                                </div>
                            }):<Empty description="暂无数据" image={Empty.PRESENTED_IMAGE_SIMPLE} />
                        }
                    </div>  
                </div>
                </div>
            </div>
        </div>
    )
}
export default DropDown