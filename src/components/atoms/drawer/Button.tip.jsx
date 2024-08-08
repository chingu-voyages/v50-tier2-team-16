const TipButton = ({ onClick, amount, tipPercentage }) => {
  const tipAmount =
    tipPercentage === 0 ? 0 : Math.round((tipPercentage / 100) * amount);

  return (
    <div
      className="w-20 h-16 bg-slate-100 hover:bg-slate-300 text-center border-2 border-slate-200 cursor-pointer"
      onClick={() => onClick(tipAmount)}
    >
      {tipPercentage === 0 ? (
        <p className="text-sky-500">No tip</p>
      ) : (
        <p className="text-sky-500">{tipPercentage}%</p>
      )}
      <p>${tipAmount}</p>
    </div>
  );
};

export default TipButton;
