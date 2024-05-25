
import { React } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {
    Card,
    CardContent
} from "@mui/material";

import "./Pages.css";

const Login = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        console.log({
            email: data.get("email"),
            password: data.get("password"),
        });
    };

    return (
        <Container  maxWidth="sm">
             <Box className="ak"
                 sx={{
                    marginTop: 10,
                //     display: "flex",
                //     flexDirection: "column",
                //     alignItems: "center",
                 }}
            > 
                <Card >
                    <CardContent sx={{ m: 3 }}>
                        <Avatar sx={{
                            m: "auto",
                            bgcolor: "primary.main"
                        }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Login 
                        </Typography>

                        <Box
                            component="form"
                            onSubmit={handleSubmit}
                            noValidate
                            sx={{ mt: 1 }}
                        >
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address here"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <Button
                                 type="submit"
                                 className="sign"
                                 variant="contained"
                                  sx={{ mt: 3, mb: 2 }}
                            >
                                Sign in
                            </Button>
                            <Grid container sx={{ m: 1 }}>
                                <Grid item sm>
                                    <Link className="text-for"
                                        href="/forgotPassword"
                                        variant="body2"
                                        style={{textDecoration:"None"}}
                                    >
                                        Forgot password?
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </Container>
    );
};

export default Login;
