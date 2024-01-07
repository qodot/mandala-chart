import { useCallback, useState } from "react";

import RootBox from "./RootBox";
import CoreBox from "./CoreBox";

export default function Chart() {
  const [root, setRoot] = useState<Goal>({ title: "Root" });
  const [cores, setCores] = useState<Goal[]>([
    { title: "Core 1" },
    { title: "Core 2" },
    { title: "Core 3" },
    { title: "Core 4" },
    { title: "Core 5" },
    { title: "Core 6" },
    { title: "Core 7" },
    { title: "Core 8" },
  ]);

  function changeRoot({ title }: { title: string }) {
    setRoot({ ...root, title });
  }

  const getChangeCores = useCallback(
    // TODO: using context api or recoil
    (idx: number) => {
      return ({ title }: { title: string }) => {
        const newCore = { ...cores[idx], title };
        const newCores = [...cores];
        newCores[idx] = newCore;
        setCores(newCores);
      };
    },
    [cores]
  );

  return (
    <div className="flex flex-col">
      <div className="flex">
        <CoreBox core={cores[0]} changeCore={getChangeCores(0)} />
        <CoreBox core={cores[1]} changeCore={getChangeCores(1)} />
        <CoreBox core={cores[2]} changeCore={getChangeCores(2)} />
      </div>
      <div className="flex">
        <CoreBox core={cores[3]} changeCore={getChangeCores(3)} />
        <RootBox
          root={root}
          changeRoot={changeRoot}
          cores={cores}
          getChangeCores={getChangeCores}
        />
        <CoreBox core={cores[4]} changeCore={getChangeCores(4)} />
      </div>
      <div className="flex">
        <CoreBox core={cores[5]} changeCore={getChangeCores(5)} />
        <CoreBox core={cores[6]} changeCore={getChangeCores(6)} />
        <CoreBox core={cores[7]} changeCore={getChangeCores(7)} />
      </div>
    </div>
  );
}
