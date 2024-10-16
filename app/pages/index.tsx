import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

interface Report {
  id: number;
  title: string;
  date: string;
  summary: string;
  accessLevel: 'public' | 'registered' | 'investor';
}

const ResearchHubPage = () => {
  const [reports, setReports] = useState<Report[]>([]);
  const [userAccessLevel, setUserAccessLevel] = useState<'public' | 'registered' | 'investor'>('registered');
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const mockReports: Report[] = [
      {
        id: 1,
        title: 'Global Market Trends 2023',
        date: '2023-05-15',
        summary: 'An overview of emerging market trends across various industries.',
        accessLevel: 'public'
      },
      {
        id: 2,
        title: 'Tech Industry Forecast',
        date: '2023-06-01',
        summary: 'In-depth analysis of upcoming technologies and their potential impact.',
        accessLevel: 'registered'
      },
      {
        id: 3,
        title: 'Investment Strategies for Q3',
        date: '2023-06-15',
        summary: 'Exclusive insights on investment opportunities for the upcoming quarter.',
        accessLevel: 'investor'
      }
    ];
    setReports(mockReports);
  }, []);

  const getActionButton = (report: Report) => {
    if (report.accessLevel === 'public' || userAccessLevel === report.accessLevel) {
      return <button className="bg-white text-black px-4 py-1 rounded text-sm">Read More</button>;
    } else if (report.accessLevel === 'investor' && userAccessLevel === 'registered') {
      return <button className="bg-gray-600 text-white px-4 py-1 rounded text-sm">Upgrade to Access</button>;
    }
    return null;
  };

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <header className="p-4 flex justify-between items-center border-b border-gray-700">
        <h1 className="text-2xl font-bold text-blue-600">ResearchHub</h1>
        <nav>
          <ul className="flex space-x-4 items-center">
            <li><a href="#" className="hover:text-blue-500">Reports</a></li>
            <li><a href="#" className="hover:text-blue-500">Create Post</a></li>
            <li><span className="text-green-500">Welcome, registered!</span></li>
            <li><button className="bg-white text-black px-4 py-2 rounded">Logout</button></li>
            <li>
              <button onClick={toggleDarkMode} className="p-2 rounded-full bg-gray-800">
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6">Research Reports</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reports.map((report) => (
            <div key={report.id} className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">{report.title}</h3>
              <p className="text-gray-400 mb-2">{report.date}</p>
              <p className="mb-4">{report.summary}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm font-semibold">{report.accessLevel}</span>
                {getActionButton(report)}
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="p-4 text-center border-t border-gray-700">
        <p>&copy; 2023 ResearchHub. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ResearchHubPage;