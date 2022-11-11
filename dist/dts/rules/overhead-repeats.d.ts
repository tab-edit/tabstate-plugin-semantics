import { MeasureAnchorStyle } from "../utils/node-util-functions";
import { ResolvedASTNode } from "tab-ast";
export declare type RepeatState = {
    stack: RepeatDescriptor[];
    measureMarking: "start" | "end" | "start-end" | "none";
};
export declare type RepeatConfig = {
    measureAnchorStyle: MeasureAnchorStyle;
    /**
     * specifies whether dangling repeats are included, and
     * assumed to end at the end of the TabBlock from which it is dangling
     */
    includeDanglingRepeats: boolean;
};
declare type RepeatDescriptor = {
    start: number;
    end: number;
    count: number;
    node: ResolvedASTNode;
};
/**
 * This state provides information on the current stack of repeats, as well as
 * information on what repeat markings should apply to a measure, guarangteed to
 * be accurate and up to date by the start of each measure.
 */
declare const _default: RuleModule<RepeatState, RepeatConfig>;
export default _default;
