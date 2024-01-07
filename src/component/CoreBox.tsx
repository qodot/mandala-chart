import { useCallback, useState } from "react";
import Box from "./Box";

type CoreBoxProps = {
  core: Goal;
  changeCore: ({ title }: { title: string }) => void;
};

export default function CoreBox({ core, changeCore }: CoreBoxProps) {
  const [details, setDetails] = useState<Goal[]>([
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
  ]);

  const getChangeDetails = useCallback(
    // TODO: using context api or recoil
    (idx: number) => {
      return ({ title }: { title: string }) => {
        const newDetail = { ...details[idx], title };
        const newDetails = [...details];
        newDetails[idx] = newDetail;
        setDetails(newDetails);
      };
    },
    [details]
  );

  return (
    <div className="basis-1/3 aspect-square m-1 bg-white border border-black flex flex-col">
      <div className="flex">
        <Box goal={details[0]} changeGoal={getChangeDetails(0)} />
        <Box goal={details[1]} changeGoal={getChangeDetails(1)} />
        <Box goal={details[2]} changeGoal={getChangeDetails(2)} />
      </div>
      <div className="flex">
        <Box goal={details[3]} changeGoal={getChangeDetails(3)} />
        <Box goal={core} changeGoal={changeCore} />
        <Box goal={details[4]} changeGoal={getChangeDetails(4)} />
      </div>
      <div className="flex">
        <Box goal={details[5]} changeGoal={getChangeDetails(5)} />
        <Box goal={details[6]} changeGoal={getChangeDetails(6)} />
        <Box goal={details[7]} changeGoal={getChangeDetails(7)} />
      </div>
    </div>
  );
}
