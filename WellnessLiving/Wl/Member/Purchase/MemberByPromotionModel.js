/**
 * Returns active clients holding at least one active Purchase Option from the specified list.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Member_Purchase_MemberByPromotionModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Member_Purchase_MemberByPromotionModel_a_clients_a_purchase_options
   * @property {?string} dl_end The date in the location time zone when the Purchase Option expires.   This will be `null` if the Purchase Option doesn't expire.
   * @property {?string} dl_start The date in location's time zone when the Purchase Option starts.   This will be `null` if not defined yet. For example, if the starting date is the date of the first visit   and there haven't been any visits yet.
   * @property {?string} dl_terminate The date in location time zone when the Purchase Option will be terminated.   This will be `null` if the Purchase Option isn't scheduled to be terminated.
   * @property {string} dtu_purchase The global date and time when the Purchase Option was sold.
   * @property {string} k_promotion The key of the Purchase Option.
   */

  /**
   * @typedef {{}} Wl_Member_Purchase_MemberByPromotionModel_a_clients
   * @property {Wl_Member_Purchase_MemberByPromotionModel_a_clients_a_purchase_options} a_purchase_options The list of active Purchase Options. Each element has:
   * @property {string} uid The key of the client.
   */

  /**
   * The list of active clients with the given Purchase Options.
   *
   * @get result
   * @type {Wl_Member_Purchase_MemberByPromotionModel_a_clients[]}
   */
  this.a_clients = undefined;

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
  return {"a_field":{"a_clients":{"get":{"result":true}},"k_business":{"get":{"get":true}},"s_promotion_keys":{"get":{"get":true}}}};
};

/**
 * Returns active clients holding at least one active Purchase Option from the specified list.
 *
 * Accepts a comma-separated list of Purchase Option keys, validates them against the business, and returns
 * all active clients who hold at least one non-expired, non-limited Purchase Option from that list.
 * Clients to which the currently signed-in user has no profile access are excluded from the result.
 *
 * @function
 * @name Wl_Member_Purchase_MemberByPromotionModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
