import { useState } from "react";
import Box from "./Box";

type CoreBoxProps = {
  core: Goal;
};

export default function CoreBox({ core }: CoreBoxProps) {
  const [details, setDetails] = useState<Goal[]>([
    {
      title: "",
      changeTitle: (title: string) => changeTitleOf(title, 0),
    },
    {
      title: "",
      changeTitle: (title: string) => changeTitleOf(title, 1),
    },
    {
      title: "",
      changeTitle: (title: string) => changeTitleOf(title, 2),
    },
    {
      title: "",
      changeTitle: (title: string) => changeTitleOf(title, 3),
    },
    {
      title: "",
      changeTitle: (title: string) => changeTitleOf(title, 4),
    },
    {
      title: "",
      changeTitle: (title: string) => changeTitleOf(title, 5),
    },
    {
      title: "",
      changeTitle: (title: string) => changeTitleOf(title, 6),
    },
    {
      title: "",
      changeTitle: (title: string) => changeTitleOf(title, 7),
    },
  ]);

  function changeTitleOf(title: string, idx: number): void {
    const newDetail = { ...details[idx], title };
    const newDetails = [...details];
    newDetails[idx] = newDetail;
    setDetails(newDetails);
  }

  return (
    <div className="grow-1 shrink-0 basis-1/3 aspect-square m-1 bg-white border border-black flex flex-col">
      <div className="flex">
        <Box goal={details[0]} />
        <Box goal={details[1]} />
        <Box goal={details[2]} />
      </div>
      <div className="flex">
        <Box goal={details[3]} />
        <Box goal={core} />
        <Box goal={details[4]} />
      </div>
      <div className="flex">
        <Box goal={details[5]} />
        <Box goal={details[6]} />
        <Box goal={details[7]} />
      </div>
    </div>
  );
}
