import {useContext} from "react";
import {AuthContext} from "../../utils/contexts/auth/context";

export const useAuth = () => useContext(AuthContext)
