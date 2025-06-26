import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import '../css/custom.css';


const cards = [
  {
    title: 'AI for Your Domain',
    emoji: '🧩',
    headline: 'For developers in specific industries',
    description: 'Explore how Java + AI solves real-world problems in finance, healthcare, accessibility, and more.',
    link: '/docs/domain-use-cases',
    bgClass: 'card-bg-green',
  },
  {
    title: 'Full Resource Map',
    emoji: '🗺️',
    headline: 'Looking for specific topics or an overview?',
    description: 'See all the content at a glance and click to dive right into your topics and tutorials.',
    link: '/docs/full-sitemap',
    bgClass: 'card-bg-blue',
  },
  {
    title: 'Hot Topics',
    emoji: '☁️',
    headline: 'For those following what’s trending',
    description: 'Dig into RAG, chatbots, security, agents, tool calling, and more—ranked by interest.',
    link: '/hot-topics',
    bgClass: 'card-bg-purple',
  },
  {
    title: 'Learning Paths',
    emoji: '🛣️',
    headline: 'For beginners or tech switchers',
    description: 'Follow curated tracks to get started with Java, AI, ML, LLMs, or SpringAI—with minimal friction.',
    link: '/getting-started',
    bgClass: 'card-bg-yellow',
  },
];


export default function Home() {
  return (
    <Layout title="Java + AI Resource Hub">
      <div className="homepage">
        <main>
          <div className="homepage__container">
            <h1 className="homepage__title">Java + AI: One Unified Map</h1>
            <p className="homepage__subtitle">
              Explore, learn, and build across the AI landscape with Java.
            </p>

            <div className="card-grid">
              {cards.map((card, idx) => (
                <Link key={idx} to={card.link} className={`card-link ${card.bgClass}`}>
                  <h2 className="card-title">
                    <div>{card.emoji} {card.title}</div>
                  </h2>
                  <p className="card-headline">{card.headline}</p>
                  <p className="card-desc">{card.description}</p>
                  <p className="card-hover">{card.hoverText}</p>
                </Link>
              ))}
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}
