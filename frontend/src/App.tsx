import React from 'react';
// import '@heroui/core/dist/heroui.min.css
import './main.css';
import Layout from './components/Layout.tsx';
import Dashboard from './components/Dashboard.tsx';
import ChatAssistant from './components/ChatAssistant.tsx';
import SetupWizard from './components/SetupWizard.tsx';
import './style.css';

const App: React.FC = () => (
        <Layout>
            <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                    <Dashboard />
                </div>
                <SetupWizard />
            </div>
            <ChatAssistant />
        </Layout>
);

export default App;
