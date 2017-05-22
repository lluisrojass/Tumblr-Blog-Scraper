const date = require('datejs');

import React from 'react';

function Viewer(props){
    if (!props.isViewing)
      return(<div className='height100width100 notselected'> </div>);

    const {headline, datePublished, articleBody, images, url, video} = props.post;
    return(
      <div id='right-panel' className='height100width100'>
          {
            headline &&
              <h1 className='viewer-title'>
                {headline}
              </h1>
          }
          {
            datePublished &&
              <h1 className='viewer-date'>
                {Date.parse(datePublished).toString()}
              </h1>
          }
          {
            articleBody &&
            <p className='viewer-body'>
              {articleBody}
            </p>
          }
          {
            video &&
             <div id='video-wrapper'>
              <iframe frameBorder='0' src={video} />
             </div>
          }
          {
            images.length > 0 &&
            <div id='viewer-image-wrapper'>
              {
                 images.map((url, index) =>
                   <img className='viewer-image' key={index} src={url} />
                 )
              }
            </div>
          }
          <br/>
          {
            url &&
             <div id='viewer-url-wrapper'>
                    <a href='#' onClick={() => props.openInBrowser(url)} className='viewer-url'>
                      Open in Browser..
                    </a>
              </div>
          }
      </div>
    )
}


export default Viewer
