'use client';

import React, { useState } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

// Removed import for Mermaid as it's a third-party library and may not be installed

import toolsData from '@/data/toolsData';

// AIDevToolsDetailedComparison component
export const AIDevToolsDetailedComparison = () => {
  const [selectedTool, setSelectedTool] = useState(Object.keys(toolsData)[0]);

  const FeatureList = ({ features }) => (
    <div className="grid grid-cols-2 gap-2 mt-4">
      {Object.entries(features).map(([feature, supported]) => (
        <div key={feature} className="flex items-center">
          {supported ? (
            <CheckCircle className="text-green-500 mr-2" size={20} />
          ) : (
            <XCircle className="text-red-500 mr-2" size={20} />
          )}
          <span>{feature}</span>
        </div>
      ))}
    </div>
  );

  const ToolDetails = ({ tool }) => (
    <div>
      <p className="mb-4">{tool.description}</p>
      <h3 className="font-bold mt-4 mb-2">优势：</h3>
      <ul className="list-disc list-inside mb-4">
        {tool.strengths.map((strength, index) => (
          <li key={index}>{strength}</li>
        ))}
      </ul>
      <h3 className="font-bold mt-4 mb-2">局限性：</h3>
      <ul className="list-disc list-inside mb-4">
        {tool.limitations.map((limitation, index) => (
          <li key={index}>{limitation}</li>
        ))}
      </ul>
      <h3 className="font-bold mt-4 mb-2">最适合：</h3>
      <div className="flex flex-wrap gap-2 mb-4">
        {tool.bestFor.map((use, index) => (
          <span key={index} className="bg-gray-200 px-2 py-1 rounded">{use}</span>
        ))}
      </div>
      <h3 className="font-bold mt-4 mb-2">功能对比：</h3>
      <FeatureList features={tool.features} />
    </div>
  );

  return (
    <div className="w-full mt-4">
      <h2 className="text-2xl font-bold mb-4">AI驱动开发工具详细比较</h2>
      <div>
        <div className="flex mb-4">
          {Object.keys(toolsData).map((key) => (
            <button
              key={key}
              onClick={() => setSelectedTool(key)}
              className={`px-4 py-2 mr-2 ${selectedTool === key ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
              {toolsData[key].name}
            </button>
          ))}
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">{toolsData[selectedTool].name}</h2>
          <ToolDetails tool={toolsData[selectedTool]} />
        </div>
      </div>
    </div>
  );
};

// ArticleList component
export const ArticleList = ({ articles }) => {
  const [userAccessLevel, setUserAccessLevel] = useState('visitor');

  return (
    <div>
      <div className="user-access-controls mb-4">
        <label>Select Access Level: </label>
        <select value={userAccessLevel} onChange={(e) => setUserAccessLevel(e.target.value)}>
          <option value="visitor">Visitor</option>
          <option value="registered">Registered User</option>
          <option value="investor">Investor</option>
        </select>
      </div>
      <div className="article-list">
        {articles.map((article) => (
          (userAccessLevel === 'investor' ||
            (userAccessLevel === 'registered' && article.accessLevel !== 'investor') ||
            (userAccessLevel === 'visitor' && article.accessLevel === 'visitor')) && (
            <div key={article.id} className="article-card mb-4 p-4 border rounded">
              <h2 className="text-xl font-bold">{article.title}</h2>
              <p>{article.summary}</p>
              <p><small>{article.date}</small></p>
              <a href={article.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Read More</a>
            </div>
          )
        ))}
      </div>
    </div>
  );
};

// MainContent component
export const MainContent = ({ articles }) => {
  const [activeTab, setActiveTab] = useState('reports');

  return (
    <div>
      <div className="flex mb-4">
        <button onClick={() => setActiveTab('reports')} className={`px-4 py-2 mr-2 ${activeTab === 'reports' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>Research Reports</button>
        <button onClick={() => setActiveTab('ai-tools')} className={`px-4 py-2 mr-2 ${activeTab === 'ai-tools' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>AI Tools Comparison</button>
        <button onClick={() => setActiveTab('project-flow')} className={`px-4 py-2 ${activeTab === 'project-flow' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>Project Flow Diagram</button>
      </div>
      {activeTab === 'reports' && <ArticleList articles={articles} />}
      {activeTab === 'ai-tools' && <AIDevToolsDetailedComparison />}
      {activeTab === 'project-flow' && (
        <div className="project-flow">
          <h2 className="text-xl font-bold mb-4">Project Flow Diagram</h2>
          <p>Mermaid diagram would be here. You may need to install and import a Mermaid library to render the diagram.</p>
        </div>
      )}
    </div>
  );
};