import { LarkAPI, PageResponseData } from '../@api';
export interface ContactUserRefWithEmployeeIdOnly {
    employee_id: string;
}
export interface ContactUserRefWithOpenIdOnly {
    open_id: string;
}
export interface ContactUserRefWithBoth {
    employee_id: string;
    open_id: string;
}
export declare type ContactUserRef = ContactUserRefWithEmployeeIdOnly | ContactUserRefWithOpenIdOnly | ContactUserRefWithBoth;
export declare enum EmployeeType {
    fulltime = 1,
    intern = 2,
    outsourced = 3,
    labor = 4,
    consultant = 5
}
export declare enum Gender {
    male = 1,
    female = 2
}
export interface ContactUserInfo<CustomAttrs = any> {
    name: string;
    name_py: string;
    en_name: string;
    employee_id: string;
    employee_no: string;
    open_id: string;
    union_id: string;
    status: number;
    employee_type: EmployeeType;
    avatar_72: string;
    avatar_240: string;
    avatar_640: string;
    avatar_url: string;
    gender: Gender;
    email: string;
    mobile: string;
    description: string;
    country: string;
    city: string;
    work_station: string;
    is_tenant_manager: boolean;
    join_time?: number;
    update_time: number;
    leader_employee_id?: string;
    leader_open_id: string;
    leader_union_id?: string;
    departments: string[];
    open_departments: string[];
    custom_attrs?: CustomAttrs;
}
export interface ContactUserInfosData {
    user_infos: ContactUserInfo[];
}
export interface ContactUserBriefInfo {
    employee_id: string;
    open_id: string;
    name: string;
    employee_no: string;
    union_id: string;
}
export interface ContactDepartmentUserListOptions {
    idType: 'department_id' | 'open_department_id';
    id: string;
    page_size: number;
    page_token?: string;
    fetch_child: boolean;
}
export interface ContactDepartmentUserListData extends PageResponseData {
    user_list: ContactUserBriefInfo[];
}
export interface ContactDepartmentUserDetailListOptions {
    id_type: 'department_id' | 'open_department_id';
    id: string;
    page_size: number;
    page_token?: string;
    fetch_child: boolean;
}
export interface ContactDepartmentUserDetailListData extends PageResponseData {
    user_list: ContactUserInfo[];
}
export interface ContactUserAddOptions<CustomAttrs = any> {
    name: string;
    email?: string;
    mobile: string;
    department_ids: string[];
    mobile_visible?: boolean;
    city?: string;
    country?: string;
    gender?: Gender;
    employee_type?: EmployeeType;
    join_time?: number;
    leader_employee_id?: string;
    leader_open_id?: string;
    employee_id?: string;
    employee_no?: string;
    need_send_notification?: boolean;
    custom_attrs?: CustomAttrs;
    work_station?: string;
}
export interface ContactUserAddData {
    user_info: ContactUserInfo;
}
export interface ContactUserDeleteOptions {
    employee_id?: string;
    open_id?: string;
    department_chat_acceptor?: ContactUserRef;
    external_chat_acceptor?: ContactUserRef;
    docs_acceptor?: ContactUserRef;
    calendar_acceptor?: ContactUserRef;
    application_acceptor?: ContactUserRef;
}
export interface ContactUserUpdateOptionsWithEmployeeIdOnly extends Partial<ContactUserInfo> {
    employee_id: string;
}
export interface ContactUserUpdateOptionsWithOpenIdOnly extends Partial<ContactUserInfo> {
    open_id: string;
}
export declare type ContactUserUpdateOptions = ContactUserUpdateOptionsWithEmployeeIdOnly | ContactUserUpdateOptionsWithOpenIdOnly;
export interface ContactRole {
    id: string;
    name: string;
}
export interface ContactRoleListData {
    role_list: ContactRole[];
}
export interface ContactRoleMemberEntry {
    name: string;
    open_id: string;
    user_id: string;
}
export interface ContactRoleMembersData extends PageResponseData {
    user_list: ContactRoleMemberEntry[];
}
export interface ContactUserIdsByMobilesOrEmailsOptions {
    mobiles?: string[];
    emails?: string[];
}
export interface ContactUserIdEntry {
    open_id: string;
    user_id: string;
}
export interface ContactUserIdsByMobilesOrEmailsData {
    email_users: {
        [key: string]: ContactUserIdEntry[];
    };
    emails_not_exist: string[];
    mobile_users: {
        [key: string]: ContactUserIdEntry[];
    };
    mobiles_not_exist: string[];
}
export interface ContactUserIdsByUnionIdsData {
    user_infos: {
        [key: string]: ContactUserIdEntry;
    };
}
export interface ContactUserSearchEntry {
    avatar: {
        avatar_72: string;
        avatar_240: string;
        avatar_640: string;
        avatar_origin: string;
    };
    department_ids: string[];
    name: string;
    open_id: string;
    user_id: string;
}
export interface ContactUserSearchData extends PageResponseData {
    users: ContactUserSearchEntry[];
}
export declare class ContactUserAPI extends LarkAPI {
    getInfos(idsType: 'open_ids' | 'employee_ids', ids: string[]): Promise<void>;
    getDepartmentUserList(options: ContactDepartmentUserListOptions): Promise<ContactDepartmentUserListData>;
    getDepartmentUserDetailList(options: ContactDepartmentUserDetailListOptions): Promise<ContactDepartmentUserDetailListData>;
    add(options: ContactUserAddOptions): Promise<ContactUserAddData>;
    delete(options: ContactUserDeleteOptions): Promise<void>;
    update(options: ContactUserUpdateOptions): Promise<void>;
    getRoleList(): Promise<ContactRoleListData>;
    getRoleMembers(roleId: string, pageSize?: number, pageToken?: string): Promise<ContactRoleMembersData>;
    getUserIdsByMobilesOrEmails(options: ContactUserIdsByMobilesOrEmailsOptions): Promise<ContactUserIdsByMobilesOrEmailsData>;
    getUserIdsByUnionIds(unionIds: string[]): Promise<ContactUserIdsByUnionIdsData>;
    search(query: string, pageSize?: number, pageToken?: string): Promise<ContactUserSearchData>;
}
