import ProfileSection from '../ProfileSection'
// import JobDetailsSection from '../JobDetailsSection'

import Header from '../Header'

import './index.css'

const Jobs = props => {
  const {employmentList, salaryList} = props
  return (
    <div>
      <Header />
      <div className="product-sections">
        <ProfileSection employment={employmentList} />
        {/* <JobDetailsSection salary={salaryList} /> */}
      </div>
    </div>
  )
}

export default Jobs
