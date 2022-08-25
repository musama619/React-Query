import axios from "axios";
import { useQueries } from "react-query";

const fetchUser = (id) => {
    return axios.get(`http://localhost:4000/users/${id}`);
};

export const DynamicParallelQueries = ({ userIds }) => {
    const result = useQueries(
        userIds.map(id => {
            return {
                queryKey: ['user', id],
                queryFn: () => fetchUser(id),
            }
        })
   )

   console.log(result)
};
