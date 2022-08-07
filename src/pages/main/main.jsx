import { lazy ,useEffect,useState} from 'react';
import Header from './header/header';
import FixedBar from "../../components/fixedBar";
import HeaderBar from "./headerBar/headerBar";
// import Category from "./category/category";
import Business from "./business/business";
import RaiseGoods from "./raiseGoods/raiseGoods";
import Seckill from "./seckill/seckill";
import NewProduct from "./newProduct/newProduct";
import Recommend from "./recommend/recommend";
import Footer from "./footer/footer"
import './main.scss';
import {getMainContent} from '../../utils/api/main'
import LazyLoading from '../../components/lazyLoading/lazyLoading';
// const Header = lazy(() => import("./header/header"))
// const FixedBar = lazy(() => import('../../components/fixedBar'))
// const HeaderBar = lazy(() => import('./headerBar/headerBar'))
const Category = lazy(() => import('./category/category'))
// const Business = lazy(() => import('./business/business'))
// const RaiseGoods = lazy(() => import('./raiseGoods/raiseGoods'))
// const Seckill = lazy(() => import('./seckill/seckill'))
// const NewProduct = lazy(() => import('./newProduct/newProduct'))
// const Recommend = lazy(() => import('./recommend/recommend'))
// const Footer = lazy(() => import('./footer/footer'))

function Main(props) {

    const [mainData, setmainData] = useState([]);
    const getMainData = async ()=>{
        let result = await getMainContent()
        if (result.code === 200) {
            setmainData(result.data.homepage.floors)
            console.log(result.data)
        }
    }
    useEffect(() => {
        getMainData()
        return () => {
            
        };
    }, []);
    return (
        <>
            {
                mainData.length > 0 ? (
                    <div style={{position:'relative'}}>
                        <Header></Header>
                        <HeaderBar></HeaderBar>
                        <FixedBar></FixedBar>
                        <Category banner={mainData[0]}></Category>
                        <Business></Business>
                        <RaiseGoods data={mainData[2]}></RaiseGoods>
                        <Seckill data={mainData[3]}></Seckill>
                        <NewProduct data={mainData[7]}></NewProduct>
                        <Recommend></Recommend>
                        <Footer></Footer>
                    </div>
                ):<LazyLoading></LazyLoading>
            }
        </>
    )
}
export default Main