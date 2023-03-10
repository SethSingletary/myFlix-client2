import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export const SignupView = ({onSignedUp}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [birthday, setBirthday] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        const userData = {
            username: username,
            password: password,
            email: email,
            birthday: birthday,
        };

        const response = await fetch("https://my-flix2.herokuapp.com/users", {
            method: "POST",
            body: JSON.stringify(userData),
            headers: {
                "Content-Type": "applictation/json",
            },
        });
        const {success, message, data} = await response.json();
        if(success){
            alert(message)
            onSignedUp();
        } else{
            alert("Signup failed");
        }
    };

    return(
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formUsername">
                <Form.Label>Username:</Form.Label>
                <Form.Control
                    type="text"
                    value={username}
                    onChange={(event) => setUsername(event.targe.value)}
                    required
                />
            </Form.Group>
            <Form.Group controlId="formPassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control
                    type="text"
                    value={password}
                    onChange={(event) => setPassword(event.targe.value)}
                    required
                />
            </Form.Group>
            <Form.Group controlId="formEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                    type="text"
                    value={password}
                    onChange={(event) => setEmail(event.targe.value)}
                    required
                />
            </Form.Group>
            <Form.Group controlId="formBirthday">
                <Form.Label>Birthday:</Form.Label>
                <Form.Control
                    type="date"
                    value={birthday}
                    onChange={(event) => setBirthday(event.targe.value)}
                    required
                />
            </Form.Group>
            <Button className="primary" type="submit">Submit</Button>
        </Form>
    )
}