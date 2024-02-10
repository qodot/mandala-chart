import { useCallback, useState } from "react";
import Box from "./Box";

type SubGoalBoxProps = {
  subGoal: Goal;
  changeSubGoal: ({ title }: { title: string }) => void;
};

export default function SubGoalBox({
  subGoal,
  changeSubGoal,
}: SubGoalBoxProps) {
  const [actions, setActions] = useState<Goal[]>([
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
  ]);

  const getChangeActions = useCallback(
    // TODO: using context api or recoil
    (idx: number) => {
      return ({ title }: { title: string }) => {
        const newAction = { ...actions[idx], title };
        const newActions = [...actions];
        newActions[idx] = newAction;
        setActions(newActions);
      };
    },
    [actions]
  );

  return (
    <div className="basis-1/3 aspect-square m-1 bg-white border-2 border-black flex flex-col">
      <div className="flex">
        <Box goal={actions[0]} changeGoal={getChangeActions(0)} />
        <Box goal={actions[1]} changeGoal={getChangeActions(1)} />
        <Box goal={actions[2]} changeGoal={getChangeActions(2)} />
      </div>
      <div className="flex">
        <Box goal={actions[3]} changeGoal={getChangeActions(3)} />
        <Box goal={subGoal} changeGoal={changeSubGoal} variant="sub" />
        <Box goal={actions[4]} changeGoal={getChangeActions(4)} />
      </div>
      <div className="flex">
        <Box goal={actions[5]} changeGoal={getChangeActions(5)} />
        <Box goal={actions[6]} changeGoal={getChangeActions(6)} />
        <Box goal={actions[7]} changeGoal={getChangeActions(7)} />
      </div>
    </div>
  );
}
