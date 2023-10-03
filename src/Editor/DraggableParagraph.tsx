import Paragraph from "@tiptap/extension-paragraph";
import {
  mergeAttributes,
  ReactNodeViewRenderer,
  NodeViewContent,
  NodeViewWrapper,
} from "@tiptap/react";
import { colors } from "@/theme";
import { Box, HStack } from "@kuma-ui/core";
import { FaGripVertical } from "react-icons/fa6";

function DraggableParagraphNode() {
  return (
    <NodeViewWrapper data-drag-handle>
      <HStack p={4} mt={8} gap={4}>
        <Box
          draggable="true"
          p={8}
          pt={6}
          display="flex"
          alignItems="center"
          cursor="pointer"
        >
          <FaGripVertical size="16" color={colors.gray[300]} />
        </Box>
        <NodeViewContent className="content" />
      </HStack>
    </NodeViewWrapper>
  );
}

export const DraggableParagraph = Paragraph.extend({
  draggable: true,
  renderHTML({ HTMLAttributes }) {
    return [
      "p",
      mergeAttributes(HTMLAttributes, { "data-type": "draggable-item" }),
      0,
    ];
  },
  addNodeView() {
    return ReactNodeViewRenderer(DraggableParagraphNode);
  },
});
