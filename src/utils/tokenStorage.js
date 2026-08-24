import { TOKEN_KEYS } from '@/constants/tokens';

export default class TokenStorage {
    static getAccessToken() {
        return localStorage.getItem(TOKEN_KEYS.ACCESS_TOKEN);
    }
    static getRefreshToken() {
        return localStorage.getItem(TOKEN_KEYS.REFRESH_TOKEN);
    }
    static setTokens({ accessToken, refreshToken }) {
        localStorage.setItem(TOKEN_KEYS.ACCESS_TOKEN, accessToken);
        localStorage.setItem(TOKEN_KEYS.REFRESH_TOKEN, refreshToken);
    }
    static clearTokens() {
        localStorage.removeItem(TOKEN_KEYS.ACCESS_TOKEN);
        localStorage.removeItem(TOKEN_KEYS.REFRESH_TOKEN);
    }
}
