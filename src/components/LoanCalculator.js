import React, { useState } from 'react';
import CurrencyInput from 'react-currency-input-field';
import { Link } from 'react-router-dom';

function LoanCalculator({ className, carYear, carBrand, carPrice }) {
  const [creditScore, setCreditScore] = useState(6.96);
  const [termLength, setTermLength] = useState(24);
  const [cashDown, setCashDown] = useState(0);

  console.log(cashDown);

  const handleCreditScoreChange = (e) => {
    setCreditScore(e.target.value);
  };

  const handleTermLengthChange = (e) => {
    setTermLength(e.target.value);
  };

  const handleCashDownChange = (value) => {
    setCashDown(value);
  };

  return (
    <section className={`${className} loanCalculator_container`}>
      <div className='loanCalculator_estimator'>
        <h2>
          Payment Estimator {carYear} {carBrand}
        </h2>

        <div className='loanCalculator_calculator'>
          <div className='loanCalculator_field'>
            <label>Estimated Credit Score</label>
            <select onChange={handleCreditScoreChange}>
              <option value={6.96}>Excellent 720+</option>
              <option value={7.9}>Great 719-690</option>
              <option value={10.42}>Very Good 689-670</option>
              <option value={10.83}>Good 669-650</option>
              <option value={11.84}>Fair 649-630</option>
              <option value={14.34}>Poor 629-610</option>
              <option value={16.74}>Poor 609-580</option>
              <option value={20.61}>Extremely Poor 579-520</option>
            </select>
          </div>

          <div className='loanCalculator_field'>
            <label>Cash Down</label>
            <CurrencyInput
              name='cashDown'
              placeholder='$2,000'
              defaultValue={2000}
              allowDecimals={false}
              allowNegativeValue={false}
              onValueChange={handleCashDownChange}
              prefix='$'
            />
          </div>

          <div className='loanCalculator_field'>
            <label>Estimated Credit Score</label>
            <select onChange={handleTermLengthChange}>
              <option value={24}>24 Months</option>
              <option value={36}>36 Months</option>
              <option value={48}>48 Months</option>
              <option value={60}>60 Months</option>
              <option value={72}>72 Months</option>
            </select>
          </div>

          <div className='loanCalculator_field'>
            <label>Estimated APR</label>
            <input type='text' value={`${creditScore}%`} disabled />
          </div>
        </div>
      </div>

      <div className='loanCalculator_result'>
        <h3>
          {carYear} {carBrand}
        </h3>

        <div className='loanCalculator_result-divider'></div>

        <p className='loanCalculator_result-price'>
          <span>$680</span>/month
        </p>

        <span>
          Payments may vary based on actual vehicle, model & options selected.
        </span>
      </div>

      <div className='loanCalculator_link'>
        <Link to='/salesRepresentatives'>Contact Dealer</Link>
      </div>
    </section>
  );
}

export default LoanCalculator;
