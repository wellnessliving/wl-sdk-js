/**
 * An endpoint that returns a list of active clients with the given Purchase Options.
 *
 * This endpoint returns only active clients using active Purchase Options from the given list.
 *
 * Does not return clients, to which currently signed-in user does not have access to.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Member_Purchase_MemberByPromotionModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Member_Purchase_MemberByPromotionModel_a_clients_a_purchase_options
   * @property {?string} dl_end The date in the location time zone when the Purchase Option expires.
   *   This will be `null` if the Purchase Option doesn't expire.
   * @property {string} dtu_purchase The global date and time when the Purchase Option was sold.
   * @property {?string} dl_start The date in location's time zone when the Purchase Option starts.
   *   This will be `null` if not defined yet. For example, if the starting date is the date of the first visit
   *   and there haven't been any visits yet.
   * @property {?string} dl_terminate The date in location time zone when the Purchase Option will be terminated.
   *   This will be `null` if the Purchase Option isn't scheduled to be terminated.
   * @property {string} k_promotion The key of the Purchase Option.
   */
  /**
   * @typedef {{}} Wl_Member_Purchase_MemberByPromotionModel_a_clients
   * @property {Wl_Member_Purchase_MemberByPromotionModel_a_clients_a_purchase_options[]} a_purchase_options The list of active Purchase Options. Each element has:
   * 
   * <dl>
   *   <dt>string|null <tt>dl_end</tt></dt>
   *   <dd>The date in the location time zone when the Purchase Option expires.
   *       This will be `null` if the Purchase Option doesn't expire.</dd>
   *   <dt>string <tt>dtu_purchase</tt></dt>
   *   <dd>The global date and time when the Purchase Option was sold.</dd>
   *   <dt>string|null <tt>dl_start</tt></dt>
   *   <dd>The date in location's time zone when the Purchase Option starts.
   *       This will be `null` if not defined yet. For example, if the starting date is the date of the first visit
   *       and there haven't been any visits yet.</dd>
   *   <dt>string|null <tt>dl_terminate</tt></dt>
   *   <dd>The date in location time zone when the Purchase Option will be terminated.
   *       This will be `null` if the Purchase Option isn't scheduled to be terminated.</dd>
   *   <dt>string <tt>k_promotion</tt></dt>
   *   <dd>The key of the Purchase Option.</dd>
   * </dl>
   * @property {string} uid The key of the client.
   */

  /**
   * The list of active clients with the given Purchase Options.
   *
   * <dl>
   *   <dt>array[] <var>a_purchase_options</var></dt>
   *   <dd>
   *     The list of active Purchase Options. Each element has:
   *
   *     <dl>
   *       <dt>string|null <var>dl_end</var></dt>
   *       <dd>The date in the location time zone when the Purchase Option expires.
   *           This will be `null` if the Purchase Option doesn't expire.</dd>
   *       <dt>string <var>dtu_purchase</var></dt>
   *       <dd>The global date and time when the Purchase Option was sold.</dd>
   *       <dt>string|null <var>dl_start</var></dt>
   *       <dd>The date in location's time zone when the Purchase Option starts.
   *           This will be `null` if not defined yet. For example, if the starting date is the date of the first visit
   *           and there haven't been any visits yet.</dd>
   *       <dt>string|null <var>dl_terminate</var></dt>
   *       <dd>The date in location time zone when the Purchase Option will be terminated.
   *           This will be `null` if the Purchase Option isn't scheduled to be terminated.</dd>
   *       <dt>string <var>k_promotion</var></dt>
   *       <dd>The key of the Purchase Option.</dd>
   *     </dl>
   *   </dd>
   *
   *   <dt>string <var>uid</var></dt>
   *   <dd>The key of the client.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Member_Purchase_MemberByPromotionModel_a_clients[]}
   */
  this.a_clients = [];

  /**
   * The key of the business for which to get a list of clients.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * The comma-separated list of the Purchase Option keys.
   * Only active clients with at least one active Purchase Option from this list will be returned.
   *
   * For example: '324,123,11,556'
   *
   * @get get
   * @type {string}
   */
  this.s_promotion_keys = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Member_Purchase_MemberByPromotionModel);

/**
 * @inheritDoc
 */
Wl_Member_Purchase_MemberByPromotionModel.prototype.config=function()
{
  return {"a_field": {"a_clients": {"get": {"result": true}},"k_business": {"get": {"get": true}},"s_promotion_keys": {"get": {"get": true}}}};
};