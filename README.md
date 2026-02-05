# Garak Security Report

A PatternFly-styled HTML report for Garak red teaming results.

## Dependencies

| Library | Version | Purpose |
|---------|---------|---------|
| PatternFly | 6.1.0 | CSS framework |
| React | 18.x | UI rendering |
| ReactDOM | 18.x | DOM rendering |
| Victory | 37.x | Charts (used by PatternFly) |

## Files

```
pf-chatterbox/
├── test_report.html      # Main report
├── report-data.json      # Data (optional, embedded in HTML)
└── assets/
    ├── css/
    │   └── patternfly.min.css
    └── js/
        ├── react.min.js
        ├── react-dom.min.js
        └── victory.min.js
```

## Usage

Open `test_report.html` in a browser. Works offline.

## Features

- Dark/light theme toggle
- Summary stats cards
- Bar chart (Complied vs Refused)
- Scatter chart (by scenario)
- Data table with results
