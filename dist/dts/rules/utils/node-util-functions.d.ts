export declare function getPositionDescriptor(pos: number, context: any): {
    line: number;
    col: number;
};
export declare function getTextFromNode(node: any, context: any): string[];
export declare function stringToRegex(str: string): RegExp;
/**
 * Specifies which method is used to compute a single, continuous, column-wise range
 * from a multi-ranged measure.
 *
 * Two methods:
 *      - "top-line":      a measure's range is the range of it's first (top-most) measureline
 *      - "earliest-line":   a measure's range is the range of the measureline that is closest to the start-of-line.
 *                          if multiple measurelines are on the same column, the longest-range measureline wins out.
 */
export declare type MeasureAnchorStyle = "top-line" | "earliest-line";
/**
 * Compute a single, continuous, column-wise range from a multi-ranged measure.
 * @param measure the measure syntax node used to determine anchor ragne.
 * @param context context. context.config is used for determining the measure's anchor range.
 * @returns {start: number, end: number} the anchor range of the provided measure.
 */
export declare function computeMeasureAnchorRange(measure: any, context: any): {
    start: number;
    end: number;
};
