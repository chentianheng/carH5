import Axios from '@/tool/axios.js';

export default class Drive {
  constructor(options) {
    options = options || {};
    for (let attr in options) {
      this[attr] = options[attr];
    }
  }
  getMember(type) {
    return Axios({
      url: `/api/member`,
      method: 'get',
      params: {
        type: type
      }
    }).then(
      res => {
        res.data.data = res.data.data || [];
        let list = res.data.data;
        return Promise.resolve(res);
      },
      err => Promise.reject(err)
    );
  }

}


