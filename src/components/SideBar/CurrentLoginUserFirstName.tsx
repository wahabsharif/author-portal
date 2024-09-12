"use client";

import React, { useEffect, useState } from "react";

interface CurrentLoginUserFirstNameProps {
  isOpen: boolean;
}

const CurrentLoginUserFirstName: React.FC<
  CurrentLoginUserFirstNameProps
> = ({}) => {
  const [firstName, setFirstName] = useState<string | null>(null);

  useEffect(() => {
    const userFirstName = sessionStorage.getItem("first_name");
    setFirstName(userFirstName);
  }, []);

  return (
    <div className="flex items-center justify-center mt-4">
      <h1 className="text-xl font-bold text-gray-300">Welcome, {firstName}!</h1>
    </div>
  );
};

export default CurrentLoginUserFirstName;
