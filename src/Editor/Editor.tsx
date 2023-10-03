import { useEditor, EditorContent, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import { Box, HStack, Image, Text, VStack, css } from "@kuma-ui/core";
import { EditorBubbleMenu } from "./EditorBubbleMenu";
import { MessageContent } from "./MessageContentExtension";
import Placeholder from "@tiptap/extension-placeholder";
import { useCallback } from "react";
import { DraggableParagraph } from "./DraggableParagraph";

type Character = {
  name: string;
  thumbnailUrl: string;
};

const CHARACTORS: Character[] = [
  {
    name: "テノ",
    thumbnailUrl: "/teno.png",
  },
  {
    name: "テノ2",
    thumbnailUrl: "/teno2.png",
  },
];

export function Editor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      MessageContent,
      DraggableParagraph,
      Placeholder.configure({
        placeholder: ({ node }) => {
          if (node.type.name === "message") {
            return "セリフを入力";
          }

          return "テキストを入力";
        },
      }),
    ],
  });

  const addMessage = useCallback(
    (character: Character) => {
      editor?.commands.insertContent(
        `<message thumbnail-url="${character.thumbnailUrl}" name="${character.name}"></message>`
      );
    },
    [editor?.commands]
  );

  return (
    <VStack gap={16}>
      <Box
        border="1px solid #e5e7eb"
        borderRadius="12px"
        p="10"
        height="100%"
        width="100%"
        boxShadow={["none", "0 2px 4px #4385bb12"]}
      >
        {/* 以下を追加 */}
        {editor && (
          <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
            <EditorBubbleMenu editor={editor} />
          </BubbleMenu>
        )}
        <EditorContent editor={editor} className={editorContentStyle} />
      </Box>

      <HStack gap={16}>
        {CHARACTORS.map((character) => (
          <VStack
            key={`character-${character.name}`}
            cursor="pointer"
            alignItems="center"
            gap={4}
            onClick={() => addMessage(character)}
          >
            <Image
              width={32}
              height={32}
              borderRadius={16}
              src={character.thumbnailUrl}
              alt={character.name}
            />
            <Text fontSize={12} fontWeight="bold" m={0}>
              {character.name}
            </Text>
          </VStack>
        ))}
      </HStack>
    </VStack>
  );
}

const editorContentStyle = css`
  width: 100%;
  height: 100%;
  padding: 2rem 1.3rem;

  [contenteditable] {
    outline: 0px solid transparent;
  }

  .ProseMirror {
    height: calc(100% - 20px);
    padding: 10px;

    line-height: 1.5;
  }

  .tiptap ul,
  .tiptap ol {
    padding: 0 1rem;
  }

  .tiptap p.is-editor-empty:first-child::before {
    color: #adb5bd;
    content: attr(data-placeholder);
    float: left;
    height: 0;
    pointer-events: none;
  }

  .tiptap p.is-empty::before {
    color: #adb5bd;
    content: attr(data-placeholder);
    float: left;
    height: 0;
    pointer-events: none;
  }

  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.5rem;
  }
`;
