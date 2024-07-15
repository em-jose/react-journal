import { JournalLayout } from "@journal/layout/JournalLayout";
import { NothingSelectedView } from "@journal/views";

export const JournalPage = () => {
    return (
        <>
            <JournalLayout>
                <NothingSelectedView />
            </JournalLayout>
        </>
    );
};
