import { useReducer } from "react";

// reducer : 변환기
// -> 상태를 실제로 변화시키는 변환기 역할

function reducer(state, action) {
  if (action.type === "INCREASE") {
    return state + action.data;
  } else if (action.type === "DECREASE") {
    return state - action.data;
  }

  // switch문이 일반적으로 많이 씀.
  switch (action.type) {
    case "INCREASE":
      return state + action.data;
    case "DECREASE":
      return state + action.data;
    default:
      state;
  }
}

const Exam = () => {
  // dispatch : 발송하다, 급송하다
  // -> 상태 변화가 있어야 한다는 사실을 알리는, 발송하는 함수
  const [state, dispath] = useReducer(reducer, 0);

  const onClickPlus = () => {
    // 인수: 상태가 어떻케 변화되길 원하는지
    // -> 액션 객체
    dispath({
      type: "INCREASE",
      data: 1,
    });
  };

  const onClickMinus = () => {
    dispath({
      type: "DECREASE",
      data: 1,
    });
  };

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
    </div>
  );
};

export default Exam;
