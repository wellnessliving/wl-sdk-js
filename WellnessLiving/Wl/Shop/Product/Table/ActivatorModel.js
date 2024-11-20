/**
 * API to activates/deactivates product record list.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Shop_Product_Table_ActivatorModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Record key list.
   *
   * @post post
   * @type {string[]}
   */
  this.a_record = undefined;

  /**
   * <tt>true</tt> if records should be activated, <tt>false</tt> otherwise (deactivated).
   *
   * @post post
   * @type {boolean}
   */
  this.is_activate = undefined;

  /**
   * Business key.
   *
   * @post post
   * @type {string}
   */
  this.k_business = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Shop_Product_Table_ActivatorModel);

/**
 * @inheritDoc
 */
Wl_Shop_Product_Table_ActivatorModel.prototype.config=function()
{
  return {"a_field": {"a_record": {"post": {"post": true}},"is_activate": {"post": {"post": true}},"k_business": {"post": {"post": true}}}};
};