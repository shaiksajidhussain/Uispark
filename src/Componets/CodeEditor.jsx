// src/components/CodeEditor.jsx
import React, { useState } from 'react';
import MonacoEditor from '@monaco-editor/react';
import Iframe from 'react-iframe';

const CodeEditor = ({ codeSnippet, onCodeChange }) => {
  const [code, setCode] = useState(codeSnippet);

  const handleEditorChange = (value) => {
    setCode(value);
    onCodeChange(value);
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 p-4">
        <MonacoEditor
          height="90vh"
          language="html"
          value={code}
          onChange={handleEditorChange}
          theme="vs-dark"
        />
      </div>
      <div className="w-full md:w-1/2 p-4">
        <Iframe
          srcDoc={code}
          width="100%"
          height="90vh"
          frameBorder="0"
          sandbox="allow-scripts allow-same-origin"
        />
      </div>
    </div>
  );
};

export default CodeEditor;