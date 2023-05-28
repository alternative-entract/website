import {Section} from "../../components";
import {PageLayout} from "../../layouts/page.layout";
import {RegisterWizard} from "../../components/registerWizard/registerWizard.component";

const Register = () => {

    return <PageLayout>
        <Section>
            <RegisterWizard />
        </Section>
    </PageLayout>
}

export default Register