import { useState } from "react";

export default function EventMouse({ beforeSrc, afterSrc, alt }) {
  //現在表示している画像
  const [current, setCurrnt] = useState(beforeSrc);
  //mouseover/mouseleaveイベントハンドラーを準備
  const handleEnter = () => setCurrnt(afterSrc);
  const handleLeave = () => setCurrnt(beforeSrc);
  return (
    <img
      src={current}
      alt={alt}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    />
  );
}
