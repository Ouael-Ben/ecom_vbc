import AccessTokenStorage from './AccessTokenStorage';

export const isAuth = () => {

    const token =  AccessTokenStorage.get();

    return (
        token !== '' &&
        token !== undefined &&
        token !== null &&
        token !== 'undefined'
    )
}
export default {isAuth};