import { useState, useEffect } from 'react';
import { Resume } from './Resume.jsx';
import { JsonEditor } from './components/JsonEditor.jsx';
import resumeData from './resumeData.json';

export function App() {
  const [resumeDataState, setResumeDataState] = useState(resumeData);

  useEffect(() => {
    const name = resumeDataState?.personalInfo?.name || 'Resume';
    const jobTitle = resumeDataState?.personalInfo?.jobTitle || '';
    document.title = jobTitle 
      ? `${name} - ${jobTitle}` 
      : `${name} - Resume`;
  }, [resumeDataState]);

  return (
    <>
      <JsonEditor 
        onUpdate={setResumeDataState} 
        currentData={resumeDataState}
      />
      <Resume data={resumeDataState} />
    </>
  );
}
