"use client"
import FetchUser from "../FetchUser";
import { useUser } from "./ContextFetchMain";

const ContextFetch = () => {
    const {state, dispatch} = useUser();
    const {user, userId, status} = state;

    const getNextUser = () => {
        dispatch({type: "SET_USER_ID", payload: userId + 1});
    }

    const getPreviousUser = () => {
        dispatch({type: "SET_USER_ID", payload: userId - 1});
    }


    return ( <div>
        <FetchUser user={user} userId={userId} status={status} getNextUser={getNextUser} getPreviousUser={getPreviousUser} />
    </div> );
}
 
export default ContextFetch;