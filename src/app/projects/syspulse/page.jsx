import Link from 'next/link';
import Image from 'next/image';

export default function SysPulse() {
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
          SysPulse
        </h1>
        <p className='mt-3 text-lg text-zinc-600 leading-relaxed'>
          A modern cross-platform Linux desktop system monitor built with .NET, Avalonia UI, and Entity Framework Core, providing native hardware telemetry with zero P/Invoke overhead.
        </p>

        <div className='mt-8 mb-12 flex h-80 sm:h-96 w-full items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 p-4'>
          <Image
            className='h-full w-auto max-w-full rounded-lg object-contain shadow-xs'
            src='/syspulse.png'
            width={700}
            height={400}
            alt='SysPulse Desktop Monitor'
            priority
          />
        </div>

        <div className='mb-10 grid grid-cols-1 gap-10 md:grid-cols-3'>
          <div className='md:col-span-2 space-y-4 text-zinc-700 leading-relaxed'>
            <h2 className='text-xl font-bold text-zinc-900 border-b border-zinc-200 pb-2'>
              System Architecture & Design
            </h2>
            <p>
              SysPulse is designed to monitor Linux kernel diagnostics with minimal runtime footprint. Rather than relying on heavyweight platform-invoke (P/Invoke) boundaries or external daemon dependencies, it directly parses virtual filesystem nodes in <code className='rounded bg-zinc-100 px-1.5 py-0.5 text-xs font-mono text-zinc-800'>/proc</code> and <code className='rounded bg-zinc-100 px-1.5 py-0.5 text-xs font-mono text-zinc-800'>/sysfs</code> (<code className='text-xs font-mono'>/proc/stat</code>, <code className='text-xs font-mono'>/proc/meminfo</code>, <code className='text-xs font-mono'>/proc/net/dev</code>, and <code className='text-xs font-mono'>/sys/class/hwmon</code>).
            </p>
            <p>
              The user interface leverages Avalonia UI and the MVVM (Model-View-ViewModel) design pattern with reactive property bindings. Historical metrics and system snapshots can be persisted to local SQLite or networked MySQL databases using Entity Framework Core.
            </p>
          </div>

          <div>
            <h2 className='text-xl font-bold text-zinc-900 border-b border-zinc-200 pb-2 mb-4'>
              Technologies Used
            </h2>
            <div className='flex flex-wrap gap-2'>
              {[
                'C#',
                '.NET 9',
                'Avalonia UI',
                'XAML',
                'MVVM Pattern',
                'EF Core',
                'SQLite / MySQL',
                'Linux Systems'
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
              Zero P/Invoke virtual filesystem parsing
            </li>
            <li className='flex items-center gap-2'>
              <span className='h-1.5 w-1.5 rounded-full bg-zinc-400' />
              Reactive MVVM UI binding with Avalonia
            </li>
            <li className='flex items-center gap-2'>
              <span className='h-1.5 w-1.5 rounded-full bg-zinc-400' />
              EF Core snapshot persistence pipeline
            </li>
            <li className='flex items-center gap-2'>
              <span className='h-1.5 w-1.5 rounded-full bg-zinc-400' />
              Dynamic dark / light theme management
            </li>
          </ul>
        </div>

        <div className='flex flex-wrap gap-3 pt-6 border-t border-zinc-200'>
          <a
            href='https://github.com/Rice-Cameron/SysPulse'
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
