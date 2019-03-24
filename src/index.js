import { createStore } from "redux";
import reducer from "./reducer";

// store の作成
const store = createStore(reducer);

// store が変更された際に実行する内容を登録する
store.subscribe(() => {
  // store.getState() で state を取得できる
  console.log(store.getState());
});

// action を dispatch
store.dispatch({ type: "PLUS", payload: { num: 1 } });
store.dispatch({ type: "PLUS", payload: { num: 10 } });
store.dispatch({ type: "MINUS", payload: { num: 1 } });
store.dispatch({ type: "MINUS", payload: { num: 10 } });
