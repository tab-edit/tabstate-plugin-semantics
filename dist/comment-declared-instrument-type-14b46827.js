// TODO: This is a temporary file, just to get rid of compile errors
function getTextFromNode(node, context) {
    const text = [];
    for (let i = 1; i < node.ranges.length; i += 2) {
        text.push(context.getSourceText().sliceString(node.ranges[i - 1], node.ranges[i]));
    }
    return text;
}

/*
TODO:
 Allow users to override the instrument type both at the score-level, and at the tab-block level.
 This module detects the score-level declared instrument type comment, as well as the tab-block-level
 instrument type, and gives teh tab-block-level instrument type priority over the score-level one, and
 it resolves one single comment-declared instrument type, and this is the state it exports

 comment format:

 # [instrument=guitar]
 */
var commentDeclaredInstrumentType = {
    meta: {
        name: "comment-declared-instrument-type",
        dependencies: [],
        accurateAt: "TabBlock:entry"
    },
    initialState: () => ({ type: undefined, commentRange: undefined }),
    defaultConfig: {},
    createVisitors: function (context) {
        return {
            Comment(node) {
                getTextFromNode(node, context)[0];
                // check if comment has tab-block-level, or score-level instrument type declaration
                // extrace the instrument type and the range that the instrument declaration covers
                // if score-level instrument type comment found, update the internal score-level instrument type here
            },
            TabBlock() {
                // reset state
                context.setState(() => ({}));
                // find tab-block level instrument-type-comment that overlaps with this tab block.
                // use this and the score-level instrument type comment to determine what instrument type to export in the state
            },
        };
    }
};

export { commentDeclaredInstrumentType as default };
//# sourceMappingURL=comment-declared-instrument-type-14b46827.js.map
