import httpMocks from "node-mocks-http";
import { isAuth } from "../../middleware/auth.js";
import faker from "faker";
import jwt from "jsonwebtoken";
import * as userReposotory from "../../middleware/auth.js";
import { findById } from "../../data/auth.js";

jest.mock("jsonwebtoken");
jest.mock("../../data/auth.js");

describe("Auth Middleware", () => {
  it(" Authorization header가 없는경우 401을 return", () => {
    const request = httpMocks.createRequest({
      method: "GET",
      url: "/schedule",
    });
    const response = httpMocks.createResponse();
    const next = jest.fn();

    isAuth(request, response, next);

    expect(response.statusCode).toBe(401);
    expect(response._getJSONData().message).toBe("Authentication Error");
    expect(next).not.toBeCalled();
  });

  it(" 지원하지 않는 Authorization 헤더일 때  401을 return", () => {
    const request = httpMocks.createRequest({
      method: "GET",
      url: "/schedule",
      headers: { Authorization: `Basic` },
    });
    const response = httpMocks.createResponse();
    const next = jest.fn();

    isAuth(request, response, next);

    expect(response.statusCode).toBe(401);
    expect(response._getJSONData().message).toBe("Authentication Error");
    expect(next).not.toBeCalled();
  });

  it(" 유효한 토큰이 아닌경우 401을 return", async () => {
    const token = faker.random.alphaNumeric(128);
    const request = httpMocks.createRequest({
      method: "GET",
      url: "/schedule",
      headers: { authorization: `Bearer ${token}` },
    });
    const response = httpMocks.createResponse();
    const next = jest.fn();
    jwt.verify = jest.fn((token, secret, callback) => {
      callback(new Error("bad token"), undefined);
    });

    await isAuth(request, response, next);

    expect(response.statusCode).toBe(401);
    expect(response._getJSONData().message).toBe("Authentication Error");
    expect(next).not.toBeCalled();
  });

  it(" 토큰에있는 사용자의 id로부터  사용자를 찾을 수 없을 때 401을 return", async () => {
    const token = faker.random.alphaNumeric(128);
    const userId = faker.random.alphaNumeric(32);
    const request = httpMocks.createRequest({
      method: "GET",
      url: "/schedule",
      headers: { authorization: `Bearer ${token}` },
    });
    const response = httpMocks.createResponse();
    const next = jest.fn();
    jwt.verify = jest.fn((token, secret, callback) => {
      callback(undefined, { id: userId });
    });
    userReposotory.findById = jest.fn((id) => Promise.resolve(undefined));

    await isAuth(request, response, next);

    expect(response.statusCode).toBe(401);
    expect(response._getJSONData().message).toBe("Authentication Error");
    expect(next).not.toBeCalled();
  });

  // it(" 유효한 토큰 값이 들어왔을 때", async () => {
  //   const token = faker.random.alphaNumeric(128);
  //   const userId = faker.random.alphaNumeric(32);
  //   const request = httpMocks.createRequest({
  //     method: "GET",
  //     url: "/schedule",
  //     headers: { authorization: `Bearer ${token}` },
  //   });
  //   const response = httpMocks.createResponse();
  //   const next = jest.fn();
  //   jwt.verify = jest.fn((token, secret, callback) => {
  //     callback(undefined, { id: userId });
  //   });
  //   userReposotory.findById = jest.fn((id) => Promise.resolve({ id }));

  //   await isAuth(request, response, next);

  //   expect(request).toMatchObject({ userId, token });
  //   expect(next).toHaveBeenCalledTimes(1);
  // });
});
