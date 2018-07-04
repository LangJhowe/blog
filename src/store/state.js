import {playMode} from 'common/js/config'
const state = {
    singer: {},
    playing: false,
    playlist:[],
    currentIndex: 0,
    sequenceList:[],
    mode: playMode.sequence,
    localList:[],
}
export default state