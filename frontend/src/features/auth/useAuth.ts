import {useContext} from "react";
import {AuthContext} from "../../utils/auth/context";

export const useAuth = () => useContext(AuthContext)
