import request from 'supertest';
import app from '../../app';

// it('Should return 405 for request to the signup routes', () => {

// });

/**
 * Valid email condition:
 *  -- Standar email format from 'express-validator'
*/ 
describe('test validity of email input', () => {
  let password = '';

  beforeAll(() => {
    password = 'Valid12valid12'
  });

  it('Should return 422 if the email is not provided',async () => {
    await request(app)
      .post('/api/auth/signup')
      .send({password})
      .expect(422);
  });

  it('Should return 422 if the email not valid', async () => {
    await request(app)
      .post('/api/auth/signup')
      .send({ email: 'thisEmailIsNotValid', password })
      .expect(422);
  });

  // it('Should return 200 if email is valid',async () => {
  //   await request(app)
  //     .post('/api/auth/signup')
  //     .send({ email: 'test@gmail.com', password })
  //     .expect(200);
  // });
});


/**
 * Valid password condition:
 * - At least 8 character
 * - at most 32 character
 * - One uppercase letter
 * - One lowercase letter
 * - One number
 */ 
describe('test validity of password input', () => {
  let email = '';

  beforeAll(()  => {
    email = 'test@test.com'
  });

  it('Should return 422 if password is not provided',async () => {
    await request(app)
    .post('/api/auth/signup')
    .send({ email })
    .expect(422);
  });

  it('Should return 422 if password contains less than 8 character', async () => {
    await request(app)
      .post('/api/auth/signup')
      .send({ email, password: 'valid12' })
      .expect(422);
  });

  it('Should return 422 if password contains more than 32 character', async () => {
    await request(app)
      .post('/api/auth/signup')
      .send({ email, password: 'valid12jkasxhkfkhfhfllsfsfshlffhlsahlfasjkgfugkeawfukg' })
      .expect(422);
  });

  it('Should return 422 if password does not contains one lowercase letter', async () => {
    await request(app)
      .post('/api/auth/signup')
      .send({ email, password: 'A2734892470242347' })
      .expect(422);
  });

  it('Should return 422 if password does not contains one uppercase letter', async () => {
    await request(app)
      .post('/api/auth/signup')
      .send({ email, password: 'valid12valid12' })
      .expect(422);
  });

  it('Should return 422 if password does not contains number', async () => {
    await request(app)
      .post('/api/auth/signup')
      .send({ email, password: 'Validvalid' })
      .expect(422);
  });

  // it('Should return 200 if password valid', async () => {
  //   await request(app)
  //     .post('/api/auth/signup')
  //     .send({ email, password: 'Valid12valid12' })
  //     .expect(200);
  // });
})
