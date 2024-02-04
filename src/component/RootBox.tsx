import Box from "./Box";

type RootBoxProps = {
  root: Goal;
  changeRoot: ({ title }: { title: string }) => void;
  cores: Goal[];
  getChangeCores: (idx: number) => ({ title }: { title: string }) => void;
};

export default function RootBox({
  root,
  changeRoot,
  cores,
  getChangeCores,
}: RootBoxProps) {
  return (
    <div className="basis-1/3 aspect-square m-1 bg-white border-2 border-black flex flex-col">
      <div className="flex">
        <Box goal={cores[0]} changeGoal={getChangeCores(0)} />
        <Box goal={cores[1]} changeGoal={getChangeCores(1)} />
        <Box goal={cores[2]} changeGoal={getChangeCores(2)} />
      </div>
      <div className="flex">
        <Box goal={cores[3]} changeGoal={getChangeCores(3)} />
        <Box goal={root} changeGoal={changeRoot} variant="core" />
        <Box goal={cores[4]} changeGoal={getChangeCores(4)} />
      </div>
      <div className="flex">
        <Box goal={cores[5]} changeGoal={getChangeCores(5)} />
        <Box goal={cores[6]} changeGoal={getChangeCores(6)} />
        <Box goal={cores[7]} changeGoal={getChangeCores(7)} />
      </div>
    </div>
  );
}
