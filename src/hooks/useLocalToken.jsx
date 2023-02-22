const useLocalToken = () => {
    const storedToken = localStorage.getItem('kometaToken');
    // Check if token is still valid!!
    return storedToken ? storedToken : null;
}

export default useLocalToken;