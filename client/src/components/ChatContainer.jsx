import React, { useEffect, useRef } from "react";
import { useChatStore } from "../store/useChatStore";
import MessagesSkeleton from "../skeletons/MessagesSkeleton";
import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";
import { useAuthStore } from "../store/useAuthStore";
import { FaUserCircle, FaCamera } from "react-icons/fa";
import { format } from "date-fns";
import { formatMessageTime } from "../lib/utils";
const ChatContainer = () => {
  const {
    messages,
    getMessages,
    isMessagesLoading,
    selectedUser,
    subscribeToMessages,
    unsubscribeToMessages,
  } = useChatStore();
  const messageEndRef = useRef(null);
  const { authUser, socket } = useAuthStore();

  useEffect(() => {
    getMessages(selectedUser._id);
    subscribeToMessages(socket);
    return () => unsubscribeToMessages(socket);
  }, [
    selectedUser._id,
    getMessages,
    subscribeToMessages,
    unsubscribeToMessages,
  ]);
  useEffect(() => {
    if (messageEndRef.current && messages) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <>
      {isMessagesLoading ? (
        <MessagesSkeleton />
      ) : (
        <div className="flex-1 flex flex-col overflow-auto">
          <ChatHeader />
          <div className="flex-1 flex flex-col overflow-auto">
            {messages.map((message) => (
              <div
                key={message._id}
                className={`chat ${
                  message.senderId === authUser._id ? "chat-end" : "chat-start"
                }`}
                ref={messageEndRef}
              >
                <div className="chat-image avatar mx-4">
                  <div className="size-10 rounded-full border">
                    {message.senderId === authUser._id ? (
                      authUser.profilePic ? (
                        <img src={authUser.profilePic} alt="Profile" />
                      ) : (
                        <FaUserCircle className="w-full h-full text-gray-400" />
                      )
                    ) : selectedUser.profilePic ? (
                      <img src={selectedUser.profilePic} alt="Profile" />
                    ) : (
                      <FaUserCircle className="w-full h-full text-gray-400" />
                    )}
                  </div>
                </div>
                <div className="chat-bubble">{message.text}</div>
                <div className="chat-footer">
                  <time
                    dateTime={message.createdAt}
                    className="text-xs opacity-50"
                  >
                    {formatMessageTime(message.createdAt)}
                  </time>
                </div>
                <div className="chat-bubble flex flex-col">
                  {message.image && (
                    <img
                      src={message.image}
                      alt=""
                      className="sm:max-w-[200px] rounded-md mb-2"
                    />
                  )}
                  {message.text && <p>{message.text}</p>}
                </div>
              </div>
            ))}
          </div>
          <MessageInput />
        </div>
      )}
    </>
  );
};

export default ChatContainer;
