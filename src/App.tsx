import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

function App() {
  return (
    <div>
      <GlobalStyle></GlobalStyle>
      <h1> React TypeScript with CRA</h1>
      <ul>
        <li>list 1</li>
        <li>list 2</li>
      </ul>
    </div>
  );
}

export default App;
