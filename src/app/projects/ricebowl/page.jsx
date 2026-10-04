import Link from 'next/link';
import Image from 'next/image';

export default function Ricebowl() {
  return (
    <div className='container mx-auto px-4 py-16 md:px-6 max-w-4xl'>
      <div className='animate-hero-fade'>
        <Link
          href='/projects'
          className='inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-500 hover:text-zinc-900 transition-colors mb-6'
        >
          <svg className='h-4 w-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 19l-7-7m0 0l7-7m-7 7h18' />
          </svg>
          Back to Projects
        </Link>

        <h1 className='text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950'>
          ricebowl
        </h1>
        <p className='mt-3 text-lg text-zinc-600 leading-relaxed'>
          A blazing fast, asynchronous terminal user interface (TUI) for tracking live NCAA College Football scores, play-by-play, box scores, and field position on a dynamic 100-yard ASCII field. Go Beavs!
        </p>

        <div className='mt-8 mb-12 flex h-80 sm:h-96 w-full items-center justify-center rounded-xl border border-zinc-200 bg-zinc-900 p-4'>
          <Image
            className='h-full w-auto max-w-full rounded-lg object-contain shadow-xs'
            src='/ricebowl.png'
            width={700}
            height={400}
            alt='ricebowl Terminal User Interface'
            priority
          />
        </div>

        <div className='mb-10 grid grid-cols-1 gap-10 md:grid-cols-3'>
          <div className='md:col-span-2 space-y-4 text-zinc-700 leading-relaxed'>
            <h2 className='text-xl font-bold text-zinc-900 border-b border-zinc-200 pb-2'>
              TUI Architecture & Systems Design
            </h2>
            <p>
              ricebowl is engineered in Rust to bring real-time NCAA College Football gamecasts directly to developers' terminals. Utilizing <code className='rounded bg-zinc-100 px-1.5 py-0.5 text-xs font-mono text-zinc-800'>ratatui</code> and <code className='rounded bg-zinc-100 px-1.5 py-0.5 text-xs font-mono text-zinc-800'>crossterm</code>, it delivers a flicker-free 60 FPS terminal experience with zero external graphical dependencies.
            </p>
            <p>
              Under the hood, an asynchronous Tokio background runtime polls live collegiate football scoreboards and game summaries via <code className='rounded bg-zinc-100 px-1.5 py-0.5 text-xs font-mono text-zinc-800'>reqwest</code> and deserializes telemetry with <code className='rounded bg-zinc-100 px-1.5 py-0.5 text-xs font-mono text-zinc-800'>serde_json</code>. State updates are dispatched across unbounded channels, ensuring network latency never stutters terminal rendering or keyboard navigation.
            </p>
          </div>

          <div>
            <h2 className='text-xl font-bold text-zinc-900 border-b border-zinc-200 pb-2 mb-4'>
              Technologies Used
            </h2>
            <div className='flex flex-wrap gap-2'>
              {[
                'Rust',
                'Ratatui',
                'Tokio (Async)',
                'Crossterm',
                'Reqwest',
                'Serde JSON',
                'Terminal UI (TUI)',
                'Linux / CLI'
              ].map((tech) => (
                <span
                  key={tech}
                  className='rounded-md border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs font-medium text-zinc-800'
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className='mb-10 rounded-xl border border-zinc-200 bg-zinc-50/70 p-6'>
          <h3 className='text-sm font-bold uppercase tracking-wider text-zinc-700 mb-3'>
            Key Engineering Highlights
          </h3>
          <ul className='grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-zinc-600'>
            <li className='flex items-center gap-2'>
              <span className='h-1.5 w-1.5 rounded-full bg-zinc-400' />
              Asynchronous non-blocking network polling with Tokio
            </li>
            <li className='flex items-center gap-2'>
              <span className='h-1.5 w-1.5 rounded-full bg-zinc-400' />
              Dynamic 100-yard ASCII field position & red-zone rendering
            </li>
            <li className='flex items-center gap-2'>
              <span className='h-1.5 w-1.5 rounded-full bg-zinc-400' />
              Full FBS scoreboard, Top 25 filter, and team favorites
            </li>
            <li className='flex items-center gap-2'>
              <span className='h-1.5 w-1.5 rounded-full bg-zinc-400' />
              Comprehensive box scores, stats, and play feeds
            </li>
          </ul>
        </div>

        <div className='flex flex-wrap gap-3 pt-6 border-t border-zinc-200'>
          <a
            href='https://github.com/Rice-Cameron/ricebowl'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-zinc-800'
          >
            View GitHub Repository
            <svg className='h-4 w-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M14 5l7 7m0 0l-7 7m7-7H3' />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
