import { Fragment } from 'react/jsx-runtime'
import homeVideo from '../../assets/videos/home-vid.mp4'
const Video = () => {
  return (
    <Fragment>
      <section className='
      #videoSection
      flex justify-center items-start
      w-[100%]
      m-0
      '>
        <div className='
        flex justify-center items-start
        w-[90%]
        '>
          <video src={homeVideo} className='w-[100%] rounded-[12px]'></video>
        </div>
      </section>
    </Fragment>
  )
}

export default Video