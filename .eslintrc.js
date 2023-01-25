module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  // 기본 설정 파일 확장
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier',
    /* eslint-config-prettier(Prettier와 ESLint 간에 충돌하는 규칙을 끔)와
    /* eslint-plugin-prettier(ESLint 규칙으로 프리티어 규칙을 병합)를 결합 **/
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  // extends와 plugins 에서 제공되는 규칙들을 세부적으로 설정
  rules: {
    // 'linebreak-style': 0,
    // 'import/prefer-default-export': 0,
    'import/extensions': 0,
    // 'no-use-before-define': 0,
    // 'import/no-unresolved': 0,
    'react/react-in-jsx-scope': 0,
    'import/no-extraneous-dependencies': 0,
    // 테스트 또는 개발환경을 구성하는 파일에서는 devDependency 사용을 허용
    'no-shadow': 0,
    'react/prop-types': 0,
    'react/jsx-filename-extension': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'no-underscore-dangle': 0,
  },
};
