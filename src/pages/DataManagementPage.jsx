import { useState, useEffect } from "react";
import {
  getSections,
  getContexts,
  getContents,
  addSection,
  addDataContext,
  addContent,
  deleteSection,
  deleteContext,
  deleteContent,
} from "../services/onelink-endpoints";

function DataManagementPage() {
  const [activeTab, setActiveTab] = useState("sections");
  const [sections, setSections] = useState([]);
  const [contexts, setContexts] = useState([]);
  const [contents, setContents] = useState([]);
  const [sectionTitle, setSectionTitle] = useState("");
  const [description, setDescription] = useState("");
  const [contextTitle, setContextTitle] = useState("");
  const [contextDescription, setContextDescription] = useState("");
  const [sectionId, setSectionId] = useState("");
  const [contentTitle, setContentTitle] = useState("");
  const [contentDescription, setContentDescription] = useState("");
  const [contentSectionId, setContentSectionId] = useState("");

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Pagination functions
  const getCurrentItems = (items) => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return items.slice(indexOfFirstItem, indexOfLastItem);
  };

  const totalPages = (items) => Math.ceil(items.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      console.log("Fetching data...");
      const [sectionsData, contextsData, contentsData] = await Promise.all([
        getSections(),
        getContexts(),
        getContents(),
      ]);
      console.log("Sections data:", sectionsData);
      console.log("Contexts data:", contextsData);
      console.log("Contents data:", contentsData);
      setSections(sectionsData);
      setContexts(contextsData);
      setContents(contentsData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      switch (activeTab) {
        case "sections":
          await addSection({
            sectionTitle,
            description,
          });
          setSectionTitle("");
          setDescription("");
          break;
        case "contexts":
          await addDataContext({
            contextTitle,
            description: contextDescription,
            sectionId,
          });
          setContextTitle("");
          setContextDescription("");
          setSectionId("");
          break;
        case "contents":
          await addContent({
            contentTitle,
            description: contentDescription,
            sectionId: contentSectionId,
          });
          setContentTitle("");
          setContentDescription("");
          setContentSectionId("");
          break;
      }
      fetchData();
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  // Reset pagination when tab changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab]);

  // Delete handlers
  const handleDeleteSection = async (id) => {
    try {
      await deleteSection(id);
      fetchData();
    } catch (error) {
      console.error("Error deleting section:", error);
    }
  };

  const handleDeleteContext = async (id) => {
    try {
      await deleteContext(id);
      fetchData();
    } catch (error) {
      console.error("Error deleting context:", error);
    }
  };

  const handleDeleteContent = async (id) => {
    try {
      await deleteContent(id);
      fetchData();
    } catch (error) {
      console.error("Error deleting content:", error);
    }
  };

  return (
    <div className="space-y-6 px-4 pt-4">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800 font-poppins">
          Data Management
        </h1>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            <button
              onClick={() => setActiveTab("sections")}
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === "sections"
                  ? "border-b-2 border-primary-600 text-primary-600"
                  : "text-gray-500 hover:text-gray-700"
              } font-poppins`}
            >
              Sections
            </button>
            <button
              onClick={() => setActiveTab("contexts")}
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === "contexts"
                  ? "border-b-2 border-primary-600 text-primary-600"
                  : "text-gray-500 hover:text-gray-700"
              } font-poppins`}
            >
              Contexts
            </button>
            <button
              onClick={() => setActiveTab("contents")}
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === "contents"
                  ? "border-b-2 border-primary-600 text-primary-600"
                  : "text-gray-500 hover:text-gray-700"
              } font-poppins`}
            >
              Contents
            </button>
          </nav>
        </div>

        {/* Content */}
        <div className="p-6">
          {activeTab === "sections" && (
            <>
              <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mb-8"
              >
                <h2 className="text-xl font-semibold text-gray-800 mb-6 pb-2 border-b border-gray-200 font-poppins">
                  Add New Section
                </h2>
                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="sectionTitle"
                      className="block text-sm font-medium text-gray-700 mb-2 font-poppins"
                    >
                      Section Title
                    </label>
                    <input
                      type="text"
                      id="sectionTitle"
                      value={sectionTitle}
                      onChange={(e) => setSectionTitle(e.target.value)}
                      className="block w-full rounded-md border-2 border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-primary-500 focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 font-poppins text-base"
                      placeholder="Enter section title"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="description"
                      className="block text-sm font-medium text-gray-700 mb-2 font-poppins"
                    >
                      Description
                    </label>
                    <textarea
                      id="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      rows="4"
                      className="block w-full rounded-md border-2 border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-primary-500 focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 font-poppins text-base resize-none"
                      placeholder="Enter description"
                      required
                    />
                  </div>
                </div>
                <div className="flex gap-4 mt-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-primary-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors duration-200"
                  >
                    Add Section
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setSectionTitle("");
                      setDescription("");
                    }}
                    className="inline-flex justify-center rounded-md border-2 border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors duration-200"
                  >
                    Cancel
                  </button>
                </div>
              </form>
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h2 className="text-xl font-semibold text-gray-900 font-poppins border-b border-gray-200 pb-2 mb-6 px-6 pt-6">
                  Sections List
                </h2>
                <div className="relative">
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 table-fixed">
                      <thead className="bg-primary-600 sticky top-0 z-10">
                        <tr>
                          <th
                            scope="col"
                            className="w-[25%] px-6 py-4 text-left text-sm font-semibold text-white font-poppins"
                          >
                            Title
                          </th>
                          <th
                            scope="col"
                            className="w-[25%] px-6 py-4 text-left text-sm font-semibold text-white font-poppins"
                          >
                            Description
                          </th>
                          <th
                            scope="col"
                            className="w-[25%] px-6 py-4 text-left text-sm font-semibold text-white font-poppins"
                          >
                            Actions
                          </th>
                        </tr>
                      </thead>
                    </table>
                    <div className="max-h-[400px] overflow-y-auto">
                      <table className="min-w-full divide-y divide-gray-200 table-fixed">
                        <tbody className="bg-white divide-y divide-gray-200">
                          {sections && sections.length > 0 ? (
                            <>
                              {getCurrentItems(sections).map((section) => (
                                <tr
                                  key={section.id}
                                  className="hover:bg-gray-50"
                                >
                                  <td className="w-[5%] px-6 py-4">
                                    <div
                                      className="text-sm text-gray-900 font-poppins truncate min-w-0"
                                      title={section.sectionTitle}
                                    >
                                      {section.sectionTitle}
                                    </div>
                                  </td>
                                  <td className="w-[25%] px-6 py-4">
                                    <div
                                      className="text-sm text-gray-900 font-poppins truncate min-w-0"
                                      title={section.description}
                                    >
                                      {section.description}
                                    </div>
                                  </td>
                                  <td className="w-[25%] px-6 py-4 text-right text-sm font-medium whitespace-nowrap">
                                    <button
                                      onClick={() =>
                                        handleDeleteSection(section.id)
                                      }
                                      className="text-red-600 hover:text-red-900 font-poppins"
                                    >
                                      Delete
                                    </button>
                                  </td>
                                </tr>
                              ))}
                              {getCurrentItems(sections).length < 10 &&
                                Array.from({
                                  length: 10 - getCurrentItems(sections).length,
                                }).map((_, index) => (
                                  <tr
                                    key={`empty-${index}`}
                                    className="hover:bg-gray-50"
                                  >
                                    <td
                                      colSpan="3"
                                      className="px-6 py-4 text-center text-sm text-gray-500 font-poppins"
                                    ></td>
                                  </tr>
                                ))}
                            </>
                          ) : (
                            Array.from({ length: 10 }).map((_, index) => (
                              <tr
                                key={`empty-${index}`}
                                className="hover:bg-gray-50"
                              >
                                <td
                                  colSpan="3"
                                  className="px-6 py-4 text-center text-sm text-gray-500 font-poppins"
                                >
                                  {index === 0 ? "No sections found" : ""}
                                </td>
                              </tr>
                            ))
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                {sections && sections.length > 0 && (
                  <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 mt-4">
                    <div className="flex flex-1 justify-between sm:hidden">
                      <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="relative inline-flex items-center rounded-md border-2 border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                      >
                        Previous
                      </button>
                      <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages(sections)}
                        className="relative ml-3 inline-flex items-center rounded-md border-2 border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                      >
                        Next
                      </button>
                    </div>
                    <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                      <div>
                        <p className="text-sm text-gray-700 font-poppins">
                          Showing{" "}
                          <span className="font-medium">
                            {(currentPage - 1) * itemsPerPage + 1}
                          </span>{" "}
                          to{" "}
                          <span className="font-medium">
                            {Math.min(
                              currentPage * itemsPerPage,
                              sections.length
                            )}
                          </span>{" "}
                          of{" "}
                          <span className="font-medium">{sections.length}</span>{" "}
                          results
                        </p>
                      </div>
                      <div>
                        <nav
                          className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                          aria-label="Pagination"
                        >
                          <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            <span className="sr-only">Previous</span>
                            <svg
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                          {[...Array(totalPages(sections))].map((_, index) => (
                            <button
                              key={index + 1}
                              onClick={() => handlePageChange(index + 1)}
                              className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
                                currentPage === index + 1
                                  ? "z-10 bg-primary-600 text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                                  : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                              }`}
                            >
                              {index + 1}
                            </button>
                          ))}
                          <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages(sections)}
                            className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            <span className="sr-only">Next</span>
                            <svg
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                        </nav>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </>
          )}

          {activeTab === "contexts" && (
            <>
              <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mb-8"
              >
                <h2 className="text-xl font-semibold text-gray-800 mb-6 pb-2 border-b border-gray-200 font-poppins">
                  Add New Context
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label
                      htmlFor="contextTitle"
                      className="block text-sm font-medium text-gray-700 mb-2 font-poppins"
                    >
                      Context Title
                    </label>
                    <input
                      type="text"
                      id="contextTitle"
                      value={contextTitle}
                      onChange={(e) => setContextTitle(e.target.value)}
                      className="block w-full rounded-md border-2 border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-primary-500 focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 font-poppins text-base"
                      placeholder="Enter context title"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contextDescription"
                      className="block text-sm font-medium text-gray-700 mb-2 font-poppins"
                    >
                      Description
                    </label>
                    <textarea
                      id="contextDescription"
                      value={contextDescription}
                      onChange={(e) => setContextDescription(e.target.value)}
                      rows="4"
                      className="block w-full rounded-md border-2 border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-primary-500 focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 font-poppins text-base resize-none"
                      placeholder="Enter description"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="sectionId"
                      className="block text-sm font-medium text-gray-700 mb-2 font-poppins"
                    >
                      Section
                    </label>
                    <select
                      id="sectionId"
                      value={sectionId}
                      onChange={(e) => setSectionId(e.target.value)}
                      className="block w-full rounded-md border-2 border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-primary-500 focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 font-poppins text-base"
                      required
                    >
                      <option value="">Select a section</option>
                      {sections &&
                        sections.map((section) => (
                          <option key={section.id} value={section.id}>
                            {section.sectionTitle}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>
                <div className="flex gap-4 mt-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-primary-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors duration-200"
                  >
                    Add Context
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setContextTitle("");
                      setContextDescription("");
                      setSectionId("");
                    }}
                    className="inline-flex justify-center rounded-md border-2 border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors duration-200"
                  >
                    Cancel
                  </button>
                </div>
              </form>
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h2 className="text-xl font-semibold text-gray-900 font-poppins border-b border-gray-200 pb-2 mb-6 px-6 pt-6">
                  Contexts List
                </h2>
                <div className="relative">
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 table-fixed">
                      <thead className="bg-primary-600 sticky top-0 z-10">
                        <tr>
                          <th
                            scope="col"
                            className="w-[25%] px-6 py-4 text-left text-sm font-semibold text-white font-poppins"
                          >
                            Title
                          </th>
                          <th
                            scope="col"
                            className="w-[33%] px-6 py-4 text-left text-sm font-semibold text-white font-poppins"
                          >
                            Description
                          </th>
                          <th
                            scope="col"
                            className="w-[25%] px-6 py-4 text-left text-sm font-semibold text-white font-poppins"
                          >
                            Section
                          </th>
                          <th
                            scope="col"
                            className="w-[17%] px-6 py-4 text-left text-sm font-semibold text-white font-poppins"
                          >
                            Actions
                          </th>
                        </tr>
                      </thead>
                    </table>
                    <div className="max-h-[400px] overflow-y-auto">
                      <table className="min-w-full divide-y divide-gray-200 table-fixed">
                        <tbody className="bg-white divide-y divide-gray-200">
                          {contexts && contexts.length > 0 ? (
                            <>
                              {getCurrentItems(contexts).map((context) => (
                                <tr
                                  key={context.id}
                                  className="hover:bg-gray-50"
                                >
                                  <td className="w-[25%] px-6 py-4">
                                    <div
                                      className="text-sm text-gray-900 font-poppins truncate min-w-0"
                                      title={context.contextTitle}
                                    >
                                      {context.contextTitle}
                                    </div>
                                  </td>
                                  <td className="w-[33%] px-6 py-4">
                                    <div
                                      className="text-sm text-gray-900 font-poppins truncate min-w-0"
                                      title={context.description}
                                    >
                                      {context.description}
                                    </div>
                                  </td>
                                  <td className="w-[25%] px-6 py-4">
                                    <div
                                      className="text-sm text-gray-900 font-poppins truncate min-w-0"
                                      title={
                                        sections.find(
                                          (s) => s.id === context.sectionId
                                        )?.sectionTitle || "N/A"
                                      }
                                    >
                                      {sections.find(
                                        (s) => s.id === context.sectionId
                                      )?.sectionTitle || "N/A"}
                                    </div>
                                  </td>
                                  <td className="w-[17%] px-6 py-4 text-right text-sm font-medium whitespace-nowrap">
                                    <button
                                      onClick={() =>
                                        handleDeleteContext(context.id)
                                      }
                                      className="text-red-600 hover:text-red-900 font-poppins"
                                    >
                                      Delete
                                    </button>
                                  </td>
                                </tr>
                              ))}
                              {getCurrentItems(contexts).length < 10 &&
                                Array.from({
                                  length: 10 - getCurrentItems(contexts).length,
                                }).map((_, index) => (
                                  <tr
                                    key={`empty-${index}`}
                                    className="hover:bg-gray-50"
                                  >
                                    <td
                                      colSpan="4"
                                      className="px-6 py-4 text-center text-sm text-gray-500 font-poppins"
                                    ></td>
                                  </tr>
                                ))}
                            </>
                          ) : (
                            Array.from({ length: 10 }).map((_, index) => (
                              <tr
                                key={`empty-${index}`}
                                className="hover:bg-gray-50"
                              >
                                <td
                                  colSpan="4"
                                  className="px-6 py-4 text-center text-sm text-gray-500 font-poppins"
                                >
                                  {index === 0 ? "No contexts found" : ""}
                                </td>
                              </tr>
                            ))
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                {contexts && contexts.length > 0 && (
                  <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 mt-4">
                    <div className="flex flex-1 justify-between sm:hidden">
                      <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="relative inline-flex items-center rounded-md border-2 border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                      >
                        Previous
                      </button>
                      <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages(contexts)}
                        className="relative ml-3 inline-flex items-center rounded-md border-2 border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                      >
                        Next
                      </button>
                    </div>
                    <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                      <div>
                        <p className="text-sm text-gray-700 font-poppins">
                          Showing{" "}
                          <span className="font-medium">
                            {(currentPage - 1) * itemsPerPage + 1}
                          </span>{" "}
                          to{" "}
                          <span className="font-medium">
                            {Math.min(
                              currentPage * itemsPerPage,
                              contexts.length
                            )}
                          </span>{" "}
                          of{" "}
                          <span className="font-medium">{contexts.length}</span>{" "}
                          results
                        </p>
                      </div>
                      <div>
                        <nav
                          className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                          aria-label="Pagination"
                        >
                          <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            <span className="sr-only">Previous</span>
                            <svg
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                          {[...Array(totalPages(contexts))].map((_, index) => (
                            <button
                              key={index + 1}
                              onClick={() => handlePageChange(index + 1)}
                              className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
                                currentPage === index + 1
                                  ? "z-10 bg-primary-600 text-white shadow-sm focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                                  : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                              }`}
                            >
                              {index + 1}
                            </button>
                          ))}
                          <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages(contexts)}
                            className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            <span className="sr-only">Next</span>
                            <svg
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                        </nav>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </>
          )}

          {activeTab === "contents" && (
            <>
              <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mb-8"
              >
                <h2 className="text-xl font-semibold text-gray-800 mb-6 pb-2 border-b border-gray-200 font-poppins">
                  Add New Content
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label
                      htmlFor="contentTitle"
                      className="block text-sm font-medium text-gray-700 mb-2 font-poppins"
                    >
                      Content Title
                    </label>
                    <input
                      type="text"
                      id="contentTitle"
                      value={contentTitle}
                      onChange={(e) => setContentTitle(e.target.value)}
                      className="block w-full rounded-md border-2 border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-primary-500 focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 font-poppins text-base"
                      placeholder="Enter content title"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contentDescription"
                      className="block text-sm font-medium text-gray-700 mb-2 font-poppins"
                    >
                      Description
                    </label>
                    <textarea
                      id="contentDescription"
                      value={contentDescription}
                      onChange={(e) => setContentDescription(e.target.value)}
                      rows="4"
                      className="block w-full rounded-md border-2 border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-primary-500 focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 font-poppins text-base resize-none"
                      placeholder="Enter description"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contentSectionId"
                      className="block text-sm font-medium text-gray-700 mb-2 font-poppins"
                    >
                      Section
                    </label>
                    <select
                      id="contentSectionId"
                      value={contentSectionId}
                      onChange={(e) => setContentSectionId(e.target.value)}
                      className="block w-full rounded-md border-2 border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-primary-500 focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 font-poppins text-base"
                      required
                    >
                      <option value="">Select a section</option>
                      {sections &&
                        sections.map((section) => (
                          <option key={section.id} value={section.id}>
                            {section.sectionTitle}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>
                <div className="flex gap-4 mt-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-primary-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors duration-200"
                  >
                    Add Content
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setContentTitle("");
                      setContentDescription("");
                      setContentSectionId("");
                    }}
                    className="inline-flex justify-center rounded-md border-2 border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors duration-200"
                  >
                    Cancel
                  </button>
                </div>
              </form>
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h2 className="text-xl font-semibold text-gray-900 font-poppins border-b border-gray-200 pb-2 mb-6 px-6 pt-6">
                  Contents List
                </h2>
                <div className="relative">
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 table-fixed">
                      <thead className="bg-primary-600 sticky top-0 z-10">
                        <tr>
                          <th
                            scope="col"
                            className="w-[25%] px-6 py-4 text-left text-sm font-semibold text-white font-poppins"
                          >
                            Title
                          </th>
                          <th
                            scope="col"
                            className="w-[33%] px-6 py-4 text-left text-sm font-semibold text-white font-poppins"
                          >
                            Description
                          </th>
                          <th
                            scope="col"
                            className="w-[25%] px-6 py-4 text-left text-sm font-semibold text-white font-poppins"
                          >
                            Section
                          </th>
                          <th
                            scope="col"
                            className="w-[17%] px-6 py-4 text-left text-sm font-semibold text-white font-poppins"
                          >
                            Actions
                          </th>
                        </tr>
                      </thead>
                    </table>
                    <div className="max-h-[400px] overflow-y-auto">
                      <table className="min-w-full divide-y divide-gray-200 table-fixed">
                        <tbody className="bg-white divide-y divide-gray-200">
                          {contents && contents.length > 0 ? (
                            <>
                              {getCurrentItems(contents).map((content) => (
                                <tr
                                  key={content.id}
                                  className="hover:bg-gray-50"
                                >
                                  <td className="w-[25%] px-6 py-4">
                                    <div
                                      className="text-sm text-gray-900 font-poppins truncate min-w-0"
                                      title={content.contentTitle}
                                    >
                                      {content.contentTitle}
                                    </div>
                                  </td>
                                  <td className="w-[33%] px-6 py-4">
                                    <div
                                      className="text-sm text-gray-900 font-poppins truncate min-w-0"
                                      title={content.description}
                                    >
                                      {content.description}
                                    </div>
                                  </td>
                                  <td className="w-[25%] px-6 py-4">
                                    <div
                                      className="text-sm text-gray-900 font-poppins truncate min-w-0"
                                      title={
                                        sections.find(
                                          (s) => s.id === content.sectionId
                                        )?.sectionTitle || "N/A"
                                      }
                                    >
                                      {sections.find(
                                        (s) => s.id === content.sectionId
                                      )?.sectionTitle || "N/A"}
                                    </div>
                                  </td>
                                  <td className="w-[17%] px-6 py-4 text-right text-sm font-medium whitespace-nowrap">
                                    <button
                                      onClick={() =>
                                        handleDeleteContent(content.id)
                                      }
                                      className="text-red-600 hover:text-red-900 font-poppins"
                                    >
                                      Delete
                                    </button>
                                  </td>
                                </tr>
                              ))}
                              {getCurrentItems(contents).length < 10 &&
                                Array.from({
                                  length: 10 - getCurrentItems(contents).length,
                                }).map((_, index) => (
                                  <tr
                                    key={`empty-${index}`}
                                    className="hover:bg-gray-50"
                                  >
                                    <td
                                      colSpan="4"
                                      className="px-6 py-4 text-center text-sm text-gray-500 font-poppins"
                                    ></td>
                                  </tr>
                                ))}
                            </>
                          ) : (
                            Array.from({ length: 10 }).map((_, index) => (
                              <tr
                                key={`empty-${index}`}
                                className="hover:bg-gray-50"
                              >
                                <td
                                  colSpan="4"
                                  className="px-6 py-4 text-center text-sm text-gray-500 font-poppins"
                                >
                                  {index === 0 ? "No contents found" : ""}
                                </td>
                              </tr>
                            ))
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                {contents && contents.length > 0 && (
                  <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 mt-4">
                    <div className="flex flex-1 justify-between sm:hidden">
                      <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="relative inline-flex items-center rounded-md border-2 border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                      >
                        Previous
                      </button>
                      <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages(contents)}
                        className="relative ml-3 inline-flex items-center rounded-md border-2 border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                      >
                        Next
                      </button>
                    </div>
                    <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                      <div>
                        <p className="text-sm text-gray-700 font-poppins">
                          Showing{" "}
                          <span className="font-medium">
                            {(currentPage - 1) * itemsPerPage + 1}
                          </span>{" "}
                          to{" "}
                          <span className="font-medium">
                            {Math.min(
                              currentPage * itemsPerPage,
                              contents.length
                            )}
                          </span>{" "}
                          of{" "}
                          <span className="font-medium">{contents.length}</span>{" "}
                          results
                        </p>
                      </div>
                      <div>
                        <nav
                          className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                          aria-label="Pagination"
                        >
                          <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            <span className="sr-only">Previous</span>
                            <svg
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                          {[...Array(totalPages(contents))].map((_, index) => (
                            <button
                              key={index + 1}
                              onClick={() => handlePageChange(index + 1)}
                              className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
                                currentPage === index + 1
                                  ? "z-10 bg-primary-600 text-white shadow-sm focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                                  : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                              }`}
                            >
                              {index + 1}
                            </button>
                          ))}
                          <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages(contents)}
                            className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            <span className="sr-only">Next</span>
                            <svg
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                        </nav>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default DataManagementPage;
