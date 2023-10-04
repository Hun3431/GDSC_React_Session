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
4. 상태 관리하기
5. 이벤트 처리하기
6. props

---

### 1. React란?

- React는 페이스북에서 개발된 사용자 인터페이스(UI) 라이브러리입니다.
- React는 주로 싱글페이지 어플리케이션과 모바일 어플리케이션 UI를 개발하는데 활용됩니다.
- React를 사용하면 웹 애플리케이션을 구성하는 UI를 컴포넌트 단위로 나누어 개발할 수 있습니다.
- 여기다가 특징 추가

---

### 2. 개발 환경 설정

1. Node.js 설치: [https://nodejs.org](https://nodejs.org)에서 최신 버전의 Node.js를 다운로드하여 설치합니다.
2. npm 업데이트: 터미널 또는 명령 프롬프트에서 `npm install -g npm` 명령을 실행하여 npm을 최신 버전으로 업데이트합니다.
3. React 프로젝트 생성
   (터미널을 통해 React 프로젝트를 생성하고자 하는 디렉토리로 이동 후 생성)

   `npx create-react-app .`

4. `npm start`을 통해 리액트 페이지 실행
<!--개발환경 세팅 부분 보강-->

---

![width:900px center](https://file.notion.so/f/f/e776ccb7-9728-41af-a699-85cf8ea1daf6/1a9c5b61-a152-4904-9aea-c1b83b2a0416/Untitled.png?id=a58c7271-9128-4346-84d9-b25cbeeab7bb&table=block&spaceId=e776ccb7-9728-41af-a699-85cf8ea1daf6&expirationTimestamp=1696536000000&signature=3EwCNs5JPyTfzMBgufV7DqDDNhyEswz_oZbgTE8Cl04&downloadName=Untitled.png)

---

### 3. 컴포넌트 작성하기

- React에서 UI는 컴포넌트(Component)라는 단위로 나누어 작성됩니다.
- 컴포넌트는 리액트로 만들어진 앱을 이루는 최소한의 단위입니다.

```jsx
const App = () => {
  return <MyComponent></MyComponent>;
};

const MyComponent = () => {
  return (
    <div>
      <h1>사용자정의 컴포넌트</h1>
      <div>마음대로 태그를 만들 수 있어요.</div>
    </div>
  );
};
```

---

![width:900px center](https://file.notion.so/f/f/e776ccb7-9728-41af-a699-85cf8ea1daf6/5b6f6dc0-00e0-4b9e-abe8-0a4edad0487e/Untitled.png?id=f4a66cc5-a663-473e-b062-236ae5a9435b&table=block&spaceId=e776ccb7-9728-41af-a699-85cf8ea1daf6&expirationTimestamp=1696536000000&signature=eF_XRMzk-EwVb_oHwiRKSS94nGtOwTbmzcBJDHNZUyU&downloadName=Untitled.png)

---

### 4. 이벤트 처리하기

- React에서 이벤트 처리는 기본적으로 JavaScript의 이벤트 처리 방식과 유사합니다.

```jsx
const App = () => {
  const click = () => {
    alert("버튼 클릭!");
  };

  return <button onClick={click}>Click</button>;
};
```

---

![width:900px center](https://file.notion.so/f/f/e776ccb7-9728-41af-a699-85cf8ea1daf6/f144c0f4-2a01-4abe-be93-8a4946a9ad51/Untitled.png?id=d907de7e-5d52-44f2-8fb8-751b81f61436&table=block&spaceId=e776ccb7-9728-41af-a699-85cf8ea1daf6&expirationTimestamp=1696536000000&signature=x2AK7yOQG-s0OdypAmb_3Oq99RHi6wczGLyMybsgm8Y&downloadName=Untitled.png)

---

![width:900px center](https://file.notion.so/f/f/e776ccb7-9728-41af-a699-85cf8ea1daf6/40a72c52-9eb3-4101-8e40-730f7a72fc1c/Untitled.png?id=44181176-1d10-484f-ba69-117e931ce6b8&table=block&spaceId=e776ccb7-9728-41af-a699-85cf8ea1daf6&expirationTimestamp=1696536000000&signature=Y08dIAXh1Kl-lrXB6evL1Rr16z3yGtgK9VgOw3d0vZY&downloadName=Untitled.png)

---

### 5. 상태 관리하기

- 상태(State)는 컴포넌트 내부에서 관리되며, 동적인 데이터를 저장하고 업데이트하는 용도로 사용됩니다.

```jsx
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const click = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={click}>Click</button>
    </div>
  );
};
```

---

![width:900px center](https://file.notion.so/f/f/e776ccb7-9728-41af-a699-85cf8ea1daf6/e67c7268-8266-4ad7-aca1-002f01b90c68/Untitled.png?id=6789d292-bf2a-4a7e-8b96-bd3e2b490ae0&table=block&spaceId=e776ccb7-9728-41af-a699-85cf8ea1daf6&expirationTimestamp=1696536000000&signature=9oYe_XiWP3SsmGNPU0wMGjh-ymAsUNF_t-QlcGEw1q4&downloadName=Untitled.png)

---

![width:900px center](https://file.notion.so/f/f/e776ccb7-9728-41af-a699-85cf8ea1daf6/c6bde548-9fd5-4795-be8d-1fdc16142674/Untitled.png?id=eddc1644-3edc-4525-9cbf-56ef8800a8f7&table=block&spaceId=e776ccb7-9728-41af-a699-85cf8ea1daf6&expirationTimestamp=1696536000000&signature=mRNFP3jqy1n6DvO3Lsg4W7q3vKLlPu5TpnpBNCK9ZU4&downloadName=Untitled.png)

---

### 6. 속성 전달하기

- 속성(props)는 부모 컴포넌트에서 자식 컴포넌트로 값을 전달하는 용도로 사용됩니다.

```jsx
const App = () => {
  return (
    <div>
      <MyComponent title="Component" />
      <MyComponent title="Props" />
      <MyComponent title="React" />
    </div>
  );
};

const MyComponent = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <div>부모 컴포넌트에서 넣어주는 속성에 따라 제목이 달라져요!!</div>
    </div>
  );
};
```

---

![width:900px center](https://file.notion.so/f/f/e776ccb7-9728-41af-a699-85cf8ea1daf6/a52a5ac7-e7cd-4f6c-baeb-3dcd4d209a20/Untitled.png?id=f9d4151b-55f0-463b-b2b1-c01f4107066f&table=block&spaceId=e776ccb7-9728-41af-a699-85cf8ea1daf6&expirationTimestamp=1696536000000&signature=PYGuGvAkJtkao2g1MrqLE_Z_MhdA_MjSEcLrALFf1v4&downloadName=Untitled.png)

---

각 주제에 대해 더 자세한 내용은 공식 [React 문서](https://ko.reactjs.org/docs/getting-started.html)를 참고하시기 바랍니다.
