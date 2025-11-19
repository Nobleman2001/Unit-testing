# Unit Testing Setup Guide

This guide explains how to configure **Unit Testing** in a Vite + React + Tailwind project using **Vitest** and **jest-dom**.

---

## 📦 Installation

Run the following commands:

```bash
npm install
npm run dev
```

---

## 🧪 Testing Libraries Used

* **Vitest**
* **jest-dom** (from Testing Library)

---

## ⚙️ Configuration Steps

### 1. Update `vite.config.js`

Add the testing configuration under the `test` property:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwind from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwind()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.js'
  }
})
```

---

### 2. Create the `setupTests.js` File

Inside your **src** folder, create:

**`src/setupTests.js`**

```js
import '@testing-library/jest-dom'
```

---

## 🧪 Writing a Test File

Create a test file anywhere inside your project.

For example: **`TestPage.test.jsx`**

```jsx
import { render, screen } from '@testing-library/react'
import TestPage from './TestPage'

describe('TestPage Component', () => {
  it('renders heading correctly', () => {
    render(<TestPage />)
    expect(screen.getByText('Hello Test')).toBeInTheDocument()
  })
})
```

---

## ▶️ Running Tests

Use:

```bash
npm run test
```

---

Your unit testing setup is now ready!
