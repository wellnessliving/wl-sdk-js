/**
 * Returns promotion list of the specified business.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Promotion_PromotionListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,is_franchise";

  /**
   * @typedef {{}} Wl_Promotion_PromotionListModel_a_promotion
   * @property {number} id_program The promotion program. One of the {@link RsProgramSid} constants.
   * @property {number} id_program_type The type of the promotion program. One of the {@link RsProgramTypeSid} constants.
   * @property {boolean} is_active Whether the promotion is active.
   * @property {boolean} is_component Whether the promotion is a component.
   * @property {boolean} is_expired Whether the promotion is expired.
   * @property {string} k_promotion The key of the promotion.
   * @property {string} text_title The title of the promotion.
   */

  /**
   * A list of promotions.
   *
   * @get result
   * @type {Wl_Promotion_PromotionListModel_a_promotion[]}
   */
  this.a_promotion = undefined;

  /**
   * Determines whether to return promotions created by Enterprise Locations (for Enterprise Cloud businesses only).
   * If `true`, promotions created by Enterprise Locations are included. Otherwise, this will be `false`.
   *
   * @get get
   * @type {boolean}
   */
  this.is_franchise = false;

  /**
   * The business key used to get the promotions.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Promotion_PromotionListModel);

/**
 * @inheritDoc
 */
Wl_Promotion_PromotionListModel.prototype.config=function()
{
  return {"a_field":{"a_promotion":{"get":{"result":true}},"is_franchise":{"get":{"get":true}},"k_business":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Promotion_PromotionListModel.instanceGet
 * @param {string} k_business The business key used to get the promotions.
 * @param {boolean} is_franchise Determines whether to return promotions created by Enterprise Locations (for Enterprise Cloud businesses only). If `true`, promotions created by Enterprise Locations are included. Otherwise, this will be `false`.
 * @returns {Wl_Promotion_PromotionListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Returns promotion list of the specified business.
 *
 * Returns all active promotions for the given business, with optional inclusion of Enterprise Location promotions
 * when the business is a franchisor and `is_franchise` is set to `true`.
 *
 * @function
 * @name Wl_Promotion_PromotionListModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
