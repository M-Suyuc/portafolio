import ecommerce from '../assets/ecommerce.png'
import { ArrowUpRight, Github } from './SVGIcons'
import clsx from 'clsx'

function Potafolio () {
  const proyectos = [
    {
      title: 'Ecommerce',
      img: ecommerce,
      enlaceGithub: 'https://github.com/M-Suyuc/e-commerce',
      enlaceWeb: 'https://marlostore.vercel.app/',
      lenguages: ['React.js', 'Redux Toolkit', 'Tailwind CSS'],
      content:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio dolor dicta nisi quidem aliquid modi fuga eos.'
    }
    // {
    //   title: 'Ecommerce',
    //   img: ecommerce,
    //   enlaceGithub: 'https://github.com/M-Suyuc/e-commerce',
    //   enlaceWeb: 'https://marlostore.vercel.app/',
    //   lenguages: ['React.js', 'Redux Toolkit', 'Tailwind CSS'],
    //   content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio dolor dicta nisi quidem aliquid modi fuga eos.'
    // },
    // {
    //   title: 'Ecommerce',
    //   img: ecommerce,
    //   enlaceGithub: 'https://github.com/M-Suyuc/e-commerce',
    //   enlaceWeb: 'https://marlostore.vercel.app/',
    //   lenguages: ['React.js', 'Redux Toolkit', 'Tailwind CSS'],
    //   content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio dolor dicta nisi quidem aliquid modi fuga eos.'
    // },
    // {
    //   title: 'Ecommerce',
    //   img: ecommerce,
    //   enlaceGithub: 'https://github.com/M-Suyuc/e-commerce',
    //   enlaceWeb: '',
    //   lenguages: ['React.js', 'Redux Toolkit', 'Tailwind CSS'],
    //   content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio dolor dicta.'
    // }
  ]

  return (
    <section id='portfolio' className='pt-8 md:pt-[4.5rem] pb-16'>
      <h3 className='title-section'>Portafolio</h3>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {proyectos.map((proyecto, index) => {
          const { title, img, enlaceGithub, enlaceWeb, lenguages, content } =
            proyecto
          return (
            <article
              key={title}
              className={clsx(
                'relative rounded-xl border-2 border-gray-700/30 bg-clip-padding p-4 pb-4 shadow-lg w-auto overflow-hidden',
                index === 0 &&
                  'bg-[linear-gradient(120deg,var(--tw-gradient-stops))] from-green-400/70 to-cyan-600/80 shadow-cyan-600/20',
                index === 1 &&
                  'bg-[linear-gradient(40deg,var(--tw-gradient-stops))] from-pink-300/80 to-violet-500/40 shadow-violet-500/20',
                index === 2 &&
                  'bg-[linear-gradient(140deg,var(--tw-gradient-stops))] from-cyan-400/80 to-indigo-700/50 shadow-indigo-700/20',
                index === 3 &&
                  'bg-[linear-gradient(140deg,var(--tw-gradient-stops))] from-orange-500/50 to-yellow-500/80 shadow-yellow-500/20',
                index === 4 &&
                  'bg-[linear-gradient(120deg,var(--tw-gradient-stops))] from-green-400/70 to-cyan-600/80 shadow-cyan-600/20',
                index === 5 &&
                  'bg-[linear-gradient(180deg,var(--tw-gradient-stops))] from-gray-200/40 to-rose-500/80 shadow-rose-500/20',
                index === 6 &&
                  'bg-[linear-gradient(120deg,var(--tw-gradient-stops))] from-yellow-300/80 to-rose-600/80 shadow-rose-600/20',
                index === 7 &&
                  'bg-[linear-gradient(40deg,var(--tw-gradient-stops))] from-pink-300/80 to-violet-500/40 shadow-violet-500/20'
              )}
            >
              <figure className='relative flex aspect-2 w-full'>
                <img
                  src={img}
                  className='rounded-t-lg object-cover object-center [mask-image:linear-gradient(180deg,#fff_16.35%,rgb(255_255_255_/_0%)_91.66%)]'
                />
              </figure>

              <div className='relative px-3 pt-1 pb-3 flex flex-col justify-between'>
                <div className='flex flex-col gap-3'>
                  <h4 className='text-gray-700 font-semibold text-xl dark:text-modeDarkTitle first-letter:uppercase'>
                    {title}
                  </h4>

                  <div className='mt-0.5 -ml-0.5 flex items-center flex-wrap gap-2 tracking-tight text-slate-100 dark:text-slate-300'>
                    {lenguages.map((len, i) => {
                      return (
                        <h3
                          key={i}
                          className='flex select-none items-center gap-1 rounded border border-gray-700/10 bg-gray-900/50 dark:bg-gray-900/20 py-[2px] px-1.5 text-[14px]'
                        >
                          {len}
                        </h3>
                      )
                    })}
                  </div>
                  <main>
                    <p className='mt-2 text-[15px] mb-6 tracking-tight text-gray-700 dark:text-gray-200 '>
                      {content}
                    </p>
                  </main>
                </div>
              </div>

              <footer className='absolute bottom-3 left-0 mt-auto flex w-full items-end justify-end gap-2 px-4'>
                {enlaceGithub && (
                  <a
                    href={enlaceGithub}
                    target='_blanck'
                    rel='noreferrer'
                    className='fill-slate-800 hover:fill-slate-100 w-5 cursor-pointer dark:fill-slate-200 dark:hover:fill-slate-900'
                  >
                    <Github />
                  </a>
                )}
                {enlaceWeb && (
                  <a
                    href={enlaceWeb}
                    target='_blanck'
                    rel='noreferrer'
                    className='fill-slate-800 hover:fill-slate-100 w-5 cursor-pointer dark:fill-slate-200 dark:hover:fill-slate-900'
                  >
                    <ArrowUpRight />
                  </a>
                )}
              </footer>
            </article>
          )
        })}
      </div>
    </section>
  )
}
// class="tracking tight max-w-3xl leading-relaxed text-gray-500 d:text-gray-100/70 [&>p+p]:mt-4"
export default Potafolio
