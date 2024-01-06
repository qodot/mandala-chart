import Box from "./Box";

type RootBoxProps = {
  root: Goal;
  cores: Goal[];
};

export default function RootBox({ root, cores }: RootBoxProps) {
  return (
    <div className="basis-1/3 aspect-square m-1 bg-white border border-black flex flex-col">
      <div className="flex">
        <Box goal={cores[0]} />
        <Box goal={cores[1]} />
        <Box goal={cores[2]} />
      </div>
      <div className="flex">
        <Box goal={cores[3]} />
        <Box goal={root} />
        <Box goal={cores[4]} />
      </div>
      <div className="flex">
        <Box goal={cores[5]} />
        <Box goal={cores[6]} />
        <Box goal={cores[7]} />
      </div>
    </div>
  );
}
