# Cube-desk-app

<br>

## 소개
맥의 알림센터 기능을 보고 영감을 받았으며, 평소에 주로쓰는 기능들을 한 페이지에 담아 탭에 띄어놓고 빨리 사용할 수 있게 만들어 보았습니다.

<br>

## 구현 기능
  - Profile
  - Date & Time
  - Temperture & Weather
  - Calculator
  - Drawing-pad 
  - To do list

<br>

## 사용 기능 설명 
  - `MouseEvent client`속성 값을 받아와 마우스가 움직이는 반대 방향으로 배경이 움직이도록 하였습니다.
  - localStroage를 사용해 profile 이미지와 이름을 입력하면 데이터를 저장해 새로고침을 하더라도<br />
  사라지지 않는다.
  - Date 메소드를 사용해 날짜와 시간을 데이터를 가져오고 setInterval을 사용하여<br />
  1초마다 업데이트 되도록 하였습니다.
  - fetch로 Geolocation API를 가져와서 `coords.latitude`와 `coords.longitude`로<br />
  위도 값과 경도 값을 받아서 현재 위치와 온도, 날씨 데이터를 받아왔습니다.
  - html에서 저장한 `number, operator, delete, equal, all-clear` data 속성을 가져와서<br />
  각 데이터를 가지고 있는 버튼을 눌렀을 때 주어진 함수를 수행하도록 합니다.
  - switch문을 사용해 `+, -, *, ÷`를 클릭하게 되면 입력받은 값의 계산을 실행합니다.
  - `toLocaleString`으로 문자열을 세어 천 단위 숫자에 ,(콤마)를 찍도록 했습니다.
  - `canvas`로 드로잉패드를 만들었습니다.
  - input에 작성 된 데이터를 submit하게 되면 createElement를 생성해 li에 담아줍니다.
  - 해당 element를 클릭 시 해당 li를 삭제 후 localStorage에 저장시킵니다.

<br>

## 문제 사항
  - [ ] js파일을 html에 링크를 달기엔 너무 많아 작업물들을 module화 작업에 도전을 했지만<br />
    class에 대한 공부가 부족하여 module화 작업은 진행 중에 있습니다.
  - [ ] 썸네일 업데이트 후 페이지 새로고침이 되면 썸네일이 다시 사라진다.

<br>

## 개발 환경
  - 개발도구: VSCode, Github
  - 사용언어: ReactJS

<br>

## 최종 결과물
<img width="640" alt="최종 결과물" src="https://user-images.githubusercontent.com/93115007/160104282-04e28a84-eed3-4d57-9b7c-4a18c978eba3.png">