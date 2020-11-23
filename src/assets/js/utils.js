import axios from 'axios';
import persistedstate from 'vuex-persistedstate';

// export const loadView = (view = () => import(`~/views/${view}.vue`));

/* vuex */
// eslint-disable-next-line no-return-assign
export const set = property => (store, payload) => (store[property] = payload);
// eslint-disable-next-line no-return-assign
export const toggle = property => store => (store[property] = !store[property]);
export const push = property => (store, payload) => store[property].push(payload);

/* axios */

const validateAPI = ({ data }) => {
  if (data.result && data.result.code === 'N') throw data.result;
  return data;
};

export const GET = (url, params, headers) => axios.get(url, { params, headers }).then(validateAPI);
export const POST = (url, params, headers) =>
  axios.post(url, params, { headers }).then(validateAPI);
export const PUT = (url, params, headers) => axios.put(url, params, { headers }).then(validateAPI);
export const DELETE = (url, data, headers) =>
  axios.delete(url, { data, headers }).then(validateAPI);

/* auto require route */
export const autoRequireRoute = () => {
  const routesFiles = require.context('~/router/routes', true, /\.js$/);
  const routes = routesFiles.keys().reduce((acc, modulePath) => {
    const [, isDir] = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1').split('/');
    const value = routesFiles(modulePath);
    return isDir ? acc : acc.concat(value.default);
  }, []);
  return routes;
};

/* auto require vuex module */
export const autoRequireModule = () => {
  const modulesFiles = require.context('~/store/modules', true, /\.js$/);
  const modules = modulesFiles.keys().reduce((acc, modulePath) => {
    const [moduleName] = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1').split('/');
    const value = modulesFiles(modulePath);
    if (!value.default.namespaced) return acc;
    acc[moduleName] = value.default;
    return acc;
  }, {});
  return modules;
};

/* vuex plugin */
export const createPersistedstate = () =>
  persistedstate({
    storage: {
      getItem: key => decrypt(sessionStorage.getItem(key)),
      setItem: (key, value) => sessionStorage.setItem(key, encrypt(value)),
      removeItem: key => sessionStorage.removeItem(key)
    }
  });
