import { mergeAttributes, Node } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";
import { MessageNode } from "./MessageNode";

export const MessageContent = Node.create({
  name: "message",
  group: "block",
  content: "inline*",
  draggable: true,

  addAttributes() {
    return {
      "thumbnail-url": {
        default: null,
      },
      name: {
        default: "名前",
      },
    };
  },

  addKeyboardShortcuts() {
    return {
      "Shift-Enter": () => {
        return this.editor
          .chain()
          .insertContentAt(this.editor.state.selection.head, {
            type: this.type.name,
          })
          .focus()
          .run();
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: "message",
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ["message", mergeAttributes(HTMLAttributes)];
  },

  addNodeView() {
    return ReactNodeViewRenderer(MessageNode);
  },
});
