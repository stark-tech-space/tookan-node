import dotenv from 'dotenv';
import api from '../src/api';

dotenv.config();

const client = new api({
  apiKey: process.env.API_KEY,
});

describe('example test', () => {
  it('should be truthy', () => {
    expect(true).toBeTruthy();
  });
});

xdescribe('task API', () => {
  it('should create a task', async () => {
    await client.createTask({});
  });
});
