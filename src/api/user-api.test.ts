import request from "supertest";
import { app } from "../index";

describe('POST /', () => {
  it('POST user / create', () => {
    return request(app)
      .post('/api/v1/users')
      .send({
        firstName: "first",
        lastName: "last",
        age: 12,
        email: "hi@gmail.com",
        mobile: "+9112312312"
      })
      .expect(201)
      .then((response) => {
        expect(response.body).toEqual(
            expect.objectContaining({
              id: expect.any(String)
            })
        );
      });
  });

  
});