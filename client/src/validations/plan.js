export const validatePlan = (plan) => {
  if (plan.length > 15) {
    throw Error("계획은 15글자 이하로 입력해주세요.");
  }
};

export const validateText = (plan) => {
  if (plan.length > 15) {
    throw Error("글자는 15글자 이하로 입력해주세요.");
  }
};
