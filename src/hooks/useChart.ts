"use client";

import { useCallback, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { chartState } from "@/src/recoil/chart";

type UseChartResp = {
  chart: Chart;
  changeCore: (args: { title: string }) => void;
  changeSub: (args: { title: string; idx: number }) => void;
  changeAction: (args: { title: string; subIdx: number; idx: number }) => void;
};

export default function useChart(): UseChartResp {
  const [chart, setChart] = useRecoilState(chartState);

  const changeCore = useCallback(
    ({ title }: { title: string }) => {
      setChart({ core: { ...chart.core, title } });
    },
    [chart]
  );

  const changeSub = useCallback(
    ({ title, idx }: { title: string; idx: number }) => {
      const newSubs = [...chart.core.subs];
      newSubs[idx] = { title, actions: chart.core.subs[idx].actions };

      setChart({ core: { ...chart.core, subs: newSubs } });
    },
    [chart]
  );

  const changeAction = useCallback(
    ({
      title,
      subIdx,
      idx,
    }: {
      title: string;
      subIdx: number;
      idx: number;
    }) => {
      const newActions = [...chart.core.subs[subIdx].actions];
      newActions[idx] = { title };

      const newSubs = [...chart.core.subs];
      newSubs[subIdx] = { ...chart.core.subs[subIdx], actions: newActions };

      setChart({ core: { ...chart.core, subs: newSubs } });
    },
    [chart]
  );

  return {
    chart,
    changeCore,
    changeSub,
    changeAction,
  };
}
