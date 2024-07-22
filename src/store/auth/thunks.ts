import { signInWithGoogle } from "@/firebase/providers";
import { checkingCredentials } from "@/store/auth";

export const checkingAuthentication = (email: string, password: string) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
    };
};

export const startGoogleSignIn = () => {
    return async (dispatch) => {
        dispatch(checkingCredentials());

        const result = await signInWithGoogle();
    };
};
