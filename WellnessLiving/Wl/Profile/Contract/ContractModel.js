/**
 * An endpoint that gets information about a session pass or membership with a contract.
 *
 * The POST method will complete a sale of a Purchase Option requiring a contract.
 * The method that WellnessLiving uses to encode a signature into a string isn't currently available in the SDK.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Profile_Contract_ContractModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "uid,k_business,k_location,id_purchase_item,k_id,k_purchase_item,m_price_custom";

  /**
   * The start date of the contract.
   *
   * @get get
   * @type {string}
   */
  this.dt_start = "";

  /**
   * The percentage discount for the item.
   *
   * @get get
   * @type {number}
   */
  this.f_manual_discount = 0;

  /**
   * The text of the contract.
   *
   * @get result
   * @type {string}
   */
  this.html_contract = undefined;

  /**
   * Age of minor which documents can be signed by parent or legal guardian.
   *
   * @get result
   * @type {number}
   */
  this.i_minor_age = undefined;

  /**
   * The type of purchase item. This is one of the {@link RsPurchaseItemSid} constants.
   * Optional if {@link Wl_Profile_Contract_ContractModel.k_purchase_item} is not empty.
   *
   * @get get
   * @type {number}
   */
  this.id_purchase_item = 0;

  /**
   * <tt>false</tt> if user has not agreed to use Electronic Signatures,
   * <tt>true</tt> if user has agreed to use Electronic Signatures,
   * <tt>null</tt> otherwise.
   *
   * @post post
   * @type {?boolean}
   */
  this.is_agree = null;

  /**
   * The key of the business to show information for.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * The key of the purchase item in the database.
   * The item key. Depends of {@link Wl_Profile_Contract_ContractModel.id_purchase_item} property.
   *
   * @get get
   * @type {string}
   */
  this.k_id = "0";

  /**
   * The key of the selected location.
   *
   * @get get
   * @type {string}
   */
  this.k_location = "0";

  /**
   * The key of the selected purchase item.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_purchase_item = "0";

  /**
   * Amount of a flat manual discount.
   *
   * @get get
   * @type {string}
   */
  this.m_discount_flat = "0";

  /**
   * The custom price of the item.
   *
   * @get get
   * @type {string}
   */
  this.m_price_custom = "";

  /**
   * The discount code used for the item.
   *
   * @get get
   * @type {string}
   */
  this.s_discount_code = "";

  /**
   * An encoded version of the client signature.
   * This is different from the signature needed to communicate with an endpoint.
   *
   * @post post
   * @type {string}
   */
  this.s_signature = "";

  /**
   * Title of purchase option.
   *
   * @get result
   * @type {string}
   */
  this.text_title = undefined;

  /**
   * The key of the current user.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.uid = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Profile_Contract_ContractModel);

/**
 * @inheritDoc
 */
Wl_Profile_Contract_ContractModel.prototype.config=function()
{
  return {"a_field": {"dt_start": {"get": {"get": true}},"f_manual_discount": {"get": {"get": true}},"html_contract": {"get": {"result": true}},"i_minor_age": {"get": {"result": true}},"id_purchase_item": {"get": {"get": true}},"is_agree": {"post": {"post": true}},"k_business": {"get": {"get": true},"post": {"get": true}},"k_id": {"get": {"get": true}},"k_location": {"get": {"get": true}},"k_purchase_item": {"get": {"get": true},"post": {"get": true}},"m_discount_flat": {"get": {"get": true}},"m_price_custom": {"get": {"get": true}},"s_discount_code": {"get": {"get": true}},"s_signature": {"post": {"post": true}},"text_title": {"get": {"result": true}},"uid": {"get": {"get": true},"post": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Profile_Contract_ContractModel.instanceGet
 * @param {string} uid The key of the current user.
 * @param {string} k_business The key of the business to show information for.
 * @param {string} k_location The key of the selected location.
 * @param {number} id_purchase_item The type of purchase item. This is one of the {@link RsPurchaseItemSid} constants. Optional if {@link Wl_Profile_Contract_ContractModel.k_purchase_item} is not empty.
 * @param {string} k_id The key of the purchase item in the database. The item key. Depends of {@link Wl_Profile_Contract_ContractModel.id_purchase_item} property.
 * @param {string} k_purchase_item The key of the selected purchase item.
 * @param {string} m_price_custom The custom price of the item.
 * @returns {Wl_Profile_Contract_ContractModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */