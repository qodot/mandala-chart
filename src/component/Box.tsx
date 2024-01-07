type BoxProps = {
  goal: Goal;
  changeGoal: ({ title }: { title: string }) => void;
};

export default function Box({ goal, changeGoal }: BoxProps) {
  return (
    <div className="basis-1/3 aspect-square bg-white border border-black flex justify-center items-center">
      <input
        className="w-full"
        type="text"
        value={goal.title}
        onChange={(e) => {
          changeGoal({ title: e.target.value });
        }}
      />
    </div>
  );
}
