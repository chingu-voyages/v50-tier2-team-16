import TipButton from "@/components/atoms/drawer/Button.tip";
const tipPercentages = [0, 5, 8, 10, 20];
const TipButtons = ({ onClickTipPrice, totalPrice }) => {
  return (
    <div className="flex gap-1 mx-1">
      {tipPercentages.map((tip) => {
        return (
          <TipButton
            key={tip}
            onClick={onClickTipPrice}
            tipPercentage={tip}
            amount={totalPrice}
          />
        );
      })}
    </div>
  );
};

export default TipButtons;
