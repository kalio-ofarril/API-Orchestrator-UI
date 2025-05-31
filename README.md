# API Orchestrator – Frontend

This is the frontend for the **API Orchestrator**, a tool that allows users to schedule, manage, and monitor HTTP API calls. It is built using **React** with **Next.js App Router** and styled with **IBM Carbon Design System** for a professional and accessible user interface.

---

## 📆 Tech Stack

* [React](https://reactjs.org/)
* [Next.js (App Router)](https://nextjs.org/docs/app)
* [Carbon Design System](https://carbondesignsystem.com/)
* [TypeScript](https://www.typescriptlang.org/) (optional but recommended)
* [ESLint + Prettier](https://eslint.org/)

---

## 🚀 Features

* 🔠 Carbon-based UI with responsive layout
* 🧭 Nested layouts with `App Router`
* 🧹 Modular routing (`/login`, `/home/jobs`, etc.)
* 🔹 Integration-ready with Spring Boot backend
* 🌃 Light/Dark theme via Carbon's `Theme` component
* 🗖️ Scheduling dashboard (Jobs)
* 🧑‍💼 Admin panel structure for internal cloud-hosted deployments (Cirrus)

---

## 📁 Project Structure

```
src/
├── app/
│   ├── login/              # Public login route
│   ├── home/               # Protected area
│   │   ├── layout.tsx      # Shared layout (Header, SideNav)
│   │   ├── jobs/           # Job scheduler dashboard
│   │   │   └── page.tsx
├── components/             # Reusable UI pieces (Header, ThemeWrapper, etc.)
├── lib/                    # Barrel file for Carbon imports
├── styles/                 # SCSS / CSS modules
```

---

## 🛠️ Setup

1. **Clone the repo:**

   ```bash
   git clone https://github.com/your-username/api-orchestrator-frontend.git
   cd api-orchestrator-frontend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run locally:**

   ```bash
   npm run dev
   ```

4. **Build for production:**

   ```bash
   npm run build
   ```

5. **Export as static assets (for Spring integration):**

   ```bash
   npm run build && npm run export
   ```

   > Then copy the `out/` folder into your Spring Boot `resources/static/` or wherever you serve UI.

---

## 🔐 Authentication

Auth is handled via a simple session guard (TBD — integration in progress). Currently mock-protected with routing guards in the frontend.

---

## 🧪 Testing (Coming soon)

Testing will be done using:

* **Jest** for unit tests
* **Playwright** for e2e
* **React Testing Library** for UI behavior

---

## 📤 Deployment

Frontend will be **pre-built** and served through a Spring Boot backend in a **Cirrus Cloud** environment.

---

## 🧑‍💻 Contributing

Pull requests are welcome. Please adhere to the **Carbon Design UX** principles and **Next.js App Router** best practices.

---

## 📄 License

Apache-2.0 (Inherited from Carbon Design System and IBM open-source components).
