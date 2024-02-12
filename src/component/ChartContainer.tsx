"use client";

import html2canvas from "html2canvas";

import { useRef } from "react";
import Chart from "./Chart";

export default function ChartContainer() {
  const ref = useRef<HTMLDivElement>(null);

  async function handleClickDownload() {
    const element = ref.current;
    if (!element) return;

    const canvas = await html2canvas(element);
    const data = canvas.toDataURL("image/jpg");
    const link = document.createElement("a");

    if (typeof link.download === "string") {
      link.href = data;
      link.download = "chart.jpg";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
  }

  return (
    <div className="p-9">
      <div ref={ref}>
        <Chart />
      </div>

      <div className="mt-9 flex flex-row justify-center items-center">
        <button
          className="w-[224px] h-[74px] rounded bg-black text-2xl font-bold text-white flex flex-row justify-center items-center"
          type="button"
          onClick={handleClickDownload}
        >
          Download
          <img src="/icon4.svg" className="ml-2" />
        </button>
      </div>
    </div>
  );
}
