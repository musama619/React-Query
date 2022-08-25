import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

const fetchUser = (id) => {
    return axios.get(`http://localhost:4000/users/${id}`);
};

export const User = () => {
    const { id } = useParams();

    const onSuccess = () => {
        console.log("On Success");
    };
    const onError = () => {
        console.log("On Error");
    };

    const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
        ["getUsers", id],
        () => fetchUser(id),
        {
            onSuccess,
            onError,
        }
    );

    if (isLoading) {
        return <h2>Loading...</h2>;
    }
    if (isError) {
        return <h2>{error.message}</h2>;
    }

    return <div>{data?.data.name}</div>;
};
