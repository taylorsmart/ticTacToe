import React from 'react';
import axios from 'axios';
import CowRow from './CowRows.js'

class App extends React.Component{
  constructor (props) {
    super(props)
    this.state = ({
      cowList:[],
      targetDesc:'',
      targetName:''
    })
    this.handleClick = this.handleClick.bind(this);
    this.handleNameClick = this.handleNameClick.bind(this);
    this.deleteClick = this.deleteClick.bind(this);
  }
  componentDidMount () {
    this.fetchCows();
  }

  fetchCows() {
    axios.get('/cows')
         .then((result) => {
           this.setState({
            cowList: result.data
           })
           console.log(result.data)
          }
         )
  }

  handleNameClick (name, description) {
    this.setState({
      targetName:name,
      targetDesc:description
    })
  }

  handleClick (id,edit){
    let name = this.state.nameInput;
    let desc = this.state.descInput;
    if (edit){
      axios({
        method: 'put',
        url: `/cows/${id}`,
        data:{
          'name':name,
          'description':desc
        }
      })
      .then(
        this.fetchCows()
      )
    }
    else {
    axios({
      method: 'post',
      url: '/cows',
      data:{
        'name':name,
        'description':desc
      }
    })
    .then(
      this.fetchCows()
    )
  }

  }


  deleteClick (id){
    axios({
      method: 'delete',
      url: `/cows/${id}`
    })
    .then(
      this.fetchCows()
    )

  }


  nameChange (e) {
    console.log(e.target.value)
    this.setState({
      nameInput:e.target.value
    })
  }

  // deleteCow(id) {
  //   ax
  // }

  descChange (e) {
    console.log(e.target.value)
    this.setState({
      descInput:e.target.value
    })
  }

  render () {
    return (
    <div>
      {this.state.targetDesc ? <p>{`${this.state.targetName}: ${this.state.targetDesc}`}</p> : null}
      <input type="text" onChange={(e) =>{this.nameChange(e)}}></input>
      <input type="text" onChange={(e) =>{this.descChange(e)}}></input>
      <button type="text" onClick={(e) =>{this.handleClick(e)}}>Add Cow</button>
      {this.state.cowList.map(cow =>  <CowRow key={cow.id} deleteClick={this.deleteClick} editClick={this.handleClick} nameClick={this.handleNameClick} cow={cow}/>)}
    </div>
    )
  }

}



export default App