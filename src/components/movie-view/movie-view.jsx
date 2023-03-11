import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../movie-card/movie-card";

export const MovieView = ({
    movies,
    findSimilarMovies,
    favoriteMovies,
    toggleFavorite,
}) => {
    const { movieId } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const movie = movies.find((b) => b._id === movieId);

    const handleToggle = (movie) => {
        toggleFavorite(movie);
    };

    return(
        <Col md={8}>
            <div>{movie.Title}</div>
            <div>{movie.Genre}</div>
            <Link to={'/'}>
                <Button className="back-button">Back</Button>
            </Link>
        </Col>
    )
}