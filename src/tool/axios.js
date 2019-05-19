import qs from 'qs';
import iView from 'iview';
import axios from 'axios';
import {getCookie} from '@/tool/common.js';
export default function (config) {
  // config.data.sesionId = getCookie('sessionId')
  // config.data.coachSessionId = getCookie('coachSessionId')
  if (config.isFormData) {
    config.data = qs.stringify(config.data);
    !config.headers && (config.headers = {});
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
  }

  return axios(config).then(
    res => {
      if (res.data.status >= 1) {
        config.showSuccess && iView.Notice.success({
          duration: 2,
          title: '通知',
          desc: res.data.msg
        });
        return Promise.resolve(res);
      }

      if (res.data.status === 0) {
        !config.hiddenError && iView.Notice.error({
          duration: 2,
          title: '提示',
          desc: res.data.msg
        });
        return Promise.reject(res);
      }

      if (res.data.status < 0) {
        location.href = `#/login?returnUrl=${location.href}`;
        localStorage.removeItem('user');
        return Promise.reject(res);
      }
    }
  );
}
