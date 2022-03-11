import { LarkAPI } from './@api';
export interface NotifyAppNotifyOptions {
    open_id?: string;
    user_id?: string;
    notify_content: string;
    i18n_notify_content?: {
        [key: string]: string;
    };
    pc_schema?: {
        path?: string;
        query?: string;
    };
    ios_schema?: {
        path?: string;
        query?: string;
    };
    android_schema?: {
        path?: string;
        query?: string;
    };
}
export declare class NotifyAPI extends LarkAPI {
    appNotify(options: NotifyAppNotifyOptions): Promise<void>;
}
