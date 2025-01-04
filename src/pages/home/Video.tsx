import { Fragment } from 'react/jsx-runtime'
import homeVideo from '../../assets/videos/home-vid.mp4'
const Video = () => {
  return (
    <Fragment>
      <section className='
      #videoSection
      flex justify-center
      max-h[100vh] w-[100%]
      '>
        <div className='
        flex justify-center
        w-[90%]
        '>
          <video src={homeVideo} className='w-[100%] h-[790px] rounded-[12px]' controls></video>
        </div>
      </section>
    </Fragment>
  )
}

export default Video