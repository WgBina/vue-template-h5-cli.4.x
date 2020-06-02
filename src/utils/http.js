import axios from 'axios';
import ElementUI from 'element-ui';
// url 接口
// params  参数  get key=value  post 对象形式
// ifHideTit 是否隐藏提示有值表示隐藏
async function get (url, params = '', ifHideTit) {
  return new Promise (resolve => {
    let resData = {
      success: false,
      errorMsg: '',
      data: [],
    };
    if (!url) {
      resData.errorMsg = '请输入接口!';
      ElementUI.Message.warning (resData.errorMsg);
      resolve (resData);
      return;
    }
    if (params) {
      params = `?${params}`;
    }
    axios.get (url + params).then (
      res => {
        if (res.data.status == 100) {
          resData.success = true;
          resData.data = res.data.data || [];
        } else {
          resData.errorMsg = res.data.msg || '服务器出小差了！';
          if (!ifHideTit) {
            ElementUI.Message.warning (resData.errorMsg);
          }
        }
        resolve (resData);
      },
      err => {
        resData.errorMsg = '服务器出小差了！';
        if (!ifHideTit) {
          ElementUI.Message.error (resData.errorMsg);
        }
        resolve (resData);
      }
    );
  });
}

async function postBlob (url, params = {}, ifHideTit) {
  return new Promise (resolve => {
    let resData = {
      success: false,
      errorMsg: '',
      data: [],
    };
    if (!url) {
      resData.errorMsg = '请输入接口!';
      ElementUI.Message.warning (resData.errorMsg);
      resolve (resData);
      return;
    }

    let ret = '';
    for (let it in params) {
      ret +=
        encodeURIComponent (it) + '=' + encodeURIComponent (params[it]) + '&';
    }

    axios
      .post (url, ret, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        responseType: 'blob',
      })
      .then (
        res => {
          resData.success = true;
          resData.data = res;
          resolve (resData);
        },
        err => {
          resData.errorMsg = '服务器出小差了！';
          if (!ifHideTit) {
            ElementUI.Message.error (resData.errorMsg);
          }
          resolve (resData);
        }
      );
  });
}

async function post (url, params = {}, ifHideTit) {
  return new Promise (resolve => {
    let resData = {
      success: false,
      errorMsg: '',
      data: [],
    };
    if (!url) {
      resData.errorMsg = '请输入接口!';
      ElementUI.Message.warning (resData.errorMsg);
      resolve (resData);
      return;
    }
    axios.post (url, params).then (
      res => {
        if (res.data.status == 100) {
          resData.success = true;
          resData.data = res.data.data || [];
        } else {
          resData.errorMsg = res.data.msg || '服务器出小差了！';
          if (!ifHideTit) {
            ElementUI.Message.warning (resData.errorMsg);
          }
        }
        resolve (resData);
      },
      err => {
        resData.errorMsg = '服务器出小差了！';
        if (!ifHideTit) {
          ElementUI.Message.error (resData.errorMsg);
        }
        resolve (resData);
      }
    );
  });
}

async function put (url, params = {}, ifHideTit) {
  return new Promise (resolve => {
    let resData = {
      success: false,
      errorMsg: '',
      data: [],
    };
    if (!url) {
      resData.errorMsg = '请输入接口!';
      ElementUI.Message.warning (resData.errorMsg);
      resolve (resData);
      return;
    }
    axios
      .put (url, {
        ...params,
      })
      .then (
        res => {
          if (res.data.status == 100) {
            resData.success = true;
            resData.data = res.data.data || [];
          } else {
            resData.errorMsg = res.data.msg || '服务器出小差了！';
            if (!ifHideTit) {
              ElementUI.Message.warning (resData.errorMsg);
            }
          }
          resolve (resData);
        },
        err => {
          resData.errorMsg = '服务器出小差了！';
          if (!ifHideTit) {
            ElementUI.Message.error (resData.errorMsg);
          }
          resolve (resData);
        }
      );
  });
}

async function del (url, params = {}, ifHideTit) {
  return new Promise (resolve => {
    let resData = {
      success: false,
      errorMsg: '',
      data: [],
    };
    if (!url) {
      resData.errorMsg = '请输入接口!';
      ElementUI.Message.warning (resData.errorMsg);
      resolve (resData);
      return;
    }
    axios
      .delete (url, {
        data: {
          ...params,
        },
      })
      .then (
        res => {
          if (res.data.status == 100) {
            resData.success = true;
            resData.data = res.data.data || [];
          } else {
            resData.errorMsg = res.data.msg || '服务器出小差了！';
            if (!ifHideTit) {
              ElementUI.Message.warning (resData.errorMsg);
            }
          }
          resolve (resData);
        },
        err => {
          resData.errorMsg = '服务器出小差了！';
          if (!ifHideTit) {
            ElementUI.Message.error (resData.errorMsg);
          }
          resolve (resData);
        }
      );
  });
}

// 设置请求头
function setAuthorization (params) {
  return new Promise (resolve => {
    let resData = {
      success: false,
      errorMsg: '',
      data: [],
    };
    if (!params) {
      resData.errorMsg = '请输入设置请求头内容';
      ElementUI.Message.warning (resData.errorMsg);
      resolve (resData);
      return;
    }
    resData.success = true;
    axios.defaults.headers.common['Authorization'] = params;
    resolve (resData);
  });
}

export default {
  get,
  post,
  put,
  del,
  setAuthorization,
  postBlob,
};
