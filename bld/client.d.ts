import { AxiosResponse } from 'taro-axios';
export interface AppAccessTokenResponse {
    app_access_token: string;
    expire: number;
}
export interface TenantAccessTokenResponse {
    tenant_access_token: string;
    expire: number;
}
export declare class LarkAPIError extends Error {
    private code;
    constructor(code: number, message: string);
}
export declare type DownloadResponseType = 'arraybuffer' | 'blob' | 'stream';
export declare class LarkAPIClient {
    appId: string;
    appSecret: string;
    apiEndpoint: string;
    internal: boolean;
    appAccessToken: string | undefined;
    private appAccessTokenExpires;
    tenantAccessToken: string | undefined;
    private tenantAccessTokenExpires;
    appTicket: string | undefined;
    tenantKey: string | undefined;
    constructor(appId: string, appSecret: string, apiEndpoint: string, internal?: boolean);
    get appBaseCredentials(): {
        app_id: string;
        app_secret: string;
    };
    private fetchAppAccessToken;
    getAppAccessToken(): Promise<string | undefined>;
    private fetchTenantAccessToken;
    getTenantAccessToken(): Promise<string | undefined>;
    get<T = any>(path: string, accessToken?: string): Promise<_GetDataOfOutType<T>>;
    post<T = any>(path: string, data: any, accessToken?: string): Promise<_GetDataOfOutType<T>>;
    postFormData<T = any>(path: string, formData: any, accessToken?: string): Promise<_GetDataOfOutType<T>>;
    download(path: string, responseType: DownloadResponseType, accessToken?: string): Promise<AxiosResponse<any>>;
}
declare type _GetDataOfOutType<T> = T extends {
    data: any;
} ? T['data'] : T;
export interface DataResponse<Data> {
    data: Data;
}
export {};
