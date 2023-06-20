import { Section } from "../../components";
import { t } from "../../utils/i18n/i18n";

const NotFound = () => {
    return (
        <Section>
            <h1>{t("error.notfoundPage")}</h1>
        </Section>
    );
};

export default NotFound;
