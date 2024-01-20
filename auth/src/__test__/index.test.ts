import request from "supertest";
import { app } from "../app";

it('Respond with a status code 200', () => {
    request(app)
        .get("/")
        .expect(200)
});

