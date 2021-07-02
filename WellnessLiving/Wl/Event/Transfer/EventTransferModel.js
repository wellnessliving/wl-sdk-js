/**
 * Transfer purchased event to another user.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Event_Transfer_EventTransferModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Event_Transfer_EventTransferModel_a_relation
   * @property {string} html_relation Name of relation type.
   * @property {string} html_user_name User name with whom purchased event owner has relation.
   */

  /**
   * Information about relation between users:
   * <dl>
   *   <dt>
   *     string <var>html_relation</var>
   *   </dt>
   *   <dd>
   *     Name of relation type.
   *   </dd>
   *   <dt>
   *     string <var>html_user_name</var>
   *   </dt>
   *   <dd>
   *     User name with whom purchased event owner has relation.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Event_Transfer_EventTransferModel_a_relation}
   */
  this.a_relation = undefined;

  /**
   * Key of source mode. One of {@link \Wl\Mode\ModeSid} constants.
   *
   * @post get
   * @type {number}
   */
  this.id_mode = undefined;

  /**
   * <tt>true</tt> if API is being used from backend, <tt>false</tt> otherwise.
   *
   * @post get
   * @type {boolean}
   */
  this.is_backend = false;

  /**
   * Key of event purchase item to be transferred. Primary key in {@link \RsPurchaseItemSql} table.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_purchase_item = undefined;

  /**
   * User key to transfer purchased event from. Primary key in {@link \PassportLoginSql} table.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.uid_from = undefined;

  /**
   * User key to transfer purchased event to. Primary key in {@link \PassportLoginSql} table.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.uid_to = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Event_Transfer_EventTransferModel);

/**
 * @inheritDoc
 */
Wl_Event_Transfer_EventTransferModel.prototype.config=function()
{
  return {"a_field": {"a_relation": {"get": {"result": true}},"id_mode": {"post": {"get": true}},"is_backend": {"post": {"get": true}},"k_purchase_item": {"get": {"get": true},"post": {"get": true}},"uid_from": {"get": {"get": true},"post": {"get": true}},"uid_to": {"get": {"get": true},"post": {"get": true}}}};
};