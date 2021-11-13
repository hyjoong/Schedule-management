export const validateUsername = (username) => {
  if (username.length < 5 || username.length > 14) {
    throw Error("아이디는 5글자 이상 14글자 이하로 해주세요.");
  }
};
