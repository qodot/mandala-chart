type BoxProps = {
  goal: Goal;
};

export default function Box({ goal }: BoxProps) {
  return (
    <div className="basis-1/3 aspect-square bg-white border border-black flex justify-center items-center">
      <input
        className="w-full"
        type="text"
        defaultValue={goal.title}
        onChange={(e) => {
          goal.changeTitle(e.target.value);
        }}
      />
    </div>
  );
}
