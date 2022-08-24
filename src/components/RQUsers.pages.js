import { useQuery } from "react-query";
import axios from "axios";

const fetchUser = () => {
    return axios.get("http://localhost:4000/users");
};

export const RQUsers = () => {

    const onSuccess = () => {
        console.log("On Success")
    };
    const onError = () => {
        console.log("On Error")
    };

    const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
        "getUsers",
        fetchUser,
        {
            enabled: false, // disable fetching on mount
            refetchOnMount: false, // always
            refetchOnWindowFocus: true, // always,
            refetchInterval: 10000, // every 2 seconds
            refetchIntervalInBackground: true, //continue pulling data even browser not in focus
            onSuccess,
            onError,
            select: (data) => {
                const userNames = data.data.map(user => user.name) 
                return userNames
            }
        }
    );

    console.log({ isLoading, isFetching });

    if (isLoading) {
        return <h2>Loading...</h2>;
    }
    if (isError) {
        return <h2>{error.message}</h2>;
    }

    return (
        <>
            <h2>RQ Users</h2>
            <button onClick={refetch}>Fetch Users</button>
            {data.map((userNames) => (
                <div key={userNames}>{userNames}</div>
            ))}
            {/* {data?.data?.map((user) => (
                <div key={user.id}>{user.name}</div>
            ))} */}
        </>
    );
};
