"use client";
import { CodeBlock } from "react-code-block";
import { Card } from "./ui/card";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import CopyButton from "./CopyButton";
import { themes } from "prism-react-renderer";
import { useTheme } from "next-themes";

function MyCodeBlock({
  children,
  language,
  filename,
}: {
  children: string;
  language?: "js" | "ts" | undefined;
  filename?: string | undefined;
}) {
  const { theme } = useTheme();

  const fileIcon = {
    js: <SiJavascript />,
    ts: <SiTypescript />,
  };

 
  return (
    <div className="">
      <CodeBlock
      code={children}
      language={language ?? "js"}
      theme={theme == "light" ? themes.oneLight : themes.oneDark}
    >
      <Card className="text-sm relative">
        <div className="absolute right-0">
          <CopyButton code={children} />
        </div>

        {filename && (
          <div className="text-muted-foreground ml-4 flex items-center gap-2 my-1">
            {language && <div>{fileIcon[language]}</div>}
            <div>{filename}</div>
          </div>
        )}
        <CodeBlock.Code className="p-2">
          <div className="table-row">
            <CodeBlock.LineNumber className="table-cell pr-4 text-sm text-muted-foreground text-right select-none" />
            <CodeBlock.LineContent className="table-cell">
              <CodeBlock.Token />
            </CodeBlock.LineContent>
          </div>
        </CodeBlock.Code>
      </Card>
    </CodeBlock>
    </div>
  );
}

export default MyCodeBlock;
