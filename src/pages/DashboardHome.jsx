import { useStateContext } from "../contexts/ContextProvider";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const DashboardHome = () => {
  const { auth } = useStateContext();

  const mockStats = [
    { label: "Total Users", value: "1,234", change: "+12%", trend: "up" },
    { label: "Active Sessions", value: "456", change: "+5%", trend: "up" },
    { label: "Pending Tasks", value: "23", change: "-8%", trend: "down" },
    { label: "System Alerts", value: "5", change: "0%", trend: "neutral" },
  ];

  const recentActivities = [
    {
      id: 1,
      user: "John Doe",
      action: "Updated user profile",
      time: "2 minutes ago",
    },
    {
      id: 2,
      user: "Jane Smith",
      action: "Added new data entry",
      time: "15 minutes ago",
    },
    {
      id: 3,
      user: "Mike Johnson",
      action: "Completed task #123",
      time: "1 hour ago",
    },
    {
      id: 4,
      user: "Sarah Wilson",
      action: "Generated report",
      time: "2 hours ago",
    },
  ];

  // Mock data for area chart (Activity over time)
  const activityData = [
    { name: "Jan", value: 400 },
    { name: "Feb", value: 300 },
    { name: "Mar", value: 600 },
    { name: "Apr", value: 800 },
    { name: "May", value: 500 },
    { name: "Jun", value: 700 },
  ];

  // Mock data for bar chart (Resource distribution)
  const resourceData = [
    { name: "Food", value: 400 },
    { name: "Water", value: 300 },
    { name: "Medicine", value: 200 },
    { name: "Clothing", value: 500 },
    { name: "Shelter", value: 350 },
  ];

  // Mock data for pie chart (Response types)
  const responseData = [
    { name: "Immediate", value: 400 },
    { name: "Scheduled", value: 300 },
    { name: "Planned", value: 300 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-semibold text-gray-800 mb-2 font-poppins">
          Welcome back, {auth?.email?.split("@")[0] || "Admin"}!
        </h1>
        <p className="text-gray-600 font-poppins">
          Here&apos;s what&apos;s happening with your system today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {mockStats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-gray-500 text-sm font-poppins">
                {stat.label}
              </h3>
              <span
                className={`text-sm ${
                  stat.trend === "up"
                    ? "text-green-500"
                    : stat.trend === "down"
                    ? "text-red-500"
                    : "text-gray-500"
                }`}
              >
                {stat.change}
              </span>
            </div>
            <p className="text-2xl font-semibold text-gray-800 mt-2 font-poppins">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Activity Over Time Chart */}
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 font-poppins">
            Activity Over Time
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={activityData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#2563eb"
                  fill="#93c5fd"
                  fillOpacity={0.3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Resource Distribution Chart */}
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 font-poppins">
            Resource Distribution
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={resourceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#2563eb" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Response Types Chart */}
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 font-poppins">
            Response Types
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={responseData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {responseData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 font-poppins">
            Recent Activity
          </h3>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-primary-600" />
                <div>
                  <p className="text-sm font-medium text-gray-900 font-poppins">
                    {activity.user}
                  </p>
                  <p className="text-sm text-gray-500 font-poppins">
                    {activity.action}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
