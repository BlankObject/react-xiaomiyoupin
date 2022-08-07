import './category.scss'
import { Carousel } from 'antd';
import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {getCategory,getCatDetail} from '../../../utils/api/cat'
export default function Category(props) {
    // 'https://res.youpin.mi-img.com/youpinoper/42a569a0_ced6_4bcf_8833_a50a49fbf666.jpeg'
    //     , 'https://res.youpin.mi-img.com/youpinoper/8b6d166c_bbaa_47f6_b7a3_ec900a7f37f9.jpeg'
    //     , 'https://res.youpin.mi-img.com/youpinoper/004547c4_6733_4030_9857_60906e7e9f06.jpeg', 'https://res.youpin.mi-img.com/youpinoper/79acf6d5_b744_4988_ada9_5dde11aaebdf.jpeg',
    // 'https://res.youpin.mi-img.com/youpinoper/23e9d50b_3e72_44fa_88f1_f391ce410381.png'
    const [carouselData, setcarouselData] = useState([]);
    const [catData, setcatData] = useState([]);
    const [catBottom, setcatBottom] = useState(10);
    const [detailData, setdetailData] = useState([]);
    const [index, setindex] = useState(-1);
    const carousel = useRef(null)
    let banner = props.banner
    const navigate = useNavigate()
    useEffect(() => {
        if (banner instanceof Object) {
            let temp=[]
            banner.data.items.forEach((item, index) => {
                temp.push(item.pic_url)
            })
            setcarouselData(temp)
        }
        getCatData()
        return () => {
            
        };
    }, [banner]);
    const handleCarousel = (type) => {
        type?carousel.current.next():carousel.current.prev()
    }
    const getCatData = async() => {
        let result = await getCategory()
        let temp = []
        for (let i = 0; i < result.data.length; i += 2){
            if (result.data[i + 2]) {
                temp.push({
                    0 : result.data[i],
                    1 : result.data[1+i]
                })
            }
        }
        setcatData(temp)
    }
    const handleBottom = (type) => {
        type===0?setcatBottom(catData.length-1):setcatBottom(10)
    }

    const getCatDeatilData = async (catId, index) => {
        return await getCatDetail(catId)
            
    }

    const handleDetail = async (info, index) => {
        setindex(index)
        if(detailData[index])return
        let cat1 = await getCatDeatilData(info['0'].id)
        let cat2 = await getCatDeatilData(info['1'].id)
        let temp = [...detailData]
        temp[index] = { 0: cat1.data, 1: cat2.data }
        setdetailData(temp)
    }

    const handleClick = (value) => {
        // navigate('/goodsList')
        console.log(value)
        const w = window.open('_blank')
        let url = value.queryId ? `/goodsList?queryId=${value.queryId}&categoryName=${value.smallImgCard.name}&pageFrom=category` :
            value.jumpUrl
        w.location.href = url 

        console.log(value)
    }

    return (
        <div className='yiho-category'>
            <div className='yiho-category-container'>
                <div>
                    <ul className='yiho-category-list' onMouseEnter={()=>handleBottom(0)} onMouseLeave={()=>handleBottom(1)}>
                        {
                            catData.map((item, index) => {
                                return (
                                    <li onMouseEnter={()=>handleDetail(item,index)} key={item['0'].id} className='yiho-category-item' style={{'marginTop':index===0?'13px':0}}>
                                        <span className='yiho-category-des'>{ item['0'].name}</span>
                                        <span className='yiho-category-result'>/</span>
                                        <span className='yiho-category-des'>{ item['1'].name}</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className='yiho-category-detail'>
                    {
                        detailData[index] && Object.values(detailData[index]).map((item, index) => {
                            return (
                                <div key={item.id} className='yiho-category-detail-sub'>
                                    <div className='nav-item-title'>
                                        <span title={ item.name}>{ item.name} </span>
                                    </div>
                                    <div className='nav-item-list'>
                                        {/* <div className='nav-item-row'>
                                            <div className='row-left'>
                                                <div>
                                                    <span className='row-left-name' ></span>
                                                </div>
                                                <div style={{'width':'6px','height':'12px',marginLeft:'5px'}}>
                                                    <img style={{'width':'100%',height:'100%'}}  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAMCAYAAABBV8wuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzVCQkYwOUNEQUFDMTFFOTg4MjdGMkE2NzI5QzVEMDMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzVCQkYwOUREQUFDMTFFOTg4MjdGMkE2NzI5QzVEMDMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NUJCRjA5QURBQUMxMUU5ODgyN0YyQTY3MjlDNUQwMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NUJCRjA5QkRBQUMxMUU5ODgyN0YyQTY3MjlDNUQwMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Po++138AAACLSURBVHjaYjQ2Nl7CwMBQAcRPGJAAExBPBuI1QCyKLnESiNuAeAMQc8EkWKD0JiDmB+JlQBwGxL+YkHQvBuITQDwPiBmRJUCgA4hfgoxGlwCBfyC7WdAEQc6WBOJYZIloILYC4hAg/g+T8APiLCB2BbkI5lxzIK4BYm8g/obswWwgDgLi18iWAQQYAI8wFjnp4CZ5AAAAAElFTkSuQmCC"></img>
                                                </div>
                                            </div>
                                            <div className='row-right'>
                                                <a>笔记本电脑</a>
                                                <a>洗烘一体机</a>
                                                <a>摄像头</a>
                                                <a>跑步鞋</a>
                                                <a>真无线</a>
                                                <a>方便速食</a>
                                                <a>洗烘一体机</a>
                                                <a>笔记本电脑</a>
                                                <a>洗烘一体机</a>
                                                <a>摄像头</a>
                                                <a>跑步鞋</a>
                                                <a>真无线</a>
                                                <a>方便速食</a>
                                                <a>洗烘一体机</a>
                                            </div>
                                        </div> */}
                                        {
                                            item.children.map((item1) => {
                                                return (
                                                    <div key={item1.id} className='nav-item-row'>
                                                        <div className='row-left'>
                                                            <div>
                                                                <span className='row-left-name' title={ item1.name}>{ item1.name}</span>
                                                            </div>
                                                            <div style={{'width':'6px','height':'12px',marginLeft:'5px'}}>
                                                                <img style={{'width':'100%',height:'100%'}}  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAMCAYAAABBV8wuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzVCQkYwOUNEQUFDMTFFOTg4MjdGMkE2NzI5QzVEMDMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzVCQkYwOUREQUFDMTFFOTg4MjdGMkE2NzI5QzVEMDMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NUJCRjA5QURBQUMxMUU5ODgyN0YyQTY3MjlDNUQwMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NUJCRjA5QkRBQUMxMUU5ODgyN0YyQTY3MjlDNUQwMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Po++138AAACLSURBVHjaYjQ2Nl7CwMBQAcRPGJAAExBPBuI1QCyKLnESiNuAeAMQc8EkWKD0JiDmB+JlQBwGxL+YkHQvBuITQDwPiBmRJUCgA4hfgoxGlwCBfyC7WdAEQc6WBOJYZIloILYC4hAg/g+T8APiLCB2BbkI5lxzIK4BYm8g/obswWwgDgLi18iWAQQYAI8wFjnp4CZ5AAAAAElFTkSuQmCC"></img>
                                                            </div>
                                                        </div>
                                                        <div className='row-right'>
                                                            {
                                                                item1.children.map((item2) => {
                                                                    return (
                                                                        <a onClick={()=>handleClick(item2)} key={item2.id}>{item2.smallImgCard.name}</a>
                                                                        // <Link target = "_blank" key={item2.id} to={'/goodsList'}>{item2.smallImgCard.name}</Link>
                                                                    )
                                                                })
                                                            }
                                                            {/* <a>洗烘一体机</a>
                                                            <a>摄像头</a>
                                                            <a>跑步鞋</a>
                                                            <a>真无线</a>
                                                            <a>方便速食</a>
                                                            <a>洗烘一体机</a>
                                                            <a>笔记本电脑</a>
                                                            <a>洗烘一体机</a> */}
                                                            
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                        
                                    </div>
                                </div>
                            )
                        })
                    }
                    {/* <div className='yiho-category-detail-sub'>
                        <div className='nav-item-title'>
                            <span>有品推荐</span>
                        </div>
                        <div className='nav-item-list'>
                            <div className='nav-item-row'>
                                <div className='row-left'>
                                    <div>
                                        <span className='row-left-name' title='精选分类'>精选分类</span>
                                    </div>
                                    <div style={{'width':'6px','height':'12px',marginLeft:'5px'}}>
                                        <img style={{'width':'100%',height:'100%'}}  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAMCAYAAABBV8wuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzVCQkYwOUNEQUFDMTFFOTg4MjdGMkE2NzI5QzVEMDMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzVCQkYwOUREQUFDMTFFOTg4MjdGMkE2NzI5QzVEMDMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NUJCRjA5QURBQUMxMUU5ODgyN0YyQTY3MjlDNUQwMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NUJCRjA5QkRBQUMxMUU5ODgyN0YyQTY3MjlDNUQwMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Po++138AAACLSURBVHjaYjQ2Nl7CwMBQAcRPGJAAExBPBuI1QCyKLnESiNuAeAMQc8EkWKD0JiDmB+JlQBwGxL+YkHQvBuITQDwPiBmRJUCgA4hfgoxGlwCBfyC7WdAEQc6WBOJYZIloILYC4hAg/g+T8APiLCB2BbkI5lxzIK4BYm8g/obswWwgDgLi18iWAQQYAI8wFjnp4CZ5AAAAAElFTkSuQmCC"></img>
                                    </div>
                                </div>
                                <div className='row-right'>
                                    <a>笔记本电脑</a>
                                    <a>洗烘一体机</a>
                                    <a>摄像头</a>
                                    <a>跑步鞋</a>
                                    <a>真无线</a>
                                    <a>方便速食</a>
                                    <a>洗烘一体机</a>
                                    <a>笔记本电脑</a>
                                    <a>洗烘一体机</a>
                                    <a>摄像头</a>
                                    <a>跑步鞋</a>
                                    <a>真无线</a>
                                    <a>方便速食</a>
                                    <a>洗烘一体机</a>
                                </div>
                            </div>
                            <div className='nav-item-row'>
                                <div className='row-left'>
                                    <div>
                                        <span className='row-left-name' title='精选分类'>精选分类</span>
                                    </div>
                                    <div style={{'width':'6px','height':'12px',marginLeft:'5px'}}>
                                        <img style={{'width':'100%',height:'100%'}}  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAMCAYAAABBV8wuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzVCQkYwOUNEQUFDMTFFOTg4MjdGMkE2NzI5QzVEMDMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzVCQkYwOUREQUFDMTFFOTg4MjdGMkE2NzI5QzVEMDMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NUJCRjA5QURBQUMxMUU5ODgyN0YyQTY3MjlDNUQwMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NUJCRjA5QkRBQUMxMUU5ODgyN0YyQTY3MjlDNUQwMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Po++138AAACLSURBVHjaYjQ2Nl7CwMBQAcRPGJAAExBPBuI1QCyKLnESiNuAeAMQc8EkWKD0JiDmB+JlQBwGxL+YkHQvBuITQDwPiBmRJUCgA4hfgoxGlwCBfyC7WdAEQc6WBOJYZIloILYC4hAg/g+T8APiLCB2BbkI5lxzIK4BYm8g/obswWwgDgLi18iWAQQYAI8wFjnp4CZ5AAAAAElFTkSuQmCC"></img>
                                    </div>
                                </div>
                                <div className='row-right'>
                                    <a>笔记本电脑</a>
                                    <a>洗烘一体机</a>
                                    <a>摄像头</a>
                                    <a>跑步鞋</a>
                                    <a>真无线</a>
                                    <a>方便速食</a>
                                    <a>洗烘一体机</a>
                                    <a>笔记本电脑</a>
                                    <a>洗烘一体机</a>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            <div className='yiho-banner'>
                <div className='yiho-banner-btn yiho-banner-left' onClick={()=>handleCarousel(0)}></div>
                <div className='yiho-banner-btn yiho-banner-right' onClick={()=>handleCarousel(1)}></div>
                <Carousel ref={carousel} autoplay>
                    {
                        carouselData.map((item, index) => {
                            return (
                                <div key={index}>
                                    <img src={item}></img>
                                </div>
                            )
                        })
                    }
                </Carousel>
            </div>
        </div>
    )
}