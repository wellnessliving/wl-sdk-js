/**
 * Soft-deletes the specified promotion if it has no associated sales.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Promotion_PromotionModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,k_promotion";

  /**
   * @typedef {{}} Wl_Promotion_PromotionModel_a_promotion_a_access_a_class
   * @property {string} k_class Key of the class.
   */

  /**
   * @typedef {{}} Wl_Promotion_PromotionModel_a_promotion_a_access_a_event
   * @property {string} k_class Key of the event.
   */

  /**
   * @typedef {{}} Wl_Promotion_PromotionModel_a_promotion_a_access_a_resource
   * @property {string} k_resource Key of the asset.
   */

  /**
   * @typedef {{}} Wl_Promotion_PromotionModel_a_promotion_a_access_a_service
   * @property {string} k_service Key of the appointment type.
   */

  /**
   * @typedef {{}} Wl_Promotion_PromotionModel_a_promotion_a_access
   * @property {Wl_Promotion_PromotionModel_a_promotion_a_access_a_class} a_class A list of available classes.
   * @property {Wl_Promotion_PromotionModel_a_promotion_a_access_a_event} a_event A list of available events.
   * @property {Wl_Promotion_PromotionModel_a_promotion_a_access_a_resource} a_resource A list of available assets.
   * @property {Wl_Promotion_PromotionModel_a_promotion_a_access_a_service} a_service A list of available appointment types.
   * @property {boolean} is_class_all This will be `true` if any class in the business can be visited with this Purchase Option. Otherwise, this will be `false` if only selected classes can be visited with this Purchase Option. Selected classes can be found in the list of available classes and events.
   * @property {boolean} is_event_all This will be `true` if any event in the business can be visited with this Purchase Option. Otherwise, this will be `false` if only selected events can be visited with this Purchase Option. Selected events can be found in the list of available classes and events.
   */

  /**
   * @typedef {{}} Wl_Promotion_PromotionModel_a_promotion_a_image
   * @property {number} i_height The height of the image.
   * @property {number} i_width The width of the image.
   * @property {string} url-thumbnail The link to the image.
   */

  /**
   * @typedef {{}} Wl_Promotion_PromotionModel_a_promotion
   * @property {Wl_Promotion_PromotionModel_a_promotion_a_access} a_access Information about services that can be attended with this pass or membership.
   * @property {Wl_Promotion_PromotionModel_a_promotion_a_image} a_image Information about Purchase Option image. This will be an empty array if the Purchase Option doesn't have an image.
   * @property {string[]} a_location A list of locations where this promotion is available.
   * @property {string[]} a_login_type A list of login types linked with this promotion.
   * @property {string[]} a_member_group A list of login types linked with this promotion.
   * @property {string[]} a_tag List of selected tags.
   * @property {string} dl_expire The local expiration date. This is the last day when the Purchase Option is active.  This is used only when the 'Expires on a certain date' duration type is set.
   * @property {string} dl_terminate Date when promotion should be terminated. `null` if there is no terminate date.
   * @property {string} f_revenue_single Approximate revenue per session value.
   * @property {number} i_duration The number of periods for the 'Period' duration type. For example, if the duration of the Purchase Option is 12 months, this field will be 12.
   * @property {number} i_limit The number of visits that the owner can use for the Purchase Option. This will be `0` if the Purchase Option allows for unlimited visits.
   * @property {number} id_duration A class for managing time intervals. Last ID: 9.
   * @property {number} id_duration_type Class to process string identifiers for duration types
   * @property {number} id_program Program types.
   * @property {number} id_restriction Purchase restrictions.
   * @property {boolean} is_active Whether this promotion is active.
   * @property {boolean} is_business_wide Whether this promotion is available for all locations of the business.
   * @property {boolean} is_introductory If `true`, this promotion is for introductory clients. Otherwise, this will be `false`.
   * @property {boolean} is_online If `true`, this promotion is available for online purchase. Otherwise, this will be `false`.
   * @property {boolean} is_payroll Whether clients who purchase this item excluded from payroll calculations.
   * @property {boolean} is_revenue_single If `true` need to add approximate revenue per session value.
   * @property {boolean} is_use Whether promotion can be used for booking. `null` if there is no termination.
   * @property {string} k_promotion The key of the promotion.
   * @property {string} k_tag_primary Primary tag.
   * @property {string} m_price The price.
   * @property {string} text_description The description of the Purchase Option.
   * @property {string} text_title The title of the Purchase Option.
   * @property {string} url_buy The direct URL to the promotion purchase page.
   * @property {string} url_catalog The direct URL to the promotion details page in the online store.
   */

  /**
   * Promotion information.
   *
   * @get result
   * @post post
   * @type {Wl_Promotion_PromotionModel_a_promotion[]}
   */
  this.a_promotion = undefined;

  /**
   * The key of the business.
   *
   * @delete get
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = "";

  /**
   * The key of the promotion.
   *
   * @delete get
   * @get get
   * @post get
   * @type {string}
   */
  this.k_promotion = "";

  /**
   * @typedef {{}} Wl_Promotion_PromotionModel_o_guest_settings_A
   * @property {number} i_claim_day Count of days for accept guest invite.
   * @property {number} i_limit Times that member can invite the same guest.
   * @property {number} i_limit_duration The time during which a member can invite a guest `i_limit` times.
   * @property {number} id_limit_duration Type of the duration of `i_limit_duration`. One of {@link ADurationSid} constants.
   * @property {boolean} is_checkin Whether guests can only enter the gym when the inviting member is checked in.
   * @property {boolean} is_limit Whether there are limits for a guest promotion.
   */

  /**
   * Guest passes settings for promotion. This will be `null` if there are no guest pass settings for the promotion.
   *
   * @get result
   * @post post
   * @type {Wl_Promotion_PromotionModel_o_guest_settings_A|*[]|?*}
   */
  this.o_guest_settings = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Promotion_PromotionModel);

/**
 * @inheritDoc
 */
Wl_Promotion_PromotionModel.prototype.config=function()
{
  return {"a_field":{"a_promotion":{"get":{"result":true},"post":{"post":true}},"k_business":{"delete":{"get":true},"get":{"get":true},"post":{"get":true}},"k_promotion":{"delete":{"get":true},"get":{"get":true},"post":{"get":true}},"o_guest_settings":{"get":{"result":true},"post":{"post":true}}}};
};

/**
 * @function
 * @name Wl_Promotion_PromotionModel.instanceGet
 * @param {string} k_business The key of the business.
 * @param {string} k_promotion The key of the promotion.
 * @returns {Wl_Promotion_PromotionModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Soft-deletes the specified promotion if it has no associated sales.
 *
 * Validates staff privileges and checks that the promotion has not been sold before marking it as removed.
 *
 * @function
 * @name Wl_Promotion_PromotionModel.delete
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.delete()
 */

/**
 * Returns promotion by the specified business and promotion keys.
 *
 * Returns full promotion details including access restrictions, image, pricing, duration, tags,
 * locations, and guest pass settings if applicable.
 *
 * @function
 * @name Wl_Promotion_PromotionModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Saves promotion data.
 *
 * Accepts the full promotion configuration including title, description, access rules, duration, tags, and guest
 * pass settings, then validates and persists the changes.
 *
 * @function
 * @name Wl_Promotion_PromotionModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
