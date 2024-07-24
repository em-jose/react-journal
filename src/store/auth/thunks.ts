import {
    registerUserWithEmailPassword,
    signInWithGoogle,
    loginWithEmailPassword,
    logoutFirebase,
} from "@/firebase/providers";
import { clearNotesOnLogout } from "@/store/journal";
import { checkingCredentials, login, logout } from "@/store/auth";

export const checkingAuthentication = (email: string, password: string) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
    };
};

export const startGoogleSignIn = () => {
    return async (dispatch) => {
        dispatch(checkingCredentials());

        const result = await signInWithGoogle();

        if (!result.ok) return dispatch(logout(result.errorMessage));

        dispatch(login(result));
    };
};

export const startCreatingWithEmailPassword = ({
    email,
    password,
    displayName,
}) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());

        const result = await registerUserWithEmailPassword({
            email,
            password,
            displayName,
        });

        if (!result.ok) return dispatch(logout(result.errorMessage));

        dispatch(login(result));
    };
};

export const startLoginWithEmailPassword = ({ email, password }) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());

        const result = await loginWithEmailPassword({ email, password });

        if (!result.ok) return dispatch(logout(result));

        dispatch(login(result));
    };
};

export const startLogout = () => {
    return async (dispatch) => {
        await logoutFirebase();
        dispatch(clearNotesOnLogout());
        dispatch(logout({}));
    };
};
