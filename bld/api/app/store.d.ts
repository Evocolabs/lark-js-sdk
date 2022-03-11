import { LarkAPI, PageResponseData } from '../@api';
export interface AppStoreIsUserInPaidScopeData {
    status: 'valid' | 'not_in_scope' | 'no_active_license';
    price_plan_id: string;
    is_trial: boolean;
    service_stop_time: number;
}
export declare type AppStoreOrderStatus = 'normal' | 'refunded';
export interface AppStoreOrderListOptions {
    status?: AppStoreOrderStatus | 'all';
    page_size: number;
    page_token?: string;
    tenant_key?: string;
}
export declare type AppStorePlanType = 'trial' | 'permanent' | 'per_year' | 'per_month' | 'per_seat_per_year' | 'per_seat_per_month' | 'permanent_count';
export declare type AppStoreOrderBuyType = 'buy' | 'upgrade' | 'renew';
export interface AppStoreOrderEntry {
    order_id: string;
    price_plan_id: string;
    price_plan_type: AppStorePlanType;
    seats?: number;
    buy_count: number;
    create_time: number;
    pay_time: number;
    status: AppStoreOrderStatus;
    buy_type: AppStoreOrderBuyType;
    src_order_id?: string;
    dst_order_id?: string;
    order_pay_price: number;
    tenant_key: string;
}
export interface AppStoreOrderListData extends PageResponseData {
    total: number;
    order_list: AppStoreOrderEntry[];
}
export interface AppStoreOrderInfoData {
    order: AppStoreOrderEntry;
}
export declare class AppStoreAPI extends LarkAPI {
    isUserInPaidScope(idType: 'open_id' | 'user_id', id: string): Promise<AppStoreIsUserInPaidScopeData>;
    getOrderList(options: AppStoreOrderListOptions): Promise<AppStoreOrderListData>;
    getOrderInfo(orderId: string): Promise<AppStoreOrderInfoData>;
}
