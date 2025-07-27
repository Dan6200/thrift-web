import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

interface DashboardFiltersProps {
  dateRange: {
    from: Date;
    to: Date;
  };
  onDateRangeChange: (range: { from: Date; to: Date }) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  selectedChannel: string;
  onChannelChange: (channel: string) => void;
}

const categories = [
  { value: "all", label: "All Categories" },
  { value: "electronics", label: "Electronics" },
  { value: "accessories", label: "Accessories" },
  { value: "software", label: "Software" },
  { value: "books", label: "Books" }
];

const channels = [
  { value: "all", label: "All Channels" },
  { value: "online", label: "Online Store" },
  { value: "mobile", label: "Mobile App" },
  { value: "social", label: "Social Media" }
];

export function DashboardFilters({
  dateRange,
  onDateRangeChange,
  selectedCategory,
  onCategoryChange,
  selectedChannel,
  onChannelChange
}: DashboardFiltersProps) {
  const quickRanges = [
    {
      label: "Today",
      action: () => {
        const today = new Date();
        onDateRangeChange({ from: today, to: today });
      }
    },
    {
      label: "Last 7 days",
      action: () => {
        const to = new Date();
        const from = new Date();
        from.setDate(from.getDate() - 7);
        onDateRangeChange({ from, to });
      }
    },
    {
      label: "Last 30 days",
      action: () => {
        const to = new Date();
        const from = new Date();
        from.setDate(from.getDate() - 30);
        onDateRangeChange({ from, to });
      }
    }
  ];

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
          <div className="flex flex-col lg:flex-row gap-2">
            <span className="text-sm font-medium text-muted-foreground lg:self-center">Filter by:</span>
            
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-[280px] justify-start text-left font-normal",
                    !dateRange && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {dateRange?.from ? (
                    dateRange.to ? (
                      <>
                        {format(dateRange.from, "LLL dd, y")} -{" "}
                        {format(dateRange.to, "LLL dd, y")}
                      </>
                    ) : (
                      format(dateRange.from, "LLL dd, y")
                    )
                  ) : (
                    <span>Pick a date range</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <div className="p-3 border-b">
                  <div className="flex gap-1">
                    {quickRanges.map((range) => (
                      <Button
                        key={range.label}
                        variant="ghost"
                        size="sm"
                        onClick={range.action}
                        className="h-7 text-xs"
                      >
                        {range.label}
                      </Button>
                    ))}
                  </div>
                </div>
                <Calendar
                  initialFocus
                  mode="range"
                  defaultMonth={dateRange?.from}
                  selected={dateRange}
                  onSelect={(range) => {
                    if (range?.from && range?.to) {
                      onDateRangeChange({ from: range.from, to: range.to });
                    }
                  }}
                  numberOfMonths={2}
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="flex gap-2">
            <Select value={selectedCategory} onValueChange={onCategoryChange}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedChannel} onValueChange={onChannelChange}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Channel" />
              </SelectTrigger>
              <SelectContent>
                {channels.map((channel) => (
                  <SelectItem key={channel.value} value={channel.value}>
                    {channel.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}