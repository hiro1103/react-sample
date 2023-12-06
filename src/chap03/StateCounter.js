export default function StateCounter({ step, onUpdate }) {
  //ボタンクリックで親Stateにstep値だけ加算
  const handleClick = () => onUpdate(step);
  return (
    <button className="cnt" onClick={handleClick}>
      <span>{step}</span>
    </button>
  );
}
