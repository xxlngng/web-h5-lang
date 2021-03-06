import dayjs from "dayjs";

// 获取地址栏参数
export const getUrlKey = (name) => {
  return (
    decodeURIComponent(
      (new RegExp("[?|&]" + name + "=" + "([^&;]+?)(&|#|;|$)").exec(
        location.href
        // eslint-disable-next-line no-sparse-arrays
      ) || [, ""])[1].replace(/\+/g, "%20")
    ) || null
  );
};

export const formateTime = (value, fmt) => {
  if (!value) return "";

  return dayjs(value).format(fmt);
};
