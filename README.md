# 📚 Tria Contact List Assignment

This repository contains the frontend assignment for the Contact List application, implemented using **React, Vite, and TypeScript**, with a focus on clean component design and API interaction.

## 🔗 Live Application

**Deployment Status:** Successfully Deployed on Vercel
**Live URL:** [INSERT YOUR VERSEL DEPLOYMENT LINK HERE]

---

## ✨ Features & Functionality

[cite_start]This application is a Single Page Application (SPA) built to meet the core requirements and exceed expectations by demonstrating a product-minded approach[cite: 3, 27].

* [cite_start]**View Contact List:** Displays a list of contacts fetched from a mock API[cite: 5].
* [cite_start]**Search Contact:** Implements client-side filtering to instantly search contacts by **Name**[cite: 6].
* [cite_start]**Add New Contact (Optional but Implemented):** Provides a modal form to add a new contact, demonstrating form handling and state updates[cite: 7].
* [cite_start]**Mimicked API Interaction:** Data is fetched asynchronously from a mock endpoint to simulate real network latency and manage asynchronous state[cite: 14].
* [cite_start]**Robust State Handling:** Implements **Loading** and **Empty/No Results** states, which addresses the "Handling Ambiguity" requirement[cite: 26].

---

## 🛠️ Technical Decisions and Libraries

The following technologies were chosen to demonstrate proficiency in modern, scalable frontend development, aligning directly with the role's requirements.

| Technology | Reason for Choice | JD Alignment |
| :--- | :--- | :--- |
| **Framework: React** | [cite_start]The mandatory framework for the assignment[cite: 12]. | Core skill listed in JD. |
| **Build Tool: Vite** | Chosen over CRA for its superior performance, faster HMR (Hot Module Replacement), and alignment with modern JavaScript build trends. | Demonstrates knowledge of frontend build tools. |
| **Language: TypeScript** | [cite_start]Used to enforce strong typing, reduce runtime errors, and improve code maintainability and scalability[cite: 33]. | Addresses "Nice to Have" skill (TypeScript) in JD. |
| **Styling: CSS Modules** | Used for component-scoped styling (in place of Tailwind due to setup issues). [cite_start]Ensures styles are encapsulated and prevents global CSS conflicts, enhancing component design[cite: 3]. | Demonstrates understanding of component design and maintainability. |
| **Architecture** | Utilizes a custom `useContacts` hook to centralize all state management (fetch, search, add) away from the UI components. | Demonstrates ability to "Integrate APIs and manage state efficiently." |

---

## 🧐 Assumptions & Design Choices

[cite_start]The assignment intentionally left details open to interpretation[cite: 26]. My key design and engineering assumptions were:

* **API Mocking:** I created a clean, separate API layer (`src/api/`) that returns a Promise with a delay. This was done to explicitly showcase my ability to handle **asynchronous data** and **loading states**, which is a core skill for API integration.
* [cite_start]**Optional Feature Implementation:** The "Ability to add a new contact" [cite: 7] was implemented via a **Modal** component to provide a non-disruptive, modern user experience (UX) and demonstrate form handling.
* [cite_start]**Design Creativity:** I focused on a simple, modern design that is **fully responsive** to demonstrate UX design skills across different screen sizes[cite: 16].

---

## ⚙️ Setup and Local Run Instructions

[cite_start]Follow these steps to set up and run the project on your local machine[cite: 22].

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
