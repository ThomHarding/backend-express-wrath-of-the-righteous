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
    console.log(res);
    const camellia = {
      id: '1',
      name: 'Camellia',
      alignment: 'Chaotic Evil',
      class: 'Shaman',
      chapter: 1,
      pathlocked: false
    };
    expect(res.body).toEqual(camellia);
  });
  
  afterAll(() => {
    pool.end();
  });
});
