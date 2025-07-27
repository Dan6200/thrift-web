// Mock API service for e-commerce dashboard data
export interface KPIData {
  totalRevenue: number;
  totalOrders: number;
  averageOrderValue: number;
  conversionRate: number;
  newCustomers: number;
  returningCustomers: number;
}

export interface RevenueData {
  date: string;
  revenue: number;
}

export interface SalesData {
  productSales: Array<{
    name: string;
    sales: number;
    category: string;
  }>;
  categorySales: Array<{
    name: string;
    sales: number;
  }>;
  channelSales: Array<{
    name: string;
    sales: number;
  }>;
}

export interface Order {
  id: string;
  customerName: string;
  total: number;
  status: 'pending' | 'completed' | 'cancelled';
  date: string;
}

export interface CustomerData {
  acquisitionTrend: Array<{
    date: string;
    newCustomers: number;
  }>;
  locationBreakdown: Array<{
    country: string;
    customers: number;
  }>;
  averageLifetimeValue: number;
}

export interface Product {
  id: string;
  name: string;
  unitsSold: number;
  revenue: number;
  stockLevel: number;
  views: number;
  conversions: number;
}

// Mock data generators
const generateRevenueData = (days: number): RevenueData[] => {
  const data: RevenueData[] = [];
  const baseRevenue = 15000;
  
  for (let i = days - 1; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    const variance = Math.random() * 0.4 - 0.2; // ±20% variance
    const revenue = Math.round(baseRevenue * (1 + variance));
    
    data.push({
      date: date.toISOString().split('T')[0],
      revenue
    });
  }
  
  return data;
};

const mockProducts: Product[] = [
  { id: '1', name: 'Premium Headphones', unitsSold: 156, revenue: 31200, stockLevel: 45, views: 2840, conversions: 156 },
  { id: '2', name: 'Wireless Mouse', unitsSold: 298, revenue: 14900, stockLevel: 122, views: 4500, conversions: 298 },
  { id: '3', name: 'Gaming Keyboard', unitsSold: 89, revenue: 17800, stockLevel: 23, views: 1890, conversions: 89 },
  { id: '4', name: 'USB-C Cable', unitsSold: 445, revenue: 8900, stockLevel: 8, views: 3200, conversions: 445 },
  { id: '5', name: 'Laptop Stand', unitsSold: 67, revenue: 10050, stockLevel: 156, views: 980, conversions: 67 }
];

const mockOrders: Order[] = [
  { id: 'ORD-001', customerName: 'John Smith', total: 299.99, status: 'completed', date: '2024-01-25' },
  { id: 'ORD-002', customerName: 'Sarah Johnson', total: 149.50, status: 'pending', date: '2024-01-25' },
  { id: 'ORD-003', customerName: 'Mike Wilson', total: 89.99, status: 'completed', date: '2024-01-24' },
  { id: 'ORD-004', customerName: 'Emily Davis', total: 199.99, status: 'completed', date: '2024-01-24' },
  { id: 'ORD-005', customerName: 'Alex Brown', total: 449.99, status: 'cancelled', date: '2024-01-23' }
];

// Mock API functions
export const mockApiService = {
  getKPIs: async (storeId: string, startDate: string, endDate: string): Promise<KPIData> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    return {
      totalRevenue: 847500,
      totalOrders: 1284,
      averageOrderValue: 159.99,
      conversionRate: 3.2,
      newCustomers: 284,
      returningCustomers: 1000
    };
  },

  getRevenueData: async (storeId: string, startDate: string, endDate: string): Promise<RevenueData[]> => {
    await new Promise(resolve => setTimeout(resolve, 200));
    
    const days = Math.floor((new Date(endDate).getTime() - new Date(startDate).getTime()) / (1000 * 60 * 60 * 24)) + 1;
    return generateRevenueData(Math.min(days, 30));
  },

  getSalesData: async (storeId: string): Promise<SalesData> => {
    await new Promise(resolve => setTimeout(resolve, 250));
    
    return {
      productSales: [
        { name: 'Premium Headphones', sales: 31200, category: 'Electronics' },
        { name: 'Wireless Mouse', sales: 14900, category: 'Electronics' },
        { name: 'Gaming Keyboard', sales: 17800, category: 'Electronics' },
        { name: 'USB-C Cable', sales: 8900, category: 'Accessories' },
        { name: 'Laptop Stand', sales: 10050, category: 'Accessories' }
      ],
      categorySales: [
        { name: 'Electronics', sales: 63900 },
        { name: 'Accessories', sales: 18950 },
        { name: 'Software', sales: 12400 },
        { name: 'Books', sales: 8650 }
      ],
      channelSales: [
        { name: 'Online Store', sales: 68500 },
        { name: 'Mobile App', sales: 28400 },
        { name: 'Social Media', sales: 7000 }
      ]
    };
  },

  getRecentOrders: async (storeId: string): Promise<Order[]> => {
    await new Promise(resolve => setTimeout(resolve, 150));
    return mockOrders;
  },

  getCustomerData: async (storeId: string): Promise<CustomerData> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    
    return {
      acquisitionTrend: Array.from({ length: 7 }, (_, i) => ({
        date: new Date(Date.now() - i * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        newCustomers: Math.floor(Math.random() * 50) + 20
      })).reverse(),
      locationBreakdown: [
        { country: 'United States', customers: 456 },
        { country: 'Canada', customers: 234 },
        { country: 'United Kingdom', customers: 189 },
        { country: 'Germany', customers: 156 },
        { country: 'France', customers: 123 }
      ],
      averageLifetimeValue: 324.50
    };
  },

  getProductPerformance: async (storeId: string): Promise<Product[]> => {
    await new Promise(resolve => setTimeout(resolve, 200));
    return mockProducts;
  }
};