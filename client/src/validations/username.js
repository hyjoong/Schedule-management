export const validateUsername = (username) => {
  if (username.length < 2 || username.length > 8) {
    throw Error("닉네임은 2글자 이상 8글자 이하로 해주세요.");
  }
};
