import {Section} from "../../components";
import {PageLayout} from "../../layouts/page.layout";
import {t} from "../../utils/i18n/i18n";

const Profile = () => {
    return (
        <PageLayout>
            <Section>{t("profile.title")}</Section>
        </PageLayout>
    )
}

export default Profile