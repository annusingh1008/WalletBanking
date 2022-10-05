import { getBalanceConstants } from '../../actions/constants';
import balanceReducer from '../balance.reducer';

describe('reducer', () => {
    describe('with LOGIN_SUCCESS action', () => {
      it('returns deduced state', () => {
        const prevState = {
            amount: ''
        }
  
        const payload = {
          amount: '100'
        };
  
        const nextState = balanceReducer(prevState, {
          type: getBalanceConstants.GET_BALANCE_SUCCESS,
          payload
        });
  
        expect(nextState).toStrictEqual(expect.objectContaining({ }), {});
      });
    });
 
})