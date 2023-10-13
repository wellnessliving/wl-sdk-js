/**
 * Manages business phone number.
 * It is used to register business phone number or add bundle SID, or to get phone number of some business.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_Phone_PhoneModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Locale corresponding to the business' address country. One of {@link Core_Locale_LocaleSid} constants.
   * Note that this may not be the same as the business' locale, if the business is misconfigured and has an address
   * country that is outside its locale.
   *
   * @get result
   * @type {number}
   */
  this.id_locale = undefined;

  /**
   * Business key.
   *
   * @delete get
   * @get get
   * @post get
   * @type {*}
   */
  this.k_business = undefined;

  /**
   * Business phone number(in locale format).
   * Used to receive SMS notifications from clients. Can be `null` during bundle SID saving.
   *
   * @delete get
   * @get result
   * @post get
   * @type {*}
   */
  this.text_phone = undefined;

  /**
   * Business phone number mask.
   *
   * @get result
   * @type {string}
   */
  this.text_phone_mask = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_Phone_PhoneModel);

/**
 * @inheritDoc
 */
Wl_Business_Phone_PhoneModel.prototype.config=function()
{
  return {"a_field": {"id_locale": {"get": {"result": true}},"k_business": {"delete": {"get": true},"get": {"get": true},"post": {"get": true}},"text_phone": {"delete": {"get": true},"get": {"result": true},"post": {"get": true}},"text_phone_mask": {"get": {"result": true}}}};
};