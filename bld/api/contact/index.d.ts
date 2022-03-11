import { LarkAPI } from '../@api';
import { ContactUserAPI } from './user';
import { ContactDepartmentAPI } from './department';
import { ContactBatchAPI } from './batch';
export interface ScopeData {
    authed_departments: string[];
    authed_open_departments: string[];
    authed_employee_ids: string[];
    authed_open_ids: string[];
}
export interface ContactCustomAttrsData<CustomAttrs = any> {
    is_open: boolean;
    custom_attrs: CustomAttrs;
}
export declare class ContactAPI extends LarkAPI {
    user: ContactUserAPI;
    department: ContactDepartmentAPI;
    batch: ContactBatchAPI;
    getScopes(): Promise<ScopeData>;
    getCustomAttrs(): Promise<ContactCustomAttrsData<any>>;
}
export * from './user';
export * from './department';
export * from './batch';
