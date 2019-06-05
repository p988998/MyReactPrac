import React from 'react';
import { connect } from 'react-redux';
import { simpleAction } from '../redux/actions/simpleAction';

class EventDemo extends React.Component {
  constructor(props) {
      super();
      this.state = {  count: 0,
                      newName: 'YangSB',
                      serverId: 10,
                      serverStatus: 'offLine',
                      isLoggedIn: false,
                      username: '',
                      password: ''};
      this.myName = props.myName;
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleRedux = this.handleRedux.bind(this);
      this.getServerStatus = this.getServerStatus.bind(this);
      this.counterPlus = this.counterPlus.bind(this);
      this.resetCounter = this.resetCounter.bind(this);
      this.handleLoginClick = this.handleLoginClick.bind(this);
      this.handleLogoutClick = this.handleLogoutClick.bind(this);
      this.handleChange = this.handleChange.bind(this);
      console.log(props.myName);

      this.students = [ {name: 'Bill Gates', age: 10, major: 'Computer Science'},
                        {name: 'Steve Jobs', age: 11, major: 'Computer Science'} ,
                        {name: 'Elon Musk', age: 12, major: 'Computer Science'}
                        ];
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

    getServerStatus(){
        console.log('server status');
        return this.state.serverStatus;
    }

    counterPlus(){
      this.setState(state => ({
          count: state.count +1
      }))
    }

    resetCounter(){
        this.setState(state => ({
            count: 0
        }))
    }
    handleLoginClick(event) {
        this.setState(state => ({
            isLoggedIn: true}));
        event.preventDefault();
    }

    handleLogoutClick(event) {
        this.setState({isLoggedIn: false});
        this.setState({username: ''});
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({username: event.target.value});
    }


    render() {
      console.log(this.props.simpleReducer.reduxName);
        const listItems = this.students.map((Student) =>
            <li key={Student.name}>
                <span className="studentBox">{Student.name}</span>
                <span className="studentBox">{Student.age}</span>
                <span className="studentBox">{Student.major}</span>
            </li>);

        return (


       <div>
           <p> Server with ID { this.state.serverId }  is { this.state.serverStatus } </p>
           <p> { 'Server' } with ID { this.state.serverId }  is { this.state.serverStatus } </p>
           <p> { 'Server' } with ID { this.state.serverId }  is { this.getServerStatus() } </p>
           <hr/>
           <h4>This is a counter</h4>
           <p> {this.state.count} </p>
           <div >
               <button className={'btn-primary'} onClick={this.counterPlus}> plus one</button>
               <button className={'btn-primary'} onClick={this.resetCounter}> reset counter</button>
           </div>

           <hr/>
           <h4>This is a input Box with Event Binding</h4>
           <form onSubmit={this.handleLoginClick}>
               <label>
                   User Name:
                   <input type="text" value={this.state.username} onChange={this.handleChange} />
               </label>
               <label>
                   Password:
                   <input type="password" name = 'password'/>
               </label>
               <input type="submit" value="Submit" />
               <button onClick={this.handleLogoutClick}>log out</button>
           </form>
           <div>
               {this.state.isLoggedIn ? (
                   <span>you logged in as {this.state.username}</span>
               ) : (
                   <span>you are not logged in</span>
               )}
           </div>

           <hr/>
           <h4>This is a StudentList managed by for loop</h4>
           <div>
               <ul>
                   {listItems}
               </ul>
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
