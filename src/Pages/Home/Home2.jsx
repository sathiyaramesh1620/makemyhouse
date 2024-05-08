import React from 'react'
import img1 from './../../Assets/images/logo.png'
import img2 from './../../Assets/images/call.png'
import './Home.css'
const Home2 = () => {
  return (
  <>
      <header>
        <div className="header">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <a href="" className='logo'>
                  <img src={img1} alt="" className='white-logo' />
                  {/* <img src={img2} 
            className='color-logo'
            alt="" /> */}
                </a>
              </div>
              <div className="col-6 text-right">
                <div className="right-data">
                  <span className="tell-number">
                    <img src={img2} alt="" />
                    <a href="tell:+91-731-680-3999">
                      +91-731-680-3999
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="banner-home">

        <div className="container">
          <div className="row">


            <div className="col-md-7 col-lg-5">
              <div className="contact-form">
                <div className="head">
                  <h2>Start here.</h2>
                  <p>Tell us some basic information, and Our executive will get back to you.</p>
                </div>
                <div className="form">
                  <form>
                    <div className="form-group">
                      <input type="hidden" />
                      <input type="hidden" name="publicid" value="b78e1f2498e403a9cfed2229480746ef" />
                      <input type="hidden" name="leadFormID" value="1" />
                      <input type="hidden" name="leadstatus" value="Hot" />
                      <input type="hidden" name="label:Type_Status" value="not contacted" />
                      <input type="hidden" name="leadsource" value="LP1" />
                      <input type="hidden" name="name" value="test" />
                      <input type="text" name="firstname" id="txtname" placeholder="Name" required
                        className="form-control" />
                    </div>
                    <div className="form-group">
                      <div className="row">
                        <div className="col-12">
                          <input id="txtmobile" type="number" name="phone" pattern="[0-9]{10}"
                            required placeholder="10 digit Mobile Number" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <input type="email" name="email" id="txtemail" required placeholder="Email"
                        className="form-control" />
                    </div>
                    <div className="form-group" id="change_country">
                      <select className="form-control" required name="state" id="state">
                        <option value>--select State--</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <select className="form-control" required name="city" id="city">
                        <option value>--select City--</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <textarea name="label:Requirement" className="form-control req1"
                        placeholder="Requirement" id="req" required
                        data-custom-name="message"></textarea>
                    </div>
                    <div className="button">
                      <button id="btntohide" className="g-recaptcha btn bg-success btn1"
                        data-sitekey="6Lc5HxAaAAAAAOGRgBNXwob3hMgpi1XPzQu7C5Mf" data-callback="onSubmit"
                        data-action="submit">Submit</button>

                      <p><span id="error_msg">You've already submitted the
                        lead.</span></p>
                      <p><span id="error_msg_mobiles" >Please enter valid
                        10 digits mobile number.</span></p>
                      <p><span id="error_msg_email" >Please enter Valid
                        Email-Id.</span></p>
                      <p><span id="error_req" >Please enter
                        requirements.</span></p>
                      <input type="hidden" name="recaptcha_response" id="recaptchaResponse" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-7">
            <div className="text-content wow fadeInUp">
                <div className="txt">
                    <h2 >Leading Online Architectural Platform</h2>
                    <h3>The Trouble-Free way</h3>
                    <h3>India's Largest Online Architectural Design Platform</h3>
                    <ul>
                        <li>Team of experience Architects,determined to give you world className designs.</li>
                        <li>Floor plans,3D Elevation,Interior designs,Technical drawings, Architectural guidance
                            and lot more !!</li>
                        <li>Fully Customized Design as per Norms of Municipal Corporation</li>
                        <li>Timely site visits by our professional Architects</li>
                    </ul>
                    <span className="highlight-txt">Successfully Completed <span>15000+</span> Projects</span>
                </div>
            </div>
        </div>

          </div>
        </div>
      </section>

    </>
  )
}

export default Home2