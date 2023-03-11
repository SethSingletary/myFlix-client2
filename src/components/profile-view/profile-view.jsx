import React, { useState, useEffect, useRef} from "react";
import { Card, ListGroup, Button, Form, Row, Col } from "react-bootstrap";
import MovieCard from "../movie-card/movie-card"

export const ProfileView = ({
    user,
    favoriteMovies,
    toggleFavorite,
    token,
    onDelete,
}) => {
    const [updateUser, setUpdateUser] = useState(false);
    const [username, setUsername] = useState(user.username);
    const [password, setPassword] = useState(user.password);
    const [email, setEmail] = useState(user.email);
    const [birthday, setBirthday] = useState(user.birthday);
    const birthdayInputRef = useRef(null);

    useEffect(() => {
        if (birthdayInputRef.current){
            birthdayInputRef.current.value = formatDate(birthday);
        }
    }, [updateUser]);

    const handleUpdate = async () => {
        event.preventDefault();

        const userData = {
            username: username,
            password: password,
            email: email,
            birthday: birthday,
        };
        try{
            const response = await fetch(
                `https://my-flix2.herokuapp.com/users/${user.username}`,
                {
                    method: "PUT",
                    body: JSON.stringify(userData),
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            );
            const {success, message, data} = await response.json();
            if(success){
                alert(message);
                setUpdateUser(false);
            } else {
                console.error(message);
                alert("Update Failed!");
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleDeleteUser = async () => {
        try {
            const response = await fetch(
                `https://my-flix2.herokuapp.com/users/${user.username}`,
                {
                    method: "DELETE",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            );
            const {success, message, data} = await response.json();
            if(success){
                onDelete();
            } else {
                alert(message);
            }
        } catch (error){
            console.error(error);
        }
    };

    const handleToggle = (movie) => {
        toggleFavorite(movie);
    };

    const formatDate = (birthday) => {
        const date = new Date(birthday);
        const year = date.getFullYear();
        let month = date.getMonth() + 1;
        let dayOfMonth = date.getDate();

        return `${year}-${month}-${dayOfTheMonth}`;
    }

}