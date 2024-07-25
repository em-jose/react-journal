import {
    authSlice,
    checkingCredentials,
    login,
    logout,
} from "../../../src/store/auth/authSlice";
import {
    authenticatedState,
    demoUser,
    initialState,
} from "../../fixtures/authFixtures";

describe("Test over authSlice", () => {
    test("Should return the initial state and must have the name 'auth'", () => {
        const state = authSlice.reducer(initialState, {});

        expect(state).toEqual(initialState);
        expect(authSlice.name).toBe("auth");
    });

    test("Should authenticate", () => {
        const state = authSlice.reducer(initialState, login(demoUser));

        expect(state).toEqual({
            status: "authenticated",
            uid: demoUser.uid,
            email: demoUser.email,
            displayName: demoUser.displayName,
            photoURL: demoUser.photoURL,
            errorMessage: null,
        });
    });

    test("Should logout", () => {
        const state = authSlice.reducer(authenticatedState, logout());

        expect(state).toEqual({
            status: "not-authenticated",
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage: undefined,
        });
    });

    test("Should logout and show error message", () => {
        const errorMessage = "Error message";
        const state = authSlice.reducer(
            authenticatedState,
            logout({ errorMessage })
        );

        expect(state).toEqual({
            status: "not-authenticated",
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage: errorMessage,
        });
    });

    test("Should change state to 'checking'", () => {
        const state = authSlice.reducer(
            authenticatedState,
            checkingCredentials()
        );

        expect(state.status).toBe("checking");
    });
});
