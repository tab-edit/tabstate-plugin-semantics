/**
 * TODO:
 * Combines the inferred-instrument-types and the comment-declared-instrument-type rules into one single instrument type.
 */
export declare type InstrumentTypeState = string | undefined;
export declare type InstrumentTypeConfig = {
    declaredType: string;
};
declare const _default: RuleModule<InstrumentTypeState, InstrumentTypeConfig>;
export default _default;
