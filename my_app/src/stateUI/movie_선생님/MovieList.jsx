// MovieApp의 자식
// MovieList의 부모
import MovieItem from "./MovieItem"

export default function MovieList(props){
    return(
        <>
            <ul>
                {/* <li 반복을 위해 map()함수 이용 */}
                {props.movie.map((movie)=>(
                    // 자식인 MovieItem 을 테그로 가져온다
                    <MovieItem key={movie.id} movie={movie} onSelect={props.onSelect}/>
                ))}
            </ul>
        </>
    )
}
