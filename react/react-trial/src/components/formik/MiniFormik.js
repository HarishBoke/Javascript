// https://reactjs.org/docs/forms.html#controlled-components
// https://www.youtube.com/watch?v=oiNtnehlaTo&t=2510s

import React, {Component} from 'react'

class MiniFormikImplmentation extends Component {
    // values become new state for child component
    state = {
        values: this.props.initialValues || {},
        touched: {},
        errors:{}
    };

    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        // this.setState({
        //   [name]: value,
        // }); // should not be state it should mirror values 
        event.persist(); // what is persist ?
        this.setState(prevState => ({
            values:{
                ...prevState.values,
                [name]: value,
            }, 
          }));
    }
    // copied from handleChange
    handleBlur = (event) => {
        const target = event.target;
        // const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        event.persist(); // what is persist ?
        this.setState(prevState => ({
            // touched takes on blur,, i guess ?
            touched:{
                ...prevState.touched,
                [name]: true,
            }, 
          }));
    }

    render(){
        return this.props.children({
            ...this.state,
            handleChange: this.handleChange,
        })
    }
}
// class Reservation extends React.Component {
export default class MiniFormik extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       isGoing: true,
    //       numberOfGuests: 2
    //     };
    
    //     this.handleInputChange = this.handleInputChange.bind(this);
    //   }
    // handleInputChange (event) {
    //     const target = event.target;
    //     const value = target.type === 'checkbox' ? target.checked : target.value;
    //     const name = target.name;
    
    //     this.setState({
    //       [name]: value
    //     });
    // }
 
  
    render() {
      return (
          // initial values are noting but the state in normal form
          <MiniFormikImplmentation initialValues={{
            isGoing: true,
            numberOfGuests: 2
          }}>
              {(values, handleChange) =>
                    <form>
                    <label>
                        Is going:
                        <input
                        name="isGoing"
                        type="checkbox"
                        // checked={this.state.isGoing}
                        checked={values.isGoing}
                        // onChange={this.handleInputChange}
                        onChange={handleChange}
                         />
                    </label>
                    <br />
                    <label>
                        Number of guests:
                        <input
                        name="numberOfGuests"
                        type="number"
                        // value={this.state.numberOfGuests}
                       //  onChange={this.handleInputChange}
                         checked={values.numberOfGuests}
                         onChange={handleChange}
                         />
                    </label>
                    </form>
                }
          </MiniFormikImplmentation>
      );
    }
  }
  