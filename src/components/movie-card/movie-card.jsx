import React from "react";
import { PropTypes } from "prop-types";
import { Card, Button, Badge } from "react-bootstrap";
import Link from "react-router-dom"

export const MovieCard = ({ movie, isFavorite, toggleFavorite}) => {
    const handleFavoriteClick = (event) => {
        event.preventDefault();
        toggleFavorite(movie)
    };

    return (
        <Card className="h-100">
        <Card.Img variant="top" src="movie.Image"></Card.Img>
        <Card.Body>
            <Card.Title>{movie.Title}</Card.Title>
            <Card.Text>{movie.Genre}</Card.Text>
            <Link to={`/movies/${encodeURIComponent(movie._id)}`}>
                <Button variant="link" onClick={onMovieClick}>Open</Button>
            </Link>
            <Button variant="link" onClick={handleFavoriteClick}>Add movie to favorites</Button>
        </Card.Body>
    </Card>
    )
};
MovieCard.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string
    }).isRequired,
    onMovieClick: PropTypes.func.isRequired
};