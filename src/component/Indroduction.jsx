import {introduction} from "../constants"
import {GrayPic} from "../assets/images"
const Indroduction = () => {
  return (
    <div className="xl:container">
      <div className="w-3/4 m-auto">
        {introduction.map((item) => (
          <div className="grid grid-cols-2 gap-16 text-secondary font-small font-LeagueSpartan pb-12" key={item.label}>
            <div>
            <h3 className="text-primary font-bold font-LeagueSpartan text-3xl pb-1">Sharepoint Mircrosoft</h3>
              {item.label}
              </div>
            <div><img className="rounded-lg" src={GrayPic} alt="" /></div>  
          </div>        
        ))}
        {introduction.map((item) => (
          <div  className="grid grid-cols-2 gap-16 text-secondary font-small font-LeagueSpartan pb-12" key={item.label}>
            <div><img className="rounded-lg" src={GrayPic} alt="" /></div>  
            <div>
            <h3 className="text-primary font-bold font-LeagueSpartan text-3xl pb-1">Building with block</h3>
              {item.label}</div>
          </div>        
        ))}
        {introduction.map((item) => (
          <div  className="grid grid-cols-2 gap-16 text-secondary font-small font-LeagueSpartan pb-12" key={item.label}>
            <div>
            <h3 className="text-primary font-bold font-LeagueSpartan text-3xl pb-1">Tons of elements for you</h3>
            {item.label}</div>
            <div><img className="rounded-lg" src={GrayPic} alt="" /></div>  
          </div>        
        ))}
      </div>
    </div>
  )
}

export default Indroduction