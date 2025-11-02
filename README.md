# 📚 Tria Contact List Assignment

This repository contains the frontend assignment for the Contact List application, implemented using **React, Vite, and TypeScript**, with a focus on clean component design and API interaction.

## 🔗 Live Application

**Deployment Status:** Successfully Deployed on Vercel
**Live URL:** [INSERT YOUR VERSEL DEPLOYMENT LINK HERE]

---

## ✨ Features & Functionality

This application is a Single Page Application (SPA) built to meet the core requirements and exceed expectations by demonstrating a product-minded approach.

* **View Contact List:** Displays a list of contacts fetched from a mock API.
* **Search Contact:** Implements client-side filtering to instantly search contacts by **Name**.
* **Add New Contact (Optional but Implemented):** Provides a modal form to add a new contact, demonstrating form handling and state updates.
* **Mimicked API Interaction:** Data is fetched asynchronously from a mock endpoint to simulate real network latency and manage asynchronous state.
* **Robust State Handling:** Implements **Loading** and **Empty/No Results** states, which addresses the "Handling Ambiguity" requirement.

---

## 🛠️ Technical Decisions and Libraries

The following technologies were chosen to demonstrate proficiency in modern, scalable frontend development, aligning directly with the role's requirements.

| Technology | Reason for Choice |
| :--- | :--- |
| **Framework: React** | The mandatory framework for the assignment. | 
| **Build Tool: Vite** | Chosen over CRA for its superior performance, faster HMR (Hot Module Replacement), and alignment with modern JavaScript build trends. | 
| **Language: TypeScript** | Used to enforce strong typing, reduce runtime errors, and improve code maintainability and scalability | 
| **Styling: CSS Modules** | Used for component-scoped styling (in place of Tailwind due to setup issues). Ensures styles are encapsulated and prevents global CSS conflicts, enhancing component design. | 
| **Architecture** | Utilizes a custom `useContacts` hook to centralize all state management (fetch, search, add) away from the UI components. | 

---

## 🧐 Assumptions & Design Choices

The assignment intentionally left details open to interpretation. My key design and engineering assumptions were:

* **API Mocking:** I created a clean, separate API layer (`src/api/`) that returns a Promise with a delay. This was done to explicitly showcase my ability to handle **asynchronous data** and **loading states**, which is a core skill for API integration.
* **Optional Feature Implementation:** The "Ability to add a new contact" was implemented via a **Modal** component to provide a non-disruptive, modern user experience (UX) and demonstrate form handling.
* **Design Creativity:** I focused on a simple, modern design that is **fully responsive** to demonstrate UX design skills across different screen sizes.

---

## ⚙️ Setup and Local Run Instructions

Follow these steps to set up and run the project on your local machine.

### Prerequisites

* Node.js (LTS version)
* npm or Yarn

### Steps

1.  **Clone the Repository:**
    ```bash
    git clone [YOUR REPO LINK]
    cd tria-contact-list
    ```

2.  **Install Dependencies:**
    ```bash
    npm install  # or yarn install
    ```

3.  **Run the Application:**
    ```bash
    npm run dev  # or yarn dev
    ```

The application will be available at `http://localhost:5173/` (or a similar port displayed in your terminal).
