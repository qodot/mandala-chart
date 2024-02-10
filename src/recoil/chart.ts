import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const chartState = atom<Chart>({
  key: "chart.chartState",
  default: {
    core: {
      title: "Start Here!",
      subs: [
        {
          title: "Sub Goal 1",
          actions: [
            {
              title: "",
            },
            {
              title: "",
            },
            {
              title: "",
            },
            {
              title: "",
            },
            {
              title: "",
            },
            {
              title: "",
            },
            {
              title: "",
            },
            {
              title: "",
            },
          ],
        },
        {
          title: "Sub Goal 2",
          actions: [
            {
              title: "",
            },
            {
              title: "",
            },
            {
              title: "",
            },
            {
              title: "",
            },
            {
              title: "",
            },
            {
              title: "",
            },
            {
              title: "",
            },
            {
              title: "",
            },
          ],
        },
        {
          title: "Sub Goal 3",
          actions: [
            {
              title: "",
            },
            {
              title: "",
            },
            {
              title: "",
            },
            {
              title: "",
            },
            {
              title: "",
            },
            {
              title: "",
            },
            {
              title: "",
            },
            {
              title: "",
            },
          ],
        },
        {
          title: "Sub Goal 4",
          actions: [
            {
              title: "",
            },
            {
              title: "",
            },
            {
              title: "",
            },
            {
              title: "",
            },
            {
              title: "",
            },
            {
              title: "",
            },
            {
              title: "",
            },
            {
              title: "",
            },
          ],
        },
        {
          title: "Sub Goal 5",
          actions: [
            {
              title: "",
            },
            {
              title: "",
            },
            {
              title: "",
            },
            {
              title: "",
            },
            {
              title: "",
            },
            {
              title: "",
            },
            {
              title: "",
            },
            {
              title: "",
            },
          ],
        },
        {
          title: "Sub Goal 6",
          actions: [
            {
              title: "",
            },
            {
              title: "",
            },
            {
              title: "",
            },
            {
              title: "",
            },
            {
              title: "",
            },
            {
              title: "",
            },
            {
              title: "",
            },
            {
              title: "",
            },
          ],
        },
        {
          title: "Sub Goal 7",
          actions: [
            {
              title: "",
            },
            {
              title: "",
            },
            {
              title: "",
            },
            {
              title: "",
            },
            {
              title: "",
            },
            {
              title: "",
            },
            {
              title: "",
            },
            {
              title: "",
            },
          ],
        },
        {
          title: "Sub Goal 8",
          actions: [
            {
              title: "",
            },
            {
              title: "",
            },
            {
              title: "",
            },
            {
              title: "",
            },
            {
              title: "",
            },
            {
              title: "",
            },
            {
              title: "",
            },
            {
              title: "",
            },
          ],
        },
      ],
    },
  },
  effects_UNSTABLE: [persistAtom],
});
