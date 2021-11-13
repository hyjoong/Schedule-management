export const validateNickname = (nickname) => {
  if (nickname.length < 2 || nickname.length > 8) {
    throw Error("닉네임은 2글자 이상 8글자 이하로 해주세요.");
  }
};
