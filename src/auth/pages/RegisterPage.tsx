import { Link as RouterLink } from "react-router-dom";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { AuthLayout } from "@/auth/layout/AuthLayout";

export const RegisterPage = () => {
    return (
        <AuthLayout title="Register">
            <form>
                <Grid container>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Full name"
                            type="text"
                            placeholder="John Doe"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="E-mail"
                            type="email"
                            placeholder="mail@test.com"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Password"
                            type="password"
                            placeholder="password"
                            fullWidth
                        />
                    </Grid>

                    <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                        <Grid item xs={12} sm={6}>
                            <Button variant="contained" fullWidth>
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
