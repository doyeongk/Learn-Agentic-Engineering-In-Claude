import React from 'react';
import Head from '@docusaurus/Head';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

const SECTIONS = [
  {
    num: '01',
    title: 'Why GitHub Exists',
    modules: 3,
    desc: 'Version control, repositories, branches, and pull requests',
    link: '/docs/01-why-github-exists/1.1-the-problem-github-solves',
  },
  {
    num: '02',
    title: 'Meet Claude Code',
    modules: 4,
    desc: 'From chatbot to agent \u2014 tools, the agentic loop, and your first session',
    link: '/docs/02-meet-claude-code/2.1-from-chat-to-agent',
  },
  {
    num: '03',
    title: 'Context Engineering',
    modules: 5,
    desc: 'CLAUDE.md, the attention budget, and why what Claude sees determines what Claude does',
    link: '/docs/03-context-engineering/3.1-what-is-context',
  },
  {
    num: '04',
    title: 'Skills & Subagents',
    modules: 6,
    desc: 'Reusable knowledge, parallel workers, and the architecture of this very project',
    link: '/docs/04-skills-and-subagents/4.1-what-are-skills',
  },
];

const STEPS = [
  {
    icon: '\u276F',
    label: 'Learn by doing',
    desc: 'Tutorials guide you step-by-step. Explanations build understanding. References are there when you need to look something up.',
  },
  {
    icon: '\u2699',
    label: 'Learn inside the thing',
    desc: 'This project is itself a working example of agentic engineering. The skills teaching you are real skills. The subagents are real subagents.',
  },
  {
    icon: '\u2387',
    label: 'Pull back the curtain',
    desc: "By the end, you trace the full architecture \u2014 and realise you\u2019ve been using every concept since the start.",
  },
];

export default function Home() {
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    const html = document.documentElement;
    setIsDark(html.getAttribute('data-theme') === 'dark');
    const observer = new MutationObserver(() => {
      setIsDark(html.getAttribute('data-theme') === 'dark');
    });
    observer.observe(html, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, []);

  const t = isDark ? dark : light;

  return (
    <Layout
      title="Learn Agentic Engineering in Claude Code"
      description="From GitHub basics to agentic engineering \u2014 a self-referential curriculum taught by the system it teaches you to build."
    >
      <Head>
        <meta name="theme-color" content={isDark ? '#161618' : '#FAF7F2'} />
      </Head>

      <main style={{ background: t.bg, color: t.text, fontFamily: "'DM Sans', system-ui, sans-serif" }}>

        {/* ═══ Hero ═══ */}
        <section style={{ maxWidth: 1120, margin: '0 auto', padding: 'clamp(2.5rem, 6vw, 5rem) 1.5rem clamp(2rem, 5vw, 4rem)' }}>
          <div
            className={styles.heroInner}
            style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'clamp(2rem, 4vw, 3rem)', alignItems: 'center' }}
          >
            {/* Text */}
            <div className={styles.fadeIn}>
              <p style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.73rem',
                letterSpacing: '0.1em',
                color: t.accent,
                marginBottom: '1.25rem',
                textTransform: 'uppercase',
              }}>
                A self-referential curriculum
              </p>

              <h1 style={{
                fontSize: 'clamp(2.4rem, 5.5vw, 4rem)',
                fontWeight: 700,
                lineHeight: 1.08,
                letterSpacing: '-0.035em',
                margin: '0 0 1.25rem',
              }}>
                Learn Agentic<br />
                Engineering{' '}
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontWeight: 400,
                  color: t.accent,
                  fontSize: '0.82em',
                }}>
                  in&nbsp;Claude
                </span>
              </h1>

              <p style={{ fontSize: '1.08rem', lineHeight: 1.65, color: t.muted, maxWidth: 500, margin: '0 0 2rem' }}>
                From GitHub basics to orchestrating AI agents. The skills teaching
                you are real skills. The subagents that built this curriculum were
                real subagents. You learn the system by being inside it.
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
                <Link
                  to="/docs/intro"
                  className={styles.cta}
                  style={{
                    display: 'inline-block',
                    padding: '0.75rem 1.5rem',
                    borderRadius: 8,
                    background: t.accent,
                    color: t.ctaText,
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    textDecoration: 'none',
                  }}
                >
                  Start the curriculum
                </Link>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.78rem', color: t.muted }}>
                  18 modules &middot; ~6 hrs
                </span>
              </div>
            </div>

            {/* Terminal mock-up */}
            <div
              className={`${styles.fadeIn} ${styles.fadeIn2}`}
              style={{
                background: t.termBg,
                borderRadius: 12,
                border: `1px solid ${t.termBorder}`,
                overflow: 'hidden',
              }}
            >
              {/* Chrome bar */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                padding: '0.75rem 1.25rem',
                borderBottom: `1px solid ${t.termBorder}`,
              }}>
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#FF5F57', display: 'inline-block' }} />
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#FEBC2E', display: 'inline-block' }} />
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#28C840', display: 'inline-block' }} />
                <span style={{
                  marginLeft: 'auto',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.68rem',
                  color: t.termMuted,
                }}>
                  ~/learn-agentic-engineering
                </span>
              </div>

              {/* Terminal body */}
              <div style={{
                padding: '1rem 1.25rem 1.25rem',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.76rem',
                lineHeight: 1.7,
              }}>
                {/* Claude Code banner */}
                <div style={{ color: t.termMuted }}>{'╭─────────────────────────────────╮'}</div>
                <div style={{ color: t.termMuted }}>
                  {'│ '}<span style={{ color: t.termAccent }}>✻</span>
                  <span style={{ color: t.termTextBright }}>{' Claude Code'}</span>
                  {'                   │'}
                </div>
                <div style={{ color: t.termMuted, marginBottom: '0.75rem' }}>{'╰─────────────────────────────────╯'}</div>

                {/* Prompt and output */}
                <div>
                  <span style={{ color: t.termAccent }}>{'❯'}</span>
                  <span style={{ color: t.termText }}>{' /project:start'}</span>
                </div>
                <div style={{ height: '0.4rem' }} />
                <div>
                  <span style={{ color: t.termGreen }}>{'●'}</span>
                  <span style={{ color: t.termText }}>{' Module 1.1 — '}</span>
                  <span style={{ color: t.termTextBright }}>The Problem GitHub Solves</span>
                </div>
                <div style={{ height: '0.3rem' }} />
                <div style={{ color: t.termMuted, paddingLeft: '0.9rem' }}>Have you ever worked on a document,</div>
                <div style={{ color: t.termMuted, paddingLeft: '0.9rem' }}>made changes, and then wished you</div>
                <div style={{ color: t.termMuted, paddingLeft: '0.9rem' }}>could go back to a previous version?</div>
                <div style={{ height: '0.3rem' }} />
                <div style={{ color: t.termMuted, paddingLeft: '0.9rem' }}>
                  {"That's the problem version control solves..."}
                  <span className={styles.cursor} style={{ color: t.termAccent, marginLeft: 2 }}>{'\u258C'}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ Curriculum ═══ */}
        <section style={{ maxWidth: 1120, margin: '0 auto', padding: '0 1.5rem 4rem' }}>
          <div className={styles.fadeIn}>
            <p style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.73rem',
              letterSpacing: '0.1em',
              color: t.accent,
              marginBottom: '0.5rem',
              textTransform: 'uppercase',
            }}>
              The curriculum
            </p>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 700, letterSpacing: '-0.025em', margin: '0 0 0.5rem' }}>
              Four sections, one thread
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.6, color: t.muted, maxWidth: 520, margin: '0 0 2rem' }}>
              Each section builds on the last. By section four, you&apos;ll recognise
              that every concept was at work around you from the start.
            </p>
          </div>

          <div
            className={styles.curriculumGrid}
            style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.75rem' }}
          >
            {SECTIONS.map((sec) => (
              <Link
                key={sec.num}
                to={sec.link}
                className={`${styles.card} ${styles.fadeIn}`}
                style={{
                  display: 'block',
                  textDecoration: 'none',
                  color: 'inherit',
                  padding: '1.25rem 1.5rem',
                  borderRadius: 8,
                  background: t.surface,
                  borderTop: `1px solid ${t.border}`,
                  borderRight: `1px solid ${t.border}`,
                  borderBottom: `1px solid ${t.border}`,
                  borderLeft: `3px solid ${t.accent}`,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginBottom: '0.3rem' }}>
                  <span style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.7rem',
                    color: t.accent,
                  }}>
                    {sec.num}
                  </span>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, margin: 0, letterSpacing: '-0.01em' }}>
                    {sec.title}
                  </h3>
                  <span style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.7rem',
                    color: t.muted,
                    marginLeft: 'auto',
                    whiteSpace: 'nowrap',
                  }}>
                    {sec.modules} modules
                  </span>
                </div>
                <p style={{ fontSize: '0.88rem', lineHeight: 1.5, color: t.muted, margin: 0 }}>
                  {sec.desc}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* ═══ How it works ═══ */}
        <section style={{ background: t.surface, padding: '4rem 1.5rem' }}>
          <div style={{ maxWidth: 1120, margin: '0 auto' }}>
            <p style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.73rem',
              letterSpacing: '0.1em',
              color: t.accent,
              marginBottom: '0.5rem',
              textTransform: 'uppercase',
            }}>
              How it works
            </p>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 700, letterSpacing: '-0.025em', margin: '0 0 2.5rem' }}>
              Learn, then see the machinery
            </h2>

            <div
              className={styles.stepsGrid}
              style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}
            >
              {STEPS.map((step) => (
                <div key={step.label}>
                  <div style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '1.2rem',
                    color: t.accent,
                    marginBottom: '0.5rem',
                  }}>
                    {step.icon}
                  </div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, margin: '0 0 0.4rem', letterSpacing: '-0.01em' }}>
                    {step.label}
                  </h3>
                  <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: t.muted, margin: 0 }}>
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ Footer CTA ═══ */}
        <section style={{ maxWidth: 1120, margin: '0 auto', padding: '4rem 1.5rem 5rem', textAlign: 'center' }}>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '1.1rem',
            color: t.muted,
            marginBottom: '1.5rem',
          }}>
            <span style={{ color: t.accent }}>❯</span>{' '}
            <span style={{ color: t.text }}>/project:start</span>
          </div>
          <Link
            to="/docs/intro"
            className={styles.cta}
            style={{
              display: 'inline-block',
              padding: '0.75rem 1.5rem',
              borderRadius: 8,
              background: t.accent,
              color: t.ctaText,
              fontWeight: 700,
              fontSize: '0.9rem',
              textDecoration: 'none',
            }}
          >
            Begin module 1.1
          </Link>
        </section>
      </main>
    </Layout>
  );
}

/* ─── Colour tokens ─── */

const light = {
  bg: '#FAF7F2',
  text: '#1B1B1F',
  muted: '#6F6F78',
  accent: '#D97756',
  surface: '#F0ECE4',
  border: 'rgba(0, 0, 0, 0.07)',
  ctaText: '#FFFFFF',
  termBg: '#1B1B22',
  termText: '#C0C0C8',
  termTextBright: '#E8E8EE',
  termMuted: '#606068',
  termAccent: '#D97756',
  termGreen: '#5CB270',
  termBorder: 'rgba(255, 255, 255, 0.06)',
};

const dark = {
  bg: '#161618',
  text: '#E5E2DD',
  muted: '#8A8A93',
  accent: '#E89070',
  surface: '#1E1E23',
  border: 'rgba(255, 255, 255, 0.07)',
  ctaText: '#161618',
  termBg: '#111114',
  termText: '#A0A0A8',
  termTextBright: '#D0D0D8',
  termMuted: '#555560',
  termAccent: '#E89070',
  termGreen: '#6BC47E',
  termBorder: 'rgba(255, 255, 255, 0.04)',
};
