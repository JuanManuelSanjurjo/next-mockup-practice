"use client";
import React from "react";
import { useParams } from "next/navigation";

function UserPage({ params }) {
  const {userId} = useParams();

  return (
    <div>
      <button
        onClick={() => {
            alert("userId: " + userId)
          console.log(userId);
        }}
      >
        params
      </button>
    </div>
  );
}

export default UserPage;
