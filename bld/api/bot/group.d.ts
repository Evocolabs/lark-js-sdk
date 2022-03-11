import { LarkAPI, PageResponseData } from '../@api';
export interface BotGroupCreateOptions {
    name?: string;
    description?: string;
    open_ids?: string[];
    user_ids?: string[];
    i18n_names?: {
        [key: string]: string;
    };
    only_owner_add?: boolean;
    share_allowed?: boolean;
    only_owner_at_all?: boolean;
    only_owner_edit?: boolean;
}
export interface BotGroupCreateData {
    chat_id: string;
    invalid_open_ids: string[];
    invalid_user_ids: string[];
}
export interface BotGroupEntry {
    avatar: string;
    description: string;
    chat_id: string;
    name: string;
    owner_open_id: string;
    owner_user_id?: string;
}
export interface BotGroupListData extends PageResponseData {
    groups: BotGroupEntry[];
}
export interface BotGroupMemberRef {
    open_id: string;
    user_id: string;
}
export interface BotGroupInfoData extends BotGroupEntry {
    i18n_names?: {
        [key: string]: string;
    };
    members: BotGroupMemberRef[];
    type: 'group' | 'p2p';
}
export interface BotGroupUpdateInfoOptions {
    chat_id: string;
    owner_open_id?: string;
    owner_user_id?: string;
    name?: string;
    i18n_names?: {
        [key: string]: string;
    };
    only_owner_add?: boolean;
    share_allowed?: boolean;
    only_owner_at_all?: boolean;
    only_owner_edit?: boolean;
}
export interface BotGroupUpdateInfoData {
    chat_id: string;
}
export interface BotGroupAddMembersOptions {
    chat_id: string;
    user_ids?: string[];
    open_ids?: string[];
}
export interface BotGroupAddMembersData {
    invalid_open_ids: string[];
    invalid_user_ids: string[];
}
export interface BotGroupDeleteMembersOptions {
    chat_id: string;
    user_ids?: string[];
    open_ids?: string[];
}
export interface BotGroupDeleteMembersData {
    invalid_open_ids: string[];
    invalid_user_ids: string[];
}
export declare class BotGroupAPI extends LarkAPI {
    create(options: BotGroupCreateOptions): Promise<BotGroupCreateData>;
    getList(pageSize?: number, pageToken?: string): Promise<BotGroupListData>;
    getInfo(chatId: string): Promise<BotGroupInfoData>;
    updateInfo(options: BotGroupUpdateInfoOptions): Promise<BotGroupUpdateInfoData>;
    addMembers(options: BotGroupAddMembersOptions): Promise<BotGroupAddMembersData>;
    deleteMembers(options: BotGroupDeleteMembersOptions): Promise<BotGroupDeleteMembersData>;
    disband(chatId: string): Promise<void>;
}
