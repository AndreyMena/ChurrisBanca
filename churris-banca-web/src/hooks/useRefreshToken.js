import axios from '../api/axios';
import useAuth from './useAuth';

const useRefreshToken = () => {
    const { setAuth } = useAuth();

    const refresh = async () => {
        const response = await axios.get('/refresh', {
            withCredentials: true
        });
        setAuth(prev => {
            return { ...prev, accessToken: response.data.accessToken }  //Actualiza el token viejo con el nuevo
        });
        return response.data.accessToken;
    }
    return refresh;
};

export default useRefreshToken;