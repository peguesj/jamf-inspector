import React, { useState } from 'react';
import { DockviewReact, DockviewApi, IDockviewPanelProps } from 'dockview';
import { FaBug, FaInfoCircle, FaExclamationTriangle, FaTrash } from 'react-icons/fa';

/**
 * LogPanel - Dockable, filterable, styled logs panel using DockView
 * @see https://dockview.dev/docs/react/overview/
 */

type LogType = 'error' | 'info' | 'debug';

const logTypes: Record<LogType, { color: string; emoji: string; icon: React.ReactElement }> = {
  error: { color: 'bg-red-100 text-red-800', emoji: '❌', icon: <FaExclamationTriangle /> },
  info: { color: 'bg-blue-100 text-blue-800', emoji: 'ℹ️', icon: <FaInfoCircle /> },
  debug: { color: 'bg-yellow-100 text-yellow-800', emoji: '🐞', icon: <FaBug /> },
};

const initialLogs: Array<{ type: LogType; code: string; namespace: string; message: string; details: string }> = [
  { type: 'error', code: 'E123', namespace: 'frontend:Header', message: 'Failed to load user info', details: 'Stack trace here...' },
  { type: 'info', code: 'I456', namespace: 'backend:API', message: 'Server started', details: '' },
  { type: 'debug', code: 'D789', namespace: 'frontend:Dashboard', message: 'Widget rendered', details: '' },
];

const LogPanel: React.FC = () => {
  const [logs, setLogs] = useState(initialLogs);
  const [filter, setFilter] = useState('all');

  const clearLogs = () => setLogs([]);
  const filteredLogs = filter === 'all' ? logs : logs.filter(l => l.type === filter);

  return (
    <div className="w-full bg-gray-900 text-white p-2" style={{ minHeight: 200, maxHeight: 400, overflowY: 'auto' }}>
      <div className="flex items-center gap-4 mb-2">
        <span className="font-bold">Logs</span>
        <select value={filter} onChange={e => setFilter(e.target.value)} className="bg-gray-800 text-white rounded px-2 py-1">
          <option value="all">All</option>
          <option value="error">Error</option>
          <option value="info">Info</option>
          <option value="debug">Debug</option>
        </select>
        <button onClick={clearLogs} className="ml-auto px-2 py-1 bg-red-700 text-white rounded flex items-center gap-1"><FaTrash /> Clear</button>
      </div>
      <div>
        {filteredLogs.length === 0 && <div className="text-gray-400">No logs</div>}
        {filteredLogs.map((log, idx) => {
          const logType = log.type as LogType;
          const typeInfo = logTypes[logType];
          return (
            <div key={idx} className={`flex items-center gap-2 mb-1 p-2 rounded ${typeInfo.color}`} style={{ fontSize: 14 }}>
              <span>{typeInfo.emoji}</span>
              <span>{typeInfo.icon}</span>
              <span className="font-mono font-bold">{log.code}</span>
              <span className="truncate max-w-xs" title={log.namespace}>{log.namespace}</span>
              <span className="truncate max-w-sm" title={log.message}>{log.message}</span>
              {log.details && <span className="ml-2 text-xs text-gray-600">{log.details}</span>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LogPanel;
