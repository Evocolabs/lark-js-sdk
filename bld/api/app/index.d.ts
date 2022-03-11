import { LarkAPI } from '../@api';
import { AppManageAPI } from './manage';
import { AppStoreAPI } from './store';
export declare class AppAPI extends LarkAPI {
    manage: AppManageAPI;
    store: AppStoreAPI;
}
export * from './manage';
export * from './store';
