import React, { useState, useEffect } from "react";
import Markdown from "react-markdown";

interface ContentItem {
  id: number;
  title: string;
  content: string;
}

const apiUrl: string = "https://portfolioblogs-lqof.shuttle.app/api/posts";

const ContentViewer: React.FC = () => {
  const [items, setItems] = useState<ContentItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<ContentItem | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  useEffect(() => {
    // Replace with your actual API endpoint
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setItems(data);
        if (data.length > 0) {
          setSelectedItem(data[0]); // Select first item by default
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Close sidebar when item is selected on mobile
  const handleItemSelect = (item: ContentItem) => {
    setSelectedItem(item);
    if (window.innerWidth < 768) {
      setSidebarOpen(false);
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-full">Loading...</div>
    );
  if (error) return <div className="text-red-500 p-4">Error: {error}</div>;
  if (items.length === 0) return <div className="p-4">No items found.</div>;

  return (
    <div className="flex flex-col md:flex-row h-full w-full relative">
      {/* Mobile sidebar toggle button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="md:hidden fixed top-13 left-2/5 transform -translate-x-1/2 z-50 text-white text-3xl p-2 rounded-md backdrop-blur-sm"
        aria-label="Toggle sidebar"
      >
        {sidebarOpen ? "✕" : "≡"}
      </button>

      {/* Left sidebar with titles */}
      <div
        className={`w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 fixed md:static inset-0 z-10 transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        } md:h-full flex flex-col backdrop-blur-md`}
      >
        <div className="p-4 flex-shrink-0">
          <h2 className="mt-40 sm:mt-10 text-xl text-white font-bold mb-4 ">
            Content List
          </h2>
          <hr />
        </div>

        <div className="overflow-y-auto flex-1 px-4 pb-4">
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleItemSelect(item)}
                  className={`w-full text-left text-blue-200 p-3 rounded-md transition-colors ${
                    selectedItem?.id === item.id
                      ? "text-blue-200 bg-gray-800 dark:text-blue-200"
                      : "hover:bg-gray-800 dark:hover:bg-gray-700"
                  }`}
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right side content display */}
      <div className="w-full md:w-2/3 lg:w-3/4 p-4 md:p-6 overflow-y-auto h-full">
        {selectedItem && (
          <div>
            <h1 className="text-2xl font-bold mb-4">{selectedItem.title}</h1>
            <article className="text-white prose dark:prose-invert max-w-none">
              <Markdown>{selectedItem.content}</Markdown>
            </article>
          </div>
        )}
      </div>

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-0"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default ContentViewer;
