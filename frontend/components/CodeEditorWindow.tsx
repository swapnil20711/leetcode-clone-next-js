import React from "react";
import Editor from "@monaco-editor/react";

interface CodeEditorWindowProps {
  code: string;
  onChange: (code: string) => void;
  language: string;
  title?: string;
}

export const CodeEditorWindow: React.FC<CodeEditorWindowProps> = ({
  code,
  onChange,
  language,
  title = "Code Editor",
}) => {
  return (
    <div className="flex flex-col h-full w-full bg-[#1e1e1e] rounded-lg overflow-hidden border border-[#2a2a2a] shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#252526] border-b border-[#00000050] text-gray-300 text-sm font-medium">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
          <span className="ml-3 opacity-80">{title}</span>
        </div>
      </div>

      {/* Editor */}
      <Editor
        height="100%"
        theme="vs-dark"
        language={language}
        value={code}
        onChange={(value) => onChange(value || "")}
        options={{
          minimap: { enabled: true },
          fontSize: 14,
          fontFamily: "'Fira Code', monospace",
          fontLigatures: true,
          lineNumbers: "on",
          smoothScrolling: true,
          scrollBeyondLastLine: false,
          automaticLayout: true,
          padding: { top: 16, bottom: 16 },
          renderLineHighlight: "all",
          cursorBlinking: "smooth",
          formatOnPaste: true,
          formatOnType: true,
        }}
        className="flex-1"
      />
    </div>
  );
};
