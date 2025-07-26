# E-commerce Dashboard Implementation for Multitenant Platform

**Objective:** Implement a comprehensive e-commerce dashboard for a multitenant platform. The dashboard should provide a high-level overview and detailed analytics for an individual tenant (a single store), leveraging the previously designed API. Initially, these APIs should be mocked with dummy data to facilitate front-end development.

**Key Dashboard Components (to be powered by API calls):**

1.  **High-Level Overview:**

    - A summary section at the top displaying the most critical KPIs for the selected timeframe (e.g., today, this week, last 30 days).
      - **KPIs to include (fetch from API):** Total Revenue, Total Orders, Average Order Value (AOV), Conversion Rate (mock with dummy data), New vs. Returning Customers.
    - A time-series chart showing revenue trends over the selected period.

2.  **Detailed Analytics Sections:**
    - **Sales Performance (fetch from API):**
      - A breakdown of sales by product, category, and sales channel.
      - A table listing recent orders with details like order number, customer name, total amount, and status.
    - **Customer Insights (fetch from API):**
      - A graph showing customer acquisition trends over time.
      - A breakdown of customers by location (e.g., a world map or a list of top countries/cities) - mock location data if not available from API.
      - Customer Lifetime Value (CLV).
    - **Product Performance (fetch from API):**
      - A table showing top-selling products by units and revenue.
      - A list of products with the lowest stock levels.
      - Data on product views vs. purchases to identify popular but low-converting items (mock views data).

**API Usage Instructions:**

- **Utilize the previously defined API design.** The agent should make calls to these endpoints.
- **Mock API Responses:** For initial development, create dummy data for each API endpoint. When the dashboard makes an API request, it should receive this mocked data. This allows for independent front-end development without a live backend connection.
- The API endpoints will be under a `/v1/dashboard/{storeId}/` prefix.

**Filtering & Customization (to be implemented on the front-end, interacting with API parameters):**

- A global date range selector to filter all dashboard data, passing `startDate` and `endDate` to API calls.
- Dropdown menus to filter data by specific product categories, sales channels, or customer segments, passing relevant query parameters to API calls.

**Design and UX Considerations:**

- Use a clean, modern design with a focus on data visualization (charts, graphs, progress bars).
- Use a consistent color palette to represent different data points.
- Ensure the dashboard is responsive and works well on both desktop and mobile devices.
- Provide a clear navigation menu to switch between different sections or tenants.

**Resources (provided for context, to be used in implementation):**

`app/globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 0 0% 3.9%;

    --muted: 0 0% 96.1%;
    --muted-foreground: 0 0% 45.1%;

    --popover: 0 0% 100%;
    --popover-foreground: 0 0% 3.9%;

    --card: 0 0% 100%;
    --card-foreground: 0 0% 3.9%;

    --border: 0 0% 89.8%;
    --input: 0 0% 89.8%;

    --primary: 268 66% 46%;
    --primary-foreground: 268 66% 96%;

    --secondary: 358 88% 38%;
    --secondary-foreground: 358 88% 98%;

    --tertiary: 0 0% 9%;
    --tertiary-foreground: 0 0% 98%;

    --accent: 0 0% 95%;
    --accent-foreground: 0 0% 4.8%;

    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;

    --ring: 0 0% 63.9%;

    --radius: 0.5rem;

    --hero-primary: 268 66% 66%;
    --hero-primary-foreground: 0 0% 98%; /* A very light foreground for dark mode */

    --hero-secondary: 358 88% 58%;
    --hero-secondary-foreground: 0 0% 93%;
  }

  .dark {
    --background: 0 0% 3.9%;
    --foreground: 0 0% 98%;

    --muted: 0 0% 14.9%;
    --muted-foreground: 0 0% 63.9%;

    --popover: 0 0% 3.9%;
    --popover-foreground: 0 0% 98%;

    --card: 0 0% 3.9%;
    --card-foreground: 0 0% 98%;

    --border: 0 0% 20.9%;
    --input: 0 0% 20.9%;

    --primary: 268 66% 66%;
    --primary-foreground: 0 0% 93%;

    --secondary: 358 88% 58%;
    --secondary-foreground: 0 0% 93%;

    --tertiary: 0 0% 98%;
    --tertiary-foreground: 0 0% 9%;

    --accent: 0 0% 14.9%;
    --accent-foreground: 0 0% 98%;

    --destructive: 0 62.8% 50.6%;
    --destructive-foreground: 0 64% 98%;

    --ring: 0 0% 14.9%;

    --hero-primary: 268 66% 46%; /* A darker purple for dark mode */
    --hero-primary-foreground: 0 0% 98%; /* A very light foreground for dark mode */

    --hero-secondary: 358 88% 48%; /* A darker red for dark mode */
    --hero-secondary-foreground: 0 0% 98%; /* A very light foreground for dark mode */
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}

.disable-scrollbars {
  /* Chrome/Safari/Webkit */
  ::-webkit-scrollbar {
    background: transparent;
    width: 0px;
  }
  /* Firefox */
  scrollbar-width: none;
  /* IE 10+ */
  -ms-overflow-style: none;
}

.single-line-truncate-responsive {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  /*
   * The magic is in how the parent or element's width is defined.
   * If the parent uses flexible units (e.g., percentages, flex-grow)
   * or if you use vw/rem for the element's width, it will automatically adapt.
   */
  width: 95%; /* Example: 90% of its parent's width */
  margin: 0 auto; /* Center it */
}

@media (min-width: 640px) {
  .single-line-truncate-responsive {
    width: 85%; /* Example: 90% of its parent's width */
  }
}
```

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        lg: '1920px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        tertiary: {
          DEFAULT: 'hsl(var(--tertiary))',
          foreground: 'hsl(var(--tertiary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        'hero-primary': {
          DEFAULT: 'hsl(var(--hero-primary))',
          foreground: 'hsl(var(--hero-primary-foreground))',
        },
        'hero-secondary': {
          DEFAULT: 'hsl(var(--hero-secondary))',
          foreground: 'hsl(var(--hero-secondary-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      boxShadow: {
        around: '0px 0px 5px 1px var(--tw-shadow-color) !important',
        wide: '0px 0px 10px 5px var(--tw-shadow-color) !important',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
```
