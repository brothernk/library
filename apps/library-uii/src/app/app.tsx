// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NxWelcome from './nx-welcome';
import { Book } from '@library/components';

export function App() {
  return (
    <>
      <NxWelcome title="library-uii" />
      <Book/>    
    </>
  );
}

export default App;
