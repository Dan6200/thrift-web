'use client'
import { useState, useEffect } from 'react'
import { DashboardNav } from '@/components/navigation/DashboardNav'
import { DashboardFilters } from '@/components/dashboard/DashboardFilters'
import { KPICard } from '@/components/dashboard/KPICard'
import { RevenueChart } from '@/components/dashboard/RevenueChart'
import { SalesBreakdown } from '@/components/dashboard/SalesBreakdown'
import { OrdersTable } from '@/components/dashboard/OrdersTable'
import { CustomerInsights } from '@/components/dashboard/CustomerInsights'
import { ProductPerformance } from '@/components/dashboard/ProductPerformance'
import {
  mockApiService,
  KPIData,
  RevenueData,
  SalesData,
  Order,
  CustomerData,
  Product,
} from '@/app/vendor-analytics/services/mockApi'
import {
  DollarSign,
  ShoppingCart,
  Users,
  TrendingUp,
  UserPlus,
  Repeat,
} from 'lucide-react'

const STORE_ID = 'store-123' // Mock store ID

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState('overview')
  const [dateRange, setDateRange] = useState({
    from: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), // 30 days ago
    to: new Date(),
  })
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedChannel, setSelectedChannel] = useState('all')

  // Data states
  const [kpiData, setKpiData] = useState<KPIData | null>(null)
  const [revenueData, setRevenueData] = useState<RevenueData[]>([])
  const [salesData, setSalesData] = useState<SalesData | null>(null)
  const [orders, setOrders] = useState<Order[]>([])
  const [customerData, setCustomerData] = useState<CustomerData | null>(null)
  const [products, setProducts] = useState<Product[]>([])

  // Loading states
  const [isLoadingKPIs, setIsLoadingKPIs] = useState(true)
  const [isLoadingRevenue, setIsLoadingRevenue] = useState(true)
  const [isLoadingSales, setIsLoadingSales] = useState(true)
  const [isLoadingOrders, setIsLoadingOrders] = useState(true)
  const [isLoadingCustomers, setIsLoadingCustomers] = useState(true)
  const [isLoadingProducts, setIsLoadingProducts] = useState(true)

  // Load data
  useEffect(() => {
    const loadData = async () => {
      const startDate = dateRange.from.toISOString().split('T')[0]
      const endDate = dateRange.to.toISOString().split('T')[0]

      try {
        // Load KPIs
        setIsLoadingKPIs(true)
        const kpis = await mockApiService.getKPIs(STORE_ID, startDate, endDate)
        setKpiData(kpis)
        setIsLoadingKPIs(false)

        // Load revenue data
        setIsLoadingRevenue(true)
        const revenue = await mockApiService.getRevenueData(
          STORE_ID,
          startDate,
          endDate,
        )
        setRevenueData(revenue)
        setIsLoadingRevenue(false)

        // Load sales data
        setIsLoadingSales(true)
        const sales = await mockApiService.getSalesData(STORE_ID)
        setSalesData(sales)
        setIsLoadingSales(false)

        // Load orders
        setIsLoadingOrders(true)
        const ordersData = await mockApiService.getRecentOrders(STORE_ID)
        setOrders(ordersData)
        setIsLoadingOrders(false)

        // Load customer data
        setIsLoadingCustomers(true)
        const customers = await mockApiService.getCustomerData(STORE_ID)
        setCustomerData(customers)
        setIsLoadingCustomers(false)

        // Load products
        setIsLoadingProducts(true)
        const productsData =
          await mockApiService.getProductPerformance(STORE_ID)
        setProducts(productsData)
        setIsLoadingProducts(false)
      } catch (error) {
        console.error('Error loading dashboard data:', error)
      }
    }

    loadData()
  }, [dateRange])

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(value)
  }

  const renderOverview = () => (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        <KPICard
          title="Total Revenue"
          value={kpiData ? formatCurrency(kpiData.totalRevenue) : 'Loading...'}
          description="Total revenue for selected period"
          trend={{ value: 12.5, isPositive: true }}
          icon={<DollarSign className="h-4 w-4" />}
        />
        <KPICard
          title="Total Orders"
          value={kpiData?.totalOrders || 'Loading...'}
          description="Number of orders placed"
          trend={{ value: 8.2, isPositive: true }}
          icon={<ShoppingCart className="h-4 w-4" />}
        />
        <KPICard
          title="Average Order Value"
          value={
            kpiData ? formatCurrency(kpiData.averageOrderValue) : 'Loading...'
          }
          description="Average value per order"
          trend={{ value: 3.1, isPositive: true }}
          icon={<TrendingUp className="h-4 w-4" />}
        />
        <KPICard
          title="Conversion Rate"
          value={kpiData ? `${kpiData.conversionRate}%` : 'Loading...'}
          description="Visitor to customer conversion"
          trend={{ value: 1.4, isPositive: true }}
          icon={<Users className="h-4 w-4" />}
        />
        <KPICard
          title="New Customers"
          value={kpiData?.newCustomers || 'Loading...'}
          description="First-time customers"
          trend={{ value: 15.7, isPositive: true }}
          icon={<UserPlus className="h-4 w-4" />}
        />
        <KPICard
          title="Returning Customers"
          value={kpiData?.returningCustomers || 'Loading...'}
          description="Repeat customers"
          trend={{ value: 6.3, isPositive: true }}
          icon={<Repeat className="h-4 w-4" />}
        />
      </div>

      {/* Revenue Chart */}
      <RevenueChart data={revenueData} isLoading={isLoadingRevenue} />

      {/* Sales Breakdown */}
      {salesData && (
        <SalesBreakdown data={salesData} isLoading={isLoadingSales} />
      )}
    </div>
  )

  const renderSales = () => (
    <div className="space-y-6">
      {salesData && (
        <SalesBreakdown data={salesData} isLoading={isLoadingSales} />
      )}
      <RevenueChart data={revenueData} isLoading={isLoadingRevenue} />
    </div>
  )

  const renderOrders = () => (
    <div className="space-y-6">
      <OrdersTable orders={orders} isLoading={isLoadingOrders} />
    </div>
  )

  const renderCustomers = () => (
    <div className="space-y-6">
      {customerData && (
        <CustomerInsights data={customerData} isLoading={isLoadingCustomers} />
      )}
    </div>
  )

  const renderProducts = () => (
    <div className="space-y-6">
      <ProductPerformance products={products} isLoading={isLoadingProducts} />
    </div>
  )

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return renderOverview()
      case 'sales':
        return renderSales()
      case 'orders':
        return renderOrders()
      case 'customers':
        return renderCustomers()
      case 'products':
        return renderProducts()
      default:
        return renderOverview()
    }
  }

  return (
    <div className="flex h-screen bg-background">
      <DashboardNav
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />

      <div className="flex-1 flex flex-col overflow-hidden lg:ml-0">
        <main className="flex-1 overflow-y-auto p-4 lg:p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            <DashboardFilters
              dateRange={dateRange}
              onDateRangeChange={setDateRange}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              selectedChannel={selectedChannel}
              onChannelChange={setSelectedChannel}
            />

            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  )
}

