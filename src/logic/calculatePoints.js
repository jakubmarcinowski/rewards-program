import { firstRewardLimit, secondRewardLimit } from "./const";

export const calculatePoints = (amount) => {
  if (amount > firstRewardLimit && amount <= secondRewardLimit) {
    return amount - firstRewardLimit;
  }
  if (amount > secondRewardLimit) {
    return (
      (amount - secondRewardLimit) * 2 + (secondRewardLimit - firstRewardLimit)
    );
  }
  return 0;
};
