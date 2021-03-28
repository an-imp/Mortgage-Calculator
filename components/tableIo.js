import React from 'react'

const TableIo = (props) => {
  return (
    <div className="table-responsive">
      <br></br>
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Interest only payment</th>
              <th scope="col">Rent</th>
              <th scope="col">Deductible Interest</th>
              <th scope="col">Return</th>
            </tr>
          </thead>
          <tbody>
            {props.data.labelsAry.map((item, index) =>
              <tr key={item}>
                <th scope="row">{item}</th>
                <td>{(props.data.monthlyPayment*12).toFixed(2)}</td>
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

export default TableIo
