import React from 'react';
import { connect } from 'react-redux';
import { simpleAction } from '../redux/actions/simpleAction';

class EventDemo extends React.Component {
  constructor(props) {
      super();
      this.state = { count: 0 , newName: 'YangSB'};
      this.myName = props.myName;
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleRedux = this.handleRedux.bind(this);
      console.log(props.myName);

      this.student = {
        name: 'wang',
        age: 8,
        major: 'math',
      };

  }

  componentWillMount() {

  }

  handleSubmit() {
    console.log(this.state.count);
    this.setState(state => ({
      count: state.count + 1,
      newName: 'Yang'
    }));
  }

    handleRedux() {
        console.log('handle redux');
        this.props.simpleAction();
    }

    render() {
      console.log(this.props.simpleReducer.reduxName);
      let a = this.student.name;
      return (
       <div>
         This is my Name: {a}
         <div>
         This is my newName: {this.state.newName}
         </div>
         <div>
         This is my reduxName: {this.props.simpleReducer.reduxName}
         </div>
         <div>
           This is a counter: {this.state.count}
         </div>

         <div>
          <button onClick={this.handleSubmit}> Plus </button>
         </div>

         <div>
          <button className={'btn-primary'} onClick={this.handleRedux}> Redux </button>
         </div>


       </div>
      );
    }


    componentDidMount() {

    }

    componentDidUpdate() {

    }
  }

  const mapStateToProps = state => ({
    ...state
   })

// const mapDispatchToProps = dispatch => ({
//
//   simpleAction: () => dispatch(simpleAction)
//  })

const mapDispatchToProps = dispatch => {
    return {
        simpleAction: () => dispatch({
            type: 'SIMPLE_ACTION',
            payload: 'result_of_simple_action'
        })
    }
}

 export default connect(mapStateToProps, mapDispatchToProps)(EventDemo);
