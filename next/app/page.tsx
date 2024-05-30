import { Button, buttonVariants } from '@/components/ui/button';
import { Github, LinkedinIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">hey, I&apos;m Jan 🐢</h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I am an experienced Full Stack Developer with a passion for creating versatile and modern
          software solutions. My journey in technology began at 14, integrating LEGO Technic with
          Raspberry Pi. This early interest led to the development of a comprehensive school
          administration system (admissio.at), advancing cloud infrastructure for a major Austrian
          insurance platform, building a web-native AR/VR solution as well as the accompanying sdk,
          creating highly scalable and performant web applications for one of the biggest media
          companies in Austria, among other projects.
        </p>
      </div>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          My expertise spans a wide range of technologies including TypeScript, Node.js, React,
          Next.js, Remix, and Google Cloud Platform (GCP). I am known for my quick learning and
          adaptability, always committed to delivering effective software solutions.
        </p>
      </div>

      {/* <div className="my-8 flex h-14 w-full flex-row space-x-2 overflow-x-auto">
        <div className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">
          <a href="https://linear.app">
            <svg width="78" height="20" role="img" aria-label="Linear logo">
              <use href="/sprite.svg#linear" />
            </svg>
          </a>
        </div>
        <div className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">
          <a href="https://supabase.com">
            <svg width="100" height="19" role="img" aria-label="Supabase logo">
              <use href="/sprite.svg#supabase" />
            </svg>
          </a>
        </div>
        <div className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">
          <a href="https://www.makeswift.com/blog/makeswift-is-joining-bigcommerce">
            <svg width="96" height="19" role="img" aria-label="Makeswift logo">
              <use href="/sprite.svg#makeswift" />
            </svg>
          </a>
        </div>
        <div className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">
          <a href="https://resend.com">
            <svg width="70" height="17" role="img" aria-label="Resend logo">
              <use href="/sprite.svg#resend" />
            </svg>
          </a>
        </div>
        <div className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">
          <a href="https://bun.sh">
            <svg width="35" height="27" role="img" aria-label="Bun logo">
              <use href="/sprite.svg#bun" />
            </svg>
          </a>
        </div>
      </div> */}
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Throughout my career, I&apos;ve worked with and at companies on various aspects of
          software development, cloud infrastructure, and web technologies. My projects include
          developing{' '}
          <Link
            href={'https://admissio.at'}
            target="_blank"
            className="underline"
            rel="noopener noreferrer"
          >
            admissio.at
          </Link>
          , the most flexible school administration system in Austria, building multiple web-based
          3D prototypes and proof of concepts for fragrance experts, and contributing to
          cloud-native infrastructure migration and feature development at{' '}
          <Link
            href={'https://durchblicker.at'}
            target="_blank"
            className="underline"
            rel="noopener noreferrer"
          >
            durchblicker
          </Link>
          ,{' '}
          <Link
            href={'https://regionalmedien.at'}
            target="_blank"
            className="underline"
            rel="noopener noreferrer"
          >
            regionalmedien austria
          </Link>
          , and{' '}
          <Link
            href={'https://captic.io'}
            target="_blank"
            className="underline"
            rel="noopener noreferrer"
          >
            Captic
          </Link>
          space-
        </p>
      </div>
      <ul className="font-sm mt-4 flex space-x-0 p-0 gap-1 space-y-2 text-neutral-600 md:space-y-0 dark:text-neutral-300 items-center justify-start list-none">
        <li className="m-0">
          <Button
            asChild
            className="flex items-start transition-all hover:text-neutral-800 dark:hover:text-neutral-100 px-0"
            rel="noopener noreferrer"
            variant={'link'}
          >
            <Link href={'https://linkedin.com/in/jan-hoppel'} passHref className="h-7">
              <LinkedinIcon />
            </Link>
          </Button>
        </li>
        <li className="m-0">
          <Button
            asChild
            className="flex items-start transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            variant={'link'}
          >
            <Link href={'https://github.com/hjopel'} passHref className="h-7">
              <Github />
            </Link>
          </Button>
        </li>
      </ul>
    </section>
  );
}
