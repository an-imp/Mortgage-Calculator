import React from 'react'
import { useState, useEffect } from 'react'
var pmt = require('formula-pmt');
import Chart from '../components/chart'
import BarChart from '../components/barChart'
import Table from '../components/table'


class Main extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      amount: 500000,
      rate: 2.5,
      length: 30,
      rentPerWeek: 600,
      balanceAry: [],
      interestAry: [],
      principalAry: [],
      labelsAry: [],
      yieldAry: [],
      rentAry: [],
      deInterestAry: [],
      totalPayment: 0,
      totalInterest: 0,
      monthlyPayment: 0,
      insurance: 2500,
      concilRate: 2000,
      incomeRate: 30,
      increase: 0,
      old: true,
      displayResult: false,
      payment: 0
    }
  }

  amort = (name, value) => {
    const balanceAry = []
    const labelsAry = []
    const interestAry = []
    const yieldAry = []

    if (name || value) {
      this.state.[name] = value
    }
    let {amount, rate, length, rentPerWeek, insurance, concilRate, incomeRate, increase, old} = this.state

    const principal = amount
    let yearlyRent = rentPerWeek*52
    const incomeRatePercentage = incomeRate/100
    const interest = rate * .01 * 1/12;
    const duration = length * 12;
    // M = ( P * r * (1+r)^n ) / ( (1+r)^n - 1 )
    const monthlyPayment = principal *
      (
        (interest * Math.pow(1 + interest, duration)) /
        (Math.pow(1 + interest, duration) - 1)
      );
    const totalPayment = monthlyPayment * duration;
    const totalInterest = totalPayment - principal;

    // amortization schedule - monthly split between principal and interest
    let balance = totalPayment;

    let yearlyInterestAry = []
    let yearlyyPrincipalAry = []
    let yearlyBalanceAry = []
    let yearlyYieldAry = []
    let yearlyRentAry = []
    let yearlyDeInterestAry = []

    let yearlyInterest = 0
    let yearlyPrincipal = 0
    let yearlyBalance = 0
    let currentYear = 2021
    let indexOfYear = 0
    let taxableInterest = 0

    for(let i = 1; i <= duration; i++) {
      const monthlyInterest = interest * balance
      const monthlyPrincipal = monthlyPayment - monthlyInterest
      balance -= monthlyPayment;
      if (balance < 0) {
        balance = 0
      }
      yearlyInterest += monthlyInterest
      yearlyPrincipal += monthlyPrincipal
      if (i%12 === 0) {
        if (old) {
          if (indexOfYear === 0) {
            taxableInterest = yearlyInterest * 0.875
          }
          if (indexOfYear === 1) {
            taxableInterest = yearlyInterest * 0.5
          }
          if (indexOfYear === 2) {
            taxableInterest = yearlyInterest * 0.25
          }
        }
        if (!old || indexOfYear > 2) {
          taxableInterest = 0
        }

        yearlyDeInterestAry.push(taxableInterest)

        if (increase>0 && indexOfYear > 0) {
          yearlyRent = yearlyRent * (Math.pow(increase/100 + 1, indexOfYear))
        }
        yearlyRentAry.push(yearlyRent)
        let taxableBalance = yearlyRent - insurance - concilRate - taxableInterest
        if (taxableBalance <= 0) {
          taxableBalance = 0
        }

        const yieldbalance = yearlyRent - monthlyPayment*12 - (taxableBalance * incomeRatePercentage)
        indexOfYear ++
        if (increase === 0) {
          yearlyYieldAry.push(yieldbalance)
          labelsAry.push(currentYear++)
        } else if (indexOfYear < 10) {
          yearlyYieldAry.push(yieldbalance)
          labelsAry.push(currentYear++)
        }
        yearlyInterestAry.push(yearlyInterest)
        yearlyInterest = 0
        yearlyyPrincipalAry.push(yearlyPrincipal)
        yearlyPrincipal = 0
        yearlyBalanceAry.push(balance)
      }
    }

    if (name || value) {
      this.setState({
         principalAry: yearlyyPrincipalAry,
         labelsAry: labelsAry,
         interestAry: yearlyInterestAry,
         balanceAry: yearlyBalanceAry,
         yieldAry: yearlyYieldAry,
         rentAry: yearlyRentAry,
         deInterestAry: yearlyDeInterestAry,
         totalPayment: totalPayment,
         totalInterest: totalInterest,
         monthlyPayment: monthlyPayment,
         displayResult: true,
         payment: monthlyPayment * 12,
         [name]: value,
       });
    } else {
      this.setState({
         principalAry: yearlyyPrincipalAry,
         labelsAry: labelsAry,
         interestAry: yearlyInterestAry,
         balanceAry: yearlyBalanceAry,
         yieldAry: yearlyYieldAry,
         rentAry: yearlyRentAry,
         deInterestAry: yearlyDeInterestAry,
         totalPayment: totalPayment,
         totalInterest: totalInterest,
         monthlyPayment: monthlyPayment,
         payment: monthlyPayment * 12,
         displayResult: true,
       });
    }

  }

  handleChange = (e) => {
    this.amort(e.target.name,  Number(e.target.value));
  }

  _onChange = () => {
    this.amort('old', !this.state.old);
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-md">
              <label>Loan amount:<br/>
                <input onChange={this.handleChange} type="number" name="amount" value={this.state.amount} />
              </label><br/>
              <label>Interest rate %:<br/>
                <input onChange={this.handleChange} type="number" name="rate" value={this.state.rate} />
              </label><br/>
              <label>Loan term in years:<br/>
                <input onChange={this.handleChange} type="number" name="length" value={this.state.length} />
              </label><br/>
            </div>
            <div className="col-md-4 col-md">
              <label>Rent per week:<br/>
                <input onChange={this.handleChange} type="number" name="rentPerWeek" value={this.state.rentPerWeek} />
              </label><br/>
              <label>Insurance per year:<br/>
                <input onChange={this.handleChange} type="number" name="insurance" value={this.state.insurance} />
              </label><br/>
              <label>Council rate per year:<br/>
                <input onChange={this.handleChange} type="number" name="concilRate" value={this.state.concilRate} />
              </label><br/>
            </div>
            <div className="col-md-4 col-md">
              <label>Rent increase per year %:<br/>
                <input onChange={this.handleChange} type="number" name="increase" value={this.state.increase} />
              </label><br/>
              <label>Tax rate (min 17.5) %:<br/>
                <input onChange={this.handleChange} type="number" name="incomeRate" value={this.state.incomeRate} />
              </label><br/>
              <label>New build or bought before 27th March, 2021:<br/>
                <input onChange={this._onChange} type="checkbox" name="old" checked={this.state.old} />
              </label><br/>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md">
              <br/>
              <button type="button" className="btn btn-success" onClick={this.amort}>Submit</button>
              <br/><br/><br/><br/>
            </div>
          </div>
          {this.state.displayResult && (
            <div className="row">
              <div className="col-12 col-xs">
              <br/><br/>
              <div className="card">
                <div className="card-header">
                  Result
                </div>
                <div className="card-body">
                  <h5 className="card-title">Table loan schedule</h5>
                  <p>${this.state.amount.toFixed(2)} at {this.state.rate.toFixed(2)}% interest</p>
                  <p>with {this.state.length * 12} monthly payments</p>
                  <p>Total Payments: $ {this.state.totalPayment.toFixed(2)}</p>
                  <p>Total Interest: $ {this.state.totalInterest.toFixed(2)}</p>
                  <hr />
                  <p>Return = Total rent - loan payment - (total rent - deductible interest - council rate - insurance) * tax rate</p>
                  <p>Example for year 2021:</p>
                  <p>Total rent = ${(this.state.rentPerWeek*52).toFixed(2)}</p>
                  <p>Loan payment = ${(this.state.monthlyPayment*12).toFixed(2)}</p>
                  <p>Tax to pay = (${(this.state.rentPerWeek*52)} - ${(this.state.deInterestAry[0]).toFixed(2)} - ${(this.state.concilRate)} - ${(this.state.insurance)}) * ${(this.state.incomeRate)}% </p>
                  <p>Return = Total rent - Loan payment - Tax to pay = ${(this.state.yieldAry[0]).toFixed(2)} </p>
                  </div>
                </div>
              </div>
              <br/><br/>
              <div className="col-md-6 col-xs">
                <BarChart data={this.state} />
              </div>

              <div className="col-md-6 col-xs">
                <Chart data={this.state} />
              </div>

              <div className="col-12 col-xs">
                <br/>
                <Table data={this.state} />
              </div>
            </div>
          )}
        </div>
      </React.Fragment>
    )
  }

}

export default Main
