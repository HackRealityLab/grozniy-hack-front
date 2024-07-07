"use client";

import { createContext, useState } from "react";

export const JobDataContext = createContext<any>(null);

const JobContextLayout = ({ children }: any) => {
  const [jobId, setJobId] = useState<any>();
  return (
    <JobDataContext.Provider value={{ jobId, setJobId }}>
      {children}
    </JobDataContext.Provider>
  );
};

export default JobContextLayout;
