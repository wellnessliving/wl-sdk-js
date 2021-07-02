/**
 * Information about purchase option contract.
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
   * Promotion custom start date.
   *
   * @get get
   * @type {string}
   */
  this.dt_start = "";

  /**
   * Discount in percents.
   *
   * @get get
   * @type {number}
   */
  this.f_manual_discount = "";

  /**
   * Text of contract.
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
   * ID of purchase option type. Member of {@link \RsPurchaseItemSid}.
   * Optional if {@link \Wl\Profile\Contract\ContractApi::$k_purchase_item} is not empty.
   *
   * @get get
   * @type {number}
   */
  this.id_purchase_item = 0;

  /**
   * ID of a business to show information for.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * ID of purchase option in database.
   * Name of table in database depends on {@link \Wl\Profile\Contract\ContractApi::$id_purchase_item}.
   * Optional if {@link \Wl\Profile\Contract\ContractApi::$k_purchase_item} is not empty.
   *
   * @get get
   * @type {string}
   */
  this.k_id = "0";

  /**
   * ID of selected a location.
   *
   * @get get
   * @type {string}
   */
  this.k_location = "0";

  /**
   * ID of certain purchase item. Primary key in {@link \RsPurchaseItemSql} table.
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
   * Custom price of the item.
   *
   * @get get
   * @type {string}
   */
  this.m_price_custom = "";

  /**
   * Discount code.
   *
   * @get get
   * @type {string}
   */
  this.s_discount_code = "";

  /**
   * Image with user's signature.
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
   * ID of current user.
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
  return {"a_field": {"dt_start": {"get": {"get": true}},"f_manual_discount": {"get": {"get": true}},"html_contract": {"get": {"result": true}},"i_minor_age": {"get": {"result": true}},"id_purchase_item": {"get": {"get": true}},"k_business": {"get": {"get": true},"post": {"get": true}},"k_id": {"get": {"get": true}},"k_location": {"get": {"get": true}},"k_purchase_item": {"get": {"get": true},"post": {"get": true}},"m_discount_flat": {"get": {"get": true}},"m_price_custom": {"get": {"get": true}},"s_discount_code": {"get": {"get": true}},"s_signature": {"post": {"post": true}},"text_title": {"get": {"result": true}},"uid": {"get": {"get": true},"post": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Profile_Contract_ContractModel.instanceGet
 * @param {string} uid ID of current user.
 * @param {string} k_business ID of a business to show information for.
 * @param {string} k_location ID of selected a location.
 * @param {number} id_purchase_item ID of purchase option type. Member of {@link \RsPurchaseItemSid}. Optional if {@link \Wl\Profile\Contract\ContractApi::$k_purchase_item} is not empty.
 * @param {string} k_id ID of purchase option in database. Name of table in database depends on {@link \Wl\Profile\Contract\ContractApi::$id_purchase_item}. Optional if {@link \Wl\Profile\Contract\ContractApi::$k_purchase_item} is not empty.
 * @param {string} k_purchase_item ID of certain purchase item. Primary key in {@link \RsPurchaseItemSql} table.
 * @param {string} m_price_custom Custom price of the item.
 * @returns {Wl_Profile_Contract_ContractModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */