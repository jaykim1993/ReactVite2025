// MovieApp의 손자
// MovieList의 자식

export default function MovieItem(props){
    return(
        <>
        <li>
            {props.movie.title}
            <button type="button" onClick={()=>props.onSelect(props.movie)}>상세보기</button>
        </li>
        </>
    )
}
