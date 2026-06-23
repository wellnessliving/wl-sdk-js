/**
 * Gets a list of packages/passes/memberships.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Promotion_Index_PromotionIndexModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Promotion_Index_PromotionIndexModel_a_promotion_a_access_a_class
   * @property {string} k_class Key of the class.
   */

  /**
   * @typedef {{}} Wl_Promotion_Index_PromotionIndexModel_a_promotion_a_access_a_event
   * @property {string} k_class Key of the event.
   */

  /**
   * @typedef {{}} Wl_Promotion_Index_PromotionIndexModel_a_promotion_a_access_a_resource
   * @property {string} k_resource Key of the asset.
   */

  /**
   * @typedef {{}} Wl_Promotion_Index_PromotionIndexModel_a_promotion_a_access_a_service
   * @property {string} k_service Key of the appointment type.
   */

  /**
   * @typedef {{}} Wl_Promotion_Index_PromotionIndexModel_a_promotion_a_access
   * @property {Wl_Promotion_Index_PromotionIndexModel_a_promotion_a_access_a_class} a_class A list of available classes.
   * @property {Wl_Promotion_Index_PromotionIndexModel_a_promotion_a_access_a_event} a_event A list of available events.
   * @property {Wl_Promotion_Index_PromotionIndexModel_a_promotion_a_access_a_resource} a_resource A list of available assets.
   * @property {Wl_Promotion_Index_PromotionIndexModel_a_promotion_a_access_a_service} a_service A list of available appointment types.
   * @property {boolean} is_class_all If `true`, any class in the business can be visited with this Purchase Option. If `false`, only selected classes can be visited. Selected classes can be found in the list of available classes and events.
   * @property {boolean} is_event_all If `true`, if any event in the business can be visited with this Purchase Option. If `false`, if only selected events can be visited. Selected events can be found in the list of available classes and events.
   */

  /**
   * @typedef {{}} Wl_Promotion_Index_PromotionIndexModel_a_promotion_a_component
   * @property {number} i_quantity The quantity. If empty, it means the quantity is 1.
   * @property {number} id_purchase_item A list of purchase types.
   * @property {string} k_id The primary key of the component in the related table. This depends on the type of the component. The key of the event for {@link RsPurchaseItemSid}, the key of the Purchase Option for the {@link RsPurchaseItemSid}, the key of the product option for the {@link RsPurchaseItemSid}. Full information about events can be taken from the [EventListApi](/Wl/Event/EventList.json). Purchase Options from the [PromotionIndexApi](/Wl/Promotion/Index/PromotionIndex.json). Full information about products are not available at this moment though API.
   * @property {string} text_title The name of the component.
   */

  /**
   * @typedef {{}} Wl_Promotion_Index_PromotionIndexModel_a_promotion_a_image
   * @property {number} i_height The height of the image.
   * @property {number} i_width The width of the image.
   * @property {string} url-thumbnail The link to the image.
   */

  /**
   * @typedef {{}} Wl_Promotion_Index_PromotionIndexModel_a_promotion_a_visit_limit
   * @property {number} i_limit The quantity of sessions every `i_period`.
   * @property {number} i_period The duration of the time period. This depends on a key of `a_visit_limit` array.
   * @property {number} i_roll_over_cap The limit number of rollover sessions.
   * @property {number} i_roll_over_expire The duration of the time period after which rolled over session will expire.
   * @property {number} id_limit_cycle Attendance Restriction cycle type.
   * @property {number} id_roll_over_expire A class for managing time intervals. Last ID: 9.
   * @property {boolean} is_reconcile_visit Determines whether to reconcile unpaid sessions on restrictions reset.
   * @property {boolean} is_roll_over_expire Determines if the rolled over session is expired.
   * @property {boolean} is_roll_over_renew Determines whether to rollover sessions upon auto-renew.
   * @property {boolean} is_rollup Determines Whether to rollover sessions.
   * @property {boolean} is_visit_conversion Determines whether to convert remaining visits.
   */

  /**
   * @typedef {{}} Wl_Promotion_Index_PromotionIndexModel_a_promotion
   * @property {Wl_Promotion_Index_PromotionIndexModel_a_promotion_a_access} a_access Information about services that can be attended with this pass or membership.
   * @property {Wl_Promotion_Index_PromotionIndexModel_a_promotion_a_component} a_component A list of components included in the Purchase Option if this Purchase Option is a package. If it's not a package, the list will be always empty. If it's a package, the list can still be empty if all its components were deactivated. This means that this array can't be used to determine whether this is a package or not (check `id_program` or `id_program_type` value instead). There can be three types of components: events, Purchase Options, and products. Some fields can be different depending on type of the component, but each element of the array includes:
   * @property {Wl_Promotion_Index_PromotionIndexModel_a_promotion_a_image} a_image This will be an empty array if the Purchase Option doesn't have image. Otherwise, this will display the following information about the Purchase Option image:
   * @property {Wl_Promotion_Index_PromotionIndexModel_a_promotion_a_visit_limit} a_visit_limit Attendance restrictions, if available. If unavailable, this will be an empty array. Every element has a key, which is a type of the time period {@link ADurationSid}, {@link ADurationSid}, {@link ADurationSid}, {@link ADurationSid}. The values are:
   * @property {string} dl_expire The local expiration date. This is the last day of the Purchase Option's active status. This is used only for the 'Expires on a certain date' duration type. Otherwise, this should be ignored.
   * @property {number} i_duration The number of periods for the "Period" duration type. For example, if the duration of the Purchase Option is 12 months, this field will be 12.
   * @property {number} i_limit The number of visits that the owner of the Purchase Option can use. This will be `0` if the Purchase Option has unlimited visits.
   * @property {number} i_limit_duration The maximum number of minutes or hours depending on `id_limit_duration` that the current promotion can be used in.
   * @property {number} id_duration A class for managing time intervals. Last ID: 9.
   * @property {number} id_duration_type Class to process string identifiers for duration types
   * @property {number} id_limit_duration A class for managing time intervals. Last ID: 9.
   * @property {number} id_program Program types.
   * @property {number} id_program_category Program type categories.
   * @property {number} id_program_type Program types.
   * @property {boolean} is_direct_buy_only If `true`, the pricing option can be sold only by direct link. This means it shouldn't be shown in the store or explorer. Otherwise, this will be `false`.
   * @property {boolean} is_introductory If `true`, this promotion is for introductory clients. Otherwise, this will be `false`.
   * @property {boolean} is_online If `true` this promotion is available for online purchase. Otherwise, this will be `false`.
   * @property {string} k_promotion The promotion key.
   * @property {string} m_price The price.
   * @property {string} text_description The description.
   * @property {string} text_program The localized promotion program name corresponding to the value of `id_program`.
   * @property {string} text_title The title.
   * @property {string} url_buy The direct URL to the promotion purchase page.
   */

  /**
   * A list of introductory promotion offers available at the location.
   * Every element is an array with the following keys:
   *
   * @get result
   * @type {Wl_Promotion_Index_PromotionIndexModel_a_promotion[]}
   */
  this.a_promotion = undefined;

  /**
   * Image height in pixels. Please specify this value if you need image to be returned in specific size.
   * In case this value is not specified returned image will have default size.
   *
   * @get get
   * @type {number}
   */
  this.i_image_height = 0;

  /**
   * Image width in pixels. Please specify this value if you need image to be returned in specific size.
   * In case this value is not specified returned image will have default size.
   *
   * @get get
   * @type {number}
   */
  this.i_image_width = 0;

  /**
   * The program type ID, which will be one of the {@link RsProgramTypeSid} constants.
   *
   * `0` to not filter Purchase Options with type of the Purchase Option.
   *
   * @get get
   * @see RsProgramTypeSid
   * @type {number}
   */
  this.id_program_type = 0;

  /**
   * The location key.
   *
   * @get get
   * @type {string}
   */
  this.k_location = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Promotion_Index_PromotionIndexModel);

/**
 * @inheritDoc
 */
Wl_Promotion_Index_PromotionIndexModel.prototype.config=function()
{
  return {"a_field":{"a_promotion":{"get":{"result":true}},"i_image_height":{"get":{"get":true}},"i_image_width":{"get":{"get":true}},"id_program_type":{"get":{"get":true}},"k_location":{"get":{"get":true}}}};
};

/**
 * Gets a list of packages/passes/memberships.
 *
 * Returns introductory promotion offers available at the specified location, optionally filtered by program type,
 * including pricing, duration, visit limits, and access information for each item.
 *
 * @function
 * @name Wl_Promotion_Index_PromotionIndexModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
