import BigBox from "@/src/component/BigBox";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex">
        <BigBox />
        <BigBox />
        <BigBox />
      </div>
      <div className="flex">
        <BigBox />
        <BigBox />
        <BigBox />
      </div>
      <div className="flex">
        <BigBox />
        <BigBox />
        <BigBox />
      </div>
    </div>
  );
}
