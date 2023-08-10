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
  id: number;
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
      // 세팅 수정
      updateSetting: (setting: autoSetting) => {
        set((state) => {
          // id와 일치하는 케이지의 인덱스 탐색
          const settingIndex = state.settings.findIndex(setting => setting.id === setting.id);
          // id와 일치하는 케이지를 찾지 못한 경우, 현재 상태를 변경하지 않고 반환
          if (settingIndex === -1) {
            return state;
          }
          // 업데이트된 케이지를 담는 새로운 배열을 생성
          const updatedsettings = [...state.settings];
          updatedsettings[settingIndex] = setting;
          // 업데이트된 cages 배열을 가진 새로운 상태를 반환
          return { ...state, settings: updatedsettings };
        });
      },
      // 세팅 삭제
      deleteSetting: (id: number) => {        
        set((state) => {
          const updatedSettings = state.settings.filter(setting => setting.id !== id);
          return { ...state, settings: updatedSettings };
        })},
      // 기존 세팅 데이터 저장
      setSetting: (settings: Array<autoSetting>) => {
        set(state => {return {...state, settings:settings}})
      },
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