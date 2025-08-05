import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Product } from "@/app/vendor-analytics/services/mockApi";

interface ProductPerformanceProps {
  products: Product[];
  isLoading?: boolean;
}

export function ProductPerformance({ products, isLoading }: ProductPerformanceProps) {
  if (isLoading) {
    return (
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Top Performing Products</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center">
              <div className="text-muted-foreground">Loading...</div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(value);
  };

  const getStockStatus = (stockLevel: number) => {
    if (stockLevel < 20) return { variant: 'destructive' as const, label: 'Low Stock' };
    if (stockLevel < 50) return { variant: 'secondary' as const, label: 'Medium Stock' };
    return { variant: 'default' as const, label: 'In Stock' };
  };

  const getConversionRate = (conversions: number, views: number) => {
    return ((conversions / views) * 100).toFixed(1);
  };

  const topSellingProducts = [...products].sort((a, b) => b.revenue - a.revenue);
  const lowStockProducts = [...products].filter(p => p.stockLevel < 50).sort((a, b) => a.stockLevel - b.stockLevel);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Top Selling Products</CardTitle>
          <CardDescription>Products ranked by revenue and units sold</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Units Sold</TableHead>
                <TableHead>Revenue</TableHead>
                <TableHead>Conversion Rate</TableHead>
                <TableHead>Stock Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {topSellingProducts.map((product) => {
                const stockStatus = getStockStatus(product.stockLevel);
                return (
                  <TableRow key={product.id}>
                    <TableCell className="font-medium">{product.name}</TableCell>
                    <TableCell>{product.unitsSold}</TableCell>
                    <TableCell>{formatCurrency(product.revenue)}</TableCell>
                    <TableCell>{getConversionRate(product.conversions, product.views)}%</TableCell>
                    <TableCell>
                      <Badge variant={stockStatus.variant}>
                        {stockStatus.label}
                      </Badge>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Inventory Alerts</CardTitle>
          <CardDescription>Products with low stock levels</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {lowStockProducts.map((product) => (
              <div key={product.id} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex-1">
                  <h4 className="font-medium">{product.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {product.stockLevel} units remaining
                  </p>
                </div>
                <div className="w-24">
                  <Progress 
                    value={(product.stockLevel / 100) * 100} 
                    className="h-2"
                  />
                </div>
                <Badge 
                  variant={product.stockLevel < 20 ? 'destructive' : 'secondary'}
                  className="ml-3"
                >
                  {product.stockLevel < 20 ? 'Critical' : 'Low'}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}