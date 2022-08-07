import Comments from './comments/comments';
import ImgView from './imgView/imgView';
import { useState ,useEffect} from 'react';
import GoodsItem from '../../../components/goodsItem/goodsItem';
import "./goodsInfo.scss";
import { useSearchParams } from 'react-router-dom';
import { getImageDetail ,getDetailRecommend} from '../../../utils/api/goods';
const strData=`[{"group":"商品详情","floors":[{"module_key":"prod_image","module_name":"图片","data":{"prod_image":{"img":{"url":"https://img.youpin.mi-img.com/shopmain/49b6de96_49a0_44f2_825f_1de7e78c7e88.jpeg?w\u003d1080\u0026h\u003d604","w":1080.0,"h":604.0}}},"id":1654687441845},{"module_key":"prod_image","module_name":"图片","data":{"prod_image":{"img":{"url":"https://img.youpin.mi-img.com/shopmain/3ce702e6_6324_4f08_8f14_dfa311faadfb.jpeg?w\u003d1080\u0026h\u003d958","w":1080.0,"h":958.0}}},"id":1654687441846},{"module_key":"prod_image","module_name":"图片","data":{"prod_image":{"img":{"url":"https://img.youpin.mi-img.com/shopmain/0d3e1f25_636e_4fb8_9819_80bb0ffc4579.jpeg?w\u003d1080\u0026h\u003d697","w":1080.0,"h":697.0}}},"id":1654687441847},{"module_key":"prod_image","module_name":"图片","data":{"prod_image":{"img":{"url":"https://img.youpin.mi-img.com/shopmain/1ea5d948_49e3_48d1_a094_c0c2e7528b70.jpeg?w\u003d1080\u0026h\u003d396","w":1080.0,"h":396.0}}},"id":1654687441848},{"module_key":"prod_image","module_name":"图片","data":{"prod_image":{"img":{"url":"https://img.youpin.mi-img.com/shopmain/c6259df3_bb30_485b_9052_739f8ab2e9fa.jpeg?w\u003d1080\u0026h\u003d1104","w":1080.0,"h":1104.0}}},"id":1654687441849},{"module_key":"prod_image","module_name":"图片","data":{"prod_image":{"img":{"url":"https://img.youpin.mi-img.com/shopmain/fcbc7a53_0f50_40ab_88c5_b2d7dcf470fc.jpeg?w\u003d1080\u0026h\u003d418","w":1080.0,"h":418.0}}},"id":1654687441850},{"module_key":"prod_image","module_name":"图片","data":{"prod_image":{"img":{"url":"https://img.youpin.mi-img.com/shopmain/54d9a5d3_e9e5_4ed3_baca_763385a3cfb3.jpeg?w\u003d1080\u0026h\u003d1084","w":1080.0,"h":1084.0}}},"id":1654687441851},{"module_key":"prod_image","module_name":"图片","data":{"prod_image":{"img":{"url":"https://img.youpin.mi-img.com/shopmain/02670581_8659_4daf_b59e_4e77be90dcf7.jpeg?w\u003d1080\u0026h\u003d420","w":1080.0,"h":420.0}}},"id":1654687441852},{"module_key":"prod_image","module_name":"图片","data":{"prod_image":{"img":{"url":"https://img.youpin.mi-img.com/shopmain/9497a906_4626_440d_a526_7194539871c1.jpeg?w\u003d1080\u0026h\u003d1164","w":1080.0,"h":1164.0}}},"id":1654687441853},{"module_key":"prod_image","module_name":"图片","data":{"prod_image":{"img":{"url":"https://img.youpin.mi-img.com/shopmain/f6c79b38_1806_40cf_a151_2dd495cdc4f6.jpeg?w\u003d1080\u0026h\u003d583","w":1080.0,"h":583.0}}},"id":1654687441854},{"module_key":"prod_image","module_name":"图片","data":{"prod_image":{"img":{"url":"https://img.youpin.mi-img.com/shopmain/6a42f46f_c38f_48a1_b155_0f85e55ac690.jpeg?w\u003d1080\u0026h\u003d1094","w":1080.0,"h":1094.0}}},"id":1654687441855},{"module_key":"prod_image","module_name":"图片","data":{"prod_image":{"img":{"url":"https://img.youpin.mi-img.com/shopmain/376ec35d_5623_4dbe_9f1d_6994e983b86f.jpeg?w\u003d1080\u0026h\u003d586","w":1080.0,"h":586.0}}},"id":1654687441856},{"module_key":"prod_image","module_name":"图片","data":{"prod_image":{"img":{"url":"https://img.youpin.mi-img.com/shopmain/c2de7f7d_0dee_4237_b352_88351ff8f417.jpeg?w\u003d1080\u0026h\u003d841","w":1080.0,"h":841.0}}},"id":1654687441857},{"module_key":"prod_image","module_name":"图片","data":{"prod_image":{"img":{"url":"https://img.youpin.mi-img.com/shopmain/80aa1fbb_baba_420b_9d0d_ff5c778ac121.jpeg?w\u003d1080\u0026h\u003d531","w":1080.0,"h":531.0}}},"id":1654687441858},{"module_key":"prod_image","module_name":"图片","data":{"prod_image":{"img":{"url":"https://img.youpin.mi-img.com/shopmain/e0ddb833_97c8_4270_a229_63641cb2d43f.jpeg?w\u003d1080\u0026h\u003d889","w":1080.0,"h":889.0}}},"id":1654687441859},{"module_key":"prod_image","module_name":"图片","data":{"prod_image":{"img":{"url":"https://img.youpin.mi-img.com/shopmain/c8ec1c3a_0b68_44e2_b3ca_d95263d51c52.jpeg?w\u003d1080\u0026h\u003d580","w":1080.0,"h":580.0}}},"id":1654687441860},{"module_key":"prod_image","module_name":"图片","data":{"prod_image":{"img":{"url":"https://img.youpin.mi-img.com/shopmain/bb0c160f_dcbb_4c64_b6e0_95094dedfb77.jpeg?w\u003d1080\u0026h\u003d907","w":1080.0,"h":907.0}}},"id":1654687441861},{"module_key":"prod_image","module_name":"图片","data":{"prod_image":{"img":{"url":"https://img.youpin.mi-img.com/shopmain/7b1bb5c1_4880_4e26_8275_ec4f699ad5c0.jpeg?w\u003d1080\u0026h\u003d667","w":1080.0,"h":667.0}}},"id":1654687441862},{"module_key":"prod_image","module_name":"图片","data":{"prod_image":{"img":{"url":"https://img.youpin.mi-img.com/shopmain/a9284eca_1873_491d_97cc_fb7a9a800ce9.jpeg?w\u003d1080\u0026h\u003d1126","w":1080.0,"h":1126.0}}},"id":1654687441863},{"module_key":"prod_image","module_name":"图片","data":{"prod_image":{"img":{"url":"https://img.youpin.mi-img.com/shopmain/9ad817ba_92b9_4f7d_98a3_80bdcc16fccd.jpeg?w\u003d1080\u0026h\u003d571","w":1080.0,"h":571.0}}},"id":1654687441864},{"module_key":"prod_image","module_name":"图片","data":{"prod_image":{"img":{"url":"https://img.youpin.mi-img.com/shopmain/0a661ab0_4d34_4509_953a_65f84c779e84.jpeg?w\u003d1080\u0026h\u003d961","w":1080.0,"h":961.0}}},"id":1654687441865},{"module_key":"prod_image","module_name":"图片","data":{"prod_image":{"img":{"url":"https://img.youpin.mi-img.com/shopmain/86134889_11de_4211_a838_86ecd3ce8c16.jpeg?w\u003d1080\u0026h\u003d1264","w":1080.0,"h":1264.0}}},"id":1654687441866},{"module_key":"prod_image","module_name":"图片","data":{"prod_image":{"img":{"url":"https://img.youpin.mi-img.com/shopmain/39ebfd76_a032_41dc_acdf_4cf9c1d348e4.jpeg?w\u003d1080\u0026h\u003d802","w":1080.0,"h":802.0}}},"id":1654687441867},{"module_key":"prod_image","module_name":"图片","data":{"prod_image":{"img":{"url":"https://img.youpin.mi-img.com/shopmain/b80b1718_3f5b_4001_ad38_d48f891920fd.jpeg?w\u003d1080\u0026h\u003d1112","w":1080.0,"h":1112.0}}},"id":1654687441868},{"module_key":"prod_image","module_name":"图片","data":{"prod_image":{"img":{"url":"https://img.youpin.mi-img.com/shopmain/53ffdb97_4975_4214_9bc5_6a7bc5f1deb4.jpeg?w\u003d1080\u0026h\u003d892","w":1080.0,"h":892.0}}},"id":1654687441869},{"module_key":"prod_image","module_name":"图片","data":{"prod_image":{"img":{"url":"https://img.youpin.mi-img.com/shopmain/7a3420b0_4b5d_42af_b8ff_e531155bbc01.jpeg?w\u003d1080\u0026h\u003d816","w":1080.0,"h":816.0}}},"id":1654687441870},{"module_key":"prod_image","module_name":"图片","data":{"prod_image":{"img":{"url":"https://img.youpin.mi-img.com/shopmain/400c1157_5c24_4a35_b229_86f99f5a4466.jpeg?w\u003d1080\u0026h\u003d997","w":1080.0,"h":997.0}}},"id":1654687441871},{"module_key":"prod_image","module_name":"图片","data":{"prod_image":{"img":{"url":"https://img.youpin.mi-img.com/shopmain/c16ed3bb_7a51_4e7a_8c30_264bfc051cad.jpeg?w\u003d1080\u0026h\u003d862","w":1080.0,"h":862.0}}},"id":1654687441872}]},{"group":"常见问题","floors":[{"module_key":"prod_image","module_name":"图片","data":{"prod_image":{"img":{"url":"https://img.youpin.mi-img.com/shopmain/04c45337_c5e1_4483_9a70_52a778596221.jpeg?w\u003d1080\u0026h\u003d1324","w":1080.0,"h":1324.0}}},"id":1655033490149},{"module_key":"prod_image","module_name":"图片","data":{"prod_image":{"img":{"url":"https://img.youpin.mi-img.com/shopmain/e5221d01_585c_4b3e_9a84_0d39dffbe23b.jpeg?w\u003d1080\u0026h\u003d955","w":1080.0,"h":955.0}}},"id":1655033515205}]},{"group":"中奖名单","floors":[{"module_key":"prod_image","module_name":"图片","data":{"prod_image":{"img":{"url":"https://img.youpin.mi-img.com/shopmain/47e5f3f4_f58f_4d38_bd0d_79e9170f7574.jpeg?w\u003d1080\u0026h\u003d904","w":1080.0,"h":904.0}}},"id":1654687466800}]}]`
export default function GoodsInfo(props) {
    //['商品详情','评论','常见问题']
    const [goodsBottomInfo, setgoodsBottomInfo] = useState([]);
    const [thoumdLeft, setthoumdLeft] = useState(0);
    const [bottomIndex, setbottomIndex] = useState(0);
    const [searchParams, setSearchParams] = useSearchParams()
    const [recmmendInfo, setRecmmendInfo] = useState([]);
    
    useEffect(() => {
        getImageInfo()
        getDetailRecommendInfo()
    },[])
    const getImageInfo = async () => {
        let gid=searchParams.get('gid')
        let result = await getImageDetail(gid)

        handleAddComments(result.data.imgDetailDecoration)
    }
    const getDetailRecommendInfo = async () => {
        let gid=searchParams.get('gid')
        let result = await getDetailRecommend(gid)
        result.data[0]?.data?.recommendResponseList.forEach((item, index) => {
            let temp=[]
            item.data.goods.labels.forEach((item1,index1) => {
                if (item1.name.length < 5) {
                    if (temp.length < 3) {
                        temp.push(item1)
                    }
                }
            })
            item.data.goods.labels1=temp
        })
        setRecmmendInfo(result.data[0]?.data?.recommendResponseList)
    }
    function handleAddComments(strData) {
        let goodsBottomInfo = JSON.parse(strData)
        console.log(goodsBottomInfo)
        let temp=[]
        goodsBottomInfo.forEach((element,index) => {
            if (index === 0) {
                temp.unshift(element)
                if (goodsBottomInfo.length === 1) {
                    temp.push({ group: '评论' })
                    // temp.push(element)
                }
            }
            if (index === 1) {
                temp.push({ group: '评论' })
                temp.push(element)
            }
            else if(index>1){ 
                temp.push(element)
            } 
        });
        setgoodsBottomInfo(temp)
    }

    const handleThoumd = (index) => {
        setthoumdLeft(127 * index)
        
        setbottomIndex(index)
    }
    const handleJumpBrand = (url) => {
        const navigate = window.open('_blank')
        navigate.location.href=url
    }
    return (
        <div className='yiho-goods-info'>
            <div className='goods-info-left'>
                <div className='goods-info-title'>
                    {
                        goodsBottomInfo.map((item, index) => {
                            return (
                                <div key={index} onClick={()=>handleThoumd(index)} className='info-title-item'>
                                    <span>{ item.group }</span>
                                </div>
                            )
                        })
                    }
                    <div className='title-thoumd' style={{left:thoumdLeft}}>

                    </div>
                </div>
                <div className='goods-info-container'>
                    {
                        bottomIndex === 1 ? (
                            <Comments></Comments>
                        ) : (
                            <ImgView data={goodsBottomInfo[bottomIndex]?.floors}></ImgView>
                        )
                    }
                </div>
            </div>
            <div className='goods-info-right'>
                <div className='right-header'>
                    <div>
                        <img className='header-img' src={props?.brand?.brandLogo} alt="" />
                    </div>
                    <div className='header-name'>
                        <span title={ props?.brand?.brandName}>{ props?.brand?.brandName}</span>
                        <div className='header-name-1'>
                            <span>{ props?.brand?.brandSlogan}</span>
                        </div>
                    </div>
                    <div className='header-btn-box'>
                        <div className='header-btn' onClick={()=>handleJumpBrand(props?.brand?.jumpURL)}>
                            <span>进入</span>
                        </div>
                    </div>
                </div>
                <div>
                    {
                        recmmendInfo.map((item, index) => {
                            return (
                                <GoodsItem data={item?.data?.goods} key={index}></GoodsItem>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}