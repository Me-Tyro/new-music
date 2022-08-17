import request from "@/utils/request";

/**
 * 获取轮播图
 * @return {*}
 */
export const banner = () => {
  return request('/banner', 'get')
}

/**
 * 获取推荐歌单
 * @param limit
 * @return {*}
 */
export const playList = (limit = 10) => {
  return request('/personalized', 'get', {limit: limit})
}

/**
 * 获取精品歌单
 * @param limit
 * @return {*}
 */
export const highQuality = (limit = 1) => {
  return request('/top/playlist/highquality', 'get', {limit: limit})
}
