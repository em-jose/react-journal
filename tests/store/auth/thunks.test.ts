import { signInWithGoogle } from "../../../src/firebase/providers";
import {
    checkingCredentials,
    login,
    logout,
    startGoogleSignIn,
} from "../../../src/store/auth";
import { checkingAuthentication } from "../../../src/store/auth/thunks";
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
});
