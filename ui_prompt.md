E-commerce Dashboard Prompt for Multitenant Platform

Create a comprehensive ecommerce dashboard for a multitenant platform. The dashboard should provide a high-level overview and detailed analytics for an individual tenant (a single store), leveraging the provided database schema. The design should be clean, intuitive, and prioritize key performance indicators (KPIs) to enable store owners to make data-driven decisions.
Key Dashboard Components:

1.  High-Level Overview:

    A summary section at the top displaying the most critical KPIs for the selected timeframe (e.g., today, this week, last 30 days). Data for these KPIs will primarily come from the orders and profiles tables.

    KPIs to include:

        Total Revenue: Sum of total_amount from the orders table.

        Total Orders: Count of records in the orders table.

        Average Order Value (AOV): Calculated as Total Revenue / Total Orders, using orders.total_amount.

        Conversion Rate: (Total Orders / Total Website Sessions) - Note: Website sessions data is assumed to be external to the provided schema.

        New vs. Returning Customers: Derived from profiles.created_at and orders.customer_id (checking if a customer_id has multiple orders or a recent created_at date).

    A time-series chart showing revenue trends over the selected period, using orders.order_date and orders.total_amount.

2.  Detailed Analytics Sections:

    Sales Performance:

        A breakdown of sales by product, category, and sales channel. This will involve joining order_items (for quantity and price_at_purchase) with products (for title, category_id, subcategory_id) and stores (for store_id).

        A table listing recent orders with details like order number (orders.order_id), customer name (from profiles via orders.customer_id), total amount (orders.total_amount), and status (orders.status).

    Customer Insights:

        A graph showing customer acquisition trends over time, using profiles.created_at.

        A breakdown of customers by location (e.g., a world map or a list of top countries/cities) - This would require location data within the profiles table or linked via address_id.

        Customer Lifetime Value (CLV): Aggregated total_amount from orders for each customer_id in the profiles table.

    Product Performance:

        A table showing top-selling products by units and revenue, derived from order_items.product_id, order_items.quantity, order_items.price_at_purchase, and products.title.

        A list of products with the lowest stock levels, directly from products.quantity_available.

        Data on product views vs. purchases to identify popular but low-converting items. Purchases are from order_items; views are assumed to be external data.

    Marketing & Traffic:

        A breakdown of traffic sources (e.g., direct, search, social, referral) - This data is assumed to be external to the provided schema.

        Data on how different marketing campaigns are performing - This data is assumed to be external to the provided schema.

        A graph showing website sessions vs. unique visitors - This data is assumed to be external to the provided schema.

3.  Filters & Customization:

    A global date range selector to filter all dashboard data, primarily using created_at and updated_at timestamps from various tables (e.g., orders.order_date).

    Dropdown menus to filter data by specific product categories (using products.category_id and subcategory_id), sales channels (potentially derived from stores.custom_domain or external data), or customer segments (from profiles).

Design and UX Considerations:

    Use a clean, modern design with a focus on data visualization (charts, graphs, progress bars).

    Use a consistent color palette to represent different data points.

    Ensure the dashboard is responsive and works well on both desktop and mobile devices.

    Provide a clear navigation menu to switch between different sections or tenants (if designing for the platform administrator view).

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
