'use client';
import React from 'react';
import { useCheckout, addressInfo } from '../../store/checkOutStore';

const ShippingAddress = () => {
  const enteredShipping = useCheckout((state) => state.enteredShipping);
  const shippingInfo = useCheckout((state) => state.shippingInfo);
  const setShipping = useCheckout((state) => state.setShipping);
  const setShippingInfo = useCheckout((state) => state.setShippingInfo);
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
    setShippingInfo(fieldName, newValue);
  };

  /**
   * Function: submitForm
   *
   * This handles the form submission, checks all required fields are filled in, before moving onto the next step
   */
  const submitForm = () => {
    const hasRequiredFieldsEmpty: boolean = hasEmptyValue(
      shippingInfo,
      requiredFields,
    );

    console.log('** hasRequiredFieldsEmpty', hasRequiredFieldsEmpty);

    if (!hasRequiredFieldsEmpty) {
      setShipping(!hasRequiredFieldsEmpty);
      setStep(2);
    }
  };

  return (
    <div className="p-4 text-gray-600">
      {enteredShipping ? (
        <div>
          {shippingInfo.firstName} {shippingInfo.lastName}
          <br />
          {shippingInfo.address1}
          <br />
          {shippingInfo.address2}
          <br />
          {shippingInfo.city}, {shippingInfo.state} {shippingInfo.zipcode}
        </div>
      ) : (
        <div>
          <input
            className="w-[calc(50%-4px)] border border-gray-200 p-1 mb-1 mr-2 focus-visible:border-gray-500 active:border-gray-500"
            type="text"
            name="first_name"
            value={shippingInfo.firstName}
            onChange={(e) => handleFieldChange(e, 'firstName')}
            placeholder="First Name"
          />
          <input
            className="w-[calc(50%-4px)] border border-gray-200 p-1 mb-1"
            type="text"
            name="last_name"
            value={shippingInfo.lastName}
            onChange={(e) => handleFieldChange(e, 'lastName')}
            placeholder="Last Name"
          />
          <input
            className="w-full border border-gray-200 p-1 mb-1"
            type="text"
            name="email"
            value={shippingInfo.email}
            onChange={(e) => handleFieldChange(e, 'email')}
            placeholder="Email"
          />
          <input
            className="w-full border border-gray-200 p-1 mb-1"
            type="text"
            name="company_name"
            value={shippingInfo.company}
            onChange={(e) => handleFieldChange(e, 'company')}
            placeholder="Company Name"
          />
          <input
            className="w-full border border-gray-200 p-1 mb-1"
            type="text"
            name="address"
            value={shippingInfo.address1}
            onChange={(e) => handleFieldChange(e, 'address1')}
            placeholder="Address"
          />
          <input
            className="w-full border border-gray-200 p-1 mb-1"
            type="text"
            name="address2"
            value={shippingInfo.address2}
            onChange={(e) => handleFieldChange(e, 'address2')}
            placeholder="Address 2"
          />
          <input
            className="w-full border border-gray-200 p-1 mb-1"
            type="text"
            name="city"
            value={shippingInfo.city}
            onChange={(e) => handleFieldChange(e, 'city')}
            placeholder="City"
          />
          <select
            className="w-[calc(32%)] border border-gray-200 p-1 mr-2"
            value={shippingInfo.country}
            onChange={(e) => handleFieldChange(e, 'country')}
            name="country"
          >
            <option value="">-select-</option>
            <option>Canada</option>
            <option>USA</option>
          </select>
          <select
            className="w-[calc(32%)] border border-gray-200 p-1 mr-2"
            value={shippingInfo.state}
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
            value={shippingInfo.zipcode}
            onChange={(e) => handleFieldChange(e, 'zipcode')}
            placeholder="Zip Code"
          />
          <input
            className="w-full border border-gray-200 p-1 my-1"
            type="text"
            name="phone"
            value={shippingInfo.phone}
            onChange={(e) => handleFieldChange(e, 'phone')}
            placeholder="Phone"
          />
          <br />
          <button className="w-full mt-3 flex justify-end">
            <div
              onClick={submitForm}
              className="px-5 py-2 bg-gray-900 text-white text-sm"
            >
              CONTINUE TO PAYMENT
            </div>
          </button>
        </div>
      )}
    </div>
  );
};

export default ShippingAddress;
