import { Input } from "antd"
import "./index.scss"
import { useState, useRef ,useEffect} from "react"
import YihoDropWown from '../DropDown/index'
import { pinyin } from 'pinyin-pro';
export default function DropDownInput(props) {
    const inputRef = useRef(null);
    const [isInput, setisInput] = useState(false);
    const [isFlag, setisFlag] = useState(true);
    const [isRegion, setisRegion] = useState(false);
    const [region, setRegion] = useState(props.region ? props.region : []);
    const changeLegal = (e) => {
        setisFlag(e.target.value.length == 11 ? true : false)
        if (e.target.value) return
        setisInput(false)
    }
    const selectInput = () => {
        setisInput(true)
    }
    const changePhone = (e) => {
        setisFlag(e.target.value.length == 11 ? true : false)
    }
    const selectRegion = () => {
        setisRegion(!isRegion)
        if(!isRegion)return
        if (region[0].name.length > 1) {
            let temp=[]
            region.forEach(item => {
                let tempIndex,flag=false
                temp.forEach((item1,index) => {
                    if (pinyin(item.name[0], { pattern: 'first' ,toneType: 'none'}) == item1.classify) {
                        tempIndex = index
                        flag=true
                    }
                })
                if (flag) {
                    temp[tempIndex].list.push(item)
                } else {
                    temp.push({classify:pinyin(item.name[0],{ pattern: 'first' ,toneType: 'none'}),list:[item]})
                }
            })
            let result=[]
            temp.forEach(item => {
                result.push({name:item.classify.toUpperCase(),number:item.classify},...item.list)
            })
            setRegion(result)
        }
    }
    return (
        <div className="yiho-down-input" style={{position:'relative'}}>
            <div className="yiho-down-input-box" style={{backgroundColor:isFlag?undefined:'#fcf2f3','boxShadow': isInput?'0 0 0 2px rgb(255 92 0 /20%)':undefined}}>
                <div className="yiho-input-adornment" onClick={selectRegion}>
                    <div className="yiho-input-info">
                        <div className="yiho-region" style={{color:isFlag?undefined:'#f04645'}}>
                            国家码
                        </div>
                        <div className="yiho-region-number">
                            +86
                        </div>
                    </div>
                    <div className="yiho-bottom-icon">
                        <svg viewBox="0 0 20 20" width="20" height="20">
                            <path d="M4 7l6 6.667L16 7" stroke="currentColor" strokeWidth="1.5" fill="none"
                                fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </div>
                </div>
                <div className="yiho-phone-input-box" onClick={selectInput}>
                    <div className={isInput?'yiho-phone':'yiho-phone'} style={{color:isFlag?undefined:'#f04645',fontSize:isInput?'6px':undefined,top:isInput?'5px':undefined}}>
                        手机号码
                    </div>
                    {
                        
                        <Input className="yiho-ant-input" onChange={changePhone}  ref={inputRef} bordered={false} onBlur={changeLegal}>
                        </Input>
                    }
                </div>
            </div>
            {
                isFlag?undefined:<div className="yiho-remind">
                请输入手机号
            </div>
            }
            <div style={{position:'absolute',top:'60px'}}>
            {isRegion?<YihoDropWown region={region} changeRegion={(e)=>console.log(e)}></YihoDropWown>:undefined}
            </div>
        </div>
    )
}