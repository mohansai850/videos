import React from 'react'

class SearchBar extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            term: 'latest telugu songs'
        }
    }

    onFormSubmit = e => {
        e.preventDefault();
        this.props.onappSubmit(this.state.term);
    }

    render() {
        return(
          <div className="ui segment searchbar">
              <form  className="ui form" onSubmit={this.onFormSubmit}>
                  <div className="field">
                  <label>VideoSearch</label>
                  <input type="text" onChange={e => this.setState({term: e.target.value})} value={this.state.term}/>
                  <input type="submit" value="Search" className="ui submit button"/>
                  </div>
              </form>
          </div>  
        );
    }
}

export default SearchBar;