import { checkingCredentials } from "../../../src/store/auth/authSlice";
import { checkingAuthentication } from "../../../src/store/auth/thunks";

jest.mock("../../../src/firebase/providers");

describe("Tests over AuthThunks", () => {
    const dispatch = jest.fn();

    beforeEach(() => jest.clearAllMocks());

    test("Should invoke checkingCredentials", async () => {
        await checkingAuthentication()(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    });
});
