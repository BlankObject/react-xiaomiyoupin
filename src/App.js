import './App.css';
import React, { useEffect, Suspense } from 'react';
import { Redirect, Route,Routes } from 'react-router-dom';

const Index=React.lazy(()=>import('./pages/index'))
function App() {
  return (
    <>
       {/* <Suspense fallback={<div>loading...</div>}>
          <Routes>
            <Route path={'/'} exact component={Index}></Route>
          </Routes>
      </Suspense> */}
      <Index></Index>
    </>
  )
}

export default App;
