import Box from './Box'

export default function CoreGoalBox() {
  return (
    <div className="m-1 flex aspect-square basis-1/3 flex-col rounded-lg border-2 border-black bg-white">
      <div className="flex rounded-t-lg">
        <Box variant="sub" subIdx={0} />
        <Box variant="sub" subIdx={1} />
        <Box variant="sub" subIdx={2} />
      </div>
      <div className="flex">
        <Box variant="sub" subIdx={3} />
        <Box variant="core" />
        <Box variant="sub" subIdx={4} />
      </div>
      <div className="flex rounded-b-lg">
        <Box variant="sub" subIdx={5} />
        <Box variant="sub" subIdx={6} />
        <Box variant="sub" subIdx={7} />
      </div>
    </div>
  )
}
