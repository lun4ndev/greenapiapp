import { createRoot } from 'react-dom/client';
import Chat from './containers/chat';
import './utils/styles/reset.module.scss';

createRoot(document.getElementById('root')!).render(<Chat />)
