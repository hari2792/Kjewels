import React from 'react';
import './ProductOverview.css';
import { bindActionCreators } from 'redux';
import ProductAction from '../../action/ProductAction';
import { connect } from 'react-redux';

export class ProductOverview extends React.Component{
    componentDidMount(){
        const{
            actions
        } = this.props;
        actions.GetProductById();
    }
    renderProductHeader(productResponse){
      return(<div className="page-title-overlap bg-dark pt-4">
      <div className="container d-lg-flex justify-content-between py-2 py-lg-3">
        <div className="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb breadcrumb-light flex-lg-nowrap justify-content-center justify-content-lg-star">
              <li className="breadcrumb-item"><a className="text-nowrap" href="index.html"><i className="czi-home"></i>Home</a></li>
              <li className="breadcrumb-item text-nowrap"><a href="#">Product</a>
              </li>
              <li className="breadcrumb-item text-nowrap active" aria-current="page">ProductType</li>
            </ol>
          </nav>
        </div>
        <div className="order-lg-1 pr-lg-4 text-center text-lg-left">
          <h1 className="h3 text-light mb-0">{productResponse.name}</h1>
        </div>
      </div>
    </div>);
    }
    // {productResponse.imageList? productResponse.imageList.map((x)=>{
    renderImageContent(productResponse){
      return(
        <div className="col-lg-7 pr-lg-0 pt-lg-4">
        <div className="cz-product-gallery">
          <div className="cz-preview order-sm-2">
          {productResponse.imageList? productResponse.imageList.map((x)=>{
             return <div className="cz-preview-item" id="first"><img className="cz-image-zoom" src={x} data-zoom={x} alt="Product image"/>
              <div className="cz-image-zoom-pane"></div>
            </div>
          }):
          null
           }
          </div>
          <div className="cz-thumblist order-sm-1">
          {productResponse.imageList? productResponse.imageList.map((x)=>{
            return (
              <a className="cz-thumblist-item active" >
                <img src="img/shop/single/gallery/th01.jpg" alt="Product thumb"/>
                </a>
             
            // <div className="cz-thumblist-item-text"><i className="czi-video"></i>Video</div></a>
            )
          }):
          <div className="cz-thumblist order-sm-1"><a className="cz-thumblist-item active" href="#first"><img src="img/shop/single/gallery/th01.jpg" alt="Product thumb"/></a><a className="cz-thumblist-item" href="#second"><img src="img/shop/single/gallery/th02.jpg" alt="Product thumb"/></a><a className="cz-thumblist-item" href="#third"><img src="img/shop/single/gallery/th03.jpg" alt="Product thumb"/></a><a className="cz-thumblist-item" href="#fourth"><img src="img/shop/single/gallery/th04.jpg" alt="Product thumb"/></a><a className="cz-thumblist-item video-item" href="https://www.youtube.com/watch?v=1vrXpMLLK14">
          <div className="cz-thumblist-item-text"><i className="czi-video"></i>Video</div></a></div>
            
          }
          </div>
         </div> 
      </div>
      );
    }
    renderReviewStar(productResponse,index){
      productResponse.reviewStar = 3;//will be removed after api call
      return(<div className="review-star">{index < productResponse.reviewStar? <i className="sr-star czi-star-filled active" key={index}></i>:<i className="sr-star czi-star-filled" key={index}></i>}</div>);
    }
    renderShowReview(productResponse){
      const reviewIndex = 5;
      return(<div className="d-flex justify-content-between align-items-center mb-2">
                <a href="#reviews" data-scroll>
                  <div className="star-rating">
                    {[...Array(reviewIndex)].map((e, i) => {
                     return this.renderReviewStar(productResponse,i);
                    })
                    }
                    {/* <i className="sr-star czi-star-filled active"></i>
                    <i className="sr-star czi-star-filled active"></i>
                    <i className="sr-star czi-star-filled active"></i>
                    <i className="sr-star czi-star-filled active"></i>
                    <i className="sr-star czi-star"></i> */}
                  </div>
      <span className="d-inline-block font-size-sm text-body align-middle mt-1 ml-1">{productResponse.noOfReview} Reviews</span>
      <span className="separator"></span>
      <span className="d-inline-block font-size-sm text-body align-middle mt-1 ml-1">Add Your Review</span>
      </a>
      <button className="btn-wishlist mr-0 mr-lg-n3" type="button" data-toggle="tooltip" title="Add to wishlist"><i className="czi-heart"></i></button>
  </div>);
    }
    renderProductContent(productResponse){
      return(<div className="accordion mb-4" id="productPanels">
      <div className="card">
        <div className="card-header">
          <h3 className="accordion-heading">
            <a href="#productInfo" role="button" data-toggle="collapse" aria-expanded="true" aria-controls="productInfo">
              <i className="czi-announcement text-muted font-size-lg align-middle mt-n1 mr-2"></i>View Price Breakup
              <span className="accordion-indicator"><i data-feather="chevron-up"></i></span>
              </a>
              </h3>
        </div>
        <div className="collapse show" id="productInfo" data-parent="#productPanels">
          <div className="card-body">
            
          </div>
        </div>
      </div>
      <button className="btn btn-primary btn-shadow btn-block" type="submit"><i className="czi-cart font-size-lg mr-2"></i>Add to Cart</button>
    </div>)
    }
    render(){
      const{
        productResponse
      } = this.props;
        return(
            <div>
              {this.renderProductHeader(productResponse)}
        
      <div className="container">
        <div className="bg-light box-shadow-lg rounded-lg px-4 py-3 mb-5">
          <div className="px-lg-3">
            <div className="row">
            {this.renderImageContent(productResponse)}
              <div className="col-lg-5 pt-4 pt-lg-0">
                <div className="product-details ml-auto pb-3">
                  {this.renderShowReview(productResponse)}
                 
                  <div className="mb-3"><span className="h3 font-weight-normal text-accent mr-1">$18.<small>99</small></span>
                    <del className="text-muted font-size-lg mr-3">$25.<small>00</small></del><span className="badge badge-danger badge-shadow align-middle mt-n2">Explore DGRP</span>
                  </div>
                  {/* <div className="font-size-sm mb-4"><span className="text-heading font-weight-medium mr-1">Color:</span><span className="text-muted">Red/Dark blue/White</span></div>
                  <div className="position-relative mr-n4 mb-3">
                    <div className="custom-control custom-option custom-control-inline mb-2">
                      <input className="custom-control-input" type="radio" name="color" id="color1" checked/>
                      <label className="custom-option-label rounded-circle" for="color1"><span className="custom-option-color rounded-circle" ></span></label>
                    </div>
                    <div className="custom-control custom-option custom-control-inline mb-2">
                      <input className="custom-control-input" type="radio" name="color" id="color2"/>
                      <label className="custom-option-label rounded-circle" for="color2"><span className="custom-option-color rounded-circle" ></span></label>
                    </div>
                    <div className="custom-control custom-option custom-control-inline mb-2">
                      <input className="custom-control-input" type="radio" name="color" id="color3"/>
                      <label className="custom-option-label rounded-circle" for="color3"><span className="custom-option-color rounded-circle" ></span></label>
                      
                    </div>
                    <div className="product-badge product-available mt-n1"><i className="czi-security-check"></i>Product available</div>
                  </div>
                  <form className="mb-grid-gutter" method="post">
                    <div className="form-group">
                      <div className="d-flex justify-content-between align-items-center pb-1">
                        <label className="font-weight-medium" for="product-size">Size:</label><a className="nav-link-style font-size-sm" href="#size-chart" data-toggle="modal"><i className="czi-ruler lead align-middle mr-1 mt-n1"></i>Size guide</a>
                      </div>
                      <select className="custom-select" required id="product-size">
                        <option value="">Select size</option>
                        <option value="xs">XS</option>
                        <option value="s">S</option>
                        <option value="m">M</option>
                        <option value="l">L</option>
                        <option value="xl">XL</option>
                      </select>
                    </div>
                    <div className="form-group d-flex align-items-center">
                      <select className="custom-select mr-3" style={{width: "5rem"}}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                      <button className="btn btn-primary btn-shadow btn-block" type="submit"><i className="czi-cart font-size-lg mr-2"></i>Add to Cart</button>
                    </div>
                  </form> */}
                  {this.renderProductContent(productResponse)}
                  
                  <h6 className="d-inline-block align-middle font-size-base my-2 mr-2">Share:</h6><a className="share-btn sb-twitter mr-2 my-2" href="#"><i className="czi-twitter"></i>Twitter</a><a className="share-btn sb-instagram mr-2 my-2" href="#"><i className="czi-instagram"></i>Instagram</a><a className="share-btn sb-facebook my-2" href="#"><i className="czi-facebook"></i>Facebook</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      <div className="border-top border-bottom my-lg-3 py-5">
        <div className="container pt-md-2" id="reviews">
          <div className="row pb-3">
            <div className="col-lg-4 col-md-5">
              <h2 className="h3 mb-4">74 Reviews</h2>
              <div className="star-rating mr-2"><i className="czi-star-filled font-size-sm text-accent mr-1"></i><i className="czi-star-filled font-size-sm text-accent mr-1"></i><i className="czi-star-filled font-size-sm text-accent mr-1"></i><i className="czi-star-filled font-size-sm text-accent mr-1"></i><i className="czi-star font-size-sm text-muted mr-1"></i></div><span className="d-inline-block align-middle">4.1 Overall rating</span>
              <p className="pt-3 font-size-sm text-muted">58 out of 74 (77%)<br/>Customers recommended this product</p>
            </div>
            <div className="col-lg-8 col-md-7">
              <div className="d-flex align-items-center mb-2">
                <div className="text-nowrap mr-3"><span className="d-inline-block align-middle text-muted">5</span><i className="czi-star-filled font-size-xs ml-1"></i></div>
                <div className="w-100">
                  <div className="progress" style={{height: "4px"}}>
                    <div className="progress-bar bg-success" role="progressbar" style={{width: "60%"}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div><span className="text-muted ml-3">43</span>
              </div>
              <div className="d-flex align-items-center mb-2">
                <div className="text-nowrap mr-3"><span className="d-inline-block align-middle text-muted">4</span><i className="czi-star-filled font-size-xs ml-1"></i></div>
                <div className="w-100">
                  <div className="progress" style={{height: "4px"}}>
                    <div className="progress-bar" role="progressbar" style={{width: "27%"}} aria-valuenow="27" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  {/* style="width: 27%; background-color: #a7e453;"  */}
                </div><span className="text-muted ml-3">16</span>
              </div>
              <div className="d-flex align-items-center mb-2">
                <div className="text-nowrap mr-3"><span className="d-inline-block align-middle text-muted">3</span><i className="czi-star-filled font-size-xs ml-1"></i></div>
                <div className="w-100">
                  <div className="progress" style={{height: "4px"}}>
                    <div className="progress-bar" role="progressbar" style={{width: "9%"}} aria-valuenow="17" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div><span className="text-muted ml-3">9</span>
              </div>
              <div className="d-flex align-items-center mb-2">
                <div className="text-nowrap mr-3"><span className="d-inline-block align-middle text-muted">2</span><i className="czi-star-filled font-size-xs ml-1"></i></div>
                <div className="w-100">
                  <div className="progress" style={{height: "4px"}}>
                    <div className="progress-bar" role="progressbar" style={{width: "9%"}} aria-valuenow="9" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  {/* background-color: #fea569;" */}
                </div><span className="text-muted ml-3">4</span>
              </div>
              <div className="d-flex align-items-center">
                <div className="text-nowrap mr-3"><span className="d-inline-block align-middle text-muted">1</span><i className="czi-star-filled font-size-xs ml-1"></i></div>
                <div className="w-100">
                  <div className="progress" style={{height: "4px"}}>
                    <div className="progress-bar bg-danger" role="progressbar" style={{width: "4%"}} aria-valuenow="4" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div><span className="text-muted ml-3">2</span>
              </div>
            </div>
          </div>
          <hr className="mt-4 pb-4 mb-3"/>
          <div className="row">
            <div className="col-md-7">
              <div className="d-flex justify-content-end pb-4">
                <div className="form-inline flex-nowrap">
                  <label className="text-muted text-nowrap mr-2 d-none d-sm-block" for="sort-reviews">Sort by:</label>
                  <select className="custom-select custom-select-sm" id="sort-reviews">
                    <option>Newest</option>
                    <option>Oldest</option>
                    <option>Popular</option>
                    <option>High rating</option>
                    <option>Low rating</option>
                  </select>
                </div>
              </div>
              <div className="product-review pb-4 mb-4 border-bottom">
                <div className="d-flex mb-3">
                  <div className="media media-ie-fix align-items-center mr-4 pr-2"><img className="rounded-circle" width="50" src="img/shop/reviews/01.jpg" alt="Rafael Marquez"/>
                    <div className="media-body pl-3">
                      <h6 className="font-size-sm mb-0">Rafael Marquez</h6><span className="font-size-ms text-muted">June 28, 2019</span>
                    </div>
                  </div>
                  <div>
                    <div className="star-rating"><i className="sr-star czi-star-filled active"></i><i className="sr-star czi-star-filled active"></i><i className="sr-star czi-star-filled active"></i><i className="sr-star czi-star-filled active"></i><i className="sr-star czi-star"></i>
                    </div>
                    <div className="font-size-ms text-muted">83% of users found this review helpful</div>
                  </div>
                </div>
                <p className="font-size-md mb-2">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est...</p>
                <ul className="list-unstyled font-size-ms pt-1">
                  <li className="mb-1"><span className="font-weight-medium">Pros:&nbsp;</span>Consequuntur magni, voluptatem sequi, tempora</li>
                  <li className="mb-1"><span className="font-weight-medium">Cons:&nbsp;</span>Architecto beatae, quis autem</li>
                </ul>
                <div className="text-nowrap">
                  <button className="btn-like" type="button">15</button>
                  <button className="btn-dislike" type="button">3</button>
                </div>
              </div>
              <div className="product-review pb-4 mb-4 border-bottom">
                <div className="d-flex mb-3">
                  <div className="media media-ie-fix align-items-center mr-4 pr-2"><img className="rounded-circle" width="50" src="img/shop/reviews/02.jpg" alt="Barbara Palson"/>
                    <div className="media-body pl-3">
                      <h6 className="font-size-sm mb-0">Barbara Palson</h6><span className="font-size-ms text-muted">May 17, 2019</span>
                    </div>
                  </div>
                  <div>
                    <div className="star-rating"><i className="sr-star czi-star-filled active"></i><i className="sr-star czi-star-filled active"></i><i className="sr-star czi-star-filled active"></i><i className="sr-star czi-star-filled active"></i><i className="sr-star czi-star-filled active"></i>
                    </div>
                    <div className="font-size-ms text-muted">99% of users found this review helpful</div>
                  </div>
                </div>
                <p className="font-size-md mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <ul className="list-unstyled font-size-ms pt-1">
                  <li className="mb-1"><span className="font-weight-medium">Pros:&nbsp;</span>Consequuntur magni, voluptatem sequi, tempora</li>
                  <li className="mb-1"><span className="font-weight-medium">Cons:&nbsp;</span>Architecto beatae, quis autem</li>
                </ul>
                <div className="text-nowrap">
                  <button className="btn-like" type="button">34</button>
                  <button className="btn-dislike" type="button">1</button>
                </div>
              </div>
              <div className="product-review pb-4 mb-4 border-bottom">
                <div className="d-flex mb-3">
                  <div className="media media-ie-fix align-items-center mr-4 pr-2"><img className="rounded-circle" width="50" src="img/shop/reviews/03.jpg" alt="Daniel Adams"/>
                    <div className="media-body pl-3">
                      <h6 className="font-size-sm mb-0">Daniel Adams</h6><span className="font-size-ms text-muted">May 8, 2019</span>
                    </div>
                  </div>
                  <div>
                    <div className="star-rating"><i className="sr-star czi-star-filled active"></i><i className="sr-star czi-star-filled active"></i><i className="sr-star czi-star-filled active"></i><i className="sr-star czi-star"></i><i className="sr-star czi-star"></i>
                    </div>
                    <div className="font-size-ms text-muted">75% of users found this review helpful</div>
                  </div>
                </div>
                <p className="font-size-md mb-2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem.</p>
                <ul className="list-unstyled font-size-ms pt-1">
                  <li className="mb-1"><span className="font-weight-medium">Pros:&nbsp;</span>Consequuntur magni, voluptatem sequi</li>
                  <li className="mb-1"><span className="font-weight-medium">Cons:&nbsp;</span>Architecto beatae,  quis autem, voluptatem sequ</li>
                </ul>
                <div className="text-nowrap">
                  <button className="btn-like" type="button">26</button>
                  <button className="btn-dislike" type="button">9</button>
                </div>
              </div>
              <div className="text-center">
                <button className="btn btn-outline-accent" type="button"><i className="czi-reload mr-2"></i>Load more reviews</button>
              </div>
            </div>
            <div className="col-md-5 mt-2 pt-4 mt-md-0 pt-md-0">
              <div className="bg-secondary py-grid-gutter px-grid-gutter rounded-lg">
                <h3 className="h4 pb-2">Write a review</h3>
                <form className="needs-validation" method="post" novalidate>
                  <div className="form-group">
                    <label for="review-name">Your name<span className="text-danger">*</span></label>
                    <input className="form-control" type="text" required id="review-name"/>
                    <div className="invalid-feedback">Please enter your name!</div><small className="form-text text-muted">Will be displayed on the comment.</small>
                  </div>
                  <div className="form-group">
                    <label for="review-email">Your email<span className="text-danger">*</span></label>
                    <input className="form-control" type="email" required id="review-email"/>
                    <div className="invalid-feedback">Please provide valid email address!</div><small className="form-text text-muted">Authentication only - we won't spam you.</small>
                  </div>
                  <div className="form-group">
                    <label for="review-rating">Rating<span className="text-danger">*</span></label>
                    <select className="custom-select" required id="review-rating">
                      <option value="">Choose rating</option>
                      <option value="5">5 stars</option>
                      <option value="4">4 stars</option>
                      <option value="3">3 stars</option>
                      <option value="2">2 stars</option>
                      <option value="1">1 star</option>
                    </select>
                    <div className="invalid-feedback">Please choose rating!</div>
                  </div>
                  <div className="form-group">
                    <label for="review-text">Review<span className="text-danger">*</span></label>
                    <textarea className="form-control" rows="6" required id="review-text"></textarea>
                    <div className="invalid-feedback">Please write a review!</div><small className="form-text text-muted">Your review must be at least 50 characters.</small>
                  </div>
                  <div className="form-group">
                    <label for="review-pros">Pros</label>
                    <textarea className="form-control" rows="2" placeholder="Separated by commas" id="review-pros"></textarea>
                  </div>
                  <div className="form-group mb-4">
                    <label for="review-cons">Cons</label>
                    <textarea className="form-control" rows="2" placeholder="Separated by commas" id="review-cons"></textarea>
                  </div>
                  <button className="btn btn-primary btn-shadow btn-block" type="submit">Submit a Review</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>)
    }
}

const mapDispatchToProps = dispatch =>({
    actions: bindActionCreators(Object.assign(ProductAction),dispatch)
});

const mapStateToProps = state =>{
    return{
      productResponse: state.Product.productResponse? state.Product.productResponse:{}  
    };
};

export default connect(
  mapStateToProps,
    mapDispatchToProps    
)(ProductOverview);

