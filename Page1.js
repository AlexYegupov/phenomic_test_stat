import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router';

//w import './public/test.css'   later just use: className="<class_from_css>")
import './teststyle.css'
import './teststyle2.css'



export class Page1 extends Component {
  
  buttonClicked(event) {
    alert('Button clicked')
    //console.log('props:', this.props)
  }

  render() {
    return (
      <div>
        <h2>Page1+</h2>
        <p>
          <button onClick={this.buttonClicked.bind(this)}>click me</button>
          <hr />
          <img src="https://www.getnexar.com/assets/images/anim2.gif" className="myclass" />

          <img src="https://www.getnexar.com/assets/images/anim2.gif"
            className="myclass" />

          <br />

          <Link to="/page2">link to page2</Link>
          <br />
          <Link to="/blog/first-post">link blogpost(md)</Link>

        </p>
      </div>)
  }
}
