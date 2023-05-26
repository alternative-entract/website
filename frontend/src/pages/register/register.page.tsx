import {Section} from "../../components";
import {PageLayout} from "../../layouts/page.layout";
import {MultiStepForm} from "../../components/multiStepForm/multiStepForm.component";
import {REGISTER_FORM_STEPS} from "../../utils/constants";

const Register = () => (
    <PageLayout>
        <Section>
            <MultiStepForm
                steps={REGISTER_FORM_STEPS}
            />
        </Section>
    </PageLayout>
)

export default Register