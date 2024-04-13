import { useEffect, useState } from "react"
import {useParams} from "react-router-dom"
const Movie = () => {

    const [myMovie, setMyMovie] = useState({})

    let id = useParams()
    console.log(id)

    useEffect( () => {
        let movie =   {
                id: 1,
                title: "Highlander",
                release_date: "1986-03-07",
                runtime: 116,
                mpaa_rating: "R",
                description: "Some long description",
        }
        setMyMovie(movie)
    }, [id])
    
    return(
        <div>
            <h2>Movie {myMovie.name}</h2>
            <hr/>
        </div>
    )
}

export default Movie