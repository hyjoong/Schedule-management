const httpMocks = require("node-mocks-http");
const userController = require("../../../../controller/auth");
const userService = require("../../../../data/auth");
const signupData = require("../../../data/signup.json");

let req, res, next;

beforeEach(() => {
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
  next = jest.fn();
});

describe("postToken Unit Test", () => {
  beforeEach(() => {
    req.body = signupData;
  });

  it("userController에 signup이 존재하는가?", () => {
    expect(typeof userController.signup).toBe("function");
  });

  it("userController의 signup에서 service의 findByEmail 를 호출하는가?", async () => {
    await userController.signup(req, res, next);
    expect(userService.findByEmail).toBeCalled();
  });

  it("userController의 signup에서 service의 findByEmail에 인자값을 넣어서 호출하는가?", async () => {
    await userController.signup(req, res, next);
    expect(userService.findByEmail).toBeCalledWith(req.body.email);
  });

  it("userController의 login에서 상태 코드를 200을 넘겨주는가?", async () => {
    await userController.login(req, res, next);
    expect(res.statusCode).toBe(200);
  });

  it("userController의 login에서 회원가입 하지 않은 이메일을 입력한 경우 에러를 호출하는가?", async () => {
    req.body = { email: "unknown@gmail.com", password: "111222333" };
    await userController.login(req, res, next);
    expect(next).toBeCalledWith("email error");
  });

  // it("userController의 postToken에서 비밀번호가 일치하지 않는 경우 에러를 호출하는가?", async () => {
  //   req.body = { userId: "abc", password: "1" };
  //  });

  it("userController의 login에서 입력값이 제대로 들어오지 않는 경우 에러를 호출하는가?", async () => {
    req.body = { email: "test" };
    await userController.login(req, res, next);
    expect(next).toBeCalledWith("입력값이 제대로 들어오지 않았습니다.");
  });
});
