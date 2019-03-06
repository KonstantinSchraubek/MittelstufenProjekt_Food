import { Rezept } from './rezept';
import * as data from '../../assets/response.json';

describe('Rezept', () => {
  it('Should get values from response obj', () => {
    var r: Rezept = new Rezept(data.hits[0]);
    expect(r.calories).toBeDefined()
  });

  it('Should get right values from response obj', () => {
    var r: Rezept = new Rezept(data.hits[0]);
    expect(r.calories).toBe(4230.305691201081);
  });
});
