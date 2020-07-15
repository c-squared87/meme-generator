import React from 'react'
import '../App.css'
class MemeGenerator extends React.Component {

    constructor(){
        super()
        this.state = {
            topText: '',
            bottomText: '',
            randomImage: 'http://i.imgflip.com/1bij.jpg'
        }
    }

    componentDidMount(){
        this.collectImages()
    }

    collectImages(){
        const _url = 'https://api.imgflip.com/get_memes'
        fetch(_url)
            .then(response => response.json())
            .then(response => {
              const {memes} = response.data
              this.setState({
                  allMemeImages: memes
              })
            })
    }

    handleTopTextChange = (event) =>{
        this.setState({
            topText: event.target.value
        })
    }

    handleBottomTextChange = (event) => {
        this.setState({
            bottomText: event.target.value
        })
    }

    generateMeme(){
        console.log("fuckin meme time"); 
    }

    render(){
        return(
            <div className='meme'>
                <form className='meme-form'>
                    <input
                        type='text' 
                        placeholder='top text'
                        value={this.state.topText}
                        onChange={this.handleTopTextChange}
                    />
                    <input
                        type='text'
                        placeholder='bottom text'
                        value={this.state.bottomText}
                        onChange={this.handleBottomTextChange}
                    />
                    <button onClick={this.generateMeme}>Generate</button>
                </form>

                <img src={this.state.randomImage} alt="not found"/>
                <p className='top-text'>{this.state.topText}</p>
                <p className='bottom-text'>{this.state.bottomText}</p>
            </div>
        )
    }
}

export default MemeGenerator