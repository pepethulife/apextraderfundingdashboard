# Apex Funded Trader Dashboard - TODO

## COMPLETED

### Layout & Responsive Fixes (Nov 30, 2025)
- [x] Fixed horizontal scroll/bounce issues on all dashboard pages
- [x] Removed fixed min-width constraints causing overflow (700px on Header, 600px on AccountsPage)
- [x] Added proper width constraints and overflow-x: hidden to root containers
- [x] Fixed mobile viewport anchoring - pages no longer slide or bounce when scrolling
- [x] Updated Layout component with proper width constraints for desktop and mobile
- [x] Updated Header component to be responsive without fixed min-width
- [x] Updated AccountsPage to remove min-width constraints from content container and table
- [x] Added global CSS overflow-x: hidden to html and body elements

## TODO

### UI/UX Improvements
- [ ] Review and optimize table responsiveness on mobile devices
- [ ] Consider adding horizontal scroll for tables on mobile if content is too wide
- [ ] Test all pages on various screen sizes to ensure no overflow issues

### Features
- [ ] Add loading states for data fetching
- [ ] Add error handling and error boundaries
- [ ] Implement proper authentication flow

### Performance
- [ ] Optimize bundle size
- [ ] Add code splitting for routes
- [ ] Optimize images and assets

## NOTES

### Project Structure
- React + Vite application
- React Router for navigation
- Tailwind CSS for styling
- Components: Layout, Header, Sidebar, LoginPage
- Pages: Dashboard, Accounts, Profile, Charts, Trading Tools, etc.

### Layout System
- Fixed sidebar on desktop (260px width)
- Collapsible sidebar on mobile (overlay)
- Main content area adjusts based on sidebar state
- All pages use Layout component wrapper

