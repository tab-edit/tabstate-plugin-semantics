export declare type CommentDeclaredInstrumentTypeState = {
    type: string | undefined;
    commentRange: [number, number] | undefined;
};
declare const _default: {
    meta: {
        name: string;
        dependencies: never[];
        accurateAt: string;
    };
    initialState: () => {
        type: undefined;
        commentRange: undefined;
    };
    defaultConfig: {};
    createVisitors: (context: any) => {
        Comment(node: any): void;
        TabBlock(): void;
    };
};
export default _default;
