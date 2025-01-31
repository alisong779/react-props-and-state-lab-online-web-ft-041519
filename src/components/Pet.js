import React from 'react'

class Pet extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            Gender: {this.props.pet.gender === "female" ? '♀' : '♂'}
            Name: {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.pet.isAdopted ? (
            <button className="ui disabled button">Already adopted</button>
          ) : (
            <button
              className="ui primary button"
              onClick={() => this.props.onAdoptPet(this.props.pet.id)}>
              Adopt pet
            </button>
            )}

        </div>
      </div>
    )
  }
}

export default Pet


//Should receive a pet prop.
//It should show the pet's name, type, age and weight.
//Based on the pet's gender, the component also needs to contain either a male (♂) or female (♀) symbol.

//Should receive an isAdopted prop.
//if the pet is adopted, show the disabled button
//Otherwise, show the primary button to adopt the pet

//Should receive an onAdoptPet callback prop
//This callback prop gets called with the pet's id when the user clicks the adopt pet button
//not when they click the disabled button
