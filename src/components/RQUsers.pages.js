import { useQuery } from "react-query";
import axios from "axios";

const fetchUser = () => {
    return axios.get("http://localhost:4000/users");
};

export const RQUsers = () => {
    const { isLoading, data, isError, error } = useQuery("getUsers", fetchUser);

    if (isLoading) {
        return <h2>Loading...</h2>;
    }
    if (isError) {
        return <h2>{error.message}</h2>;
    }

    return (
        <>
            <h2>RQ Users</h2>
            {data?.data?.map((user) => (
                <div key={user.id}>{user.name}</div>
            ))}
        </>
    );
};
