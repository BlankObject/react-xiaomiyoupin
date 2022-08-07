import './goodsBanner.scss';
import { useState ,useEffect} from 'react';
export default function GoodsBanner(props) {
    const [thumdIndex, setthumdIndex] = useState(0);
    const [thumdTop,setthumdTop]=useState(0)
    const [currentIndexs,setcurrentIndexs]=useState([0,1,2,3])
    const [thumdData, setthumdData] = useState([
        // { image: 'https://img.youpin.mi-img.com/shopmain/cc132a1860f7f6322982b5487d208ff0.jpg@base@tag=imgScale&F=webp&h=1080&w=1080?w=1080&h=1080' },
        // { image: 'https://img.youpin.mi-img.com/goods/b8d70f6dec90936e3fcd74502a0ca455.jpg@base@tag=imgScale&F=webp&h=1080&w=1080?w=1080&h=1080' },
        // { image: 'https://img.youpin.mi-img.com/shopmain/78b55926f860ed30ec314f6456435a6b.jpg@base@tag=imgScale&F=webp&h=1080&w=1080?w=1080&h=1080' },
        // { image: 'https://img.youpin.mi-img.com/shopmain/205d55f7577f1338d27128b1107bf736.jpg@base@tag=imgScale&F=webp&h=1080&w=1080?w=1080&h=1080' },
        // { image: 'https://img.youpin.mi-img.com/shopmain/fade242c3e261a3e00961d37f4fbc9c6.jpg@base@tag=imgScale&F=webp&h=1080&w=1080?w=1080&h=1080' },
        // { image: 'https://img.youpin.mi-img.com/shopmain/cc132a1860f7f6322982b5487d208ff0.jpg@base@tag=imgScale&F=webp&h=1080&w=1080?w=1080&h=1080' },
        // { image: 'https://img.youpin.mi-img.com/shopmain/67d8e0512a5278ddfb0955f0e98cc9c9.jpg@base@tag=imgScale&F=webp&h=1080&w=1080?w=1080&h=1080' }
    ]);
    const carouselMapList=props.carouselMapList
    useEffect(() => {
        handleImgType()
        return () => {
            
        };
    }, [carouselMapList]);
    const handleImgType = () => {
        let temp=[]
        if (props.carouselMapList) {
            props.carouselMapList.forEach((item, index) => {
                if (item.url.indexOf('jpg') != -1 || item.url.indexOf('jpeg') != -1 || item.url.indexOf('png') != -1|| item.url.indexOf('gif') != -1) {
                    if (item.url.indexOf('?') != -1) {
                        temp.push({image:item.url.split('?')[0]})
                    } else {
                        temp.push({image:item.url})
                    }
                }
            })
            setthumdData(temp)
        }
        console.log(temp)
    }
    const handleThumd = (index) => {
        setthumdIndex(index)
        if (index === 0 || index === thumdData.length - 1) return
        if (index === currentIndexs[0]&&index>0) {
            setthumdTop(thumdTop + 96)
            let temp = currentIndexs
            temp.unshift(index - 1)
            temp.pop()
            setcurrentIndexs(temp)
        }
        if (index === currentIndexs[currentIndexs.length - 1] && thumdData.length - index > 1) {
            setthumdTop(thumdTop - 96)
            let temp = currentIndexs
            temp.push(index + 1)
            temp.shift()
            setcurrentIndexs(temp)
        }
    }
    const handleThumdBtn = (type) => {
        if (type && thumdIndex < thumdData.length - 1) handleThumd(thumdIndex + 1)
        if(type===0&&thumdIndex>0)handleThumd(thumdIndex-1)
    }
    return (
        //https://www.xiaomiyoupin.com/detail?gid=107435&spmref=YouPinPC.$SearchFilter$1.search_list.11.81706950&last_scmv2=3001.21.1:zero-3:zero-4:zero-5:zero-6:zero-7:zero.0.0&scmv2_num=0
        <div className='yiho-goods-banner'>
            <div className='yiho-goods-banner-container'>
                <div className='goods-banner-main'>
                    <div className='goods-banner-main-img'>
                        <img style={{'width':'100%','height':'100%'}} src={thumdData[thumdIndex]?.image&&thumdData[thumdIndex]?.image+'@base@tag=imgScale&F=webp&h=1080&w=1080?w=1080&h=1080'}></img>
                    </div>
                </div>
                <div className='goods-banner-select'>
                    <div className='thumd-select-container' style={{top:thumdTop}}>
                        {
                            thumdData.map((item, index) => {
                                return (
                                    <div onClick={()=>handleThumd(index)} key={index} className='thumd-select-item' style={{'borderColor': thumdIndex===index?'rgb(132, 95, 63)':undefined}}>
                                        <img className='thumd-select-img' src={item?.image&&item?.image+'@base@tag=imgScale&F=webp&h=166&w=166'}/>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='banner-select-up' onClick={()=>handleThumdBtn(0)}>
                        <div className='select-up-img'></div>
                    </div>
                    <div className='banner-select-bottom' onClick={()=>handleThumdBtn(1)}>
                        <div className='select-bottom-img'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}