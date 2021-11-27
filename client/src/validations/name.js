export const validatename = (name) => {
  if (name.length < 5 || name.length > 14) {
    throw Error("ID는 5글자 이상 14글자 이하로 해주세요.");
  }
};
