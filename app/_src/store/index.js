
const context = require['context']('./model', false, /\.(js|ts)$/);
const getModel = context.keys().map(key => context(key));
const Store = {};

getModel.forEach(model => {
  Store[model.default.namespace] = model.default;
});

export default Store;