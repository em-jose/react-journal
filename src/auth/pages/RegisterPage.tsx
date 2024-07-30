import { useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { Alert, Button, Grid, TextField, Typography } from "@mui/material";
import { AuthLayout } from "@/auth/layout/AuthLayout";
import { useForm } from "@/hooks";
import { startCreatingWithEmailPassword, AuthStatus } from "@/store/auth";

const formData = {
    email: "",
    password: "",
    displayName: "",
};

const formValidations = {
    email: [(value) => value.includes("@"), "Email must have an @"],
    password: [
        (value) => value.length >= 6,
        "Password must have at least 6 characters",
    ],
    displayName: [(value) => value.length >= 1, "Name is required"],
};

export const RegisterPage = () => {
    const dispatch = useDispatch();
    const [formSubmitted, setFormSubmitted] = useState(false);
    const { status, errorMessage } = useSelector((state) => state.auth);
    const isCheckingAuthentication = useMemo(
        () => status === AuthStatus.CHECKING,
        [status]
    );
    const {
        displayName,
        email,
        password,
        onInputChange,
        formState,
        isFormValid,
        displayNameValid,
        emailValid,
        passwordValid,
    } = useForm(formData, formValidations);

    const onSubmit = (event) => {
        event.preventDefault();
        setFormSubmitted(true);

        if (!isFormValid) return;

        dispatch(startCreatingWithEmailPassword(formState));
    };

    return (
        <AuthLayout title="Register">
            <form onSubmit={onSubmit}>
                <Grid container>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Full name"
                            type="text"
                            placeholder="John Doe"
                            fullWidth
                            name="displayName"
                            value={displayName}
                            onChange={onInputChange}
                            error={!!displayNameValid && formSubmitted}
                            helperText={displayNameValid}
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="E-mail"
                            type="email"
                            placeholder="mail@test.com"
                            fullWidth
                            name="email"
                            value={email}
                            onChange={onInputChange}
                            error={!!emailValid && formSubmitted}
                            helperText={emailValid}
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Password"
                            type="password"
                            placeholder="password"
                            fullWidth
                            name="password"
                            value={password}
                            onChange={onInputChange}
                            error={!!passwordValid && formSubmitted}
                            helperText={passwordValid}
                        />
                    </Grid>

                    <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                        <Grid item xs={12} display={errorMessage ? "" : "none"}>
                            <Alert severity="error">{errorMessage}</Alert>
                        </Grid>

                        <Grid item xs={12}>
                            <Button
                                disabled={isCheckingAuthentication}
                                variant="contained"
                                fullWidth
                                type="submit"
                            >
                                Create account
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container direction="row" justifyContent="end">
                        <Typography sx={{ mr: 1 }}>
                            Do you have an account?
                        </Typography>
                        <RouterLink color="inherit" to="/auth/login">
                            Login
                        </RouterLink>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    );
};
