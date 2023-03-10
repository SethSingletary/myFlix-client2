import React, {useState} from "react";
import { Button, Form } from "react-bootstrap";

export const LoginView = ({onLoggedIn}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        try{
            const queryParams = `?Username=${username}&Password=${password}`
            const respone = await fetch(
                `https://my-flix2.herokuapp.com/login${queryParams}`
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            const { success, message, data} = await response.json();
            if(data){
                localStorage.setItem("username", username);
                localStorage.setItem("password", password);
                onLoggedIn(username, data.token);
            } else if(success){
                alert(message);
            } else{
                alert("Login Failed")
            }
        } catch (error){
            console.error(error);
            alert("Login Failed. Error")
        }
    };
    return(
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formUsername">
                <Form.Label>Username:</Form.Label>
                <Form.Control
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group controlId="formPassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control
                    type="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )

}