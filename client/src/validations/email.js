export const isValidateEmailFormat = (email) => {
  const re = /^[A-Za-z0-9][A-Za-z0-9._-]+[@]{1}[a-z]+[.]{1}[a-z]{1,4}$/;
  return re.test(email.toLowerCase());
};

export const isValidateEmailLength = (email) => {
  return email.length <= 30;
};

export const validateEmail = (email) => {
  if (!isValidateEmailFormat(email)) {
    throw Error("유요한 이메일이 아닙니다");
  }
  if (!isValidateEmailLength(email)) {
    throw Error("이메일은 30글자 이하로만 입력해주세요.");
  }
};
