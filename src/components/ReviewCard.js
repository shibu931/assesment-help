import React, { Component } from 'react'

export default class ReviewCard extends Component {
  render() {
    const {data} = this.props;
    return (
        <div className="ttm-box-col-wrapper">
        <div className="featured-imagebox featured-imagebox-blog">
          <div className="featured-content">{/* featured-content */}
            <div className="featured-title">{/* featured-title */}
              <h5><a href={process.env.PUBLIC_URL + '/Single_blog'}>{data.title}</a></h5>
            </div>
            <div className="post-meta">{/* post-meta */}
              <span className="ttm-meta-line"><i className="fa fa-comments" />{data.subject}</span>
              <span className="ttm-meta-line"><i className="fa fa-user" />{data.name}</span>
            </div>
            <div className="featured-desc">{/* featured-description */}
              <p>{data.content}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
