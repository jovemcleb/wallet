import { AppContainer } from './styles/app';
import { Header } from './components/Header/header';

import { Dashboard } from './components/DashBoard/dashboard';

function App() {
  return (
    <AppContainer>
      <Header />
      <Dashboard />
    </AppContainer>
  );
}

export default App;
