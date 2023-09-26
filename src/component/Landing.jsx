import {DownArrow} from '../assets/images';
const Landing = () => {
  return (
    <div className="xl:container text-center">
      <h2 className="text-primary font-bold font-LeagueSpartan text-5xl pt-20 pb-10">
        Develop Your Website <br />
        Without Coding
      </h2>
      <h5 className="text-primary font-medium font-LeagueSpartan text-2xl pb-20">Design With sharepoint by DRAG AND DROP.</h5>
      <p className="text-secondary font-small font-LeagueSpartan text-md w-1/2 m-auto pb-10">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
      <div className="w-full">
        <button className="btn btn-outline text-primary btn-wide text-lg font-LeagueSpartan mb-10">Try it!</button>
      </div>
      <a className="w-full text-primary text-2xl font-LeagueSpartan mb-16 block" href="">
        Why Sharepoint?
        <img className="mx-auto" src={DownArrow} alt="DownArrow" />
      </a>
    </div>
  )
}

export default Landing