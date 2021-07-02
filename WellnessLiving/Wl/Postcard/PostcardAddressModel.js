/**
 * Entry point to manipulate direct mail campaign.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Postcard_PostcardAddressModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Whether address is verified and valid.
   *
   * <tt>true</tt> if address verified and valid.
   * <tt>false</tt> if address is not verified yet or not valid.
   *
   * @get result
   * @post result
   * @type {boolean}
   */
  this.is_valid = false;

  /**
   * Whether address already verified.
   *
   * @get result
   * @post result
   * @type {boolean}
   */
  this.is_verified = false;

  /**
   * Address for validation.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.json_address = "{}";

  /**
   * Business key.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Additional notes for address verification.
   *
   * @get result
   * @post result
   * @type {string}
   */
  this.text_note = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Postcard_PostcardAddressModel);

/**
 * @inheritDoc
 */
Wl_Postcard_PostcardAddressModel.prototype.config=function()
{
  return {"a_field": {"is_valid": {"get": {"result": true},"post": {"result": true}},"is_verified": {"get": {"result": true},"post": {"result": true}},"json_address": {"get": {"get": true},"post": {"get": true}},"k_business": {"get": {"get": true},"post": {"get": true}},"text_note": {"get": {"result": true},"post": {"result": true}}}};
};