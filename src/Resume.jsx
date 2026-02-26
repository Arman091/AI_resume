
/**
 * Resume Component.
 * Renders the visual layout of the resume based on the provided data object.
 * 
 * @param {Object} props - Component props.
 * @param {Object} props.data - The resume data object containing personalInfo, workExperiences, etc.
 */
export function Resume({data}) {

  if (!data) return <p>No resume data provided.</p>;
  const { personalInfo, summary, workExperiences, technicalSkills, education, additionalInfo } = data;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="container">
      <button className="print-button" onClick={handlePrint}>
        Print Resume
      </button>
      {/* NAME */}
      <div className="author">
        <h1>{personalInfo.name}</h1>
        {/* job Title */}
        <p>{personalInfo.jobTitle}</p>
      </div>

      {/* CONTACT */}
      <div className="contact">
        <div className="contact-line">
          {personalInfo.location}
          <span className="separator">•</span>
          <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
          <span className="separator">•</span>
          <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
        </div>

        <div className="contact-links">
          {personalInfo.links.map((link, index) => (
            <a 
              key={index}
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* SUMMARY */}
      <div className="section-title">Summary</div>
      <p>{summary}</p>

      {/* WORK EXPERIENCE */}
      <hr className="hr" />
      <div className="section-title">Work Experiences</div>
      {workExperiences.map((experience, index) => (
        <div key={index}>
          <div className="jobsection">
            <div className="job-title">{experience.title}</div>
            <div className="job-meta">{experience.period}</div>
          </div>
          <ul>
            {experience.responsibilities.map((responsibility, respIndex) => (
              <li key={respIndex}>{responsibility}</li>
            ))}
          </ul>
        </div>
      ))}

      {/* TECHNICAL SKILLS */}
      <hr className="hr" />
      <div className="section-title">Technical Skills</div>
      <div className="skills">
        {technicalSkills.map((skill, index) => (
          <div key={index} className="skill-row">
            <span className="skill-title">{skill.category}</span>
            <span className="skill-items">{skill.items}</span>
          </div>
        ))}
      </div>

      {/* EDUCATION */}
      <hr className="hr" />
      <div className="education-block">
        <p className="education-title">Education</p>
        <div className="edu-header">
          <span className="degree">{education.degree}</span>
          <span className="edu-date">{education.period}</span>
        </div>
        <div className="university">
          {education.university}
        </div>
      </div>

      {/* ADDITIONAL */}
      <hr className="hr" />
      <div className="section-title">Additional Information</div>

      <div className="additional-block">
        {additionalInfo.map((info, index) => (
          <div key={index} className="additional-row">
            <span className="additional-label">{info.label}</span>
            <span className="additional-value">{info.value}
              <span className="separator">
               {info.link && <a href={info.link} target="_blank" rel="noopener noreferrer">View
                </a>
               }
              </span>
            </span>
         
          </div>
        ))}
      </div>
    </div>
  );
}
