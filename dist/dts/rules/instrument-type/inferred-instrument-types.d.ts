/**
 *  Infers instrument type from the details of the score, ignoring meta-details such as the config files, or the
 * comment-declared instrument type.
 */
export declare type InferredInstrumentTypeState = {
    possibleInstrumentTypes: Set<string>;
};
export declare type InferredInstrumentTypeConfig = {
    /**
     * Mapping from measure-line-count => list-of-instruments-with-this-count
     * e.g.
     * {
     *  6 => ["stringed::guitar"],
     *  4 => ["stringed::bass"]
     * }
     *
     * This is used as a tie-breaker between instruments of the same instrument-group.
     * Thus, it is only used when there are multiple instruments in the same instrument-group,
     * e.g. if we have "stringed::guitar" and "stringed::bass" then we chose bass instead of
     * guitar when the measure line has 4 lines.
     *
     */
    instrumentLinecountMap: {
        [lineCount: number]: string[];
    };
};
declare const _default: RuleModule<InferredInstrumentTypeState, InferredInstrumentTypeConfig>;
export default _default;
