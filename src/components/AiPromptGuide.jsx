import React from 'react';
import styles from './AiPromptGuide.module.css';

export function AiPromptGuide({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2 className={styles.title}>Resume AI Optimizer Guide</h2>
        
        <div>
          <p>Follow these steps to optimize your resume for a specific job:</p>
          <ol style={{ paddingLeft: '20px', lineHeight: '1.6' }}>
            <li>Open <strong>Edit Resume Data</strong> and click <strong>Load Current Data</strong>.</li>
            <li>Copy the JSON content from the editor.</li>
            <li>Paste the prompt below into ChatGPT, Gemini, or Claude.</li>
            <li>Append the <strong>Job Description</strong> and your <strong>Resume JSON</strong> to the prompt.</li>
            <li>Copy the optimized JSON response from the AI.</li>
            <li>Paste it back into this editor and click <strong>Update Resume</strong>.</li>
          </ol>
        </div>

        <div>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px' }}>Copy this Prompt:</label>
          <textarea 
            readOnly 
            className={styles.textarea}
            onClick={(e) => e.target.select()}
            value={`ResumeCreator 
You are an expert ATS resume optimizer and technical recruiter.

Your task is to:

1. Analyze the provided Job Description (JD).
2. Extract important technical skills, tools, frameworks, and soft skills.
3. Modify the provided Resume JSON to align strongly with the JD.
4. Synchronize past job responsibilities with the wording used in the JD.
5. Inject relevant missing keywords naturally where applicable.
6. Add realistic quantified metrics (15%, 20%, 30% improvements etc).
7. DO NOT fabricate new companies or fake experience.
8. DO NOT modify contact details, email, phone, portfolio links, LinkedIn, or GitHub.
9. DO NOT change company names or role titles.
10. Keep the exact JSON structure unchanged.
11. Return valid JSON only.
12. After the JSON, provide ATS scoring details.

ATS Scoring Requirements:
- Extract JD keywords.
- Check keyword inclusion in resume.
- Provide:
   - Keyword Match Score (0–100%)
   - Contextual Alignment Score (0–100%)
   - Overall ATS Readiness Score
   - List of missing keywords
   - List of newly added keywords

Output Format:

1) Optimized Resume JSON
2) ATS Analysis Section`}
          />
        </div>
        
        <div className={styles.footer}>
          <button 
            onClick={onClose}
            className="json-toggle-button"
            style={{ float: 'none', display: 'inline-block' }}
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
}
