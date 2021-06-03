/**
 * Allows to manipulate banking payment sources (credit cards, ACH and direct entry accounts).
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Pay_Bank_EntityModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Contains data associated with payment source.
   *
   * Structure of this array depends on type of the payment source.
   *
   * @post post
   * @type {{}}
   */
  this.a_data = undefined;

  /**
   * ID of the currency of this payment entity is managed.
   *
   * @post get
   * @type {number}
   */
  this.id_currency = undefined;

  /**
   * Type of payment source.
   *
   * One of {@link \RsPayMethodSid} constants.
   *
   * @post post
   * @type {number}
   */
  this.id_pay_method = undefined;

  /**
   * Key of the business within which this payment entity is managed.
   *
   * @post get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Key of the location within which this payment entity is managed.
   *
   * Empty string, zero should be passed here if a business-wide merchant should be used.
   * In this case it is also allowed to not to pass this parameter.
   *
   * @post get
   * @type {?string}
   */
  this.k_location = null;

  /**
   * Key of payment owner.
   *
   * @post post
   * @type {string}
   */
  this.k_pay_owner = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Pay_Bank_EntityModel);

/**
 * @inheritDoc
 */
Wl_Pay_Bank_EntityModel.prototype.config=function()
{
  return {"a_field": {"a_data": {"post": {"post": true}},"id_currency": {"post": {"get": true}},"id_pay_method": {"post": {"post": true}},"k_business": {"post": {"get": true}},"k_location": {"post": {"get": true}},"k_pay_owner": {"post": {"post": true}}}};
};