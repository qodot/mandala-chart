import Box from "./Box";

type SubGoalBoxProps = { idx: number };

export default function SubGoalBox({ idx }: SubGoalBoxProps) {
  return (
    <div className="basis-1/3 aspect-square m-1 bg-white border-2 border-black flex flex-col">
      <div className="flex">
        <Box variant="action" subIdx={idx} actionIdx={0} />
        <Box variant="action" subIdx={idx} actionIdx={1} />
        <Box variant="action" subIdx={idx} actionIdx={2} />
      </div>
      <div className="flex">
        <Box variant="action" subIdx={idx} actionIdx={3} />
        <Box variant="sub" subIdx={idx} />
        <Box variant="action" subIdx={idx} actionIdx={4} />
      </div>
      <div className="flex">
        <Box variant="action" subIdx={idx} actionIdx={5} />
        <Box variant="action" subIdx={idx} actionIdx={6} />
        <Box variant="action" subIdx={idx} actionIdx={7} />
      </div>
    </div>
  );
}
