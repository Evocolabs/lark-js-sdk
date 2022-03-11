import { LarkAPI } from '../@api';
import { BotGroupAPI } from './group';
import { BotManageAPI } from './manage';
export declare class BotAPI extends LarkAPI {
    group: BotGroupAPI;
    manage: BotManageAPI;
}
export * from './group';
export * from './manage';
