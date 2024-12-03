import useChart from "@/src/hooks/useChart";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

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
  const { chart, changeCore, changeSub, changeAction } = useChart();
  const [isFocus, setIsFocus] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  function autoHeight() {
    textareaRef.current?.style.setProperty("height", "auto");
    textareaRef.current?.style.setProperty(
      "height",
      `${textareaRef.current.scrollHeight}px`
    );
  }

  useEffect(() => {
    autoHeight();
  }, []);

  const className = useMemo(() => {
    const key = `${variant}${isFocus ? "Focus" : ""}` as const;
    return {
      core: "rounded-lg basis-1/3 aspect-square flex justify-center items-center bg-tertiary border-[1px] border-black text-lg",
      coreFocus:
        "rounded-lg basis-1/3 aspect-square flex justify-center items-center bg-secondary border-[1px] border-black text-lg",
      sub: "rounded-lg basis-1/3 aspect-square flex justify-center items-center bg-quaternary border-[0.5px] border-[#DCDCDC] text-base",
      subFocus:
        "rounded-lg basis-1/3 aspect-square flex justify-center items-center bg-tertiary border-[0.5px] border-[#DCDCDC] text-base",
      action:
        "rounded-lg basis-1/3 aspect-square flex justify-center items-center bg-white border-[0.5px] border-[#DCDCDC] text-sm",
      actionFocus:
        "rounded-lg basis-1/3 aspect-square flex justify-center items-center bg-quaternary border-[0.5px] border-[#DCDCDC] text-sm",
    }[key];
  }, [isFocus]);

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
  }, [chart]);

  const onChange = useCallback(
    ({ title }: { title: string }) => {
      autoHeight();

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
    [chart]
  );

  return (
    <div className={className}>
      <textarea
        ref={textareaRef}
        className="w-full max-h-full overflow-y-hidden bg-transparent resize-none text-center"
        rows={1}
        value={value}
        onFocus={(e) => setIsFocus(true)}
        onBlur={(e) => setIsFocus(false)}
        onChange={(e) => onChange({ title: e.target.value })}
      />
    </div>
  );
}
