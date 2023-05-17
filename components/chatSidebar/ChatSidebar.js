import Link from "next/link";
import React from "react";

const ChatSidebar = () => {
  return (
    <div className="bg-gray-900 text-white">
      <Link href="/api/auth/logout">Logout</Link>
    </div>
  );
};

export default ChatSidebar;
