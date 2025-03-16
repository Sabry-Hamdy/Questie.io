import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import CrystalPage from './pages/CrystalPage';
import Summarize from './pages/Summarize';
import Journey from './pages/Journey';
import NewScrollForm from './features/Scrolls/NewScrollForm';
import ScrollPreview from './features/Scrolls/ScrollPreview';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Provider } from 'react-redux';
import store from './store';
import EditScroll from './features/Scrolls/EditScroll';
import ScrollsPage from './pages/ScrollsPage';
import QuestsPage from './pages/QuestsPage';
import QuestPreview from './features/Quests/QuestPreview';
import NewQuestForm from './features/Quests/NewQuestForm';
import EditQuestForm from './features/Quests/EditQuestForm';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/scrolls" element={<ScrollsPage />} />
            <Route path="/scrolls/new" element={<NewScrollForm />} />
            <Route path="/scrolls/:scrollId" element={<ScrollPreview />} />
            <Route path="/scrolls/edit/:scrollId" element={<EditScroll />} />

            <Route path="/quests" element={<QuestsPage />} />
            <Route path="/quests/:questId" element={<QuestPreview />} />
            <Route path="/quests/new" element={<NewQuestForm />} />
            <Route path="/quests/edit/:questId" element={<EditQuestForm />} />

            <Route path="/crystal" element={<CrystalPage />} />

            <Route path="/summarize" element={<Summarize />} />

            <Route path="/journey" element={<Journey />} />
          </Routes>
        </Layout>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </Router>
    </Provider>
  );
}

export default App;
