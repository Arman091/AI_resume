import { useState } from 'react';
import Editor from '@monaco-editor/react';
import './jsoneditorStyle.css';
import { AiPromptGuide } from './AiPromptGuide.jsx';
export function JsonEditor({ onUpdate, currentData }) {
  const [editorValue, setEditorValue] = useState('');
  const [error, setError] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const handleEditorChange = (value) => {
    setEditorValue(value || '');
    setError('');
  };
  
  const handleUpdate = () => {
    try {
      const trimmed = editorValue.trim();
      if (!trimmed) throw new Error('Input is empty');
      
      const parsedData = new Function(`return ${trimmed}`)();
      
      if (!parsedData?.personalInfo?.name) {
        throw new Error('Missing required: personalInfo.name');
      }

      onUpdate(parsedData);
      setError('');
      setEditorValue('');
      setIsOpen(false);
    } catch (err) {
      setError(err?.message || 'Invalid JavaScript object format');
    }
  };

  const handleLoadCurrent = () => {
    const formatted = JSON.stringify(currentData, null, 2);
    setEditorValue(formatted);
    setError('');
  };

  const handleClose = () => {
    setIsOpen(false);
    setEditorValue('');
    setError('');
  };

  return (
    <div className="json-input-container">
     <div className='buttonwrapper'> 
      <button 
        className="json-toggle-button" 
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? '✕ Close Editor' : '⚙️ Edit Resume'}
      </button>
       <button 
         className="json-toggle-button" 
         onClick={() => setShowHelp(true)}
       >
        Help
      </button>
      </div>
      <AiPromptGuide isOpen={showHelp} onClose={() => setShowHelp(false)} />
      {isOpen && (
        <div className="json-input-panel">
          <div className="json-input-header">
           <h3>Edit Resume Data</h3>
          <div className="header-actions">
              {/* NEW EXPAND BUTTON */}
              <button 
                className="expand-toggle-button" 
                onClick={() => setIsExpanded(!isExpanded)}
                title={isExpanded ? "Shrink" : "Expand"}
              >
                {isExpanded ? '❐' : '⛶'}
              </button>
              <button 
                className="load-current-button" 
                onClick={handleLoadCurrent}
              >
                Load Current Data
              </button>
            </div>
          </div>
          
          <div className="monaco-editor-wrapper">
            <Editor
              height={isExpanded ? "calc(100vh - 200px)" : "400px"}
              defaultLanguage="javascript"
              value={editorValue}
              onChange={handleEditorChange}
              theme="vs-light"
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                wordWrap: 'on',
                automaticLayout: true,
                tabSize: 2,
              }}
            />
          </div>
          
          {error && (
            <div className="json-error">
              ⚠️ {error}
            </div>
          )}
          
          <div className="json-input-actions">
            <button 
              className="update-button" 
              onClick={handleUpdate}
              disabled={!editorValue.trim()}
            >
              Update Resume
            </button>
            <button 
              className="cancel-button" 
              onClick={handleClose}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
