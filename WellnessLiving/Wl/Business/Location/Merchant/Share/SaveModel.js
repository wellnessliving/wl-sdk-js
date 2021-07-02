/**
 * Saves information about merchant sharing between locations.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_Location_Merchant_Share_SaveModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * A list of source locations for merchant sharing.
   *
   * <tt>null</tt> to not to change this list.
   *
   * @post post
   * @type {?string[]}
   */
  this.a_location_from = null;

  /**
   * A list of destination locations for merchant sharing.
   *
   * <tt>null</tt> to not to change this list.
   *
   * @post post
   * @type {?string[]}
   */
  this.a_location_to = null;

  /**
   * Delete all sets for the specified business.
   *
   * @post post
   * @type {boolean}
   */
  this.is_clear = false;

  /**
   * Business key. Obligatory field.
   *
   * Primary key from {@link \RsBusinessSql} table.
   *
   * @post get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Merchant sharing group ID.
   *
   * Primary key from {@link GroupSql} table.
   *
   * <tt>null</tt> to create new group.
   *
   * @post post,result
   * @type {?string}
   */
  this.k_merchant_share_group = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_Location_Merchant_Share_SaveModel);

/**
 * @inheritDoc
 */
Wl_Business_Location_Merchant_Share_SaveModel.prototype.config=function()
{
  return {"a_field": {"a_location_from": {"post": {"post": true}},"a_location_to": {"post": {"post": true}},"is_clear": {"post": {"post": true}},"k_business": {"post": {"get": true}},"k_merchant_share_group": {"post": {"post": true,"result": true}}}};
};