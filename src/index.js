import React from "react";
import { render } from "react-dom";

import { createStore } from "redux";
import reducer from "./reducer";

// React Component に store を渡すために
// Provider でラッピング
import { Provider } from "react-redux";

// 別ファイルに切り脱している
import App from "./App";

const store = createStore(reducer);

// Provider でラップした上で
// store を渡す
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
