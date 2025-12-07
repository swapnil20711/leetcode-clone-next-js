import React from 'react';
import Editor from 'react-simple-code-editor';
// We assume Prism is globally available via CDN for simplicity in this no-bundler-setup simulation,
// but for standard React apps we import it. Since this is a TSX file intended for a standard build:
import Prism from 'prismjs';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-cpp';

interface CodeEditorWindowProps {
  code: string;
  onChange: (code: string) => void;
  language: string;
}

export const CodeEditorWindow: React.FC<CodeEditorWindowProps> = ({ code, onChange, language }) => {
  
  const highlight = (code: string) => {
    // Map our generic language keys to Prism keys
    let prismLang = Prism.languages.javascript;
    if (language === 'python') prismLang = Prism.languages.python;
    if (language === 'java') prismLang = Prism.languages.java;
    if (language === 'cpp') prismLang = Prism.languages.cpp;
    
    return Prism.highlight(code, prismLang, language);
  };

  return (
    <div className="h-full w-full overflow-hidden bg-[#1e1e1e] rounded-b-lg font-mono text-sm relative">
       <Editor
        value={code}
        onValueChange={onChange}
        highlight={highlight}
        padding={16}
        style={{
          fontFamily: '"Fira Code", "Fira Mono", monospace',
          fontSize: 14,
          minHeight: '100%',
          backgroundColor: '#1e1e1e',
          color: '#d4d4d4',
        }}
        className="min-h-full"
        textareaClassName="focus:outline-none"
      />
    </div>
  );
};
