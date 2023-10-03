import { colors } from "@/theme";
import { Box, HStack, VStack, Image, Input } from "@kuma-ui/core";
import type { NodeViewProps } from "@tiptap/react";
import { NodeViewWrapper, NodeViewContent } from "@tiptap/react";
import { FaGripVertical } from "react-icons/fa6";

export function MessageNode({ node, updateAttributes }: NodeViewProps) {
  // attributesからメッセージの値を取得
  const thumbnailUrl =
    typeof node.attrs["thumbnail-url"] === "string"
      ? node.attrs["thumbnail-url"]
      : "";

  const name = typeof node.attrs.name === "string" ? node.attrs.name : "";

  return (
    <NodeViewWrapper data-drag-handle>
      <HStack p={4} mt={8} gap={4}>
        <Box
          draggable="true"
          p={8}
          display="flex"
          alignItems="center"
          cursor="pointer"
        >
          <FaGripVertical size="16" color={colors.gray[300]} />
        </Box>
        <HStack
          alignItems="flex-start"
          flex="1"
          justifyContent="flex-start"
          gap={8}
        >
          <VStack gap={8}>
            {/* アイコン画像*/}
            <Image
              width={32}
              height={32}
              borderRadius={16}
              src={thumbnailUrl}
            />
            <Input
              defaultValue={name}
              textAlign="center"
              border="none"
              onBlur={(e) => {
                // 入力された値をattributesに反映
                updateAttributes({
                  name: e.target.value,
                });
              }}
              width={32}
            />
          </VStack>
          <Box bg="colors.gray.100" borderRadius={16} minWidth={100} p={8}>
            {/* 入力 */}
            <NodeViewContent />
          </Box>
        </HStack>
      </HStack>
    </NodeViewWrapper>
  );
}
