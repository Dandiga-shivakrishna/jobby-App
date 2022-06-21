import {Component} from 'react'
import './index.css'

class ProfileSection extends Component {
  state = {
    checkedItems: new Map(),
  }

  handleChange(event) {
    const isChecked = event.target.checked
    const item = event.target.value

    this.setState(prevState => ({
      checkedItems: prevState.checkedItems.set(item, isChecked),
    }))
  }

  render() {
    const {employment} = this.props
    return (
      <div>
        {employment.map(item => (
          <li>
            <label>
              <input
                type="checkbox"
                value={item.employmentTypeId}
                onChange={this.handleChange}
              />{' '}
              {item.label}
            </label>
          </li>
        ))}
      </div>
    )
  }
}

export default ProfileSection
