import { LarkAPI } from './@api';
export interface AuthenUserIdentityData {
    access_token: string;
    avatar_url: string;
    avatar_thumb: string;
    avatar_middle: string;
    avatar_big: string;
    expires_in: number;
    name: string;
    en_name: string;
    open_id: string;
    tenant_key: string;
    refresh_expires_in: number;
    refresh_token: string;
    token_type: string;
}
export interface AuthenUserInfoData {
    name: string;
    avatar_url: string;
    avatar_thumb: string;
    avatar_middle: string;
    avatar_big: string;
    email: string;
    user_id: string;
    mobile: string;
}
export declare type refreshUserAccessTokenData = AuthenUserIdentityData;
export declare class AuthenAPI extends LarkAPI {
    getUserVerificationURL(redirectURL: string, state?: string): string;
    getUserIdentity(code: string): Promise<AuthenUserIdentityData>;
    getUserInfo(userAccessToken: string): Promise<AuthenUserInfoData>;
    refreshUserAccessToken(userAccessToken: string): Promise<AuthenUserIdentityData>;
}
