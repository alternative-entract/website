import httpClient from "../../utils/httpClient";
import { t } from "../../utils/i18n/i18n";
import { ApiEndpoint, UserInfo,AssociationInfo ,RegisterReply} from "./types";

export const registerAndCreateAssoAPI = async (
    user: UserInfo,
    assosiation: AssociationInfo,

)=> {



    try {
    const registerRes:RegisterReply =   await httpClient.post(
            ApiEndpoint.REGISTER_USER,
            user
        )

        if(registerRes.user&& registerRes.user){

            await httpClient.post(
                ApiEndpoint.CREATE_ASSOTIATION,
                {userId:registerRes.user._id,
                    ...assosiation
                }
            );
        }


    } catch (error) {
        throw new Error(t("form.notificationError.UNEXPECTED_ERROR"));
    }
};
