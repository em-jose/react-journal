import { Link as RouterLink } from "react-router-dom";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { AuthLayout } from "@/auth/layout/AuthLayout";
import { useForm } from "@/hooks";

const formValidations = {
    email: [(value) => value.includes("@"), "Email must have an @"],
    password: [
        (value) => value.legnth >= 6,
        "Password must have at least 6 characters",
    ],
    displayName: [(value) => value.legnth >= 1, "Name is required"],
};

export const RegisterPage = () => {
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
    } = useForm({}, formValidations);

    const onSubmit = (event) => {
        event.preventDefault();
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
                            error={!displayNameValid}
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
                        />
                    </Grid>

                    <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                        <Grid item xs={12} sm={6}>
                            <Button variant="contained" fullWidth type="submit">
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
