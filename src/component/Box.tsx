import useChart from "@/src/hooks/useChart";
import { useCallback, useMemo } from "react";

type BoxProps = CoreBoxProps | SubBoxProps | ActionBoxProps;

type CoreBoxProps = {
  variant: "core";
  subIdx?: undefined;
  actionIdx?: undefined;
};

type SubBoxProps = {
  variant: "sub";
  subIdx: number;
  actionIdx?: undefined;
};

type ActionBoxProps = {
  variant: "action";
  subIdx: number;
  actionIdx: number;
};

export default function Box({ variant, subIdx, actionIdx }: BoxProps) {
  const className = {
    core: "basis-1/3 aspect-square flex justify-center items-center bg-primary border-[1px] border-black",
    sub: "basis-1/3 aspect-square flex justify-center items-center bg-[#F5F5F4] border-[0.5px] border-[#DCDCDC]",
    action:
      "basis-1/3 aspect-square flex justify-center items-center  bg-white border-[0.5px] border-[#DCDCDC]",
  }[variant];

  const { chart, changeCore, changeSub, changeAction } = useChart();

  const value = useMemo(() => {
    if (variant === "core") {
      return chart.core.title;
    }

    if (variant === "sub") {
      return chart.core.subs[subIdx].title;
    }

    if (variant === "action") {
      return chart.core.subs[subIdx].actions[actionIdx].title;
    }
  }, [variant, chart]);

  const change = useCallback(
    ({ title }: { title: string }) => {
      if (variant === "core") {
        changeCore({ title });
      }

      if (variant === "sub") {
        changeSub({ title, idx: subIdx });
      }

      if (variant === "action") {
        changeAction({ title, subIdx: subIdx, idx: actionIdx });
      }
    },
    [variant, chart]
  );

  return (
    <div className={className}>
      <textarea
        className="w-full h-full bg-transparent resize-none text-xs"
        value={value}
        onChange={(e) => change({ title: e.target.value })}
      />
    </div>
  );
}
