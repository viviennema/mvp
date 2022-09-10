import React from 'react';
import ReactDom from 'react-dom';
import NavBar from './components/navbar.js';
import About from './components/About.js';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     items: [],
    }
    this.onPurchase = this.onPurchase.bind(this);
  }

  componentDidMount() {
    axios.get('/product')
    .then((response) => {
     this.setState({items: response.data})
    })
  }

 onPurchase(e) {

  let email = prompt("what is your email?");
  var answer = {
    username: email,
    bedModel: e.target.id,
    amount: 6000
  }

  axios.post('/purchase', answer)
  .then((response)=>{
    console.log(response.data);
    alert('Thank you for your purchase! We will contact you shortly!');
  })
  .catch((error)=>{
    throw error;
  });

 }

 render() {
  return (
    <div>
     <NavBar />

     <h2>Bunk Beds Products</h2>
     <div class="container">
      <h3>Choose your bed: </h3>
      <div class="row">
        {this.state.items.map((item, index) => {
          return (
            <div class="col-3">
              <h4>{item.title}</h4>
              <img src={item.image} alt={item.title} width={'100%'} />
              <button id={index} onClick={this.onPurchase}>Purchase</button>
            </div>
          )
        })}
      </div>







    {/* <img src="./bedsamples/castlebed1.jpeg" alt="castle bed model 1" width={'100%'}/>

    <div class="col-6">
    <img src="./bedsamples/castlebed2.jpeg" alt="castle bed model 2" width={'100%'}/>
    </div> */}



    </div>
    </div>

  )
 }
}

ReactDom.render(<App />, document.getElementById('app'));