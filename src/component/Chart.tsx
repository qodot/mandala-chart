"use client";

import { useState } from "react";

import RootBox from "./RootBox";
import CoreBox from "./CoreBox";

export default function Chart() {
  const [root, setRoot] = useState<Goal>({
    title: "Root",
    changeTitle: (title: string) => setRoot({ ...root, title }),
  });
  const [cores, setCores] = useState<Goal[]>([
    {
      title: "Core 1",
      changeTitle: (title: string) => changeCoreTitleOf(title, 0),
    },
    {
      title: "Core 2",
      changeTitle: (title: string) => changeCoreTitleOf(title, 1),
    },
    {
      title: "Core 3",
      changeTitle: (title: string) => changeCoreTitleOf(title, 2),
    },
    {
      title: "Core 4",
      changeTitle: (title: string) => changeCoreTitleOf(title, 3),
    },
    {
      title: "Core 5",
      changeTitle: (title: string) => changeCoreTitleOf(title, 4),
    },
    {
      title: "Core 6",
      changeTitle: (title: string) => changeCoreTitleOf(title, 5),
    },
    {
      title: "Core 7",
      changeTitle: (title: string) => changeCoreTitleOf(title, 6),
    },
    {
      title: "Core 8",
      changeTitle: (title: string) => changeCoreTitleOf(title, 7),
    },
  ]);

  function changeCoreTitleOf(title: string, idx: number): void {
    const newCore = { ...cores[idx], title };
    const newCores = [...cores];
    newCores[idx] = newCore;
    setCores(newCores);
  }

  return (
    <div className="flex flex-col">
      <div className="flex">
        <CoreBox core={cores[0]} />
        <CoreBox core={cores[1]} />
        <CoreBox core={cores[2]} />
      </div>
      <div className="flex">
        <CoreBox core={cores[3]} />
        <RootBox root={root} cores={cores} />
        <CoreBox core={cores[4]} />
      </div>
      <div className="flex">
        <CoreBox core={cores[5]} />
        <CoreBox core={cores[6]} />
        <CoreBox core={cores[7]} />
      </div>
    </div>
  );
}
