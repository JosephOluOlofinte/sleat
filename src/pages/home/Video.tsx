import homeVideo from '../../assets/videos/home-vid.mp4'
const Video = () => {
  return (
    <section>
        <video src={homeVideo} width="750" height="500" controls></video>
    </section>
  )
}

export default Video