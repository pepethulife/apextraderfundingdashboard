# Bug Solutions - Apex Funded Trader Dashboard

## Horizontal Scroll/Bounce Issue on Dashboard Pages (Nov 30, 2025)

**Symptom:** All dashboard pages were not anchored left and right - content would slide and bounce when scrolling past the content, especially on mobile devices.

**Root Cause:** Multiple components had fixed `min-width` constraints that exceeded viewport width:
- Header component had `minWidth: '700px'`
- AccountsPage content container had `minWidth: '600px'`
- AccountsPage table had `minWidth: '600px'`
- Layout scroll-wrapper had `min-width: 700px` on mobile
- Main content area allowed `overflow-x: auto` which enabled horizontal scrolling
- No global overflow-x constraints on html/body elements

**Fix:** Applied comprehensive width constraints and overflow prevention:

1. **Root Layout Container** (`Layout.jsx`):
   - Added `width: '100%', maxWidth: '100vw', overflowX: 'hidden'` to root div
   - Added width constraints to `.main-content`: `width: calc(100% - 260px)`, `max-width: calc(100% - 260px)`, `overflow-x: hidden`
   - Removed `min-width: 700px` from `.scroll-wrapper` on mobile
   - Added proper width constraints: `width: 100%`, `max-width: 100%`
   - Updated mobile media query: `width: 100%`, `max-width: 100vw`, `overflow-x: hidden`

2. **Header Component** (`Header.jsx`):
   - Removed `minWidth: '700px'` that was causing horizontal overflow
   - Added `width: '100%', maxWidth: '100%'` to header element
   - Added responsive padding for mobile devices

3. **AccountsPage** (`AccountsPage.jsx`):
   - Removed `minWidth: '600px'` from content container
   - Removed `minWidth: '600px'` from table element
   - Added proper width constraints: `width: '100%', maxWidth: '100%'`
   - Table wrapper uses `overflowX: 'auto'` for internal scrolling without affecting page scroll

4. **Global CSS** (`index.css`):
   - Added `overflow-x: hidden` to `html` element with `width: 100%`, `max-width: 100vw`
   - Added `overflow-x: hidden` to `body` element with `width: 100%`, `max-width: 100vw`

**Files Modified:**
- `src/components/Layout.jsx`
- `src/components/Header.jsx`
- `src/pages/AccountsPage.jsx`
- `src/index.css`

**Result:** All pages are now properly anchored left and right, with no horizontal scrolling or bouncing when scrolling past content. Content is constrained to viewport width, and tables can scroll internally if needed without affecting page layout.

