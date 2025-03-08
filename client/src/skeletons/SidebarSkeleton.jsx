import React from "react";

const SidebarSkeleton = () => {
  return (
    <div className="w-64 h-screen bg-white p-4">
      <div className="animate-pulse">
        {/* Sidebar Header Skeleton */}
        <div className="h-8 bg-base-300 rounded mb-6"></div>

        {/* User List Skeleton */}
        <div className="space-y-4">
          {[...Array(9)].map((_, index) => (
            <div key={index} className="flex items-center space-x-3">
              {/* Avatar Skeleton */}
              <div className="h-10 w-10 bg-base-300 rounded-full"></div>
              {/* User Name Skeleton */}
              <div className="flex-1">
                <div className="h-4 bg-base-300 rounded w-3/4"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SidebarSkeleton;
