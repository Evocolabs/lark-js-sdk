import { LarkAPI } from '../@api';
import { ContactUserAddOptions } from './user';
import { ContactDepartmentAddOptions } from './department';
export interface ContactBatchTaskData {
    task_id: string;
}
export declare enum ContactBatchTaskAction {
    add = 1,
    update = 2
}
export interface ContactBatchTaskInfoBase {
    code: string;
    msg: string;
    action?: ContactBatchTaskAction;
    name: string;
}
export interface ContactBatchAddUsersTaskInfo extends ContactBatchTaskInfoBase {
    email: string;
    mobile: string;
    user_id: string;
    departments: string[];
    open_id?: string;
}
export interface ContactBatchAddDepartmentsTaskInfo extends ContactBatchTaskInfoBase {
    department_id: string;
    parent_id: string;
    chat_id?: string;
}
export interface _ContactBatchTaskStatusData<Type = string, TaskInfo = any> {
    task_id: string;
    type: Type;
    status: number;
    progress: number;
    total_num: number;
    success_num: number;
    fail_num: number;
    create_time: number;
    finish_time: number;
    task_info?: TaskInfo[];
}
export declare type ContactBatchAddUsersTaskStatusData = _ContactBatchTaskStatusData<'add_user', ContactBatchAddUsersTaskInfo>;
export declare type ContactBatchAddDepartmentsTaskStatusData = _ContactBatchTaskStatusData<'add_department', ContactBatchAddDepartmentsTaskInfo>;
export declare type ContactBatchTaskStatusData = ContactBatchAddUsersTaskStatusData | ContactBatchAddDepartmentsTaskStatusData;
export declare class ContactBatchAPI extends LarkAPI {
    addDepartments(departments: ContactDepartmentAddOptions[]): Promise<ContactBatchTaskData>;
    addUsers(users: ContactUserAddOptions[], sendNotification?: boolean): Promise<ContactBatchTaskData>;
    getTaskStatus(taskId: string): Promise<ContactBatchTaskStatusData>;
}
