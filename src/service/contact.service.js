import {call} from '../tools/Api';

 export const sendMessage = async (paylod) => {
  return await call('post', 'submit', paylod )
}

