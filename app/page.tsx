import ChartContainer from "@/src/component/ChartContainer";

export default function Home() {
  return (
    <>
      <header className="px-9">
        <div className="py-9 border-b-[1px] border-[#D9D9D9]">
          <div className="text-5xl font-extrabold leading-[1.15em]">
            Free
            <br />
            <span className="text-primary">Mandala-Chart</span>
            <br />
            Generator
          </div>
        </div>
      </header>

      <div className="flex flex-row">
        <div className="w-[480px]">
          <div className="px-9">
            <div className="py-9 border-b-[1px] border-[#D9D9D9]">
              <img src="/info1.png" />
              <div className="pt-9 flex flex-row">
                <img src="/icon1.svg" className="w-[30px] h-[30px]" />
                <div className="ml-3 text-2xl font-bold">
                  What is the Mandala-Chart?
                </div>
              </div>
              <div className="mt-3 text-base font-normal">
                <span className="font-bold">
                  THE EASISET WAY TO ACHIEVE YOUR GOALS!
                </span>
                &nbsp;The Mandalat Chart is a purposefulness technique created
                by Japanese designer Hiroaki Imaizumi. It made headlines when
                world-class Japanese baseball player Shohei Ohtani used it in
                high school. It can be completed by filling in a core goal,
                eight sub-goals, and eight action items.
              </div>
            </div>
          </div>

          <div className="px-9">
            <div className="py-9 border-b-[1px] border-[#D9D9D9]">
              <img src="/info2.png" />
              <div className="pt-9 flex flex-row">
                <img src="/icon2.svg" className="w-[30px] h-[30px]" />
                <div className="ml-3 text-2xl font-bold">
                  How to generate Mandala-chart
                </div>
              </div>
              <div className="mt-3 text-base font-normal">
                <span className="font-bold underline">Step 1.</span> First,
                decide on your 1 biggest core goal for 2024! This will be your
                core goal in the centermost column.
              </div>
              <div className="mt-1.5 text-base font-normal">
                <span className="font-bold underline">STEP 2.</span> Write 8
                sub-goals to accomplish your core goal.
              </div>
              <div className="mt-1.5 text-base font-normal">
                <span className="font-bold underline">Step 3.</span> Write down
                8 action items to accomplish each of the 8 sub- goals.
              </div>
            </div>
          </div>

          <div className="p-9">
            <img src="/info3.png" />
            <div className="pt-9 flex flex-row">
              <img src="/icon3.svg" className="w-[30px] h-[30px]" />
              <div className="ml-3 text-2xl font-bold">
                Let your friends know!
              </div>
            </div>
            <div className="mt-3 text-base font-normal">
              If you have friends you care about, let them know too. So that we
              can each reach our 2024 goals! Copy link
            </div>
          </div>
        </div>

        <div className="flex-1">
          <ChartContainer />
        </div>
      </div>
    </>
  );
}
