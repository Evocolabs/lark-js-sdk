import { LarkAPIClient } from '../client';
export interface PageResponseData {
    has_more: boolean;
    page_token: string;
}
export declare abstract class LarkAPI {
    protected client: LarkAPIClient;
    constructor(client: LarkAPIClient);
}
