import { Fragment } from 'react/jsx-runtime'
import homeImage from '../../assets/img/homeImage.png'
const Image = () => {
  return (
    <Fragment>
      <section className='flex justify-center items-start w-[100%] m-0'>

        <div className="w-[90%] desktop:w-[80%] bg-orange80">
        <img src={homeImage} className="w-[100%]"/>
        </div>
      </section>
    </Fragment>
  )
}

export default Image