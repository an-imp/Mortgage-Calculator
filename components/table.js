import React from 'react'

const Table = (props) => {
  return (
    <div>
      <br></br>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Loan Payment Amount</th>
              <th scope="col">Loan Principal Amount</th>
              <th scope="col">Loan Interest Amount</th>
              <th scope="col">Loan Balance Amount</th>
              <th scope="col">Rent per year</th>
              <th scope="col">Deductible Interest</th>
              <th scope="col">Yield per year</th>
            </tr>
          </thead>
          <tbody>
            {props.data.labelsAry.map((item, index) =>
              <tr key={item}>
                <th scope="row">{item}</th>
                <td>{props.data.payment.toFixed(2)}</td>
                <td>{props.data.principalAry[index].toFixed(2)}</td>
                <td>{props.data.interestAry[index].toFixed(2)}</td>
                <td>{props.data.balanceAry[index].toFixed(2)}</td>
                <td>{props.data.rentAry[index].toFixed(2)}</td>
                <td>{props.data.deInterestAry[index].toFixed(2)}</td>
                <td>{props.data.yieldAry[index].toFixed(2)}</td>
              </tr>
            )}

          </tbody>
        </table>
    </div>
  )
}

export default Table
