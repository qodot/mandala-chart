import Box from "./Box";

type CoreGoalBoxProps = {
  coreGoal: Goal;
  changeCoreGoal: ({ title }: { title: string }) => void;
  subGoals: Goal[];
  getChangeSubGoals: (idx: number) => ({ title }: { title: string }) => void;
};

export default function CoreGoalBox({
  coreGoal,
  changeCoreGoal,
  subGoals,
  getChangeSubGoals,
}: CoreGoalBoxProps) {
  return (
    <div className="basis-1/3 aspect-square m-1 bg-white border-2 border-black flex flex-col">
      <div className="flex">
        <Box goal={subGoals[0]} changeGoal={getChangeSubGoals(0)} />
        <Box goal={subGoals[1]} changeGoal={getChangeSubGoals(1)} />
        <Box goal={subGoals[2]} changeGoal={getChangeSubGoals(2)} />
      </div>
      <div className="flex">
        <Box goal={subGoals[3]} changeGoal={getChangeSubGoals(3)} />
        <Box goal={coreGoal} changeGoal={changeCoreGoal} variant="core" />
        <Box goal={subGoals[4]} changeGoal={getChangeSubGoals(4)} />
      </div>
      <div className="flex">
        <Box goal={subGoals[5]} changeGoal={getChangeSubGoals(5)} />
        <Box goal={subGoals[6]} changeGoal={getChangeSubGoals(6)} />
        <Box goal={subGoals[7]} changeGoal={getChangeSubGoals(7)} />
      </div>
    </div>
  );
}
