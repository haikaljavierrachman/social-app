import request from 'supertest';
import app from '../../app';

// it('Should return 405 for request to the signup routes', () => {

// });

it('should return 422 if the email is not valid', async () => {
  await request(app).post('/api/auth/signup').send({}).expect(422);

  await request(app)
    .post('/api/auth/signup')
    .send({ email: 'thisemailIsInvalid' })
    .expect(422);
});
