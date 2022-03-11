import { LarkAPI, PageResponseData } from '../@api';
export declare enum ContactDepartmentStatus {
    invalid = 0,
    valid = 1
}
export interface ContactDepartmentInfo {
    id: string;
    name: string;
    chat_id?: string;
    member_count: number;
    parent_id: string;
    status: ContactDepartmentStatus;
    leader_employee_id?: string;
    leader_open_id?: string;
}
export interface ContactDepartmentInfoData {
    department_info: ContactDepartmentInfo;
}
export interface ContactDepartmentSubDepartmentsOptions {
    department_id: string;
    page_token?: string;
    page_size: number;
    fetch_child?: boolean;
}
export interface ContactDepartmentSubDepartmentInfo {
    id: string;
    name: string;
    parent_id: string;
}
export interface ContactDepartmentSubDepartmentsData extends PageResponseData {
    department_infos: ContactDepartmentSubDepartmentInfo[];
}
export interface ContactDepartmentInfosData {
    department_infos: ContactDepartmentInfo[];
}
export interface ContactDepartmentAddOptions {
    name: string;
    parent_id?: string;
    parent_open_department_id?: string;
    id?: string;
    leader_employee_id?: string;
    leader_open_id?: string;
    create_group_chat?: boolean;
}
export interface ContactDepartmentInfoWithOpenIds {
    open_department_id: string;
    parent_open_department_id: string;
}
export interface ContactDepartmentAddData {
    department_info: ContactDepartmentInfoWithOpenIds;
}
export interface ContactDepartmentUpdateInfoOptions {
    name?: string;
    parent_id?: string;
    id: string;
    leader_employee_id?: string;
    leader_open_id?: string;
    create_group_chat?: boolean;
}
export interface ContactDepartmentUpdateInfoData {
    department_info: ContactDepartmentInfo;
}
export declare class ContactDepartmentAPI extends LarkAPI {
    getInfo(departmentId: string): Promise<ContactDepartmentInfoData>;
    getSubDepartments(options: ContactDepartmentSubDepartmentsOptions): Promise<ContactDepartmentSubDepartmentsData>;
    getInfos(departmentIds: string[]): Promise<ContactDepartmentInfosData>;
    add(options: ContactDepartmentAddOptions): Promise<ContactDepartmentAddData>;
    delete(id: string): Promise<void>;
    updateInfo(options: ContactDepartmentUpdateInfoOptions): Promise<ContactDepartmentUpdateInfoData>;
}
