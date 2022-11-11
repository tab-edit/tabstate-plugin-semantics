export declare type ExplicitLineNamingState = {
    [docLineNum: number]: {
        name: string;
        processed_name: {
            [instrument: string]: string;
        };
    };
};
export declare type ExplicitLineNamingConfig = {
    /**
     * Preprocessors which process the explicitly defined line names.
     * Each instrument has its own group of preprocessors
     * (i.e. regex -> resolved_linename mappings). As a guiding rule, a group of
     * preprocessors for an instrument should not be able to match the same text.
     * The regex patterns should be "disjoint" in a sense. if that is not the case,
     * this rule does not provide a guarantee of which preprocessor is used to process
     * the linename.
     *
     * TODO: check provided config for a preprocessor match first before checking default config.
     *      This requires that you separate default and provided config; don't merge them as is currently the case.
     *      This way, the user doesn't have to define preprocessors for every instrument if they decide to change the
     *      preprocessor for just one instrument. (currently they have to do this as because of the way the provided and the default config are merged,
     *      all info in default config is lost upon merging with provided config.)
     */
    preprocessors: {
        [instruments: string]: {
            [regex: string]: string;
        };
    };
};
declare const _default: {
    meta: {
        name: string;
        dependencies: never[];
        accurateAt: string;
    };
    initialState: () => {};
    defaultConfig: {
        preprocessors: {
            [instruments: string]: {
                [regex: string]: string;
            };
        };
    };
    createVisitors: (context: any) => {
        onTraversalStart(): void;
        TabBlock(): void;
        MeasureLineName: (node: any) => void;
    };
};
export default _default;
