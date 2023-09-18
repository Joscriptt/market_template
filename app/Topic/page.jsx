import React from "react";

function Topicpage({ title, className }) {
  return (
    <div>
      <h2 className={`text-2xl font-InterBold ${className}`}>{title}</h2>
    </div>
  );
}

export default Topicpage;
