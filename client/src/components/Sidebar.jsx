import React, { useEffect } from "react";
import { useChatStore } from "../store/useChatStore";
import SidebarSkeleton from "../skeletons/SidebarSkeleton";
import { FaUserCircle, FaCamera } from "react-icons/fa";
import { useAuthStore } from "../store/useAuthStore";
const Sidebar = () => {
  const { getUsers, users, setSelectedUser, selectedUser, isUserLoading } =
    useChatStore();
  const { onlineUsers } = useAuthStore();

  useEffect(() => {
    getUsers();
  }, [getUsers]);
  if (isUserLoading) return <SidebarSkeleton />;
  return (
    <div>
      <aside className="h-full w-20 lg:w-72 border-r border-base-300 flex flex-col transition-all duration-300">
        <div className="border-b border-base-300 w-full p-5">
          {/* <Users className="size-6" /> */}
          <span className=" font-medium hidden lg:block">Contacts</span>
        </div>
        {/* online only */}
        <div className="overflow-y-auto w-full py-3">
          {users.map((user) => (
            <button
              key={user._id}
              onClick={() => setSelectedUser(user)}
              className={`
              w-full p-3 flex items-center gap-3
              hover:bg-base-300 transition-colors
              ${
                selectedUser?._id === user._id
                  ? "bg-base-300 ring-1 ring-base-300"
                  : ""
              }
            `}
            >
              <div className="relative mx-auto lg:mx-0">
                {user.profilePic ? (
                  <img
                    src={user.profilePic}
                    alt={user.name}
                    className="size-12 object-cover rounded-full"
                  />
                ) : (
                  <FaUserCircle className="w-full h-full text-gray-400 " />
                )}

                {onlineUsers.includes(user._id) && (
                  <span
                    className="absolute bottom-0 right-0 size-3 bg-green-500 
                  rounded-full ring-2 ring-zinc-900"
                  />
                )}
              </div>

              {/* User info - only visible on larger screens */}
              <div className="hidden lg:block text-left min-w-0">
                <div className="font-medium truncate">{user.fullName}</div>
                <div className="text-sm text-zinc-400">
                  {onlineUsers.includes(user._id) ? "Online" : "Offline"}
                </div>
              </div>
            </button>
          ))}
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
