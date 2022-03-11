import { LarkAPI, PageResponseData } from './@api';
export interface UserGroupInfo {
    avatar: string;
    description: string;
    chat_id: string;
    name: string;
    owner_open_id: string;
    owner_user_id?: string;
}
export interface UserGroupListData extends PageResponseData {
    groups: UserGroupInfo[];
}
export interface UserGroupMemberEntry {
    name: string;
    open_id: string;
    user_id: string;
}
export interface UserGroupMembersData extends PageResponseData {
    members: UserGroupMemberEntry[];
}
export interface UserGroupSearchData extends PageResponseData {
    groups: UserGroupInfo[];
}
export declare class UserGroupAPI extends LarkAPI {
    getList(userAccessToken: string, pageSize?: number, pageToken?: string): Promise<UserGroupListData>;
    getMembers(userAccessToken: string, chatId: string, pageSize?: number, pageToken?: string): Promise<UserGroupMembersData>;
    search(userAccessToken: string, query: string, pageSize?: number, pageToken?: string): Promise<UserGroupSearchData>;
}
