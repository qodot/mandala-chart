import { useCallback, useState } from "react";

import CoreGoalBox from "./CoreGoalBox";
import SubGoalBox from "./SubGoalBox";

export default function Chart() {
  const [coreGoal, setCoreGoal] = useState<Goal>({ title: "Start Here!" });
  const [subGoals, setSubGoals] = useState<Goal[]>([
    { title: "Sub Goal 1" },
    { title: "Sub Goal 2" },
    { title: "Sub Goal 3" },
    { title: "Sub Goal 4" },
    { title: "Sub Goal 5" },
    { title: "Sub Goal 6" },
    { title: "Sub Goal 7" },
    { title: "Sub Goal 8" },
  ]);

  function changeCoreGoal({ title }: { title: string }) {
    setCoreGoal({ ...coreGoal, title });
  }

  const getChangeSubGoals = useCallback(
    // TODO: using context api or recoil
    (idx: number) => {
      return ({ title }: { title: string }) => {
        const newSubGoal = { ...subGoals[idx], title };
        const newSubGoals = [...subGoals];
        newSubGoals[idx] = newSubGoal;
        setSubGoals(newSubGoals);
      };
    },
    [subGoals]
  );

  return (
    <div className="flex flex-col">
      <div className="flex">
        <SubGoalBox core={subGoals[0]} changeCore={getChangeSubGoals(0)} />
        <SubGoalBox core={subGoals[1]} changeCore={getChangeSubGoals(1)} />
        <SubGoalBox core={subGoals[2]} changeCore={getChangeSubGoals(2)} />
      </div>
      <div className="flex">
        <SubGoalBox core={subGoals[3]} changeCore={getChangeSubGoals(3)} />
        <CoreGoalBox
          coreGoal={coreGoal}
          changeCoreGoal={changeCoreGoal}
          subGoals={subGoals}
          getChangeSubGoals={getChangeSubGoals}
        />
        <SubGoalBox core={subGoals[4]} changeCore={getChangeSubGoals(4)} />
      </div>
      <div className="flex">
        <SubGoalBox core={subGoals[5]} changeCore={getChangeSubGoals(5)} />
        <SubGoalBox core={subGoals[6]} changeCore={getChangeSubGoals(6)} />
        <SubGoalBox core={subGoals[7]} changeCore={getChangeSubGoals(7)} />
      </div>
    </div>
  );
}
