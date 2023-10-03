import { HStack, HStackProps } from "@kuma-ui/core";
import type { Editor } from "@tiptap/react";
import {
  FaBold,
  FaItalic,
  FaStrikethrough,
  FaUnderline,
} from "react-icons/fa6";

type Props = {
  editor: Editor;
} & HStackProps;

const activeColor = "#1B88FF";
const inactiveColor = "#181E26";

export function EditorBubbleMenu({ editor, ...hstackProps }: Props) {
  return (
    <HStack
      {...hstackProps}
      gap={8}
      background="colors.gray.100"
      boxShadow="0 4px 4px 0 rgba(0, 0, 0, .2)"
      borderRadius={4}
      p={8}
    >
      <FaBold
        color={editor.isActive("bold") ? activeColor : inactiveColor}
        onClick={() => {
          editor.chain().focus().toggleBold().run();
        }}
        size="12"
      />

      <FaItalic
        color={editor.isActive("italic") ? activeColor : inactiveColor}
        onClick={() => {
          editor.chain().focus().toggleItalic().run();
        }}
        size="12"
      />

      <FaUnderline
        color={editor.isActive("underline") ? activeColor : inactiveColor}
        onClick={() => {
          editor.chain().focus().toggleUnderline().run();
        }}
        size="12"
      />

      <FaStrikethrough
        color={editor.isActive("strike") ? activeColor : inactiveColor}
        onClick={() => {
          editor.chain().focus().toggleStrike().run();
        }}
        size="12"
      />
    </HStack>
  );
}
