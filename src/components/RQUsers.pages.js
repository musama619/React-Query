import { useQuery } from "react-query";
import axios from "axios";
import { Link } from "react-router-dom";

const fetchUser = () => {
    return axios.get("http://localhost:4000/users");
};

export const RQUsers = () => {
    const onSuccess = () => {
        console.log("On Success");
    };
    const onError = () => {
        console.log("On Error");
    };

    const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
        "getUsers",
        fetchUser,
        {
            onSuccess,
            onError,
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
            {data?.data?.map((user) => (
                <div key={user.id}>
                    <Link to={`/user/${user.id}`}>{user.name}</Link>
                </div>
            ))}
        </>
    );
};
