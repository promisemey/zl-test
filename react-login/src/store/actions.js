export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export function loginSuccess(username) {
  return { type: LOGIN_SUCCESS, payload: username };
}

export function loginFailure(error) {
  return { type: LOGIN_FAILURE, payload: error };
}

export function loginAction(payload) {
  console.log("ewr");
  return (dispatch) => {
    // 模拟异步请求
    setTimeout(() => {
      if (payload.username === "admin" && payload.password === "Admin888.") {
        dispatch(loginSuccess(payload.username));
      } else {
        dispatch(loginFailure("用户名或密码错误"));
      }
    }, 2000);
  };
}
