import React from "react";

const LoanDetails = ({ inpval, setdata }) => {
  return (
    <form className="mt-4">
      <div className="row">
        <div class="mb-3 col-lg-6 col-md-6 col-12">
          <label for="exampleInputEmail1" class="form-label">
            Amount You want to Loan
          </label>
          <input
            type="number"
            value={inpval.loan}
            onChange={setdata}
            name="loan"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3 col-lg-6 col-md-6 col-12">
          <label for="exampleInputEmail1" class="form-label">
            Period of Loan ( months )
          </label>
          <input
            type="number"
            value={inpval.timep}
            onChange={setdata}
            name="timep"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3 col-lg-6 col-md-6 col-12">
          <label for="exampleInputEmail1" class="form-label">
            Interest Rate ( fixed )
          </label>
          <input
            type="number"
            value={inpval.interest}
            onChange={setdata}
            name="timep"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3 col-lg-6 col-md-6 col-12">
          <label for="exampleInputEmail1" class="form-label">
            Interest
          </label>
          <input
            type="number"
            value={
              (inpval.totalinterest =
                (Number(inpval.timep) * Number(inpval.loan) * 15) / 100)
            }
            onChange={setdata}
            name="interest"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3 col-lg-6 col-md-6 col-12">
          <label for="exampleInputEmail1" class="form-label">
            Total Amount to be paid back
          </label>
          <input
            type="number"
            value={
              (inpval.payback =
                Number(inpval.loan) + Number(inpval.totalinterest))
            }
            onChange={setdata}
            name="totalinterest"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
      </div>
    </form>
  );
};

export default LoanDetails;
