/**
 * Returns list of promotions that can be used to pay for the class / event.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Classes_Promotion_ClassPromotionModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Classes_Promotion_ClassPromotionModel_a_promotion
   * @property {number} id_program Program types.
   * @property {boolean} is_select `true` if the promotion is related to the class or event, `false` otherwise.
   * @property {string} k_promotion The promotion key.
   * @property {string} text_title The title of the promotion.
   */

  /**
   * Promotion data with the following structure:.
   *
   * @get result
   * @type {Wl_Classes_Promotion_ClassPromotionModel_a_promotion[]}
   */
  this.a_promotion = undefined;

  /**
   * Determines whether the class is an event or not.
   *
   * @get get
   * @type {boolean}
   */
  this.is_event = false;

  /**
   * `true` - the login type or group restrictions are ignored and all pricing options will be returned. This will
   * require staff or admin access level.
   *
   * `false` - the API should return only pricing options, which are available for the current user.
   *
   * @get get
   * @type {boolean}
   */
  this.is_login_type_ignore = false;

  /**
   * `true` - promotions should only be returned if they're related to the given class or event.
   *
   * `false` - all promotions should be returned, even if they aren't related to the given class or event.
   *
   * @get get
   * @type {boolean}
   */
  this.is_related_only = false;

  /**
   * The business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * The class key.
   *
   * This refers to the class or event with which you want to connect the promotions. This will be `null` or `0` if you
   * need to return a list of promotions for an uncreated class or event.
   *
   * @get get
   * @type {?string}
   */
  this.k_class = null;

  /**
   * The default promotion key.
   *
   * This will be `null` if `k_class` wasn't provided, or if the class has no default promotion.
   *
   * @get result
   * @type {?string}
   */
  this.k_promotion_default = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Classes_Promotion_ClassPromotionModel);

/**
 * @inheritDoc
 */
Wl_Classes_Promotion_ClassPromotionModel.prototype.config=function()
{
  return {"a_field":{"a_promotion":{"get":{"result":true}},"is_event":{"get":{"get":true}},"is_login_type_ignore":{"get":{"get":true}},"is_related_only":{"get":{"get":true}},"k_business":{"get":{"get":true}},"k_class":{"get":{"get":true}},"k_promotion_default":{"get":{"result":true}}}};
};

/**
 * Returns list of promotions that can be used to pay for the class / event.
 *
 * Used in the booking flow to show clients which of their existing passes or memberships cover the
 * selected class. Also returns the default promotion to pre-select so the client does not have to
 * choose manually when there is an obvious match.
 *
 * @function
 * @name Wl_Classes_Promotion_ClassPromotionModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
