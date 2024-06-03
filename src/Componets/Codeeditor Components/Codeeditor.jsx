import React, { useState, useEffect, useCallback } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import debounce from 'lodash.debounce';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml'; // For HTML
import 'codemirror/mode/css/css'; // For CSS
import 'codemirror/mode/javascript/javascript'; // For JS
import 'codemirror/mode/htmlmixed/htmlmixed'; // For HTML mixed mode
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Codeeditor.css"

const CodeEditor = () => {
  const [code, setCode] = useState('');

  const updatePreview = useCallback(debounce(() => {
    const iframe = document.getElementById('preview');
    if (iframe) {
      const document = iframe.contentDocument;
      const documentContents = `
        <!DOCTYPE html>
        <html>
          <head>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
            <style>
              ${code}
            </style>
          </head>
          <body>
            ${code}
          </body>
        </html>
      `;
      document.open();
      document.write(documentContents);
      document.close();
    }
  }, 300), [code]);

  useEffect(() => {
    updatePreview();
  }, [code, updatePreview]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h2>Code Editor</h2>
          <CodeMirror
          style={{height: '100px'}}
            value={code}
            options={{
              mode: 'htmlmixed',
              theme: 'material',
              lineNumbers: true,
            }}
            onBeforeChange={(editor, data, value) => {
              setCode(value);
            }}
          />
        </div>
        <div className="col-md-6">
          <h2>Preview</h2>
          <iframe id="preview" title="Preview" className="w-100" style={{ height: '300px', border: '1px solid #ccc' }}></iframe>
        </div>
      </div>
    


      
    </div>
  );
};

export default CodeEditor;
