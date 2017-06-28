import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { createApp } from '@phenomic/preset-react-app/lib/client';
import { Component, PropTypes } from 'react';


const Home = () =>
  <div>
    <p>This is a homepage</p>
  </div>;


/* 
 * class Home extends Component {
 *   render() {
 *     return (<div>this IS homepage</div>)
 *   }
 * }
 * */
// export default createApp(() =>
//   <Router history={browserHistory}>
//     <Route path="/" component={Home} />
//   </Router>
// );




// class Page1 extends Component {
//   
//   buttonClicked(event) {
//     alert('Button clicked')
//     //console.log('props:', this.props)
//   }
// 
//   render() {
//     return (
//       <div>
//         <p>page1</p>
//         <p>
//           <img style={{width: 300}} src="https://www.getnexar.com/assets/images/anim2.gif" />
//           <br />
// 
//           <Link to="/page1">link to page2</Link>
// 
//         </p>
// 
//         <img src="https://cdn.slidesharecdn.com/ss_thumbnails/some-any-1204738417991409-3-thumbnail-4.jpg?cb=1204709619" alt="any" />
// 
//         <button onClick={this.buttonClicked.bind(this)}>click me</button>
//       </div>)
//   }
// }

import { Page1 } from './Page1'
import { Page2 } from './Page2'
import { Main } from './Main'

import {
  createContainer,
  query,
  BodyRenderer
} from '@phenomic/preset-react-app/lib/client';

const BlogPost = ({ page }) =>
  <div>
    {page.node &&
      <article>
        <h1>{page.node.title}</h1>
        <BodyRenderer>{page.node.body}</BodyRenderer>
      </article>}
  </div>;

const BlogPostContainer = createContainer(BlogPost, props => ({
  page: query({ collection: 'posts', id: props.params.splat })
}));

// to process
import Head from 'react-helmet';

const Html = props => {
  const helmet = Head.renderStatic();
  return (
    <html {...helmet.htmlAttributes.toComponent()}>
      <head>
        {helmet.base.toComponent()}
        {helmet.title.toComponent()}
        {helmet.meta.toComponent()}
        {helmet.link.toComponent()}
        {helmet.style.toComponent()}
        {helmet.script.toComponent()}
        {helmet.noscript.toComponent()}
      </head>
      <body {...helmet.bodyAttributes.toComponent()}>
        {/* phenomic html output */}
        {props.body}
        {/* phenomic current state, as json */}
        {/* required so sync static/client rendering */}
        {props.state}
        {/* phenomic entry script */}
        {props.script}
      </body>
    </html>
  );
};

const routes = () =>
  <Router history={browserHistory}>
    <Route path="/" component={Main} />
    <Route path="/page1" component={Page1} />
    <Route path="/page2" component={Page2} />
    <Route path="/blog/*" component={BlogPostContainer} collection="posts" />
  </Router>

export default createApp(routes, Html);
