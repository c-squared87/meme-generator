import React from 'react'
import '../App.css'
class MemeGenerator extends React.Component {

    constructor(){
        super()
        this.state = {
            topText: '',
            bottomText: '',
            randomImage: 'http://i.imgflip.com/1bij.jpg',
            allMemeImages: []
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

    handleChange = (event) =>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    generateMeme(){
        console.log("fuckin meme time"); 
    }

    render(){
        return(
            <div>
                <form className='meme-form'>
                    <input
                        name='topText'
                        type='text' 
                        placeholder='top text'
                        value={this.state.topText}
                        onChange={this.handleChange}
                    />
                    <input
                        name='bottomText'
                        type='text'
                        placeholder='bottom text'
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                    />
                    <button onClick={this.generateMeme}>Generate</button>
                </form>

                <div className='meme'>
                    <img src={this.state.randomImage} alt="not found"/>
                    <h2 className='top'>{this.state.topText}</h2>
                    <h2 className='bottom'>{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}

export default MemeGenerator