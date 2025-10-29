export default function MenuList(props){

    return(
           <div className="menuListWrap">
                {props.filteredImgs.map((img) => (
                <div  className="menuList" key={img.id}
                    onClick={() => { 
                        props.addToModal(img);
                        props.setIsCartModalOpen(true);
                    }}>
                    <img
                        src={`./tableImg/${img.src}`}
                        alt={img.name}
                        style={{ width:'140px',height:'110px'}}
                    />
                    <h2 className="itemName">{img.name}</h2>
                    <span>{img.price.toLocaleString()}원</span>
                </div>
                ))}
            </div>
    )
}
