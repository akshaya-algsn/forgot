
import { React ,Component } from "react";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {
    Card,
    CardContent
} from "@mui/material";
import { toast } from "react-toastify";
import "./Pages.css";
import { json } from "react-router-dom";

class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const { email } = this.state;
        console.log(email);
        fetch("http://localhost:5000/forgot-password", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({ email }),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data, "userRegister");
            alert(data.status);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
    }
    render() {
    return (
        <Container maxWidth="sm">
            <Box className="kk"
                sx={{
                    marginTop: 10,
                }}
            >
                <Card sx={{ boxShadow: "4" }}>
                    <CardContent sx={{ m: 3 }}>
                        <Avatar sx={{
                            m: "auto",
                            bgcolor: "primary.main"
                        }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1"
                            variant="h5" sx={{ mt: 1 }}>
                            Forgot Password
                        </Typography>

                        <Box component="form" onSubmit={this.handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                placeholder="Email Address here "
                                name="email"
                                autoComplete="email"
                                autoFocus
                                onChange={(e) => this.setState({email : e.target.value})}
                            />
                            <Button
                                type="submit"
                                className="sign"
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Reset Password
                            </Button>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </Container>
    );
};
}

export default ForgotPassword;
