# Dynamic Resume Builder

A React-based application that allows users to dynamically generate, edit, and print a professional resume using a JSON/JavaScript data structure.

## Features

- **Real-time Rendering**: The resume layout updates immediately as you modify the data.
- **Integrated Code Editor**: Uses Monaco Editor (VS Code engine) for a powerful editing experience with syntax highlighting.
- **Flexible Data Format**: Supports standard JSON or JavaScript object notation (e.g., keys without quotes).
- **Print Optimized**: Custom CSS ensures the resume looks perfect when printed to PDF.
- **Dynamic Page Title**: Automatically updates the browser tab with the candidate's name and job title.

## Project Structure

- **`src/App.jsx`**: The main entry component. It manages the application state and synchronizes data between the editor and the preview.
- **`src/Resume.jsx`**: The presentation component. It takes the data prop and renders the actual resume layout (Summary, Experience, Skills, etc.).
- **`src/components/JsonEditor.jsx`**: A collapsible panel containing the Monaco Editor. It handles parsing the input string into a JavaScript object.
- **`src/resumeData.json`**: The default data loaded when the application starts.

## Installation

1.  Install dependencies:
    ```bash
    npm install
    ```

2.  Start the development server:
    ```bash
    npm run dev
    ```

## Usage

1.  **Edit Resume**:
    *   Click the **"⚙️ Edit Resume Data"** button in the top-left corner.
    *   This opens the code editor. You can modify the structure directly.
    *   Click **"Load Current Data"** to populate the editor with the currently displayed resume data.

2.  **Update View**:
    *   After making changes, click **"Update Resume"**.
    *   If there are syntax errors, an alert will appear at the bottom of the editor.

3.  **Print / Save as PDF**:
    *   Click the **"Print Resume"** button on the resume page.
    *   Alternatively, use the browser print shortcut (`Ctrl+P` or `Cmd+P`).
    *   *Note: Ensure "Background graphics" is enabled in your print settings.*

## Data Schema

The application expects a data object with the following structure:

```javascript
{
  personalInfo: {
    name: "String",
    jobTitle: "String",
    location: "String",
    phone: "String",
    email: "String",
    links: [
      { label: "LinkedIn", url: "https://..." }
    ]
  },
  summary: "String",
  workExperiences: [
    {
      title: "String",
      period: "String",
      responsibilities: ["String", "String"]
    }
  ],
  technicalSkills: [
    { category: "String", items: "String" }
  ],
  education: { ... },
  additionalInfo: [ ... ]
}
```