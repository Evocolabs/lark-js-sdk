import { LarkAPI } from '../@api';
export declare enum AppManageBoolean {
    false = 0,
    true = 1
}
export interface AppManagePageResponseData {
    page_token: string;
    page_size: number;
    total_count: number;
    has_more: AppManageBoolean;
}
export interface AppManageIsUserAdminData {
    is_app_admin: boolean;
}
export interface AppManageUserAdminScopeData {
    is_all: boolean;
    department_list: string[];
}
export interface AppManageAppVisibilityUserEntry {
    open_id: string;
    user_id?: string;
}
export interface AppManageAppVisibilityData {
    departments: {
        id: string;
    }[];
    users: [];
    is_visible_to_all: AppManageBoolean;
    has_more_users: AppManageBoolean;
    user_page_token: string;
    total_user_count: number;
}
export interface AppManageUserVisibleAppsOptions {
    id_type: 'open_id' | 'user_id';
    id: string;
    lang?: string;
    page_size?: number;
    page_token?: string;
}
export declare enum AppManageAppSceneType {
    selfManaged = 0,
    fromStore = 1
}
export declare enum AppManageAppStatus {
    disabled = 0,
    active = 1
}
export interface AppManageAppEntry {
    app_id: string;
    primary_language: string;
    app_name: string;
    description: string;
    avatar_url: string;
    app_scene_type: AppManageAppSceneType;
    status: AppManageAppStatus;
}
export interface AppManageUserVisibleAppsData extends AppManagePageResponseData {
    lang: string;
    app_list: AppManageAppEntry[];
}
export interface AppManageInstalledAppListOptions {
    /**
     * -1 means no filtering
     */
    status: -1 | AppManageAppStatus;
    lang?: string;
    page_token?: string;
    page_size?: number;
}
export interface AppManageInstalledAppListData extends AppManagePageResponseData {
    lang: string;
    app_list: AppManageAppEntry[];
}
export interface AppManageUpdateAppVisibilityOptions {
    app_id: string;
    add_users?: Partial<AppManageAppVisibilityUserEntry>[];
    del_users?: Partial<AppManageAppVisibilityUserEntry>[];
    is_visible_to_all?: AppManageBoolean;
    add_departments?: string[];
    del_departments?: string[];
}
export interface AppManageAdminUserEntry {
    open_id: string;
    user_id: string;
    union_id: string;
}
export interface AppManageAdminUserListData {
    user_list: AppManageAdminUserEntry[];
}
export declare class AppManageAPI extends LarkAPI {
    isUserAdmin(idType: 'open_id' | 'employee_id', id: string): Promise<AppManageIsUserAdminData>;
    getUserAdminScope(idType: 'open_id' | 'employee_id', id: string): Promise<AppManageUserAdminScopeData>;
    getAppVisibility(appId: string, userPageToken?: string, userPageSize?: number): Promise<AppManageAppVisibilityData>;
    getUserVisibleApps(options: AppManageUserVisibleAppsOptions): Promise<AppManageUserVisibleAppsData>;
    getInstalledAppList(options: AppManageInstalledAppListOptions): Promise<AppManageInstalledAppListData>;
    updateAppVisibility(options: AppManageUpdateAppVisibilityOptions): Promise<void>;
    getAdminUserList(): Promise<AppManageAdminUserListData>;
}
