import React, { Component } from "react";
import ProductItem from "./product.item";
import { Link } from "react-router-dom";
import { max } from "lodash";
class ContentHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pagination: [],
      check_1: true,
      check_2: false,
      check_3: false,
      check_4: false,
      check_5: false,
    };
  }
  componentWillMount() {
    let tmp = [];
    for (let i = 1; i <= this.props.totalpage; i++) {
      tmp.push(i);
    }
    this.setState({ pagination: tmp });
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.totalpage !== this.props.totalpage) {
      let tmp = [];
      for (let i = 1; i <= nextProps.totalpage; i++) {
        tmp.push(i);
      }
      this.setState({ pagination: tmp });
    }
  }
  renderPagination() {
    if (this.state.pagination.length === 0) {
      return null;
    } else {
      return (
        <ul className="pagination pagination-custom">
          <li onClick={() => this.props.backPage()}>
            <Link to="/">&laquo;</Link>
          </li>
          {this.state.pagination.map((element, index) => {
            if (this.props.page === element) {
              return (
                <li
                  className="active"
                  onClick={() => this.props.setPage(element)}
                >
                  <Link to="/">{element}</Link>
                </li>
              );
            } else {
              return (
                <li onClick={() => this.props.setPage(element)}>
                  <Link to="/">{element}</Link>
                </li>
              );
            }
          })}
          <li onClick={() => this.props.nextPage()}>
            <Link to="/">&raquo;</Link>
          </li>
        </ul>
      );
    }
  }
  resetCheck = () => {
    this.setState({
      check_1: false,
      check_2: false,
      check_3: false,
      check_4: false,
      check_5: false,
    });
  };
  render() {
    return (
      <section>
        <div className="container">
          <div className="row content-home">
            <div className="col-sm-3">
              <div className="left-sidebar">
                <h2>Thể Loại</h2>
                <div className="panel-group category-products" id="accordian">
                  <div
                    onClick={() => {
                      this.resetCheck();
                      this.props.setTitle("TẤT CẢ");
                      this.props.setBranch(null);
                      this.props.setIDBranch(null);
                      this.props.branchClick(null, null);
                    }}
                    className="panel panel-default"
                  >
                    <div className="panel-heading">
                      <h4 className="panel-title item-custom">
                        <a>Tất cả</a>
                      </h4>
                    </div>
                  </div>
                  {this.props.category.map((element, index) => {
                    return (
                      <div
                        key={index}
                        onClick={() => {
                          this.resetCheck();
                          this.props.setTitle(element.name);
                          this.props.setBranch("category");
                          this.props.setIDBranch(element._id);
                          this.props.branchClick("category", element._id);
                        }}
                        className="panel panel-default"
                      >
                        <div className="panel-heading">
                          <h4 className="panel-title item-custom">
                            <a key={index}>{element.name}</a>
                          </h4>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <h2>Giá tiền</h2>
                <div className="panel-group category-products">
                  <div
                    className="panel panel-default"
                    onClick={() => {
                      this.props.setRangeType(null);
                      this.resetCheck();
                      this.setState({ check_1: true });
                    }}
                  >
                    <div className="panel-heading">
                      <h4 className="panel-title item-custom">
                        <a>Tất cả giá</a>
                      </h4>
                    </div>
                  </div>
                  <div
                    className="panel panel-default"
                    onClick={() => {
                      this.props.setRangeType({
                        low: 0,
                        high: 100000,
                      });
                      this.resetCheck();
                      this.setState({ check_2: true });
                    }}
                  >
                    <div className="panel-heading">
                      <h4 className="panel-title item-custom">
                        <a>Dưới 100.000đ</a>
                      </h4>
                    </div>
                  </div>
                  <div
                    className="panel panel-default"
                    onClick={() => {
                      this.props.setRangeType({
                        low: 100000,
                        high: 200000,
                      });
                      this.resetCheck();
                      this.setState({ check_3: true });
                    }}
                  >
                    <div className="panel-heading">
                      <h4 className="panel-title item-custom">
                        <a>100.000 - 200.000đ</a>
                      </h4>
                    </div>
                  </div>
                  <div
                    className="panel panel-default"
                    onClick={() => {
                      this.props.setRangeType({
                        low: 200000,
                        high: 300000,
                      });
                      this.resetCheck();
                      this.setState({ check_4: true });
                    }}
                  >
                    <div className="panel-heading">
                      <h4 className="panel-title item-custom">
                        <a>200.000 - 300.000đ</a>
                      </h4>
                    </div>
                  </div>
                  <div
                    className="panel panel-default"
                    onClick={() => {
                      this.props.setRangeType({
                        low: 300000,
                        high: Number.MAX_SAFE_INTEGER,
                      });
                      this.resetCheck();
                      this.setState({ check_5: true });
                    }}
                  >
                    <div className="panel-heading">
                      <h4 className="panel-title item-custom">
                        <a>Trên 300.000đ</a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-9 padding-right">
              <div className="features_items">
                <h2 className="title text-center">{this.props.title}</h2>
                {this.props.book.map((element, index) => {
                  return (
                    <ProductItem
                      book={element}
                      urlImg={element.img}
                      price={element.price}
                      describe={element.describe}
                      id={element._id}
                      name={element.name}
                      sale={element.sales}
                      addToCart={(product) => this.props.addToCart(product)}
                    />
                  );
                })}
              </div>
              <div className="Pagination-flex">{this.renderPagination()}</div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default ContentHome;
