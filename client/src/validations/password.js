export const validatePassword = (password) => {
  if (password.length < 4 || password.length > 20) {
    throw Error("비밀번호는 4글자 이상 20글자 이하로만 입력해주세요.");
  }
};
