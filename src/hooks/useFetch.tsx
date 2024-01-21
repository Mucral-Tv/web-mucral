import { useState, useEffect } from 'react';

interface FetchResult<T> {
    data: T;
    loading: boolean;
    error?: Error;
}

const useFetch = <T,>(url: string): FetchResult<T> => {
    const [data, setData] = useState<T>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error>();

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((result: T) => {
                setData(result);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setError(error);
            });
    }, [url]);

    return { data: data!, loading, error };
}

export default useFetch;
