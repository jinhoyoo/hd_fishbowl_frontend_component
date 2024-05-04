# 시작하기

[리액트 앱 만들기](https://github.com/facebook/create-react-app)로 작성된 Hyper-React 테마가 적용된 건민네 화면 작성용 프로젝트 

## 사용가능한 스크립트

프로젝트 디렉토리에서 아래처럼 yarn 패키지 메니저를 실행합니다: 
### `yarn`
```bash
[ user@machine MINGW64 /c/projects/hd_fishbowl_frontend_component ]
$ yarn
yarn install v1.22.21
warning ..\package.json: No license field
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.39s.
```

그리고, 아래 yarn 명령어로 개발모드의 앱을 실행합니다..
### `yarn start`
```bash
[ user@machine MINGW64 /c/projects/hd_fishbowl_frontend_component ]
$ yarn start
yarn run v1.22.21
warning ..\package.json: No license field
$ react-scripts start

...

Starting the development server...
```
브라우저에서 [http://localhost:3000](http://localhost:3000) 주소를 열어 화면을 확인합니다.


코드를 수정하면, 페이지는 자동으로 갱신됩니다. \
또한, 콘솔에서 lint 에러들을 볼 수 있습니다.

### `yarn test`
```bash
[ user@machine MINGW64 /c/projects/hd_fishbowl_frontend_component ]
$ yarn test
No tests found related to files changed since last commit.
Press `a` to run all tests, or run Jest with `--watchAll`.

Watch Usage
 › Press a to run all tests.
 › Press f to run only failed tests.
 › Press q to quit watch mode.
 › Press p to filter by a filename regex pattern.
 › Press t to filter by a test name regex pattern.
 › Press Enter to trigger a test run.

```
인터렉티브 감시 모드에서 테스트 러너를 실행합니다. \
더 많은 정보를 위해서는 [테스트 실행](https://facebook.github.io/create-react-app/docs/running-tests) 섹션을 확인하세요. \

### `yarn build`
```bash
[ user@machine MINGW64 /c/projects/hd_fishbowl_frontend_component ]
$ yarn build
yarn run v1.22.21
warning ..\package.json: No license field
$ react-scripts build
Creating an optimized production build...

...

```

build 폴더로, 프로덕션을 위한 앱을 빌드합니다. \
이 명령은 React 프로덕션 모드의 번들로 패키징하고, 좋은 성능을 위한 최적화를 수행 합니다.

빌드는 해시(hash)들을 포함해 파일이름들과 내용을 최소화 합니다. \
빌드가 끝나면, 앱의 배치 준비가 되었습니다.

더 많은 정보를 위해서 [배치](https://facebook.github.io/create-react-app/docs/deployment)를 확인하세요.

### `yarn eject`
```bash
[ user@machine MINGW64 /c/projects/hd_fishbowl_frontend_component ]
$ yarn eject
yarn run v1.22.21
warning ..\package.json: No license field
$ react-scripts eject
NOTE: Create React App 2+ supports TypeScript, Sass, CSS Modules and more without ejecting: https://reactjs.org/blog/2018/10/01/create-react-app-v2.html

? Are you sure you want to eject? This action is permanent. » (y/N)

```
**Note: 이 동작은 단방향입니다. 한번 `eject`를 수행하면 되돌릴 수 없습니다.**

빌드 툴과 설정의 선택들을 만족스럽지 못한 경우, 언제든지 `eject` 명령을 수행하여 프로젝트로부터 빌드 의존성을 제거합니다.

대신에, 모든 설정 파일들과 타동적인(transitive) 의존성들(webpack, Babel, ESLint, etc)들을 프로젝트에 복사하여, 사용자가 직접 제어하게 합니다. 명령을 수행한 이후에 `eject`를 제외한 모든 명령어는 여전히 동작하게 되며, 복사된 스크립트들을 참조하도록 지정되어 사용자가 변경하도록 합니다. 

`eject`명령어는 전혀 사용하지 않아도 됩니다. 전문적으로 설정되는 특성 세트는 중소규모 배치에 적합하도록 되어있어, 이 특성들을 조정해야하는 의무를 가지지 않아도 됩니다.

## 더 배워보기

[React App 생성 하기](https://facebook.github.io/create-react-app/docs/getting-started).

### 코드 분할

[https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### 번들 크기 분석

[https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### 진보적인 Web App 만들기

[https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### 고급 설정

[https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### 배치

[https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build`의 최소화 실패

[https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
