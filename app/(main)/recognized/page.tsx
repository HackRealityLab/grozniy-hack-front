"use client";

import CameraTrap from "@/components/CameraTrap";
import { JobDataContext } from "@/components/JobContextProvider";
import { Button } from "@/components/ui/button";
import axios from "axios";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";

const RecognizedPhotosPage = () => {
  const [usefulData, setUsefulData] = useState(null);
  const { jobId } = useContext(JobDataContext);

  const fetchUsefulData = (jobId: any) => {
    axios
      .get("http://109.248.175.184:9080/v1/predict/transaction/" + jobId)
      .then((res) => {
        console.log("transaction status", res.data);
        if (res.data.status == "IN_PROGRESS") {
          fetchUsefulData(jobId);
        } else {
          setUsefulData(res.data);
        }
      });
  };

  useEffect(() => {
    if (jobId !== undefined) {
      fetchUsefulData(jobId);
    }
  }, [jobId]);
  return (
    <div className="flex flex-col gap-10">
      <section className="flex gap-10 items-center">
        <Button variant="secondary" asChild>
          <Link href="/">На главную</Link>
        </Button>
        <h2 className="text-foreground text-3xl font-bold">
          Результат распознавания
        </h2>
      </section>
      <section className="flex flex-wrap gap-10">
        <CameraTrap />
        <CameraTrap />
        <CameraTrap />
      </section>
    </div>
  );
};

export default RecognizedPhotosPage;
