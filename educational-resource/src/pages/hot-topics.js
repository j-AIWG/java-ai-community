import React from 'react';
import Layout from '@theme/Layout';
import '../css/custom.css';

const topics = [
  // Top row (light)
  { label: 'Prompt engineering', size: 'md', type: 'concept', link: '/topics/prompting' },
  { label: 'Tool calling', size: 'md', type: 'protocol', link: '/topics/tool-calling' },

  // Mid-size
  { label: 'Chatbots', size: 'lg', type: 'use', link: '/topics/chatbots' },
  { label: 'Ollama', size: 'md', type: 'tool', link: '/topics/ollama' },
  { label: 'Evaluation', size: 'md', type: 'concept', link: '/topics/evaluation' },
  { label: 'LangChain4J', size: 'lg', type: 'tool', link: '/topics/langchain4j' },
  { label: 'Agents', size: 'lg', type: 'concept', link: '/topics/agents' },
  { label: 'OpenAI', size: 'lg', type: 'tool', link: '/topics/openai' },
  { label: 'ADK', size: 'md', type: 'tool', link: '/topics/adk' },
  { label: 'MCP', size: 'md', type: 'protocol', link: '/topics/mcp' },
  { label: 'Data privacy', size: 'md', type: 'concern', link: '/topics/data-privacy' },
  { label: 'Inference', size: 'md', type: 'use', link: '/topics/inference' },
  { label: 'Classification', size: 'md', type: 'concept', link: '/topics/classification' },
  { label: 'Transcription', size: 'md', type: 'use', link: '/topics/transcription' },
  { label: 'Vector DBs', size: 'md', type: 'tool', link: '/topics/vector-dbs' },
  { label: 'Gemini', size: 'md', type: 'tool', link: '/topics/gemini' },
  { label: 'Hugging Face', size: 'md', type: 'tool', link: '/topics/huggingface' },

  // Center big ones
  { label: 'LLM', size: 'xl', type: 'concept', link: '/topics/llm' },
  { label: 'Finetuning', size: 'xl', type: 'concept', link: '/topics/finetuning' },
  { label: 'SpringAI', size: 'xl', type: 'tool', link: '/topics/springai' },

  // Bottom row (light)
  { label: 'Local models', size: 'md', type: 'concept', link: '/topics/local-models' },
  { label: 'Security', size: 'md', type: 'concern', link: '/topics/security' },
];

export default function HotTopicsPage() {
  return (
    <Layout title="Hot Topics">
      <main className="hot-topics">
        <div className="hot-topics__container">
          <div className="wordcloud-header">
            <h1>🔥 Hot Topics in Java + AI</h1>
            <p>Explore what everyone’s curious about right now.</p>
          </div>

          <div className="wordcloud">
            {topics.map((topic, index) => {
              // Controlled pseudo-random class for visual offsets
              const rotate = index % 7 === 0 ? 'rotate-left' :
                             index % 5 === 0 ? 'rotate-right' : '';
              const float = index % 6 === 0 ? 'float-up' :
                            index % 4 === 0 ? 'float-down' : '';
              return (
                <a
                  key={index}
                  href={topic.link}
                  className={`word word--${topic.size} word--${topic.type} ${rotate} ${float}`}
                >
                  {topic.label}
                </a>
              );
            })}
          </div>
        </div>
      </main>
    </Layout>
  );
}
