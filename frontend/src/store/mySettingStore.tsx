import {create} from 'zustand'
import {persist} from 'zustand/middleware'

const test2:{ [key: number]: Array<alarmSetting> } = {
  1: [
    {
      alarm_pk: 1,
      cage_id: 1,
      name: "먹이알람",
      cycle : 7200,
      recent_date : new Date("2023-08-05 11:00:00"),
    },
  ],
  2 :[],
  3 :[],
  4 :[],
  5 :[],
}


// 자동화 설정 세팅
export interface autoSetting {
  setting_pk: number;
  cage_id: number;
  time: string;
  set_temp: number | null;
  set_hum: number | null;
  set_uv: boolean | null;
}

interface autoSettingState {
  settings: Array<autoSetting>;
  addSetting: (setting: autoSetting) => void;
  updateSetting: (setting: autoSetting) => void;
  deleteSetting: (id: number) => void;
  setSetting: (settings: Array<autoSetting>) => void;
}

export const autoSettingStore = create<autoSettingState>()(
  persist(
  set => ({
      settings: [],
      // 세팅 추가
      addSetting: (setting: autoSetting) => {
        set((state) => {
          state.settings.push(setting);
          return {...state}
        })
      },
      updateSetting: (setting: autoSetting) => {console.log(setting)},
      deleteSetting: (id: number) => {console.log(id)},
      // 기존 세팅 데이터 저장
      setSetting: (settings: Array<autoSetting>) => {
        set(state => {return {...state, settings:settings}})},
    }),
  {name:'autoSettings'}
  )
)


// 알람 설정 세팅
export interface alarmSetting {
  alarm_pk: number;
  cage_id: number;
  name: string;
  cycle : number;
  recent_date : Date;
}

interface alarmSettingState {
  settingsInCages: { [key: number]: Array<alarmSetting> };
  addSetting: (setting: alarmSetting) => void;
  updateSetting: (setting: alarmSetting) => void;
  deleteSetting: (id: number) => void;
  setSetting: (settings: Array<alarmSetting>) => void;
}

export const alarmSettingStore = create<alarmSettingState>()(
  persist(
  set => ({
      settingsInCages: test2,
      addSetting: (setting: alarmSetting) => {console.log(setting)},
      updateSetting: (setting: alarmSetting) => {console.log(setting)},
      deleteSetting: (id: number) => {console.log(id)},
      setSetting: (settings: Array<alarmSetting>) => {console.log(settings)},
    }),
  {name:'alarmSetting'}
  )
)