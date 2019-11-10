interface Query<T> {
    data: T;
    loading: boolean;
    error: Error;
}

export default Query;