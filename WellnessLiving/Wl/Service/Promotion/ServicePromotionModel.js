/**
 * Return list of promotion what can in theory pay for service from business.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Service_Promotion_ServicePromotionModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Service_Promotion_ServicePromotionModel_a_promotion
   * @property {string} k_promotion Promotion key.
   * @property {string} text_title Title of promotion.
   * @property {number} id_program One of {@link RsProgramSid} constants.
   * @property {boolean} is_select <tt>true</tt> if the promotion is related to the service, <tt>false</tt> otherwise.
   */

  /**
   * Promotion data with structure:<dl>
   *   <dt>string <var>k_promotion</var></dt>
   *   <dd>Promotion key.</dd>
   *   <dt>string <var>text_title</var></dt>
   *   <dd>Title of promotion.</dd>
   *   <dt>int <var>id_program</var></dt>
   *   <dd>One of {@link RsProgramSid} constants.</dd>
   *   <dt>bool <var>is_select</var></dt>
   *   <dd><tt>true</tt> if the promotion is related to the service, <tt>false</tt> otherwise.</dd>
   * </dl>.
   *
   * @get result
   * @type {Wl_Service_Promotion_ServicePromotionModel_a_promotion[]}
   */
  this.a_promotion = [];

  /**
   * The key of the business.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Default promotion key.
   * `null` if `k_service` was not provided, or if the service has no default promotion.
   *
   * @get result
   * @type {?string}
   */
  this.k_promotion_default = null;

  /**
   * Service key.
   *  The service with which you want to connect the promotions. <tt>null</tt> or <tt>0</tt> if you need to return a list
   *  of promotions for an uncreated service.
   *
   * @get get
   * @type {?string}
   */
  this.k_service = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Service_Promotion_ServicePromotionModel);

/**
 * @inheritDoc
 */
Wl_Service_Promotion_ServicePromotionModel.prototype.config=function()
{
  return {"a_field": {"a_promotion": {"get": {"result": true}},"k_business": {"get": {"get": true}},"k_promotion_default": {"get": {"result": true}},"k_service": {"get": {"get": true}}}};
};