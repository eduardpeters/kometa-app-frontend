const useLocalToken = () => {
    const storedToken = localStorage.getItem('kometaToken');
    
    return storedToken ? storedToken : null;
}

export default useLocalToken;