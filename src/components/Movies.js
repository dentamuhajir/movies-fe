import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


const Movies = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const header = new Headers();
        header.append("Content-Type", "application/json");
        const requestOptions = {
          method: "GET",
          headers: header,
        };
      
        fetch('http://localhost:8888/movies')
          .then((response) => response.json())
          .then((data) => {
            setMovies(data);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);

    // useEffect(() => {
    //     async function fetchMovies() {
    //       try {
    //         const response = await fetch('http://localhost:8888/movies');
    //         if (!response.ok) {
    //           throw new Error('Network response was not ok');
    //         }
    //         const moviesData = await response.json();
    //         setMovies(moviesData);
    //       } catch (error) {
    //         console.error('Error fetching movies:', error);
    //       }
    //     }
    
    //     fetchMovies();
    //   }, []); 



    // useEffect( () => {

    //     let movieList = [
    //         {
    //             id: 1,
    //             title: "Highlander",
    //             release_date: "1986-03-07",
    //             runtime: 116,
    //             mpaa_rating: "R",
    //             description: "Some long description",
    //         },
    //         {
    //             id: 2,
    //             title: "Raiders of the Lost Ark",
    //             release_date: "1981-06-12",
    //             runtime: 115,
    //             mpaa_rating: "PG-13",
    //             description: "Some long description",
    //         },
    //     ]

    //     console.log(movieList)
    //     setMovies(movieList)
    // },[])

    return(
        <>
        <div className="text-center">
            <h2>Movies</h2>
            <hr/>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Movie</th>
                        <th>Release Date</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map((m) => (
                        <tr key={m.id}>
                            <td>
                                <Link to={`/movies/${m.id}`}>
                                    {m.title}
                                </Link>
                            </td>
                            <td>{m.release_date}</td>
                            <td>{m.mpaa_rating}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>
    )
}

export default Movies