# Resume PDF Instructions

To add your resume PDF:

1. **Create/Export your resume as PDF** from the provided `resume.html` file:
   - Open `public/resume.html` in your browser
   - Press Ctrl+P (Windows) or Cmd+P (Mac)
   - Select "Save as PDF"
   - Save as `resume.pdf`

2. **Place the PDF** in the `public` folder:
   ```
   public/
     └── resume.pdf
   ```

3. The "View Resume" button in the Hero section will automatically download this PDF.

## Alternative: Online Resume Hosting

You can also host your resume on Google Drive or Dropbox and update the link in `hero.jsx`:
```jsx
<a href="YOUR_RESUME_LINK" target="_blank">
```

## Generating from resume.html

The included `resume.html` provides a clean, printable resume template that matches your portfolio content. Simply:
- Update the content in `resume.html` with your latest information
- Open it in Chrome/Edge
- Print to PDF with proper margins
- Save to the public folder
