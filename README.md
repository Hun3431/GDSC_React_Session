---
marp: true
class: invert
theme: gaia
size: 16:9
footer: GDSC React Session
---

<style>
  {
    font-size: 25px;
  }

  img[alt="center"] {
    display: block;
    margin: 0 auto;
  }
</style>

# React 기초 강의

![width:500px center](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png)

---

### 목차

1. React란?
2. 개발 환경 설정
3. 컴포넌트 작성하기
4. 이벤트 처리하기
5. 속성 전달하기
6. 상태 관리하기

---

### 1. React란?

- React는 페이스북에서 개발된 사용자 인터페이스(UI) 라이브러리입니다.
- React는 주로 싱글페이지 어플리케이션과 모바일 어플리케이션 UI를 개발하는데 활용됩니다.
- React를 사용하면 웹 애플리케이션을 구성하는 UI를 컴포넌트 단위로 나누어 개발할 수 있습니다.

---

### 2. 개발 환경 설정

1. Node.js 설치: [https://nodejs.org](https://nodejs.org)에서 최신 버전의 Node.js를 다운로드하여 설치합니다.

![width:800px center](https://file.notion.so/f/f/e776ccb7-9728-41af-a699-85cf8ea1daf6/52ec7510-45ab-4e74-b969-e1bf0789db9b/Untitled.png?id=42d55f20-bb46-4bb2-b84b-7cce6346b9e8&table=block&spaceId=e776ccb7-9728-41af-a699-85cf8ea1daf6&expirationTimestamp=1696536000000&signature=h21VU00mJyLtuOMXdxwQ5x1aSk_XTyXEY51pyadLSyo&downloadName=Untitled.png)

---

2. React 프로젝트 생성
   (터미널을 통해 React 프로젝트를 생성하고자 하는 디렉토리로 이동 후 생성)
   ![width:800px center](https://file.notion.so/f/f/e776ccb7-9728-41af-a699-85cf8ea1daf6/60c3a8ba-ebef-4b34-9212-f92c055941ed/Untitled.png?id=c546d7e1-a2d8-4f3e-adca-e11ad3286be2&table=block&spaceId=e776ccb7-9728-41af-a699-85cf8ea1daf6&expirationTimestamp=1696543200000&signature=yHt9edLyctZ9WbWDKlPpaJ_OfzQ3ZEAN-UjnnXAG0S8&downloadName=Untitled.png)

---

3. `npm start`을 통해 리액트 페이지 실행

![width:600px center](https://file.notion.so/f/f/e776ccb7-9728-41af-a699-85cf8ea1daf6/1a9c5b61-a152-4904-9aea-c1b83b2a0416/Untitled.png?id=a58c7271-9128-4346-84d9-b25cbeeab7bb&table=block&spaceId=e776ccb7-9728-41af-a699-85cf8ea1daf6&expirationTimestamp=1696536000000&signature=3EwCNs5JPyTfzMBgufV7DqDDNhyEswz_oZbgTE8Cl04&downloadName=Untitled.png)

npm 버전이 낮아 프로젝트 생성에 실패한 경우
-> npm 업데이트: 터미널 또는 명령 프롬프트에서 `npm install -g npm` 명령을 실행하여 npm을 최신 버전으로 업데이트합니다.

---

### 3. 컴포넌트 작성하기

- React에서 UI는 컴포넌트(Component)라는 단위로 나누어 작성됩니다.
- 컴포넌트는 재사용이 가능한 각각의 독립된 모듈을 의미합니다.
- 컴포넌트는 반드시 대문자로 시작해야합니다.(소문자로 작성 시 태그로 처리합니다.)

```jsx
const App = () => {
  return (
    <div>
      <DiceComponent />
    </div>
  );
};

const DiceComponent = () => {
  return (
    <div>
      <h1>주사위 컴포넌트</h1>
      <button>클릭!</button>
    </div>
  );
};
```

---

![width:900px center](https://file.notion.so/f/f/e776ccb7-9728-41af-a699-85cf8ea1daf6/92afc606-7819-4d51-bfbf-322830f3d890/Untitled.png?id=9f52cf8c-0e4f-4f00-95c1-0ec1955e56dc&table=block&spaceId=e776ccb7-9728-41af-a699-85cf8ea1daf6&expirationTimestamp=1696536000000&signature=nhaUhOxQeDy0W57Zdy_hhkgn2gWsncNg9VZUDh2veUs&downloadName=Untitled.png)

---

### 4. 이벤트 처리하기

- React에서 이벤트 처리는 기본적으로 JavaScript의 이벤트 처리 방식과 유사합니다.
- React에서 이벤트는 camelCase로 작성됩니다.

```jsx
const DiceComponent = () => {
  return (
    <div>
      <h1>주사위 컴포넌트</h1>
      <button
        onClick={() => {
          const num = Math.floor(Math.random() * 6 + 1);
          alert(num);
        }}
      >
        클릭!
      </button>
    </div>
  );
};
```

---

![width:900px center](https://file.notion.so/f/f/e776ccb7-9728-41af-a699-85cf8ea1daf6/cd59ff19-90dd-43e9-ba8e-91678060bb7e/Untitled.png?id=db388b91-bf00-493f-a1cf-7e3c76337248&table=block&spaceId=e776ccb7-9728-41af-a699-85cf8ea1daf6&expirationTimestamp=1696536000000&signature=y8zaBSX14ZCOmSsIRhpEsjjnwo9SKY7tl2CDnY3iFiA&downloadName=Untitled.png)

---

### 5. 속성 전달하기

- 속성(props)는 부모 컴포넌트에서 자식 컴포넌트로 값을 전달하는 용도로 사용됩니다.

```jsx
const App = () => {
  const log = [3, 5, 1, 4, 6];
  return (
    <div>
      <DiceLogComponent log={log} />
      <DiceComponent />
    </div>
  );
};
const DiceLogComponent = (props) => {
  return (
    <div>
      {props.log.map((value, index) => {
        return <span>{value} </span>;
      })}
    </div>
  );
};
```

---

![width:900px center](https://file.notion.so/f/f/e776ccb7-9728-41af-a699-85cf8ea1daf6/120cdf77-0910-485a-b5db-98ead79d8523/Untitled.png?id=7163b799-2cd1-4754-99e5-ad7f43a5de6b&table=block&spaceId=e776ccb7-9728-41af-a699-85cf8ea1daf6&expirationTimestamp=1696536000000&signature=zbMPYXn5tgulZN9xLvVgSF8IrpEJjrE5aVbe4ttQTgA&downloadName=Untitled.png)

---

### 6. 상태 관리하기

- 상태(State)는 컴포넌트 내부에서 관리되며, 동적인 데이터를 저장하고 업데이트하는 용도로 사용됩니다.

```jsx
import { useState } from "react";

const App = () => {
  const [log, setLog] = useState([]);

  return (
    <div>
      <DiceLogComponent log={log} />
      <DiceComponent log={log} setLog={setLog} />
    </div>
  );
};
```

---

```jsx
const DiceComponent = (props) => {
  return (
    <div>
      <h1>주사위 컴포넌트</h1>
      <button
        onClick={() => {
          const num = Math.floor(Math.random() * 6 + 1);
          alert(num);

          const newLog = [...props.log];
          newLog.push(num);
          props.setLog(newLog);
        }}
      >
        클릭!
      </button>
    </div>
  );
};
```

---

![width:900px center](https://file.notion.so/f/f/e776ccb7-9728-41af-a699-85cf8ea1daf6/2d12b4b5-4001-4b62-9358-c7ce41e2e5be/Untitled.png?id=cebf7611-9218-4fd9-b240-1eb5e0b7a4e8&table=block&spaceId=e776ccb7-9728-41af-a699-85cf8ea1daf6&expirationTimestamp=1696536000000&signature=vpFtXBwpI4kMezwFoEuJ6-Vbm2WXCxa69RUyIxL5E2k&downloadName=Untitled.png)

---

![width:900px center](https://file.notion.so/f/f/e776ccb7-9728-41af-a699-85cf8ea1daf6/dd5901a6-0df2-404c-8bc8-e30232d63572/Untitled.png?id=a50fa5c5-17c7-4902-a8b5-e5c5bfcec5e1&table=block&spaceId=e776ccb7-9728-41af-a699-85cf8ea1daf6&expirationTimestamp=1696536000000&signature=ms8bf2poj24XDDmZnn4Ljqqm2MIRrR_E0_2091B10rw&downloadName=Untitled.png)

---

# END

### github : https://github.com/Hun3431/GDSC_React_Session

### notion : https://ionized-dingo-1e1.notion.site/React

<br>

# 참고자료

- React Document : https://ko.legacy.reactjs.org
- 생활코딩 React
  - https://opentutorials.org/course/4900
  - https://www.youtube.com/playlist?list=PLuHgQVnccGMCOGstdDZvH41x0Vtvwyxu7
- https://react.vlpt.us/basic/
- https://developer.mozilla.org/ko/
