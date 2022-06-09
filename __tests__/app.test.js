const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/companions/:id should return companion detail', async () => {
    const res = await request(app).get('/companions/1');
    const camellia = {
      id: '1',
      name: 'Camellia',
      class: 'Shaman',
      chapter: '1',
    };
    expect(res.body).toEqual(camellia);
  });
  afterAll(() => {
    pool.end();
  });
});
