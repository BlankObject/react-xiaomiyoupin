export default function ImgView(props) {
    return (
        <div style={{width:'100%'}}>
            {
                props?.data?.map((item, index) => {
                    return (
                        <img style={{width:'100%'}} key={item.id} src={item?.data?.prod_image?.img?.url}></img>
                    )
                })
            }
        </div>
    )
}