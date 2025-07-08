# Week 9 : Cypress BDD Assignment

👨‍💻 Author : Bryan Vernanda  
🎓 NIM : 2501960120

## 🧪 Test Environments

- [Login](https://opensource-demo.orangehrmlive.com/)
- [Add Multiple Admin](https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers)

## 🔗 Prerequisites

- Ensure **Node.js** is installed on your local machine.

## 🗂️ Project Structure

To maintain a clean and modular codebase, the project is organized into three main folders:

- **Feature:**  
  Contains test scenarios written in Gherkin/Cucumber format. Gherkin provides a readable syntax that enables collaboration between developers, testers, and stakeholders by describing application behavior in a structured, human-friendly way. Each `.feature` file defines a specific functionality and includes scenarios along with their corresponding steps.

- **Pages:**  
  Implements the Page Object Model (POM) design pattern. Each file represents a page or component of the application and contains element getters and actions. This separation enhances test maintainability, as UI changes can be handled locally within the corresponding page object without affecting the overall test suite.

- **Step Definitions:**  
  This folder contains the implementation of the steps defined in the feature files. These definitions act as the bridge between Gherkin scenarios and Cypress commands. By keeping the step logic separate, the project maintains a clean, scalable, and reusable structure.


## 🧩 Summary

This project leverages the **BDD approach** with **Gherkin/Cucumber** to promote collaboration and clarity in test automation.  
By combining **feature files**, the **POM pattern**, and **step definitions**, this structure allows for:

- High reusability
- Easy maintenance
- Scalable test development

The separation of concerns ensures that UI changes, test logic, and scenario descriptions remain independent, improving overall readability and flexibility of the codebase.


## 🚀 Getting Started

1. Clone the repo  
   `https://github.com/bryan-vernanda/week-9-cy-bdd-asg.git`

2. Open your IDE and terminal  
   Navigate to the project directory using:  
   `cd week-9-cy-bdd-asg`
   
3. Install dependencies  
   `npm install`

4. Run the tests:
   - **Headless mode** (runs in terminal):  
     `npx cypress run`
   - **GUI mode** (interactive Cypress Test Runner):  
     `npx cypress open`  
     Then:
     - Wait for the Cypress window to appear  
     - Click on a `.feature` file to run the test

5. View the test report  
   After running in headless mode, a test report is generated automatically in the `mochawesome-report` folder.  
   Open the `index.html` file in your browser.

   💡 **Tip:**  
   - On **Mac**: Right-click → "Reveal in Finder"  
   - On **Windows**: Right-click → "Show in File Explorer"

