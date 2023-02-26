import Topbar from './Topbar'
import DateBox from './DateBox'
import Mainbox from './Mainbox'

const Home = () => {
  return (
    <div className='home'>
      <div className='side'>
        <h1>RFQ List</h1>
        <div>
          <h3>Sort By :</h3>
          <DateBox Heading={"Published Date"} />
          <DateBox Heading={"Closing Date"} />
        </div>
        <h3>Preferred Source of Origin</h3>
      </div>
      <div className="main">
        <Topbar />
        <Mainbox />
        <div className="mainbox">
        
        </div>
      </div>
    </div>
  )
}

export default Home