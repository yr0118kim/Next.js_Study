"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Prism, SyntaxHighlighterProps } from "react-syntax-highlighter";
import Image from "next/image";
const SyntaxHighlighter = Prism as any as React.FC<SyntaxHighlighterProps>;

export default function MarkdownViewer({ content }: { content: string }) {
  return (
    <ReactMarkdown
      className={"prose lg:prose-xl max-w-none"}
      remarkPlugins={[remarkGfm]}
      components={{
        code(props) {
          const { ref, children, className, node, ...rest } = props;
          const match = /language-(\w+)/.exec(className || "");
          return match ? (
            <SyntaxHighlighter
              language={match[1]}
              PreTag="div"
              {...rest}
              style={materialDark}
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <code {...rest} className={className}>
              {children}
            </code>
          );
        },
        img: (image) => (
          <Image
            className="w-full max-h-60 oc"
            src={image.src || ""}
            alt={image.alt || ""}
            width={500}
            height={350}
          />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}

// 새로운 라이브러리를 사용할 때 새롭게 컴포넌트를 정의함으로써 추상화를 시킴
