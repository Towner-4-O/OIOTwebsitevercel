import React from 'react';
import { motion } from 'framer-motion';

interface TabSelectorProps {
  tabs: Array<{
    id: string;
    label: string;
    icon: React.ComponentType<any>;
  }>;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const TabSelector: React.FC<TabSelectorProps> = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div className="mb-6">
      <div className="flex gap-2 bg-gray-100 p-1 rounded-lg mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative flex items-center bg-white gap-2 flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeTab === tab.id
                ? "text-white"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-[#5445F9] rounded-lg"
                initial={false}
                transition={{ type: "spring", duration: 0.5 }}
              />
            )}
            <span className="relative z-10">
              <tab.icon className="w-4 h-4 inline-block mr-1" />
              {tab.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabSelector;
