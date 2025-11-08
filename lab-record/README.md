# Lab Record - Web Technologies

A comprehensive HTML/CSS lab record system designed for PDF generation with proper A4 formatting, headers, and footers.

## Features

- **Cover Page**: Professional cover page with university info, course details, and student information
- **Table of Contents**: Comprehensive TOC with lab listings and page numbers
- **A4 Page Format**: Optimized for A4 size (210mm × 297mm) with proper margins
- **Headers & Footers**: Fixed headers with date and footers with student info and lab numbering
- **Responsive Design**: Works on both screen and print media
- **Modular Structure**: Each lab is a separate page with consistent formatting
- **Code Display**: Properly formatted code blocks with syntax highlighting
- **Image Support**: Optimized image display for design and screenshot sections
- **PDF Ready**: Optimized for PDF generation with proper page breaks

## File Structure

```
lab-record/
├── index.html          # Main lab record HTML file
├── style.css           # CSS styling for A4 format and layout
├── script.js           # JavaScript for dynamic functionality
├── README.md           # This documentation file
└── assets/
    ├── design/         # Design/plan images for each lab
    │   ├── lab-1.png
    │   ├── lab-2.png
    │   └── ...
    └── outputs/        # Screenshot images for each lab
        ├── lab-1.1.png
        ├── lab-1.2.png
        └── ...
```

## Usage Instructions

### 1. Viewing the Lab Record

1. Open `index.html` in your web browser
2. The lab record will display with proper A4 formatting
3. Each lab is displayed on separate pages with headers and footers

### 2. Generating PDF

#### Method 1: Browser Print to PDF
1. Open `index.html` in your browser
2. Press `Ctrl+P` (Windows) or `Cmd+P` (Mac)
3. Select "Save as PDF" as the destination
4. In print settings:
   - Set paper size to A4
   - Enable "Headers and footers" if available
   - Set margins to "Minimum" or "None"
   - Enable "Background graphics" for proper styling
5. Click "Save" to generate the PDF

#### Method 2: Using Browser Developer Tools
1. Open `index.html` in Chrome/Edge
2. Press `F12` to open Developer Tools
3. Press `Ctrl+Shift+P` to open Command Palette
4. Type "print" and select "Print"
5. Follow the same PDF generation steps as Method 1

### 3. Customizing Content

#### Updating Cover Page Information
1. Edit the cover page section in the HTML
2. Update university name, course details, and student information
3. Modify the course code, academic year, and semester as needed
4. The submission date is automatically set to the current date

#### Updating Table of Contents
1. Edit the TOC section to add/remove labs
2. Update lab titles and page numbers
3. The TOC automatically reflects the lab structure

#### Adding New Labs
1. Copy an existing lab page structure from the HTML
2. Update the lab number, title, and content
3. Add appropriate design and screenshot images
4. Update the lab numbering in the footer
5. Add the new lab to the Table of Contents

#### Updating Student Information
1. Edit the footer section in each lab page
2. Update name and registration number
3. The information appears in the bottom-left of each page
4. Also update the cover page student information section

#### Modifying Dates
1. The date is automatically set to the current date
2. To set a specific date, modify the JavaScript in the script section
3. Update the `currentDate` variable with your desired date

#### Adding Images
1. Place design images in `assets/design/` folder
2. Place screenshot images in `assets/outputs/` folder
3. Update the image paths in the HTML accordingly
4. Ensure images are optimized for web (recommended: max 300px height)

### 4. Code Integration

The system includes a JavaScript class (`LabRecord`) that can help you:
- Load code from external files dynamically
- Generate code sections automatically
- Manage lab data programmatically

#### Using External Code Files
```javascript
// Example: Load code from your existing lab files
const labRecord = new LabRecord();
const code = await labRecord.loadCodeFromFile('../lab-1/resume/resume.html');
```

## Styling Customization

### CSS Variables
The CSS uses custom properties for easy customization:

```css
:root {
    --primary-color: #2c3e50;      /* Main text color */
    --secondary-color: #3498db;     /* Accent color */
    --accent-color: #e74c3c;        /* Highlight color */
    --text-color: #333;             /* Body text color */
    --light-gray: #f8f9fa;          /* Background color */
    --border-color: #dee2e6;        /* Border color */
}
```

### Page Layout
- **Header Height**: 60px (adjustable via `--header-height`)
- **Footer Height**: 40px (adjustable via `--footer-height`)
- **Content Padding**: 20px (adjustable via `--content-padding`)

### Print Optimization
The CSS includes specific print media queries for optimal PDF generation:
- Fixed positioning for headers and footers
- Proper page breaks
- Optimized font sizes for print
- Image size constraints

## Troubleshooting

### PDF Generation Issues
1. **Headers/Footers Not Showing**: Ensure "Headers and footers" is enabled in print settings
2. **Content Cut Off**: Check that margins are set to "Minimum" or "None"
3. **Images Not Displaying**: Verify image paths are correct and images exist
4. **Styling Issues**: Enable "Background graphics" in print settings

### Layout Issues
1. **Content Overlapping**: Check that content doesn't exceed page height
2. **Page Breaks**: Use `page-break-before: always` for new labs
3. **Responsive Issues**: Test on different screen sizes and zoom levels

### Code Display Issues
1. **Code Not Formatted**: Ensure proper HTML escaping in code blocks
2. **Syntax Highlighting**: Check that CSS classes are applied correctly
3. **Long Code Lines**: Use `overflow-x: auto` for horizontal scrolling

## Best Practices

1. **Image Optimization**: Keep images under 300px height for better PDF performance
2. **Code Length**: Limit code blocks to essential parts to avoid page overflow
3. **Content Structure**: Use consistent section structure across all labs
4. **Testing**: Always test PDF generation before submission
5. **Backup**: Keep a backup of your lab record files

## Browser Compatibility

- **Chrome**: Full support (recommended for PDF generation)
- **Firefox**: Full support
- **Safari**: Full support
- **Edge**: Full support

## Support

For issues or questions about the lab record system:
1. Check this README for common solutions
2. Verify file paths and image locations
3. Test in different browsers
4. Ensure all required files are present

---

**Note**: This lab record system is designed to be professional and comprehensive. Make sure to replace placeholder content with your actual lab work and update all personal information before submission.
