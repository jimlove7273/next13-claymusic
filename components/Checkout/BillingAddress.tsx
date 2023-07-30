'use client';
import React, { useEffect } from 'react';
import { useCheckout, addressInfo } from '../../store/checkOutStore';

const BillingAddress = () => {
  const enteredBilling = useCheckout((state) => state.enteredBilling);
  const billingInfo = useCheckout((state) => state.billingInfo);
  const setBilling = useCheckout((state) => state.setBilling);
  const setBillingInfo = useCheckout((state) => state.setBillingInfo);
  const setStep = useCheckout((state) => state.setStep);

  // -- define which fields are REQUIRED
  const requiredFields: (keyof addressInfo)[] = [
    'firstName',
    'lastName',
    'email',
    'country',
    'address1',
    'city',
    'state',
    'zipcode',
  ];
  // -- return TRUE if any of the required fields is empty, FALSE otherwise
  function hasEmptyValue(
    obj: addressInfo,
    fields: (keyof addressInfo)[],
  ): boolean {
    return fields.some((field) => obj[field] === '');
  }

  /**
   * Function: handleFieldChange
   *
   * This funciton runs whenever any of the field values changed.  Once changed, it saves to the states
   */
  const handleFieldChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    fieldName: keyof addressInfo,
  ) => {
    const newValue = event.target.value;
    setBillingInfo(fieldName, newValue);
  };

  /**
   * Function: submitForm
   *
   * This handles the form submission, checks all required fields are filled in, before moving onto the next step
   */
  const submitForm = () => {
    const hasRequiredFieldsEmpty: boolean = hasEmptyValue(
      billingInfo,
      requiredFields,
    );

    console.log('** hasRequiredFieldsEmpty', hasRequiredFieldsEmpty);

    if (!hasRequiredFieldsEmpty) {
      setBilling(!hasRequiredFieldsEmpty);
      setStep(1);
    }
  };

  return (
    <div className="p-4 text-gray-600">
      {enteredBilling === true && (
        <div>
          {billingInfo.firstName} {billingInfo.lastName}
          <br />
          {billingInfo.address1}
          <br />
          {billingInfo.address2}
          <br />
          {billingInfo.city}, {billingInfo.state} {billingInfo.zipcode}
        </div>
      )}

      {enteredBilling === false && (
        <div>
          <input
            className="w-[calc(50%-4px)] border border-gray-200 p-1 mb-1 mr-2 focus-visible:border-gray-500 active:border-gray-500"
            type="text"
            name="first_name"
            value={billingInfo.firstName}
            onChange={(e) => handleFieldChange(e, 'firstName')}
            placeholder="First Name"
          />
          <input
            className="w-[calc(50%-4px)] border border-gray-200 p-1 mb-1"
            type="text"
            name="last_name"
            value={billingInfo.lastName}
            onChange={(e) => handleFieldChange(e, 'lastName')}
            placeholder="Last Name"
          />
          <input
            className="w-full border border-gray-200 p-1 mb-1"
            type="text"
            name="email"
            value={billingInfo.email}
            onChange={(e) => handleFieldChange(e, 'email')}
            placeholder="Email"
          />
          <input
            className="w-full border border-gray-200 p-1 mb-1"
            type="text"
            name="company_name"
            value={billingInfo.company}
            onChange={(e) => handleFieldChange(e, 'company')}
            placeholder="Company Name"
          />
          <input
            className="w-full border border-gray-200 p-1 mb-1"
            type="text"
            name="address"
            value={billingInfo.address1}
            onChange={(e) => handleFieldChange(e, 'address1')}
            placeholder="Address"
          />
          <input
            className="w-full border border-gray-200 p-1 mb-1"
            type="text"
            name="address2"
            value={billingInfo.address2}
            onChange={(e) => handleFieldChange(e, 'address2')}
            placeholder="Address 2"
          />
          <input
            className="w-full border border-gray-200 p-1 mb-1"
            type="text"
            name="city"
            value={billingInfo.city}
            onChange={(e) => handleFieldChange(e, 'city')}
            placeholder="City"
          />
          <select
            className="w-[calc(32%)] border border-gray-200 p-1 mr-2"
            value={billingInfo.country}
            onChange={(e) => handleFieldChange(e, 'country')}
            name="country"
          >
            <option value="">-select-</option>
            <option>Canada</option>
            <option>USA</option>
          </select>
          <select
            className="w-[calc(32%)] border border-gray-200 p-1 mr-2"
            value={billingInfo.state}
            onChange={(e) => handleFieldChange(e, 'state')}
            name="state"
          >
            <option value="">-select-</option>
            <option value="CA">California</option>
          </select>
          <input
            className="w-[calc(32%-1px)] border border-gray-200 p-1 mr-2"
            type="text"
            name="zipcode"
            value={billingInfo.zipcode}
            onChange={(e) => handleFieldChange(e, 'zipcode')}
            placeholder="Zip Code"
          />
          <input
            className="w-full border border-gray-200 p-1 my-1"
            type="text"
            name="phone"
            value={billingInfo.phone}
            onChange={(e) => handleFieldChange(e, 'phone')}
            placeholder="Phone"
          />
          <br />
          <button className="w-full mt-3 flex justify-end">
            <div
              onClick={submitForm}
              className="px-5 py-2 bg-gray-900 text-white text-sm"
            >
              CONTINUE TO SHIPPING
            </div>
          </button>
        </div>
      )}
    </div>
  );
};

export default BillingAddress;
