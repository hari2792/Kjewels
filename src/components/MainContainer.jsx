import React from 'react';
import '../assets/css/theme.css';
import { Route, Link } from 'react-router-dom';
import  ProductOverview  from './ProductOverview/ProductOverview';
import { bindActionCreators } from 'redux';
import MainAction from '../action/MainAction';
import { connect } from 'react-redux';

export class MainContainer extends React.Component{
  componentDidMount(){
    const{
        actions
    } = this.props;
    actions.GetHeaderOptionDetails();
}

renderHeaderDetails(){
  const{
    headerDetails
  } = this.props;
  return ( <div className="navbar navbar-expand-lg navbar-light navbar-stuck-menu mt-n2 pt-0 pb-2">
  <div className="container">
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <div className="input-group-overlay d-lg-none my-3">
        <div className="input-group-prepend-overlay"><span className="input-group-text"><i className="czi-search"></i></span></div>
        <input className="form-control prepended-form-control" type="text" placeholder="Search for products"/>
      </div>         
      <ul className="navbar-nav">
        {headerDetails.map((x)=>{
           return <li className="nav-item dropdown" >
              <Link to={"/"+x.HeaderItem} className="nav-link dropdown-toggle">{x.HeaderItem}</Link>
              {/* <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown"></a> */}
           
              <div className="dropdown-menu p-0" >
                <div className="d-flex flex-wrap flex-md-nowrap px-2">
                  <div className="mega-dropdown-column py-4 px-3">
                    <div className="widget widget-links mb-3">
                      <ul className="widget-list">
                        {x.SubHeaderItem.map((y)=>{
                          return <li className="widget-list-item pb-1" >
                          <Link to={"/"+x.HeaderItem+"/"+y.HeaderItem} className="widget-list-link">{y.HeaderItem}</Link>
                        {/* <a className="widget-list-link" href="#"></a> */}
                        </li>
                        })}
                      </ul>
                    </div>
                    </div>
                </div>
              </div>
            </li>
        })
      }
      </ul>
    </div>
  </div>
</div>
);
}
    render(){
        return (<header className="box-shadow-sm">       
        <div className="navbar-sticky bg-light">
          <div className="navbar navbar-expand-lg navbar-light">
            <div className="container"><a className="navbar-brand d-none d-sm-block mr-3 flex-shrink-0" href="#"   style={{minWidth: "7rem"}}><img width="142" src="img/logo-dark.png" alt="KJewels"/></a><a className="navbar-brand d-sm-none mr-2" href="#" style={{minWidth: "4.625rem"}}><img width="74" src="img/logo-icon.png" alt="KJewels"/></a>
              <div className="input-group-overlay d-none d-lg-flex mx-4">
                <input className="form-control appended-form-control" type="text" placeholder="Search for products"/>
                <div className="input-group-append-overlay"><span className="input-group-text"><i className="czi-search"></i></span></div>
              </div>
              <div className="navbar-toolbar d-flex flex-shrink-0 align-items-center">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"><span className="navbar-toggler-icon"></span></button><a className="navbar-tool navbar-stuck-toggler" href="#"><span className="navbar-tool-tooltip">Expand menu</span>
                  <div className="navbar-tool-icon-box"><i className="navbar-tool-icon czi-menu"></i></div></a><a className="navbar-tool d-none d-lg-flex" href="#" ><span className="navbar-tool-tooltip">Wishlist</span>
                  <div className="navbar-tool-icon-box"><i className="navbar-tool-icon czi-heart"></i></div></a><a className="navbar-tool ml-1 ml-lg-0 mr-n1 mr-lg-2" href="#" data-toggle="modal">
                  <div className="navbar-tool-icon-box"><i className="navbar-tool-icon czi-user"></i></div>
                  <div className="navbar-tool-text ml-n3"><small>Hello, Sign in</small>My Account</div></a>
                <div className="navbar-tool dropdown ml-3"><a className="navbar-tool-icon-box bg-secondary dropdown-toggle" href="#"><span className="navbar-tool-label">4</span><i className="navbar-tool-icon czi-cart"></i></a><a className="navbar-tool-text" href="#" ><small>My Cart</small>$265.00</a>
                  <div className="dropdown-menu dropdown-menu-right" style={{width: "20rem"}}>
                    <div className="widget widget-cart px-3 pt-2 pb-3">
                      <div style={{height: '15rem'}} data-simplebar data-simplebar-auto-hide="false">
                        <div className="widget-cart-item pb-2 border-bottom">
                          <button className="close text-danger" type="button" aria-label="Remove"><span aria-hidden="true">&times;</span></button>
                          <div className="media align-items-center"><a className="d-block mr-2" href="shop-single-v1.html"><img width="64" src="img/shop/cart/widget/01.jpg" alt="Product"/></a>
                            <div className="media-body">
                              <h6 className="widget-product-title"><a href="shop-single-v1.html">Women Colorblock Sneakers</a></h6>
                              <div className="widget-product-meta"><span className="text-accent mr-2">$150.<small>00</small></span><span className="text-muted">x 1</span></div>
                            </div>
                          </div>
                        </div>
                        <div className="widget-cart-item py-2 border-bottom">
                          <button className="close text-danger" type="button" aria-label="Remove"><span aria-hidden="true">&times;</span></button>
                          <div className="media align-items-center"><a className="d-block mr-2" href="shop-single-v1.html"><img width="64" src="img/shop/cart/widget/02.jpg" alt="Product"/></a>
                            <div className="media-body">
                              <h6 className="widget-product-title"><a href="shop-single-v1.html">TH Jeans City Backpack</a></h6>
                              <div className="widget-product-meta"><span className="text-accent mr-2">$79.<small>50</small></span><span className="text-muted">x 1</span></div>
                            </div>
                          </div>
                        </div>
                        <div className="widget-cart-item py-2 border-bottom">
                          <button className="close text-danger" type="button" aria-label="Remove"><span aria-hidden="true">&times;</span></button>
                          <div className="media align-items-center"><a className="d-block mr-2" href="shop-single-v1.html"><img width="64" src="img/shop/cart/widget/03.jpg" alt="Product"/></a>
                            <div className="media-body">
                              <h6 className="widget-product-title"><a href="shop-single-v1.html">3-Color Sun Stash Hat</a></h6>
                              <div className="widget-product-meta"><span className="text-accent mr-2">$22.<small>50</small></span><span className="text-muted">x 1</span></div>
                            </div>
                          </div>
                        </div>
                        <div className="widget-cart-item py-2 border-bottom">
                          <button className="close text-danger" type="button" aria-label="Remove"><span aria-hidden="true">&times;</span></button>
                          <div className="media align-items-center"><a className="d-block mr-2" href="shop-single-v1.html"><img width="64" src="img/shop/cart/widget/04.jpg" alt="Product"/></a>
                            <div className="media-body">
                              <h6 className="widget-product-title"><a href="shop-single-v1.html">Cotton Polo Regular Fit</a></h6>
                              <div className="widget-product-meta"><span className="text-accent mr-2">$9.<small>00</small></span><span className="text-muted">x 1</span></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex flex-wrap justify-content-between align-items-center py-3">
                        <div className="font-size-sm mr-2 py-2"><span className="text-muted">Subtotal:</span><span className="text-accent font-size-base ml-1">$265.<small>00</small></span></div><a className="btn btn-outline-secondary btn-sm" href="#" >Expand cart<i className="czi-arrow-right ml-1 mr-n1"></i></a>
                      </div><a className="btn btn-primary btn-sm btn-block" href="#" ><i className="czi-card mr-2 font-size-base align-middle"></i>Checkout</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {this.renderHeaderDetails()}
          </div>
        <div>
          <Route path="/product" component={ProductOverview}/>
        </div>
      </header>)
    }
}

const mapDispatchToProps = dispatch =>({
  actions: bindActionCreators(Object.assign(MainAction),dispatch)
});

const mapStateToProps = state =>{
  return{
    headerDetails: state.Main.headerDetails? state.Main.headerDetails:[]
  };
};

export default connect(
mapStateToProps,
  mapDispatchToProps    
)(MainContainer);