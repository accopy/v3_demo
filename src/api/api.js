import request from "@/utils/request.js";

//登录
export const login = (data) => {
  return request({
    url: "/api/login",
    method: "post",
    data,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
