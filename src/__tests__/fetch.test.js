import Countries, { Data } from '../redux/fetch';

describe('Action Creator test', () => {
  it('Action Creator test', () => {
    expect(Data('string')).toEqual({ payload: 'string', type: 'ADDDATA' });
  });
  it('Reducer test', () => {
    expect(Countries(0, Data([10, 20]))).toEqual([10, 20]);
  });
});
