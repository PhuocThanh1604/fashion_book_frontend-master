import React, { Component } from "react";

const FooterTop = () => (
  <div className="footer-top">
    <div className="container">
      <div className="row">
        <div className="col-sm-4">
          <div className="companyinfo">
            <h2>
              <span>BookShop</span>
            </h2>
            <p>
              Bookshop là một website chuyên bán sách, bao gồm nhiều thể loại đa
              dạng và phong phú , chúng tôi muốn cung cấp các trải nhiệm tuyệt
              vời nhất đên khách hàng
            </p>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="single-widget">
            <form action="#" className="form-footer container">
              <h2>Liên hệ</h2>
              <div className="row">
                <input
                  type="text"
                  placeholder="Your email address"
                  className="col-sm-4"
                />
                <button type="submit" className="">
                  Submit
                </button>
              </div>
              <p>
                Đăng Ký Gmail để nhận những thống báo mới nhất về chúng tôi...
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default FooterTop;
