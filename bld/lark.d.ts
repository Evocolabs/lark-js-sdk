import { LarkAPIClient } from './client';
import { AuthenAPI, ContactAPI, UserGroupAPI, AppAPI, BotAPI, MessageAPI, NotifyAPI } from './api';
export declare const DEFAULT_LARK_API_ENDPOINT = "https://open.larksuite.com/open-apis/";
export declare const DEFAULT_FEISHU_API_ENDPOINT = "https://open.feishu.cn/open-apis/";
export declare class Lark {
    private appId;
    private appSecret;
    private apiEndpoint;
    private internal;
    client: LarkAPIClient;
    authen: AuthenAPI;
    contact: ContactAPI;
    userGroup: UserGroupAPI;
    app: AppAPI;
    bot: BotAPI;
    message: MessageAPI;
    notify: NotifyAPI;
    constructor(appId: string, appSecret: string, apiEndpoint?: string, internal?: boolean);
}
export declare class Feishu extends Lark {
    constructor(appId: string, appSecret: string, apiEndpoint?: string, internal?: boolean);
}
