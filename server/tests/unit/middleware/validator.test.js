import httpMocks from "node-mocks-http";
import faker from "faker";
import { validate } from "../../../middleware/validator";
import * as validator from "express-validator";

jest.mock("express-validator");

describe("middleware ", () => {
  it("validation 에러가 없으면  next 호출", () => {
    const request = httpMocks.createRequest();
    const response = httpMocks.createResponse();
    const next = jest.fn();
    validator.validationResult = jest.fn(() => ({ isEmpty: () => true }));

    validate(request, response, next);

    expect(next).toBeCalled();
  });
  it("validation 에러가 있으면  400을 return", () => {
    const request = httpMocks.createRequest();
    const response = httpMocks.createResponse();
    const next = jest.fn();
    validator.validationResult = jest.fn(() => ({
      isEmpty: () => false,
      array: () => [
        {
          isEmpty: () => false,
          array: () => [{ msg: "Error" }],
        },
      ],
    }));

    validate(request, response, next);

    expect(next).not.tobeCalled();
    expect(response.statusCode).toBeCalled(400);
    expect(response._getJSONData().message).toBe("Error");
  });
});
