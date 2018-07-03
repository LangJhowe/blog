import jsonp from 'common/js/jsonp'
import {commonParams} from './config'

export function getSongVkey (songmid) { // 获取歌曲的vkey
    const url = 'https://c.y.qq.com/base/fcgi-bin/fcg_music_express_mobile3.fcg'
    const data = Object.assign({}, {
      callback: 'musicJsonCallback',
      loginUin: 0,
      format: 'jsonp',
      platform: 'yqq',
      needNewCode: 0,
      cid: 205361747,
      uin: 0,
      guid: 8282096940,
      songmid: songmid,
      filename: `C400${songmid}.m4a`
    })
    return jsonp(url, data)
  }