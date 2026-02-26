import { useState, useEffect } from 'react';
import { Resume } from './Resume.jsx';
import { JsonEditor } from './components/JsonEditor.jsx';
import resumeData from './resumeData.json';

/**
 * Main Application Component.
 * Manages the central state of the resume data and handles document title updates.
 */
export function App() {
  const [resumeDataState, setResumeDataState] = useState(resumeData);

  // Effect to update the browser tab title based on the persona's name and job title.
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
