// 액션 생성 함수
export const setLightMode = () => {
  return {
    type: "LIGHTMODE",
  };
};
export const setDarkMode = () => {
  return {
    type: "DARKMODE",
  };
};

type StateType = {
  isLightMode: boolean;
};

type ActionType = {
  type: "LIGHTMODE" | "DARKMODE";
}

// 초기상태
const initialState: StateType = {
  isLightMode: false,
};

// 리듀서 함수
function reducer(state = initialState, action: ActionType) {
  switch (action.type) {
    case "LIGHTMODE":
      return {
        isLightMode: true,
      };
    case "DARKMODE":
      return {
        isLightMode: false,
      };
    default: // 해당되는 상태가 없을 때 상태 그대로 리턴
      return state;
  }
}

export default reducer;
