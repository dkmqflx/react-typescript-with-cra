### npm install

```bash
# create-react-app + typescript
npx create-react-app . --template typescript

# styled-component
npm install styled-components styled-reset
npm install @types/styled-components -D

# prettier
# CRA를 사용하는 경우 eslint는 이미 설치되어있으므로 prettier만 설치해도 된다
# prettier 설치 대신, extension 으로 적용할 수 있다.
npm install -D prettier

# eslint, eslint-plugin-prettier는 사용하지 말자
npm install -D @typescript-eslint/parser @typescript-eslint/parser 
npm install -D @typescript-eslint/eslint-plugin eslint-config-prettier

```

### .prettierrc

```json
{
  "trailingComma": "es5",
  "tabWidth": 2,
  "semi": true,
  "singleQuote": true,
  "printWidth": 120
}
```

### .eslintrc.js

```js
module.exports = {
  parser: '@typescript-eslint/parser',

  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',

    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier',
  ],

  settings: {
    react: {
      version: 'detect',
    },
  },
};
```

---

## Reference

- .esliintrc.js

  - [prettier와 eslint를 구분해서 사용하자](https://yrnana.dev/post/2021-03-21-prettier-eslint)
  - [ESLint 알고 쓰기](https://yrnana.dev/post/2021-09-02-eslint)
  - [ESLint 설정 살펴보기](https://velog.io/@kyusung/eslint-config-2)
  - [ESLint & Prettier, Airbnb Style Guide로 설정하기](https://velog.io/@_jouz_ryul/ESLint-Prettier-Airbnb-Style-Guide%EB%A1%9C-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0)
  - [React에서 ESLint를 사용해보자](https://velog.io/@do_dadu/ESLint%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%B4%EB%B3%B4%EC%9E%90)

  - `@typescript-eslint/parser` : Typescript 를 파싱하기 위해 사용
  - `eslint-plugin-react` : React에 관한 린트설정을 지원 (CRA, 기본설치 되어있다)
  - `eslint-plugin-react-hooks` : React Hooks의 규칙을 강제하도록 하는 플러그인 (CRA, 기본설치 되어있다)
  - `@typescript-eslint/eslint-plugin`: Typescript 관련 린팅규칙을 설정하는 플러그인
  - `eslint-config-prettier` : prettier와 충돌을 일으키는 ESLint 규칙들을 비활성화 시키는 config

- prettier

  - [👩🏻‍💻 리액트 프로젝트에 Prettier 적용하는 방법](https://www.youtube.com/watch?v=T4WnS6stcK8&t=631s)
  - [React 프로젝트에 Prettier 적용하기](https://leehwarang.github.io/2020/06/24/prettier.html)
  - [린트(ESLint)와 프리티어(Prettier)로 협업 환경 세팅하기](https://www.youtube.com/watch?v=Y3kjHM7d3Zo)
  - [27. 리액트 개발 할 때 사용하면 편리한 도구들 - Prettier, ESLint, Snippet](https://react.vlpt.us/basic/27-useful-tools.html)

- styled-reset
  - [React : styled-reset](https://velog.io/@daymoon_/React-styled-reset)
  - [Styled Components 전역 스타일링 (Global Style)](https://www.daleseo.com/styled-components-global-style/)
  - [[Styled-Components] styled-reset 패키지로 styled-components reset하기](https://wonit.tistory.com/301)
