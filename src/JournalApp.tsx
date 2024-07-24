import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { AppRouter } from "@/router/AppRouter";
import { store } from "@/store";
import { AppTheme } from "@/theme";

import "animate.css";

export const JournalApp = () => {
    return (
        <>
            <Provider store={store}>
                <BrowserRouter>
                    <AppTheme>
                        <AppRouter />
                    </AppTheme>
                </BrowserRouter>
            </Provider>
        </>
    );
};
