import { PlayerKindType, PlayerType } from '@/types/models/players'

export const koreanDictionary = {
  commons: {
    actions: {
      Search: '검색',
      Save: '저장',
      AddToPlayList: '플레이 리스트에 저장',
      Cancel: '취소',
      ToDefault: '기본값으로 변경'
    },
    tooltips: {
      Add: '추가',
      Setting: '설정',
      Navigator: '네비게이터',
      OnAlwaysTop: '항상 최상단',
    },
    placeholders: {
      WarnForProgramOff: '변경시 작동중인 프로그램이 껏다 켜질 수 있습니다.'
    },
    titles: {
      List: '목록',
    },
    confirms: {
      CanBeClosed: '프로그램을 껏다 켜야할 수 도 있습니다. 진행하시겠습니까?',
      ToDefault: '설정을 기본값으로 초기화 하시겠습니까?'
    }
  },
  router: {
    titles: {
      SystemApp: '시스템 설정',
      PlayerApp: '플레이어 설정',
    }
  },
  types: {
    models: {
      players: {
        kindType: {
          Entity: '플레이어 종류',
          VIDEO: '영상',
          AUDIO: '오디오',
        } as Record<PlayerKindType | 'Entity', string>,
        type: {
          Entity: '플레이어 타입',
          YOUTUBE: '유튜브',
          TWITCH: '트위치',
          EX_URL: 'URL',
          IN_PC: '내 PC',
        } as Record<PlayerType | 'Entity', string>,
        forms: {
          youtube: {
            VideoId: '비디오 아이디',
            Start: '시작 시간',
            End: '종료 시간',
          },
          twitch: {
            ChannelId: '채널 아이디'
          },
          exUrl: {
            Url: '링크 주소'
          },
          inPc: {
            file: '파일'
          }
        },
      },
      windows: {
        players: {
          configs: {
            IsAlwaysTop: '항상 최상단 사용',
            Frame: '윈도우 프레임 사용'
          }
        }
      }
    }
  }
}
