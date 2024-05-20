import axios from '../api/axios';
import useAuth from './useAuth';

const useRefreshToken = () => {
    const { setAuth } = useAuth();

    const refresh = async () => {
        const response = await axios.get('/refresh', {
            withCredentials: true  //Importante, permite enviar cookie donde se encuentra el refreshToken
        });
        setAuth(prev => {
            return { ...prev, user: response.data.user, accessToken: response.data.accessToken }  //Actualiza el token viejo con el nuevo
        });
        return response.data.accessToken;
    }
    return refresh;
};

export default useRefreshToken;