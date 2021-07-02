/**
 * Manages process of new phone verification.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_Phone_PhoneVerifyModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * <tt>true</tt> if phone number is not registered in system yet.
   * <tt>false</tt> otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_new_number = undefined;

  /**
   * Business key. Primary key in {@link \RsBusinessSql}.
   * It is necessary to get business locale settings and normalize phone number.
   *
   * @get get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Business phone number.
   *
   * @get get
   * @type {string}
   */
  this.text_phone = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_Phone_PhoneVerifyModel);

/**
 * @inheritDoc
 */
Wl_Business_Phone_PhoneVerifyModel.prototype.config=function()
{
  return {"a_field": {"is_new_number": {"get": {"result": true}},"k_business": {"get": {"get": true}},"text_phone": {"get": {"get": true}}}};
};