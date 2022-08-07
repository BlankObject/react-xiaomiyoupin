import React, { Fragment, useEffect, useState ,Suspense} from "react";
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import NotFount from "../notFount/notFount";
import Login from "../user/login/login";
import Register from "../user/register/register";
import Code from "../user/code/code"
import LazyLoading from "../../components/lazyLoading/lazyLoading";
// import Main from '../main/main'
// import User from '../user/user'
// import GoodsDetail from '../goodsDetail/goodsDetail'
const Main = React.lazy(() => import('../main/main'))
const User = React.lazy(() => import('../user/user'))
const GoodsDetail = React.lazy(() => import('../goodsDetail/goodsDetail'))
const GoodsList=React.lazy(()=>import('../goodsList/goodsList'))
// const Login = React.lazy(() => import('../user/login/login'))
// const Register = React.lazy(() => import('../user/register/register'))
// const Code=React.lazy(()=>import('../user/code/code'))

function Index() {
    return (
    <BrowserRouter>
        <Routes>
            <Route path={'/'} element={
                <Suspense fallback={
                    <LazyLoading></LazyLoading>
                }><Main/></Suspense>
                }>
            </Route>
            <Route path={'/user'} element={<Suspense fallback={<LazyLoading></LazyLoading>}><User /></Suspense>}>
                <Route path="login" element={<Login />}></Route>
                <Route path="register" element={<Register />}></Route>
                <Route path="code" element={<Code/>}></Route>
            </Route>
            <Route path='/goodsDetail' element={
                <Suspense fallback={<LazyLoading></LazyLoading>}>
                    <GoodsDetail/>
                 </Suspense>
            }></Route>
            <Route path="/goodsList" element={
                <Suspense fallback={<LazyLoading></LazyLoading>}>
                    <GoodsList/>
                 </Suspense>
            }></Route>
            {/* <Route path="loading" element={<LazyLoading/>}></Route> */}
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
            <Route path="*" element={<NotFount></NotFount>}></Route>
        </Routes>
    </BrowserRouter>
    );
}
export default Index;