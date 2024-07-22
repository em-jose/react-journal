import { useDispatch } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "@/auth/layout/AuthLayout";
import { useForm } from "@/hooks/";
import { checkingAuthentication, startGoogleSignIn } from "@/store/auth/";

export const LoginPage = () => {
    const dispatch = useDispatch();
    const { email, password, onInputChange } = useForm({
        email: "test@google.com",
        password: "123456",
    });

    const onSubmit = (event) => {
        event.preventDefault();

        dispatch(checkingAuthentication());
    };

    const onGoogleSignIn = () => {
        dispatch(startGoogleSignIn());
    };

    return (
        <AuthLayout title="Login">
            <form onSubmit={onSubmit}>
                <Grid container>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="E-mail"
                            type="email"
                            name="email"
                            placeholder="mail@test.com"
                            value={email}
                            onChange={onInputChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Password"
                            type="password"
                            placeholder="password"
                            name="password"
                            value={password}
                            onChange={onInputChange}
                            fullWidth
                        />
                    </Grid>

                    <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                        <Grid item xs={12} sm={6}>
                            <Button variant="contained" fullWidth type="submit">
                                Login
                            </Button>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Button
                                variant="contained"
                                fullWidth
                                onClick={onGoogleSignIn}
                            >
                                <Google />
                                <Typography sx={{ ml: 1 }}>Google</Typography>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container direction="row" justifyContent="end">
                    <Link
                        component={RouterLink}
                        color="inherit"
                        to="/auth/register"
                    >
                        Create account
                    </Link>
                </Grid>
            </form>
        </AuthLayout>
    );
};
