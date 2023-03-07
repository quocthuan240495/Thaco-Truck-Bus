import React from "react"
import { Row, Col } from "reactstrap"

import "./Benefits.css"

export default function Benefits() {
  return (
    <div className="benefit-items mx-3">
      <Row>
        <Col md="4">
          <div className="single-benefit">
            <div className="sb-icon">
              <img src={require("../../images/icons/icon-1.png")} alt="" />
            </div>
            <div className="sb-text">
              <h6>ĐẠI LÝ CHÍNH HÃNG</h6>
              <p>Cam kết các sản phẩm, phụ tùng được bảo hành chính hãng, cung cấp nhanh chóng và đa dạng.</p>
            </div>
          </div>
        </Col>
        <Col md="4">
          <div className="single-benefit">
            <div className="sb-icon">
              <img src={require("../../images/icons/icon-2.png")} alt="" />
            </div>
            <div className="sb-text">
              <h6>TƯ VẤN CHUYÊN NGHIỆP</h6>
              <p>Đội ngũ tư vấn giàu kinh nghiệm, tận tâm, nhiệt huyết. Hotline/Zalo hỗ trợ 0944813912</p>
            </div>
          </div>
        </Col>
        <Col md="4">
          <div className="single-benefit">
            <div className="sb-icon">
              <img src={require("../../images/icons/icon-3.png")} alt="" />
            </div>
            <div className="sb-text">
              <h6>DỊCH VỤ HẬU MÃI & TRẢ GÓP</h6>
              <p>Bảo hành dài & hỗ trợ mua xe trả góp tới 85% giá trị xe. Thủ tục nhanh, lãi thấp, thanh toán linh hoạt</p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}
