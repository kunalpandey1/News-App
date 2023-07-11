import React, { Component } from 'react'

export class NewsItem extends Component { // rcc for class based component and rfc for function based component
  render() {
     let {title,description,imageUrl,newsUrl,author,date} = this.props; // taking props from news.js object destructing used here 
     return (
      <div>
{/*Important Note*/}
{/* first bracket specifies in javascript second bracket specifies object and inside the second bracket we have object style={{width: "18rem"}} */}
      <div className="card my-3" style={{width: "18rem"}}> 
      <img src={!this.props.imageUrl ? "https://i.insider.com/6411f92a8215b500181480c6?width=1200&format=jpeg" : imageUrl} className="card-img-top" alt="..."/>
      <div className="card-body">
      <h5 className="card-title">{this.props.title}...</h5>
      <p className="card-text">{this.props.description}...</p>
      <p className="card-text"><small className="text-muted">By {!this.props.author?"Unknown":this.props.author} on {new Date(this.props.date).toGMTString()}</small></p> {/*here I have created a taken date which was my props as object for Date Class and Converted it into GMT timezone by Date function*/}
      <a href={this.props.newsUrl} target ="_blank" className="btn btn-sm btn-dark">Click To Read More</a>
      </div>
      </div>
    </div>
    )
  }
}

export default NewsItem


