/**
 * List of user's bank cards.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Pay_Bank_Card_ListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "uid,k_business,k_location";

  /**
   * List of bank cards.
   *
   * @get result
   * @type {{}}
   */
  this.a_bank_card = undefined;

  /**
   * ID of current business.
   *
   * @get get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Location to show information for.
   * Primary key in {@link \RsLocationSql} table.
   *
   * <tt>0</tt> to use user's home location.
   *
   * @get get
   * @type {string}
   */
  this.k_location = undefined;

  /**
   * ID of a user to show information for.
   *
   * @get get
   * @type {string}
   */
  this.uid = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Pay_Bank_Card_ListModel);

/**
 * @inheritDoc
 */
Wl_Pay_Bank_Card_ListModel.prototype.config=function()
{
  return {"a_field": {"a_bank_card": {"get": {"result": true}},"k_business": {"get": {"get": true}},"k_location": {"get": {"get": true}},"uid": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Pay_Bank_Card_ListModel.instanceGet
 * @param {string} uid ID of a user to show information for.
 * @param {string} k_business ID of current business.
 * @param {string} k_location Location to show information for. Primary key in {@link \RsLocationSql} table. <tt>0</tt> to use user's home location.
 * @returns {Wl_Pay_Bank_Card_ListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */