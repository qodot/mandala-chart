type BoxProps = {
  goal: Goal;
  changeGoal: ({ title }: { title: string }) => void;
  variant?: "core" | "sub" | "action";
};

export default function Box({
  goal,
  changeGoal,
  variant = "action",
}: BoxProps) {
  const className = {
    core: "basis-1/3 aspect-square flex justify-center items-center bg-primary border-[1px] border-black",
    sub: "basis-1/3 aspect-square flex justify-center items-center bg-[#F5F5F4] border-[0.5px] border-[#DCDCDC]",
    action:
      "basis-1/3 aspect-square flex justify-center items-center  bg-white border-[0.5px] border-[#DCDCDC]",
  }[variant];

  return (
    <div className={className}>
      <textarea
        className="w-full h-full bg-transparent resize-none"
        value={goal.title}
        onChange={(e) => {
          changeGoal({ title: e.target.value });
        }}
      />
    </div>
  );
}
