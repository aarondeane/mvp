import React, { Component } from 'react';

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    }
  }
  
  componentDidMount() {
    fetch('/api/news')
    .then(response => {
      return response.json();
    })
    .then(news => {
      let articles = JSON.parse(news).articles;
      this.setState({
        articles: articles
      })
    })
  }

  render () {
    if(this.state.articles.length === 0) {
      return(
        <ul>Loading News...</ul>
      )
    } else {
      return (
        <ul>Top Stories
          <a href={this.state.articles[0].url} rel="noopener noreferrer" target="_blank"><li>{this.state.articles[0].title}</li></a>
          <a href={this.state.articles[1].url} rel="noopener noreferrer" target="_blank"><li>{this.state.articles[1].title}</li></a>
          <a href={this.state.articles[2].url} rel="noopener noreferrer" target="_blank"><li>{this.state.articles[2].title}</li></a>
          <a href={this.state.articles[3].url} rel="noopener noreferrer" target="_blank"><li>{this.state.articles[3].title}</li></a>
          <a href={this.state.articles[4].url} rel="noopener noreferrer" target="_blank"><li>{this.state.articles[4].title}</li></a>
          <a href={this.state.articles[5].url} rel="noopener noreferrer" target="_blank"><li>{this.state.articles[5].title}</li></a>
          <a href={this.state.articles[6].url} rel="noopener noreferrer" target="_blank"><li>{this.state.articles[6].title}</li></a>
          <a href={this.state.articles[7].url} rel="noopener noreferrer" target="_blank"><li>{this.state.articles[7].title}</li></a>
          <a href={this.state.articles[8].url} rel="noopener noreferrer" target="_blank"><li>{this.state.articles[8].title}</li></a>
          <a href={this.state.articles[9].url} rel="noopener noreferrer" target="_blank"><li>{this.state.articles[9].title}</li></a>
        </ul>
      )
    }
  }
}

export default News;