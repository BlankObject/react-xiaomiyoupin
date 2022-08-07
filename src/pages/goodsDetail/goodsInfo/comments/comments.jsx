import './comments.scss';
import { useEffect ,useState} from 'react';
import { getGoodsCommentTab ,getGoodsComments} from "../../../../utils/api/comment";
import { useSearchParams } from 'react-router-dom';
import { Pagination } from 'antd';
export default function Comments(props) {
    const [searchParams, setSearchParams] = useSearchParams()
    const [commentTab, setCommentTab] = useState({});
    const [tabIndex, setTabIndex] = useState(0);
    const [commentInfo, setCommentInfo] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(() => {
        getGoodsCommentTabInfo()
    },[])
    const getGoodsCommentTabInfo = async () => {
        let gid=searchParams.get('gid')
        let result = await getGoodsCommentTab(gid)
        setCommentTab(result.data)
        getGoodsCommentInfo(result.data.tags[0].id,result.data.tags[0].name)
        console.log(result)
    }
    const getGoodsCommentInfo = async (tag_id, tag_name) => {
        let gid = searchParams.get('gid')
        let result = await getGoodsComments({ gid, tag_id, tag_name, pindex: 1, psize: 10 })
        console.log(result)
        result.data.list.forEach((item, index) => {
            item.index=-1
        })
        setCommentInfo(result.data)
    }
    const handleTabClick = (index) => {
        setTabIndex(index)
    }
    const timestampToTime=(timestamp)=> {
        var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1):date.getMonth()+1) + '-';
        var D = (date.getDate()< 10 ? '0'+date.getDate():date.getDate())+ ' ';
        var h = (date.getHours() < 10 ? '0'+date.getHours():date.getHours())+ ':';
        var m = (date.getMinutes() < 10 ? '0'+date.getMinutes():date.getMinutes()) + ':';
        var s = date.getSeconds() < 10 ? '0'+date.getSeconds():date.getSeconds();
        return Y+M+D+h+m+s;
    }
    const handleSelectImg = (fatherIndex,index) => {
        let temp = { ...commentInfo }
        temp.list[fatherIndex].index=index
        setCommentInfo(temp)
    }
    const onChangePage = (index) => {
        setCurrentPage(index)
    }
    return (
        <div className='yiho-comments'>
            <div className='yiho-comments-title'>
                <div className='title-row'>
                    <div className='title-left'>
                        <span>按分类查看评价</span>
                        <span className='title-left-icon'></span>
                    </div>
                    <div className='title-right'>
                        {
                            commentTab.positive_rate ? <span>{ commentTab.positive_rate}%满意</span>:undefined
                        }
                        
                    </div>
                </div>
                <div className='title-main'>
                    <div className='main-container'>
                        {/* <div className='tab-item'>
                            <span>全部(1024)</span>
                        </div> */}
                        {
                            commentTab?.tags?.map((item, index) => {
                                return (
                                    <div onClick={()=>handleTabClick(index)} key={index} className={index===tabIndex?'tab-item tab-item-active':'tab-item'} >
                                        <span>{item.name}({item.count})</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='title-footer'>
                    <div className='title-footer-content'>
                        <div className='item-left'>
                            <span>时间排序</span>
                        </div>
                        <div className='item-right'>
                            <span>默认排序</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='yiho-comments-main'>
                <div>
                    {
                        commentInfo.list && commentInfo.list.map((item, index) => {
                            return (
                                <div key={item.comment_id} className='comments-item'>
                                    <div className='comments-item-header'>
                                        <div className='comments-avater'>
                                            <img src={item.avatar?item.avatar:'https://cdn.cnbj1.fds.api.mi-img.com/youpin-pc/production/YouPin_PC/static3/media/user.8d0880c0.png'} alt={item.nick_name} />
                                        </div>
                                        <div className='comments-info'>
                                            <div className='info-name'>
                                                <span>{ item.nick_name}</span>
                                            </div>
                                            <div className='info-other'>
                                                <span >{ timestampToTime(item.ctime)}</span>
                                                <span className='info-other-z'>|</span>
                                                <span>{ item.pid_spec}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='comments-content'>
                                        <span>{ item.text}</span>
                                    </div>
                                    {
                                        item.comment_imgs.length > 0 ? (
                                            <div className='comments-img'>
                                                {
                                                    item.comment_imgs.map((item1, index1) => {
                                                        return (
                                                            <div key={'2-'+index1} className='comments-img-item' style={{'border': index1===item.index?'1px solid #845f3f':undefined}} onClick={()=>handleSelectImg(index,index1)}>
                                                                <img className='item-img' src={item1.thumbnail} alt="" />
                                                            </div>
                                                        )
                                                    })
                                                }
                                                
                                                {/* <div className='comments-img-item'>
                                                    <img className='item-img' src="https://img.youpin.mi-img.com/shopmain/ed5ceb69eea4bf02b4cbe4378816a60b.jpg" alt="" />
                                                </div> */}
                                            </div>
                                        ):undefined
                                    }
                                    {
                                        item.index >= 0 ? (
                                            <div className='comments-big-img'>
                                                <img style={{'width':'375px','height':'500px'}} src={item.index>=0?item.comment_imgs[item.index].img:undefined}></img>
                                            </div>
                                        ):undefined
                                    }
                                </div>
                            )
                        })
                    }
                </div>
                <div className='yiho-cat-pagination'>
                    <Pagination onChange={onChangePage} current={currentPage} defaultCurrent={1} defaultPageSize={10} total={commentTab.total_count} showSizeChanger={false}></Pagination>
                </div>
            </div>
        </div>
    )
}