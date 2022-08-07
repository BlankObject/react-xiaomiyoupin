import './lazyLoading.scss'
export default function LazyLoading() {
    return (
        <div className="yiho-loading" style={{'height':document.body.scrollHeight}}>
            <div className="yiho-loading-container">
                <div style={{'width':'130px','height':'120px'}}>
                    <img style={{'width':'130px','height':'120px'}} src="https://s1.chu0.com/src/img/gif/71/71e0904283ec40b2add01672296a46c8.gif?e=1735488000&token=1srnZGLKZ0Aqlz6dk7yF4SkiYf4eP-YrEOdM1sob:0HP7akNUnGO_Q2VrKb3QuV32yjc=" alt="" />
                </div>
                <div style={{'width':'130px','height':'120px',textAlign:'center',marginTop:'10px'}}>
                    <span>加载中...</span>
                </div>
            </div>
        </div>
    )
}