import {
    loginWithEmailPassword,
    logoutFirebase,
    signInWithGoogle,
} from "../../../src/firebase/providers";
import {
    checkingCredentials,
    login,
    logout,
    startGoogleSignIn,
    startLoginWithEmailPassword,
    startLogout,
} from "../../../src/store/auth";
import { checkingAuthentication } from "../../../src/store/auth/thunks";
import { clearNotesOnLogout } from "../../../src/store/journal";
import { demoUser } from "../../fixtures/authFixtures";

jest.mock("../../../src/firebase/providers");

describe("Tests over AuthThunks", () => {
    const dispatch = jest.fn();

    beforeEach(() => jest.clearAllMocks());

    test("Should invoke checkingCredentials", async () => {
        await checkingAuthentication()(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    });

    test("startGoogleSignIn should call 'checkingCredentials' and do login", async () => {
        const loginData = {
            ok: true,
            ...demoUser,
        };

        await signInWithGoogle.mockResolvedValue(loginData);
        await startGoogleSignIn()(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(login(loginData));
    });

    test("startGoogleSignIn should call 'checkingCredentials' and do logout with error message", async () => {
        const loginData = {
            ok: false,
            errorMessage: "Error message",
        };

        await signInWithGoogle.mockResolvedValue(loginData);
        await startGoogleSignIn()(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(logout(loginData.errorMessage));
    });

    test("startLoginWithEmailPassword should call 'checkingCredentials' and do login", async () => {
        const loginData = {
            ok: true,
            ...demoUser,
        };
        const formData = {
            email: demoUser.email,
            password: "123456",
        };

        await loginWithEmailPassword.mockResolvedValue(loginData);
        await startLoginWithEmailPassword(formData)(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(login(loginData));
    });

    test("startLoginWithEmailPassword should call 'checkingCredentials' and do logout with error message", async () => {
        const loginData = {
            ok: false,
            errorMessage: "Login error",
        };
        const formData = {
            email: "",
            password: "",
        };

        await loginWithEmailPassword.mockResolvedValue(loginData);
        await startLoginWithEmailPassword(formData)(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(logout(loginData));
    });

    test("startLogout should call 'logoutFirebase', 'clearNotes' and do logout", async () => {
        await startLogout()(dispatch);

        expect(logoutFirebase).toHaveBeenCalled();
        expect(dispatch).toHaveBeenCalledWith(clearNotesOnLogout());
    });
});
