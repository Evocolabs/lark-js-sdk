import { LarkAPI } from './@api';
import { DownloadResponseType } from '../client';
export interface MessageSendTextOptionsBase {
    msg_type: 'text';
    content: {
        text: string;
    };
}
export interface MessageSendImageOptionsBase {
    msg_type: 'image';
    content: {
        image_key: string;
    };
}
export interface PostTextElement {
    tag: 'text';
    text: string;
    un_escape?: boolean;
    lines?: number;
}
export interface PostAElement {
    tag: 'a';
    text: string;
    un_escape?: boolean;
    href: string;
}
export interface PostAtElement {
    tag: 'at';
    user_id: string;
}
export interface PostImgElement {
    tag: 'img';
    image_key: string;
    height: number;
    width: number;
}
export declare type PostElement = PostTextElement | PostAElement | PostAtElement | PostImgElement;
export declare type PostI18nType = 'zh_cn' | 'en_us' | 'ja_jp';
export interface MessageSendPostOptionsBase {
    msg_type: 'post';
    content: {
        post: {
            [key in PostI18nType]?: {
                title: string;
                content: PostElement[][];
            };
        };
    };
}
export interface MessageSendShareChatOptionsBase {
    msg_type: 'share_chat';
    content: {
        share_chat_id: string;
    };
}
export interface CardText {
    tag: 'plain_text' | 'lark_md';
    content?: string;
    i18n?: {
        [key: string]: string;
    };
    lines?: number;
}
export interface CardField {
    is_short: boolean;
    text: CardText;
}
export interface CardURL {
    url: string;
    android_url: string;
    ios_url: string;
    pc_url: string;
}
export interface CardConfirm {
    title: CardText;
    text: CardText;
}
export interface CardOption {
    text?: CardText;
    value: string;
    url?: string;
    multi_url?: CardURL;
}
export interface CardImageElement {
    tag: 'img';
    img_key: string;
    alt: CardText;
}
export interface CardButtonElement {
    tag: 'button';
    text: CardText;
    url?: string;
    multi_url?: CardURL;
    type?: 'default' | 'primary' | 'danger';
    value?: object;
    confirm?: CardConfirm;
}
export interface CardSelectMenuElement {
    tag: 'select_static' | 'select_person';
    placeholder?: CardText;
    initial_option?: string;
    options?: CardOption[];
    value?: object;
    confirm?: CardConfirm;
}
export interface CardOverflowElement {
    tag: 'overflow';
    options: CardOption[];
    value?: object;
    confirm?: CardConfirm;
}
export interface CardDatePickerElement {
    tag: 'date_picker' | 'picker_time' | 'picker_datetime';
    initial_date?: string;
    initial_time?: string;
    initial_datetime?: string;
    placeholder?: string;
    value?: object;
    confirm?: CardConfirm;
}
export interface CardContentTextOnlyModule {
    tag: 'div';
    text: CardText;
    extra?: CardElement;
}
export interface CardContentFieldsOnlyModule {
    tag: 'div';
    fields: CardField[];
    extra?: CardElement;
}
export declare type CardContentModule = CardContentTextOnlyModule | CardContentFieldsOnlyModule;
export interface CardDividingLineModule {
    tag: 'hr';
}
export interface CardImageModule {
    tag: 'img';
    img_key: string;
    alt: CardText;
    title?: CardText;
    mode?: 'fit_horizontal' | 'crop_center';
}
export declare type CardInteractiveElement = CardButtonElement | CardSelectMenuElement | CardOverflowElement | CardDatePickerElement;
export declare type CardElement = CardImageElement | CardInteractiveElement;
export interface CardActionModule {
    tag: 'action';
    actions: CardInteractiveElement[];
    layout?: 'bisected' | 'trisection' | 'flow';
}
export interface CardNoteModule {
    tag: 'note';
    elements: (CardText | CardImageElement)[];
}
export declare type CardModule = CardContentModule | CardDividingLineModule | CardImageModule | CardActionModule | CardNoteModule;
export interface Card {
    config?: {
        wide_screen_mode: boolean;
    };
    header?: {
        title: CardText;
    };
    elements?: CardModule[];
    i18n_elements?: {
        [key: string]: CardModule[];
    };
}
export interface SendCardOptions {
    chat_id?: string;
    open_id?: string;
    email?: string;
    user_id?: string;
    msg_type: 'interactive';
    card: Card;
    root_id?: string;
    update_multi?: boolean;
}
export interface MessageSendCardOptionsBase {
    msg_type: 'interactive';
    card: Card;
    update_multi?: boolean;
}
export declare type MessageSendTypeOptionsBase = MessageSendTextOptionsBase | MessageSendImageOptionsBase | MessageSendPostOptionsBase | MessageSendShareChatOptionsBase | MessageSendCardOptionsBase;
export declare type MessageSendOptions = MessageSendTypeOptionsBase & {
    open_id?: string;
    user_id?: string;
    email?: string;
    chat_id?: string;
    root_id?: string;
};
export interface MessageSendData {
    message_id: string;
}
export declare type MessageSendInBatchOptions = MessageSendTypeOptionsBase & {
    department_ids?: string[];
    open_ids?: string[];
    user_ids?: string[];
};
export interface MessageSendInBatchData {
    message_id: string;
    invalid_department_ids: string[];
    invalid_open_ids: string[];
    invalid_user_ids: string[];
}
export interface MessageReadUserEntry {
    open_id: string;
    user_id?: string;
    timestamp: string;
}
export interface MessageReadInfoData {
    read_users: MessageReadUserEntry[];
}
export interface MessageUploadImageData {
    image_key: string;
}
export declare class MessageAPI extends LarkAPI {
    send(options: MessageSendOptions): Promise<MessageSendData>;
    sendInBatch(options: MessageSendInBatchOptions): Promise<MessageSendInBatchData>;
    getReadInfo(messageId: string): Promise<MessageReadInfoData>;
    uploadImage(imageType: 'message' | 'avatar', image: any): Promise<MessageUploadImageData>;
    downloadImage(imageKey: string, responseType: DownloadResponseType): Promise<import("axios").AxiosResponse<any>>;
}
