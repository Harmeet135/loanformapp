import React from "react";

const Businessdeets = ({ inpval, setdata }) => {
  return (
    <form className="mt-4">
      <div className="row">
        <h4>Business Owner</h4>
        <div class="mb-3 col-lg-6 col-md-6 col-12">
          <label for="exampleInputEmail1" class="form-label">
            First Name
          </label>
          <input
            type="text"
            value={inpval.boname}
            onChange={setdata}
            name="boname"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3 col-lg-6 col-md-6 col-12">
          <label for="exampleInputEmail1" class="form-label">
            Last Name
          </label>
          <input
            type="text"
            value={inpval.bolname}
            onChange={setdata}
            name="bolname"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3 col-lg-6 col-md-6 col-12">
          <label for="exampleInputPassword1" class="form-label">
            Business Email
          </label>
          <input
            type="email"
            value={inpval.boemail}
            onChange={setdata}
            name="boemail"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="mb-3 col-lg-6 col-md-6 col-12">
          <label for="exampleInputPassword1" class="form-label">
            GST No
          </label>
          <input
            type="number"
            value={inpval.gstno}
            onChange={setdata}
            name="gstno"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="mb-3 col-lg-6 col-md-6 col-12">
          <label for="exampleInputPassword1" class="form-label">
            State
          </label>
          <input
            type="text"
            value={inpval.state}
            onChange={setdata}
            name="state"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        {/* <div class="mb-3 col-lg-6 col-md-6 col-12">
          <label for="exampleInputPassword1" class="form-label">
            Mobile
          </label>
          <input
            type="number"
            value={inpval.mobile}
            onChange={setdata}
            name="mobile"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="mb-3 col-lg-6 col-md-6 col-12">
          <label for="exampleInputPassword1" class="form-label">
            Work
          </label>
          <input
            type="text"
            value={inpval.work}
            onChange={setdata}
            name="work"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
      
        <div class="mb-3 col-lg-12 col-md-12 col-12">
          <label for="exampleInputPassword1" class="form-label">
            Description
          </label>
          <textarea
            name="desc"
            value={inpval.desc}
            onChange={setdata}
            className="form-control"
            id=""
            cols="30"
            rows="5"
          ></textarea>
      </div> */}
      </div>
    </form>
  );
};

export default Businessdeets;
