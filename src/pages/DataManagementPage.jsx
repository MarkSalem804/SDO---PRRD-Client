const DataManagementPage = () => {
  const mockDataCategories = [
    {
      id: 1,
      name: "Disaster Records",
      count: 156,
      lastUpdated: "2024-02-20 09:30 AM",
      status: "Active",
    },
    {
      id: 2,
      name: "Relief Operations",
      count: 89,
      lastUpdated: "2024-02-20 10:15 AM",
      status: "Active",
    },
    {
      id: 3,
      name: "Resource Inventory",
      count: 234,
      lastUpdated: "2024-02-19 03:45 PM",
      status: "Needs Update",
    },
    {
      id: 4,
      name: "Personnel Records",
      count: 45,
      lastUpdated: "2024-02-18 02:20 PM",
      status: "Active",
    },
    {
      id: 5,
      name: "Equipment Logs",
      count: 178,
      lastUpdated: "2024-02-20 11:45 AM",
      status: "Active",
    },
  ];

  return (
    <div className="space-y-6 px-4 pt-4">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800 font-poppins">
          Data Management
        </h1>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-poppins">
            Import Data
          </button>
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-poppins">
            Export Data
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow p-4">
          <div className="text-sm text-gray-500 font-poppins">
            Total Records
          </div>
          <div className="text-2xl font-semibold text-gray-800 font-poppins">
            702
          </div>
          <div className="text-xs text-green-600 font-poppins">
            ↑ 12% from last month
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="text-sm text-gray-500 font-poppins">
            Active Categories
          </div>
          <div className="text-2xl font-semibold text-gray-800 font-poppins">
            4
          </div>
          <div className="text-xs text-gray-600 font-poppins">
            1 needs attention
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="text-sm text-gray-500 font-poppins">Last Backup</div>
          <div className="text-2xl font-semibold text-gray-800 font-poppins">
            2h ago
          </div>
          <div className="text-xs text-green-600 font-poppins">
            All systems operational
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="text-sm text-gray-500 font-poppins">Storage Used</div>
          <div className="text-2xl font-semibold text-gray-800 font-poppins">
            45%
          </div>
          <div className="text-xs text-gray-600 font-poppins">2.3GB of 5GB</div>
        </div>
      </div>

      {/* Data Categories */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800 font-poppins">
            Data Categories
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-poppins">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-poppins">
                  Records
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-poppins">
                  Last Updated
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-poppins">
                  Status
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider font-poppins">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {mockDataCategories.map((category) => (
                <tr key={category.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900 font-poppins">
                      {category.name}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 font-poppins">
                      {category.count}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500 font-poppins">
                      {category.lastUpdated}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        category.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      } font-poppins`}
                    >
                      {category.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-primary-600 hover:text-primary-900 mr-3 font-poppins">
                      View
                    </button>
                    <button className="text-primary-600 hover:text-primary-900 mr-3 font-poppins">
                      Edit
                    </button>
                    <button className="text-red-600 hover:text-red-900 font-poppins">
                      Archive
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Data Management Tools */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 font-poppins">
            Backup & Recovery
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 font-poppins">
                Last Backup
              </span>
              <span className="text-sm text-gray-900 font-poppins">
                2 hours ago
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 font-poppins">
                Next Scheduled
              </span>
              <span className="text-sm text-gray-900 font-poppins">
                In 22 hours
              </span>
            </div>
            <button className="w-full px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-poppins">
              Create Backup Now
            </button>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 font-poppins">
            Data Validation
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 font-poppins">
                Last Validation
              </span>
              <span className="text-sm text-gray-900 font-poppins">
                1 day ago
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 font-poppins">
                Issues Found
              </span>
              <span className="text-sm text-red-600 font-poppins">3</span>
            </div>
            <button className="w-full px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-poppins">
              Run Validation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataManagementPage;
