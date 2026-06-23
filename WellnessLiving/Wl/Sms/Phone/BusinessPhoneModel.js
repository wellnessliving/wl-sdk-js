/**
 * Gets the phone number associated with a specific business.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Sms_Phone_BusinessPhoneModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Key of the business.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Phone number of the business, which is added as sender for 2-Way SMS feature.
   *
   * `null` or an empty value if this business does not use this feature.
   *
   * @get result
   * @type {?string}
   */
  this.text_phone_sender = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Sms_Phone_BusinessPhoneModel);

/**
 * @inheritDoc
 */
Wl_Sms_Phone_BusinessPhoneModel.prototype.config=function()
{
  return {"a_field":{"k_business":{"get":{"get":true}},"text_phone_sender":{"get":{"result":true}}}};
};

/**
 * Gets the phone number associated with a specific business.
 *
 * Returns the dedicated sender phone number configured for the business's 2-Way SMS feature.
 * Requires the `wl.business.phone` API privilege. Returns `null` or an empty value if the
 * business has not configured a 2-Way SMS number.
 *
 * @function
 * @name Wl_Sms_Phone_BusinessPhoneModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
