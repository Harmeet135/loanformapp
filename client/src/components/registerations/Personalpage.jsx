import React from "react";

const Personalpage = ({ inpval, setdata }) => {
  return (
    <form className="mt-4">
      <div className="row">
        <div class="mb-3 col-lg-6 col-md-6 col-12">
          <label for="exampleInputEmail1" class="form-label">
            First Name
          </label>
          <input
            type="text"
            value={inpval.name}
            onChange={setdata}
            name="name"
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
            value={inpval.lname}
            onChange={setdata}
            name="lname"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3 col-lg-6 col-md-6 col-12">
          <label for="exampleInputEmail1" class="form-label">
            Father's Name
          </label>
          <input
            type="text"
            value={inpval.fname}
            onChange={setdata}
            name="fname"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3 col-lg-6 col-md-6 col-12">
          <label for="exampleInputPassword1" class="form-label">
            Email
          </label>
          <input
            type="email"
            value={inpval.email}
            onChange={setdata}
            name="email"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="mb-3 col-lg-6 col-md-6 col-12">
          <label for="exampleInputPassword1" class="form-label">
            age
          </label>
          <input
            type="number"
            value={inpval.age}
            onChange={setdata}
            name="age"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="mb-3 col-lg-6 col-md-6 col-12">
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
            Address
          </label>
          <input
            type="text"
            value={inpval.address}
            onChange={setdata}
            name="address"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
      </div>
    </form>
  );
};

export default Personalpage;
