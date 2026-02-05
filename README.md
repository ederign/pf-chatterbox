# Garak Security Report

A PatternFly 6 styled HTML report for visualizing Garak red teaming results.

**Live Demo:** https://ederign.github.io/pf-chatterbox/

## Features

- Light/dark theme toggle
- Summary statistics cards
- Bar chart showing Complied vs Refused counts
- Horizontal bar chart showing scenario outcomes
- Responsive data table with results
- Works as a standalone HTML file (no server required)

## PatternFly Components

| Component | Usage |
|-----------|-------|
| Masthead | Dark header with branding |
| Page | Overall layout structure |
| Card | Stats, charts, and table containers |
| Table | Scenario details |
| Label | Status badges and tags |
| Title | Section headings |

## Project Structure

```
pf-chatterbox/
├── index.html                    # Main report page (static version)
├── assets/
│   ├── css/
│   │   ├── patternfly.min.css    # PatternFly 6 styles
│   │   ├── report.css            # Custom report styles
│   │   └── assets/fonts/         # Red Hat fonts
│   └── js/
│       ├── react.min.js          # React 18
│       ├── react-dom.min.js      # ReactDOM 18
│       ├── victory.min.js        # Victory charts
│       └── report-data.js        # Report data
├── vite-build/                   # Bundled single-file version
│   ├── src/
│   │   ├── main.js               # App entry point
│   │   ├── report-data.js        # Report data (ESM)
│   │   └── css/                  # Styles
│   ├── index.html                # Vite entry
│   ├── vite.config.js            # Vite config
│   └── dist/index.html           # Built single-file output
└── .gitignore
```

## Usage

### Static Version
1. Open `index.html` directly in a browser
2. Or visit the [GitHub Pages demo](https://ederign.github.io/pf-chatterbox/)

### Bundled Single-File Version
Build a fully self-contained HTML file with all CSS, JS, and fonts inlined:

```bash
cd vite-build
npm install
npm run build
```

Output: `vite-build/dist/index.html` (~2.3MB, works offline via file://)

### Customizing Data

Edit `assets/js/report-data.js` to change the report data:

```javascript
const REPORT_DATA = {
  "reportId": "your-report-id",
  "probe": "probe.Name",
  "summary": { "scenarios": 8, "generations": 34, "complied": 5, "refused": 3 },
  "scenarios": [
    { "name": "Scenario Name", "intent": "S001code", "generations": 5, "outcome": "complied" },
    // ...
  ]
};
```

## Dependencies

| Library | Version | Purpose |
|---------|---------|---------|
| PatternFly | 6.x | UI component styles |
| React | 18.x | UI rendering |
| Victory | 37.x | Chart visualizations |

## License

MIT
