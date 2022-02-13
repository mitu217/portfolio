import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import Image from 'next/image';

const Card = () => {
  return (
    <section className='min-h-screen w-full'>
      <div className='h-screen flex flex-col justify-center max-w-xs mx-auto bg-white rounded-xl p-5 dark:bg-gray-900'>
        <div className='text-center'>
          <Image
            src='/icon.png'
            alt='mitu217'
            width={120}
            height={120}
            className='w-32 mx-auto rounded-full'
          />
        </div>
        <div className='text-center mt-5'>
          <p className='text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-50'>
            mitu217
          </p>
          <p className='text-xs sm:text-base text-gray-400 pt-2 pb-4 px-5 w-58 inline-block border-b-2'>
            Software Engineer
          </p>
          <div className='flex align-center justify-center mt-4'>
            <a
              className='text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-80npm0 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300 dark:text-gray-200 dark:hover:bg-gray-500'
              href='https://github.com/mitu217'
            >
              <FaGithub />
              <span className='sr-only'>Github</span>
            </a>
            <a
              className='text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300'
              href='https://twitter.com/mitu217'
            >
              <FaTwitter />
              <span className='sr-only'>Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
