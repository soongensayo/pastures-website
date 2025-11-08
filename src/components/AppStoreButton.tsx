import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface AppStoreButtonProps {
  variant?: 'default' | 'compact';
  className?: string;
}

const AppStoreButton: React.FC<AppStoreButtonProps> = ({ 
  variant = 'default', 
  className = '' 
}) => {
  const appStoreUrl = 'https://apps.apple.com/sg/app/pastures/id6740173765';

  if (variant === 'compact') {
    return (
      <Link
        href={appStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 ${className}`}
      >
        <svg
          className="w-5 h-5 mr-2"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
        </svg>
        <div className="flex flex-col items-start">
          <span className="text-xs leading-none">Download on the</span>
          <span className="text-sm font-semibold leading-none">App Store</span>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={appStoreUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block ${className}`}
    >
      <div className="bg-black text-white rounded-lg px-6 py-3 hover:bg-gray-800 transition-colors duration-200 inline-flex items-center space-x-3">
        <svg
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
        </svg>
        <div className="flex flex-col">
          <span className="text-xs leading-tight">Download on the</span>
          <span className="text-xl font-semibold leading-tight">App Store</span>
        </div>
      </div>
    </Link>
  );
};

export default AppStoreButton;
