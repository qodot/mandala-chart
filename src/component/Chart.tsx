import CoreGoalBox from "./CoreGoalBox";
import SubGoalBox from "./SubGoalBox";

export default function Chart() {
  return (
    <div className="flex flex-col">
      <div className="flex">
        <SubGoalBox idx={0} />
        <SubGoalBox idx={1} />
        <SubGoalBox idx={2} />
      </div>
      <div className="flex">
        <SubGoalBox idx={3} />
        <CoreGoalBox />
        <SubGoalBox idx={4} />
      </div>
      <div className="flex">
        <SubGoalBox idx={5} />
        <SubGoalBox idx={6} />
        <SubGoalBox idx={7} />
      </div>
    </div>
  );
}
