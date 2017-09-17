import React from 'react';

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      term: ''
    }; //never update
  }

  render(){
    return <input onChange={this.onInputChange} />;
  }

  onInputChange(event){
    let t = event.target.value;
    this.setState({
      term: t
    });
  }
}

export default SearchBar;
