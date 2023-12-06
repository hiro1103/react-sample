import { useState } from "react";
import StateCounter from "./StateCounter";
export default function StateParent() {
  //カウント合計を表すcount初期化
  const [count, setCount] = useState(0);
  // countを更新するためのupdate関数を準備
  const update = (step) => setCount((count) => count + step);
  return (
    <div>
      <p>総カウント：{count}</p>
      <StateCounter step={1} onUpdate={update} />
      <StateCounter step={5} onUpdate={update} />
      <StateCounter step={-1} onUpdate={update} />
    </div>
  );
}
