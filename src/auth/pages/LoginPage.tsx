import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material";
import {
    Alert,
    Button,
    Grid,
    Link,
    TextField,
    Typography,
} from "@mui/material";
import { AuthLayout } from "@/auth/layout/AuthLayout";
import { useForm } from "@/hooks/";
import {
    startGoogleSignIn,
    startLoginWithEmailPassword,
    AuthStatus,
} from "@/store/auth/";

const formData = {
    email: "",
    password: "",
};

export const LoginPage = () => {
    const { status, errorMessage } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const { email, password, onInputChange } = useForm(formData);

    const isAuthenticating = useMemo(
        () => status === AuthStatus.CHECKING,
        [status]
    );

    const onSubmit = (event) => {
        event.preventDefault();

        dispatch(startLoginWithEmailPassword({ email, password }));
    };

    const onGoogleSignIn = () => {
        dispatch(startGoogleSignIn());
    };

    return (
        <AuthLayout title="Login">
            <form
                onSubmit={onSubmit}
                className="animate__animated animate__fadeIn animate__faster"
            >
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

                    <Grid
                        container
                        display={errorMessage ? "" : "none"}
                        sx={{ mt: 1 }}
                    >
                        <Grid item xs={12}>
                            <Alert severity="error">{errorMessage}</Alert>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                        <Grid item xs={12} sm={6}>
                            <Button
                                variant="contained"
                                fullWidth
                                type="submit"
                                disabled={isAuthenticating}
                            >
                                Login
                            </Button>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Button
                                variant="contained"
                                fullWidth
                                onClick={onGoogleSignIn}
                                disabled={isAuthenticating}
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
