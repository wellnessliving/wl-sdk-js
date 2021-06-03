/**
 * Return random phone number by mask.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_Phone_PhoneGenerateByMaskModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Business_Phone_PhoneGenerateByMaskModel_a_phone
   * @property {string} text_phone Phone number.
   * @property {string} text_phone_mask Phone number with mask applied.
   */

  /**
   * Array of phone numbers, which were got from provider.
   * Amount of phone numbers is based on {@link PhoneSimilarApi::PHONE_AMOUNT}.
   *
   * Structure of this array is: <dl>
   *   <dt>string <var>text_phone</var></dt>
   *   <dd>Phone number.</dd>
   *   <dt>string <var>text_phone_mask</var></dt>
   *   <dd>Phone number with mask applied.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Business_Phone_PhoneGenerateByMaskModel_a_phone}
   */
  this.a_phone = [];

  /**
   * Business key. Primary key in {@link \RsBusinessSql}.
   *
   * @get get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Phone number, which was failed to verify.
   * Used to get similar phone numbers from provider.
   *
   * @get get
   * @type {string}
   */
  this.text_phone_mask = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_Phone_PhoneGenerateByMaskModel);

/**
 * @inheritDoc
 */
Wl_Business_Phone_PhoneGenerateByMaskModel.prototype.config=function()
{
  return {"a_field": {"a_phone": {"get": {"result": true}},"k_business": {"get": {"get": true}},"text_phone_mask": {"get": {"get": true}}}};
};