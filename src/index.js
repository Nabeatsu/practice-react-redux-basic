import { createStore } from "redux";

const reducer = (state = 0, action) => {
  switch (action.type) {
    case "PLUS_ONE":
      return state + 1;
    case "MINUS_ONE":
      return state - 1;
    default:
      // 初期値
      return state;
  }
};

// store の作成
const store = createStore(reducer);

// store が変更された際に実行する内容を登録する
store.subscribe(() => {
  // store.getState() で state を取得できる
  console.log(store.getState());
});

// action を dispatch
store.dispatch({ type: "PLUS_ONE" });
store.dispatch({ type: "PLUS_ONE" });
store.dispatch({ type: "MINUS_ONE" });
store.dispatch({ type: "MINUS_ONE" });
