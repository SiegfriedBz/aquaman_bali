import CustomButton from './CustomButton'

export const LessonsDetails = () => {
  return (
    <>
      <div className='w-full md:mb-4 md:mt-8'>
        <h2 className='self-start text-lg font-bold md:text-2xl'>Beginner</h2>
        <p className='mb-2 text-justify md:text-start md:text-xl'>
          On your very first lesson you will be given an introduction on the
          beach about the surfboard, safety in the water, how to paddle,
          balance, stand up and surf the wave.
        </p>
        <p className='text-justify md:text-xl'>
          Surfing lessonss with a professional instructor including 30 minutes
          of detailed surf basics, theory and safety on the beach before jumping
          into the water to catch and surf your first waves.
        </p>
      </div>

      <br />

      <div className='w-full md:my-4'>
        <h2 className='self-start text-lg font-bold md:text-2xl'>
          Intermediate
        </h2>
        <p className='mb-2 text-justify md:text-xl'>
          You have already taken one or more surf lessons before and need help
          to improve your surfing? If you don&apos;t need the basic and theory
          part, we can jump straight into the water to surf and enjoy more time
          in the water.
        </p>
        <p className='text-justify md:text-xl'>
          Surfing lessonss in the water with a professional instructor. You will
          get help with wave selection and catching waves and tips on your body
          position.
        </p>
      </div>

      <br />

      <div className='w-full md:my-4'>
        <h2 className='self-start text-lg font-bold md:text-2xl'>Advanced</h2>
        <p className='mb-2 text-justify md:text-xl'>
          You are able to catch white water or green waves already and want to
          improve your surfing?
        </p>
        <p className='text-justify md:text-xl'>
          Surfing lessonss in the water with a professional instructor. You will
          get help with wave selection, catching green waves and tips on your
          body position and surf maneuvers. It is highly recommended to add a
          video analysis option to your lesson to see how you are doing and your
          mistakes and let your instructor correct them afterwards.
        </p>
      </div>

      <br />

      <p className='self-start font-bold md:mt-4 md:text-2xl'>
        What is included?
      </p>
      <ul className='ms-8 w-full'>
        <li className='list-disc md:text-xl'>
          <span className='block font-bold md:text-xl'>
            All equipment needed:{' '}
          </span>
          We provide premium custom made beginner soft boards with soft fins,
          intermediate surf boards options, leash, rash guard and surf facial
          sunscreen/zink
        </li>
        <li className='list-disc md:text-xl'>Recovery water</li>
        <li className='list-disc md:text-xl'>Shower</li>
      </ul>

      <br />

      <p className='w-full self-start font-bold md:mt-4 md:text-2xl'>Options</p>
      <ul className='ms-8 w-full'>
        <li className='list-disc md:text-xl'>
          Photos & Videos of your session
        </li>
        <li className='list-disc md:text-xl'>Video analysis</li>
      </ul>

      <div className='mx-auto mb-4 mt-5 flex flex-col items-center'>
        <CustomButton />
      </div>
    </>
  )
}
