import Box from "./Box";

export default function CoreGoalBox() {
  return (
    <div className="rounded-lg basis-1/3 aspect-square m-1 bg-white border-2 border-black flex flex-col">
      <div className="flex rounded-lg">
        <Box variant="sub" subIdx={0} />
        <Box variant="sub" subIdx={1} />
        <Box variant="sub" subIdx={2} />
      </div>
      <div className="flex rounded-lg">
        <Box variant="sub" subIdx={3} />
        <Box variant="core" />
        <Box variant="sub" subIdx={4} />
      </div>
      <div className="flex rounded-lg">
        <Box variant="sub" subIdx={5} />
        <Box variant="sub" subIdx={6} />
        <Box variant="sub" subIdx={7} />
      </div>
    </div>
  );
}
