/**
 * uses instrument-type rule and explicit-line-name rule and the configuration to determine the final linename that is to be used.
 * the configuration would include a mapping of default names for each line when no explicit linename is provided. this would be grouped by instrument
 */
export declare type LineNamingState = {
    [docLineNum: number]: string;
};
export declare type LineNamingConfig = {
    /**
     * Provides the default line names for each line in a measure.
     * e.g for a guitar, line 1 is `E4`, line 2 is `B3`, line 3 is `G3` e.t.c.
     */
    defaultLineNames: {
        [instrument: string]: {
            [measureLineNum: number]: string;
        };
    };
};
declare const _default: RuleModule<LineNamingState, LineNamingConfig>;
export default _default;
