import React from 'react';
import OllamaSettings from './OllamaSettings';
import OpenAISettings from './OpenAISettings';
import AzureOpenAISettings from './AzureOpenAISettings';
import GeminiSettings from './GeminiSettings';
import DeepSeekSettings from './DeepSeekSettings';
import QwenSettings from './QwenSettings';

/**
 * LLMProviderSettings - Modular settings for all LLM providers
 * Each provider gets its own config section/component
 * @see https://www.heroui.com/docs/components/card
 */
const LLMProviderSettings: React.FC = () => {
  return (
    <div className="space-y-4">
      <OllamaSettings />
      <OpenAISettings />
      <AzureOpenAISettings />
      <GeminiSettings />
      <DeepSeekSettings />
      <QwenSettings />
    </div>
  );
};

export default LLMProviderSettings;
