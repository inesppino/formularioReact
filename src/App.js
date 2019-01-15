import React, { Component } from 'react';
import './App.css';
import Film from './components/Film';
const fr = new FileReader();

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      name:"",
      description: "",
      genre:"",
      fileName: 'Nombre por defecto',
      fileUrl: 'https://placehold.it/200x200'
    };

    this.handleFilmName = this.handleFilmName.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handleGenre = this.handleGenre.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
    this.fakeClick = this.fakeClick.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
    this.writeImage = this.writeImage.bind(this);
  }
  
  handleFilmName(event){
    this.setState({name:event.currentTarget.value});
  }

  handleDescription(event){
    this.setState({description:event.currentTarget.value});
  }

  handleGenre(event){
    this.setState({genre:event.currentTarget.value});
  }

  fakeClick(){
    console.log('puto');
    this.fileInput.current.click();
  }

  handleSubmit (event){
    event.preventDefault();
  }
  
  writeImage(){
    const url =fr.result
    this.setState({
      fileUrl:url
    });
  }

  handleFileChange(event){
    const myFile = event.currentTarget.files[0];
    fr.addEventListener('load', this.writeImage);
    fr.readAsDataURL(myFile);
  }
  
  render() {
    return (
      <div className="Container">
        <Film actionName={this.handleFilmName} actionDescription={this.handleDescription} actionGenre={this.handleGenre} default={this.state.name} description={this.state.description} genre={this.state.genre}/>

        <label>Upload Picture
          <input type="file" ref={this.fileInput} onChange={this.handleFileChange} />
        </label>
        <button type="submit" onClick={this.fakeClick}>Upload</button>
        <div className="picture" style={{backgroundImage:`url(${this.state.fileUrl})`}}></div>
      </div>
    )}
}

export default App;
