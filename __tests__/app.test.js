const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

const { companions } = require('../data/companions');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  
  it('/companions should return a list of companions', async () => {
    const res = await request(app).get('/companions');
    const expected = companions.map((companion) => {
      return { id: companion.id, name: companion.name, class: companion.class };
    });
    expect(res.body).toEqual(expected);
  });

  it('/companions/:id should return companion detail', async () => {
    const res = await request(app).get('/companions/1');
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
