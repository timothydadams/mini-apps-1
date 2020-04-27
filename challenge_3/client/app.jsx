
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phase: 0,
      userID: ''
    };
    this.changePhase = this.changePhase.bind(this);
    this.postUserInfo = this.postUserInfo.bind(this);
    this.postUserAddress = this.postUserAddress.bind(this);
    this.postCCInfo = this.postCCInfo.bind(this);
  }

  changePhase() {
    this.setState((state) => {
      return {phase: state.phase + 1 };
    });
  }

  postUserInfo(e) { //form 1 action
    e.preventDefault();
    //e.persist();
    var name = e.target[0].value;
    var email = e.target[1].value;
    var pw = e.target[2].value;
    console.log(name, email, pw);
    //add user to the db
      //add userID to state

    //update the phase on success
    this.changePhase();
  }

  postUserAddress(e) { //form2 action
    e.preventDefault();
    //capture address info from user form submission
    var line1 = e.target[0].value;
    var line2 = e.target[1].value;
    var city = e.target[2].value;
    var state = e.target[3].value;
    var zip = e.target[4].value;
    //grab the userID stored in state
    var id = this.state.userID;
    console.log(line1,line2,city,state,zip);
    //add address info to the db

    //update the phase on success
    this.changePhase();
  }

  postCCInfo(e) {
    e.preventDefault();
    var ccNum = e.target[0].value;
    var expYear = e.target[1].value;
    var expMonth = e.target[2].value;
    var cvv = e.target[3].value;
    var billZip = e.target[4].value;
    console.log(ccNum, expYear, expMonth, cvv, billZip);


  }

  continueShopping() {
    this.changePhase(0);
  }


  render() {
    let display;
    if (this.state.phase === 0) {
      display = <button onClick={this.changePhase}>Place Order</button>;
    } else if (this.state.phase === 1) {
      display = <F1 handleForm1={this.postUserInfo}/>;
    } else if (this.state.phase === 2) {
      display = <F2 handleForm2={this.postUserAddress}/>;
    } else if (this.state.phase === 3) {
      display = <F3 handleForm3={this.postCCInfo}/>;
    } else if (this.state.phase === 4) {
      display = <F4 continueShopping={this.continueShopping}/>;
    }

    return (
      <div>
        {display}
      </div>
    )
  }
}


var F1 = (props) => ( //props[changePhase]
  <form onSubmit={(e)=>props.handleForm1(e)}>
    <label>Name: <input type='text' name='name' /></label>
    <p></p>
    <label>Email: <input type='text' name='email' /></label>
    <p></p>
    <label>Password: <input type='text' name='password'/></label>
    <p></p>
    <input type='submit' value='Sign In'/>
  </form>
);


var F2 = (props) => (
  <form onSubmit={(e) => props.handleForm2(e)}>
    <label>Addr Line 1: <input type='text' name='addr1' /></label>
    <p></p>
    <label>Addr Line 2: <input type='text' name='addr2' /></label>
    <p></p>
    <label>City: <input type='text' name='city' /></label>
    <p></p>
    <label>State: <input type='text' name='state' /></label>
    <p></p>
    <label>Zip: <input type='text' name='zip' /></label>
    <p></p>
    <input type='submit' value='Verify Shipping Address' />
  </form>
);

var F3 = (props) => (
  <form onSubmit={(e) => props.handleForm3(e)}>
    <label>Credit Card: <input type='text' name='ccNum' /></label>
    <p></p>
    <label>Exp Year: <input type='text' name='expYear' /></label>
    <p></p>
    <label>Exp Month: <input type='text' name='cvv' /></label>
    <p></p>
    <label>CVV: <input type='text' name='cvv' /></label>
    <p></p>
    <label>Billing Zip: <input type='text' name='zip' /></label>
    <p></p>
    <input type='submit' value='Verify Shipping Address' />
  </form>
);

var F4 = (props) => (
  <div>
    <div>Order placed, thank you!</div>
    <p></p>
    <button onClick={props.return}>Continue Shopping</button>
  </div>


);



ReactDOM.render(<App />, document.getElementById('app'));

//export default App;