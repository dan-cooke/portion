/**
 * @file useQuery
 * @internal
 * @description Hook for making GraphQL queries
 */
import { useEffect, useContext, useState } from "react"
import graphql from "../util/graphql"
import { ShowcaseContext } from "../context"

interface UseQueryProps {
    query: string;
}
const useQuery = ({ query }: UseQueryProps) => {

    const { auth, endpoint } = useContext(ShowcaseContext);
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        graphql(query, { auth, endpoint })
            .then(async res => {
                const data = await res.json();
                setData(data.data);
                setLoading(false);
            })
            .catch(err => {
                setError(err);
                setLoading(false);
            })
    }, [query])

    return {
        data,
        error,
        loading
    }

}

export default useQuery;