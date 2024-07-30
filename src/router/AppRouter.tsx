import { Route, Routes, Navigate } from "react-router-dom";
import { AuthRoutes } from "@/auth/routes/AuthRoutes";
import { JournalRoutes } from "@journal/routes/JournalRoutes";
import { useCheckAuth } from "@/hooks/useCheckAuth";
import { CheckingAuth } from "@/ui";
import { AuthStatus } from "@/store/auth";

export const AppRouter = () => {
    const { status } = useCheckAuth();

    if (status === AuthStatus.CHECKING) {
        return <CheckingAuth />;
    }

    return (
        <Routes>
            {status === AuthStatus.AUTHENTICATED ? (
                <Route path="/*" element={<JournalRoutes />} />
            ) : (
                <Route path="/auth/*" element={<AuthRoutes />} />
            )}

            <Route path="/*" element={<Navigate to="/auth/login" />} />
        </Routes>
    );
};
