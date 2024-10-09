# React 11 Payment Cycles Frontend

# Overview
This project is a frontend application developed in React for managing payment cycles. It allows users to view, add, edit, and delete payment cycles efficiently through an intuitive interface.

# Features
# Billing Cycle Management:

Create: Add new billing cycles with ease.
Read: View a list of all billing cycles.
Update: Edit existing billing cycles.
Delete: Remove billing cycles.
Detailed Actions:
create(values): Submits a new billing cycle.
update(values): Updates an existing billing cycle.
remove(values): Deletes a billing cycle.
showUpdate(billingCycle): Prepares the form for updating a billing cycle.
showDelete(billingCycle): Prepares the form for deleting a billing cycle.
Initialization: init() initializes the form and displays the list and create tabs.

# Tab Management:

Tab Selection: selectTab(tabId) selects a specific tab.
Show Tabs: showTabs(...tabIds) displays specific tabs.

# Dashboard:
Summary Fetching: getSummary() fetches the billing summary, including total credit and debt.

# Authentication:

Login: login(values) handles user login.
Signup: signup(values) handles user registration.
Logout: logout() logs out the user.
Token Validation: validateToken(token) validates the user token to maintain session.
Technologies Used
JavaScript: Primary language (98%).
HTML: Markup language (1.1%).
CSS: Styling (0.9%).
React: Main library for building the user interface.
Redux: State management library.
Webpack: Module bundler and build tool.
Babel: JavaScript compiler.
Available Scripts

# In the project directory, you can run:

npm run dev
Runs the app in the development mode using Webpack Dev Server.

npm run production
Builds the app for production using Webpack.

# Webpack Configuration
The project uses a custom Webpack configuration for bundling and development. The main entry point is ./src/index.jsx, and the output is ./public/app.js.
