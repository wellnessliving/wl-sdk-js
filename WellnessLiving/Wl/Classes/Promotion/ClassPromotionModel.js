/**
 * Returns a list of promotions that can pay for a business's classes or events.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Classes_Promotion_ClassPromotionModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Classes_Promotion_ClassPromotionModel_a_promotion
   * @property {string} k_promotion The promotion key.
   * @property {string} text_title The title of the promotion.
   * @property {number} id_program One of {@link RsProgramSid} constants.
   * @property {boolean} is_select <tt>true</tt> if the promotion is related to the class or event, <tt>false</tt> otherwise.
   */

  /**
   * Promotion data with the following structure:<dl>
   *   <dt>string <var>k_promotion</var></dt>
   *   <dd>The promotion key.</dd>
   *   <dt>string <var>text_title</var></dt>
   *   <dd>The title of the promotion.</dd>
   *   <dt>int <var>id_program</var></dt>
   *   <dd>One of {@link RsProgramSid} constants.</dd>
   *   <dt>bool <var>is_select</var></dt>
   *   <dd><tt>true</tt> if the promotion is related to the class or event, <tt>false</tt> otherwise.</dd>
   * </dl>.
   *
   * @get result
   * @type {Wl_Classes_Promotion_ClassPromotionModel_a_promotion[]}
   */
  this.a_promotion = [];

  /**
   * Determines whether the class is an event or not.
   *
   * @get get
   * @type {boolean}
   */
  this.is_event = false;

  /**
   * `true` if login type or group restrictions are ignored and all pricing options will be returned.
   *   This will require staff or admin access level.
   * `false` if api should return only pricing options, which are available for the current user.
   *
   * @get get
   * @type {boolean}
   */
  this.is_login_type_ignore = false;

  /**
   * `true` if promotions should only be returned if they're related to the given class or event.
   * `false` if all promotions should be returned, even if they aren't related to the given class or event.
   *
   * @get get
   * @type {boolean}
   */
  this.is_related_only = false;

  /**
   * The key of the business.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * The class key.
   * The class or event with which you want to connect the promotions. <tt>null</tt> or <tt>0</tt> if you need to return a list
   * of promotions for an uncreated class or event.
   *
   * @get get
   * @type {?string}
   */
  this.k_class = null;

  /**
   * Default promotion key.
   * `null` if `k_class` was not provided, or if the class has no default promotion.
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
  return {"a_field": {"a_promotion": {"get": {"result": true}},"is_event": {"get": {"get": true}},"is_login_type_ignore": {"get": {"get": true}},"is_related_only": {"get": {"get": true}},"k_business": {"get": {"get": true}},"k_class": {"get": {"get": true}},"k_promotion_default": {"get": {"result": true}}}};
};