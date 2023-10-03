import { NodeViewContent, NodeViewWrapper } from "@tiptap/react";

export const DragHandle = () => {
  return (
    <NodeViewWrapper class="draggable-item">
      <div
        className="drag-handle"
        contentEditable="false"
        draggable="true"
        data-drag-handle
      />
      <NodeViewContent class="content" />
    </NodeViewWrapper>
  );
};
