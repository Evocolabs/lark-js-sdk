import { LarkAPI } from '../@api';
export interface BotManageInfo {
    activate_status: number;
    app_name: string;
    avatar_url: string;
    ip_white_list: string[];
    open_id: string;
}
export interface BotManageInfoData {
    bot: BotManageInfo;
}
export declare class BotManageAPI extends LarkAPI {
    getInfo(): Promise<BotManageInfoData>;
    addToGroup(chatId: string): Promise<void>;
    removeFromGroup(chatId: string): Promise<void>;
}
