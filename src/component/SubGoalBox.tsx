import Box from './Box'

type SubGoalBoxProps = { idx: number }

export default function SubGoalBox({ idx }: SubGoalBoxProps) {
  return (
    <div className="m-1 flex aspect-square basis-1/3 flex-col rounded-lg border-2 border-black bg-white">
      <div className="flex rounded-t-lg">
        <Box variant="action" subIdx={idx} actionIdx={0} />
        <Box variant="action" subIdx={idx} actionIdx={1} />
        <Box variant="action" subIdx={idx} actionIdx={2} />
      </div>
      <div className="flex">
        <Box variant="action" subIdx={idx} actionIdx={3} />
        <Box variant="sub" subIdx={idx} />
        <Box variant="action" subIdx={idx} actionIdx={4} />
      </div>
      <div className="flex rounded-b-lg">
        <Box variant="action" subIdx={idx} actionIdx={5} />
        <Box variant="action" subIdx={idx} actionIdx={6} />
        <Box variant="action" subIdx={idx} actionIdx={7} />
      </div>
    </div>
  )
}
