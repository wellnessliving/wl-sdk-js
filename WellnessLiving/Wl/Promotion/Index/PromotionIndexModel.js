/**
 * An endpoint that gets a list of introductory promotion offers of a specified type available at a given location.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Promotion_Index_PromotionIndexModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Promotion_Index_PromotionIndexModel_a_promotion_a_access_a_component_a_image_a_visit_limit
   * @property {number} i_limit The quantity of sessions every <tt>i_period</tt>.
   * @property {number} i_period The duration of the time period. This depends on a key of <tt>a_visit_limit</tt> array.
   * @property {number} i_roll_over_cap The limit number of rollover sessions.
   * @property {number} i_roll_over_expire The duration of the time period after which rolled over session will expire.
   * @property {number} id_roll_over_expire The type of <tt>i_roll_over_expire</tt> {@link ADurationSid.DAY}, {@link ADurationSid.WEEK},
   * {@link ADurationSid.MONTH}, {@link ADurationSid.YEAR}.
   * @property {number} id_limit_cycle The type of the limit cycle {@link Wl_Promotion_Edit_Limit_Cycle_Sid}.
   * @property {boolean} is_reconcile_visit Determines whether to reconcile unpaid sessions on restrictions reset.
   * @property {boolean} is_roll_over_expire Determines if the rolled over session is expired.
   * @property {boolean} is_roll_over_renew Determines whether to rollover sessions upon auto-renew.
   * @property {boolean} is_rollup Determines Whether to rollover sessions.
   * @property {boolean} is_visit_conversion Determines whether to convert remaining visits.
   */
  /**
   * @typedef {{}} Wl_Promotion_Index_PromotionIndexModel_a_promotion_a_access_a_component_a_image
   * @property {string} i_height The height of the image.
   * @property {string} i_width The width of the image.
   * @property {string} url-thumbnail The link to the image.
   */
  /**
   * @typedef {{}} Wl_Promotion_Index_PromotionIndexModel_a_promotion_a_access_a_component
   * @property {number} id_purchase_item The type of the component. This can only be {@link RsPurchaseItemSid.ENROLLMENT},
   *  {@link RsPurchaseItemSid.PROMOTION} or {@link RsPurchaseItemSid.PRODUCT}.
   * @property {string} k_id The primary key of the component in the related table. This depends on the type of the component.
   * The key of the event for {@link RsPurchaseItemSid.ENROLLMENT}, the key of the Purchase Option for the
   * {@link RsPurchaseItemSid.PROMOTION}, the key of the product option for the {@link RsPurchaseItemSid.PRODUCT}.
   * Full information about events can be taken from the {@link Wl_Event_EventListModel}. Purchase Options from the {@link Wl_Promotion_Index_PromotionIndexModel}.
   * Full information about products are not available at this moment though API.
   * @property {number} i_quantity The quantity. If empty, it means the quantity is 1.
   * @property {string} text_title The name of the component.
   */
  /**
   * @typedef {{}} Wl_Promotion_Index_PromotionIndexModel_a_promotion_a_access
   * @property {{}[]} a_class A list of available classes. Each element has the key `k_class`, where the primary key of the class can be found.
   * @property {{}[]} a_event A list of available events. Each element has the key `k_class`, where the primary key of the event can be found.
   * @property {{}[]} a_resource A list of available assets. Each element has the key `k_resource`, where the primary key of the asset can be found.
   * @property {{}[]} a_service A list of available appointment types. Each element has the key `k_service`, where the primary key of the
   * appointment type can be found.
   * @property {boolean} is_class_all If `true`, any class in the business can be visited with this Purchase Option. If `false`, only selected classes can be visited.
   * Selected classes can be found in the list of available classes and events.
   * @property {boolean} is_event_all If `true`, if any event in the business can be visited with this Purchase Option. If `false`, if only selected events can be visited.
   * Selected events can be found in the list of available classes and events.
   */
  /**
   * @typedef {{}} Wl_Promotion_Index_PromotionIndexModel_a_promotion
   * @property {Wl_Promotion_Index_PromotionIndexModel_a_promotion_a_access} a_access Information about services that can be attended with this pass or membership.
   * <dl>
   *   <dt>array[] <tt>a_class</tt></dt>
   *   <dd>
   *     A list of available classes. Each element has the key `k_class`, where the primary key of the class can be found.
   *   </dd>
   *   <dt>array[] <tt>a_event</tt></dt>
   *   <dd>
   *     A list of available events. Each element has the key `k_class`, where the primary key of the event can be found.
   *   </dd>
   *   <dt>array[] <tt>a_resource</tt></dt>
   *   <dd>
   *     A list of available assets. Each element has the key `k_resource`, where the primary key of the asset can be found.
   *   </dd>
   *   <dt>array[] <tt>a_service</tt></dt>
   *   <dd>
   *     A list of available appointment types. Each element has the key `k_service`, where the primary key of the
   *     appointment type can be found.
   *   </dd>
   *   <dt>bool <tt>is_class_all</tt></dt>
   *   <dd>If `true`, any class in the business can be visited with this Purchase Option. If `false`, only selected classes can be visited.
   *     Selected classes can be found in the list of available classes and events.</dd>
   *   <dt>bool <tt>is_event_all</tt></dt>
   *   <dd>If `true`, if any event in the business can be visited with this Purchase Option. If `false`, if only selected events can be visited.
   *     Selected events can be found in the list of available classes and events.</dd>
   * </dl>
   * @property {Wl_Promotion_Index_PromotionIndexModel_a_promotion_a_access_a_component[]} a_component A list of components included in the Purchase Option if this Purchase Option is a package.
   * If it's not a package, the list will be always empty.
   * If it's a package, the list can still be empty if all its components were deactivated.
   * This means that this array can't be used to determine whether this is a package or not (check `id_program` or `id_program_type`
   * value instead).
   * There can be three types of components: events, Purchase Options, and products.
   * Some fields can be different depending on type of the component, but each element of the array includes:
   * <dl>
   *   <dt>int <tt>id_purchase_item</tt></dt>
   *   <dd>The type of the component. This can only be {@link RsPurchaseItemSid.ENROLLMENT},
   *      {@link RsPurchaseItemSid.PROMOTION} or {@link RsPurchaseItemSid.PRODUCT}.</dd>
   *   <dt>string <tt>k_id</tt></dt>
   *   <dd>
   *     The primary key of the component in the related table. This depends on the type of the component.
   *     The key of the event for {@link RsPurchaseItemSid.ENROLLMENT}, the key of the Purchase Option for the
   *     {@link RsPurchaseItemSid.PROMOTION}, the key of the product option for the {@link RsPurchaseItemSid.PRODUCT}.
   *     Full information about events can be taken from the {@link Wl_Event_EventListModel}. Purchase Options from the {@link Wl_Promotion_Index_PromotionIndexModel}.
   *     Full information about products are not available at this moment though API.
   *   </dd>
   *   <dt>int <tt>i_quantity</tt></dt>
   *   <dd>The quantity. If empty, it means the quantity is 1.</dd>
   *   <dt>string <tt>text_title</tt></dt>
   *   <dd>The name of the component.</dd>
   * </dl>
   * @property {Wl_Promotion_Index_PromotionIndexModel_a_promotion_a_access_a_component_a_image} a_image This will be an empty array if the Purchase Option doesn't have image.
   * Otherwise, this will display the following information about the Purchase Option image:
   * <dl>
   *   <dt>string <tt>i_height</tt></dt>
   *   <dd>The height of the image.</dd>
   *   <dt>string <tt>i_width</tt></dt>
   *   <dd>The width of the image.</dd>
   *   <dt>string <tt>url-thumbnail</tt></dt>
   *   <dd>The link to the image.</dd>
   * </dl>
   * @property {Wl_Promotion_Index_PromotionIndexModel_a_promotion_a_access_a_component_a_image_a_visit_limit} a_visit_limit Attendance restrictions, if available. If unavailable, this will be an empty array. Every element has a key, which is a type of
   * the time period {@link ADurationSid.DAY}, {@link ADurationSid.WEEK}, {@link ADurationSid.MONTH},
   * {@link ADurationSid.YEAR}.
   * The values are:
   * <dl>
   *   <dt>int <tt>i_limit</tt></dt>
   *   <dd>The quantity of sessions every <tt>i_period</tt>.</dd>
   *   <dt>int <tt>i_period</tt></dt>
   *   <dd>The duration of the time period. This depends on a key of <tt>a_visit_limit</tt> array.</dd>
   *   <dt>int <tt>i_roll_over_cap</tt></dt>
   *   <dd>The limit number of rollover sessions.</dd>
   *   <dt>int <tt>i_roll_over_expire</tt></dt>
   *   <dd>The duration of the time period after which rolled over session will expire.</dd>
   *   <dt>int <tt>id_roll_over_expire</tt></dt>
   *   <dd>
   *     The type of <tt>i_roll_over_expire</tt> {@link ADurationSid.DAY}, {@link ADurationSid.WEEK},
   *     {@link ADurationSid.MONTH}, {@link ADurationSid.YEAR}.
   *   </dd>
   *   <dt>int <tt>id_limit_cycle</tt></dt>
   *   <dd>The type of the limit cycle {@link Wl_Promotion_Edit_Limit_Cycle_Sid}.</dd>
   *   <dt>bool <tt>is_reconcile_visit</tt></dt>
   *   <dd>Determines whether to reconcile unpaid sessions on restrictions reset.</dd>
   *   <dt>bool <tt>is_roll_over_expire</tt></dt>
   *   <dd>Determines if the rolled over session is expired.</dd>
   *   <dt>bool <tt>is_roll_over_renew</tt></dt>
   *   <dd>Determines whether to rollover sessions upon auto-renew.</dd>
   *   <dt>bool <tt>is_rollup</tt></dt>
   *   <dd>Determines Whether to rollover sessions.</dd>
   *   <dt>bool <tt>is_visit_conversion</tt></dt>
   *   <dd>Determines whether to convert remaining visits.</dd>
   * </dl>
   * @property {string} dl_expire The local expiration date. This is the last day of the Purchase Option's active status.
   * This is used only for the 'Expires on a certain date' duration type. Otherwise, this should be ignored.
   * @property {number} i_duration The number of periods for the "Period" duration type.
   * For example, if the duration of the Purchase Option is 12 months, this field will be 12.
   * @property {number} i_limit The number of visits that the owner of the Purchase Option can use.
   * This will be `0` if the Purchase Option has unlimited visits.
   * @property {number} i_limit_duration The maximum number of minutes or hours depending on <tt>id_limit_duration</tt> that the current promotion can be used in.
   * @property {number} id_limit_duration The type of <tt>i_limit_duration</tt> {@link ADurationSid.MINUTE} or {@link ADurationSid.HOUR}.
   * @property {number} id_duration The type of periods for the duration type "Period".
   * For example, if the duration of the Purchase Option is 12 months, this field will be the ID of the month.
   * See all the possible options here: {@link ADurationSid}.
   * @property {number} id_duration_type The type of the duration. Ths can be "Without End", "Expires on a certain date", "Period".
   * See more information here: {@link RsDurationTypeSid}.
   * @property {number} id_program The type of the Purchase Option. The <tt>id_program</tt> relates to only one <tt>id_program_type</tt> and one
   * <tt>id_program_category</tt>.
   * See more information here: {@link RsProgramSid}.
   * @property {number} id_program_category The category of the program for promotions. The <tt>id_program_category</tt> relates to more than one
   * <tt>id_program</tt>.
   * See more information here: {@link RsProgramCategorySid}.
   * @property {number} id_program_type The ID of the promotion program type. The <tt>id_program_type</tt> relates to more than one <tt>id_program</tt>.
   * See more information here: {@link RsProgramTypeSid}.
   * @property {boolean} is_direct_buy_only If `true`, the pricing option can be sold only by direct link. This means it shouldn't be shown in the store or
   * explorer. Otherwise, this will be `false`.
   * @property {boolean} is_introductory If `true`, this promotion is for introductory clients. Otherwise, this will be `false`.
   * @property {boolean} is_online If `true` this promotion is available for online purchase. Otherwise, this will be `false`.
   * @property {string} k_promotion The promotion key.
   * @property {string} m_price The price.
   * @property {string} text_description The description.
   * @property {number} text_program THe localized promotion program name corresponding to the value of <tt>id_program</tt>.
   * @property {string} text_title The title.
   * @property {string} url_buy The direct URL to the promotion purchase page.
   */

  /**
   * A list of introductory promotion offers available at the location.
   * Every element is an array with the following keys:
   * <dl>
   *   <dt>
   *     array <var>a_access</var>
   *   </dt>
   *   <dd>
   *     Information about services that can be attended with this pass or membership.
   *     <dl>
   *       <dt>array[] <var>a_class</var></dt>
   *       <dd>
   *         A list of available classes. Each element has the key `k_class`, where the primary key of the class can be found.
   *       </dd>
   *       <dt>array[] <var>a_event</var></dt>
   *       <dd>
   *         A list of available events. Each element has the key `k_class`, where the primary key of the event can be found.
   *       </dd>
   *       <dt>array[] <var>a_resource</var></dt>
   *       <dd>
   *         A list of available assets. Each element has the key `k_resource`, where the primary key of the asset can be found.
   *       </dd>
   *       <dt>array[] <var>a_service</var></dt>
   *       <dd>
   *         A list of available appointment types. Each element has the key `k_service`, where the primary key of the
   *         appointment type can be found.
   *       </dd>
   *       <dt>bool <var>is_class_all</var></dt>
   *       <dd>If `true`, any class in the business can be visited with this Purchase Option. If `false`, only selected classes can be visited.
   *         Selected classes can be found in the list of available classes and events.</dd>
   *       <dt>bool <var>is_event_all</var></dt>
   *       <dd>If `true`, if any event in the business can be visited with this Purchase Option. If `false`, if only selected events can be visited.
   *         Selected events can be found in the list of available classes and events.</dd>
   *     </dl>
   *   </dd>
   *   <dt>
   *     array[] <var>a_component</var>
   *   </dt>
   *   <dd>
   *     A list of components included in the Purchase Option if this Purchase Option is a package.
   *     If it's not a package, the list will be always empty.
   *     If it's a package, the list can still be empty if all its components were deactivated.
   *     This means that this array can't be used to determine whether this is a package or not (check `id_program` or `id_program_type`
   *     value instead).
   *     There can be three types of components: events, Purchase Options, and products.
   *     Some fields can be different depending on type of the component, but each element of the array includes:
   *     <dl>
   *       <dt>int <var>id_purchase_item</var></dt>
   *       <dd>The type of the component. This can only be {@link RsPurchaseItemSid.ENROLLMENT},
   *          {@link RsPurchaseItemSid.PROMOTION} or {@link RsPurchaseItemSid.PRODUCT}.</dd>
   *       <dt>string <var>k_id</var></dt>
   *       <dd>
   *         The primary key of the component in the related table. This depends on the type of the component.
   *         The key of the event for {@link RsPurchaseItemSid.ENROLLMENT}, the key of the Purchase Option for the
   *         {@link RsPurchaseItemSid.PROMOTION}, the key of the product option for the {@link RsPurchaseItemSid.PRODUCT}.
   *         Full information about events can be taken from the {@link Wl_Event_EventListModel}. Purchase Options from the {@link Wl_Promotion_Index_PromotionIndexModel}.
   *         Full information about products are not available at this moment though API.
   *       </dd>
   *       <dt>int <var>i_quantity</var></dt>
   *       <dd>The quantity. If empty, it means the quantity is 1.</dd>
   *       <dt>string <var>text_title</var></dt>
   *       <dd>The name of the component.</dd>
   *     </dl>
   *   </dd>
   *   <dt>
   *     array <var>a_image</var>
   *   </dt>
   *   <dd>
   *     This will be an empty array if the Purchase Option doesn't have image.
   *     Otherwise, this will display the following information about the Purchase Option image:
   *     <dl>
   *       <dt>string <var>i_height</var></dt>
   *       <dd>The height of the image.</dd>
   *       <dt>string <var>i_width</var></dt>
   *       <dd>The width of the image.</dd>
   *       <dt>string <var>url-thumbnail</var></dt>
   *       <dd>The link to the image.</dd>
   *     </dl>
   *   </dd>
   *   <dt>
   *     array <var>a_visit_limit</var>
   *   </dt>
   *   <dd>
   *     Attendance restrictions, if available. If unavailable, this will be an empty array. Every element has a key, which is a type of
   *     the time period {@link ADurationSid.DAY}, {@link ADurationSid.WEEK}, {@link ADurationSid.MONTH},
   *     {@link ADurationSid.YEAR}.
   *     The values are:
   *     <dl>
   *       <dt>int <var>i_limit</var></dt>
   *       <dd>The quantity of sessions every <var>i_period</var>.</dd>
   *       <dt>int <var>i_period</var></dt>
   *       <dd>The duration of the time period. This depends on a key of <var>a_visit_limit</var> array.</dd>
   *       <dt>int <var>i_roll_over_cap</var></dt>
   *       <dd>The limit number of rollover sessions.</dd>
   *       <dt>int <var>i_roll_over_expire</var></dt>
   *       <dd>The duration of the time period after which rolled over session will expire.</dd>
   *       <dt>int <var>id_roll_over_expire</var></dt>
   *       <dd>
   *         The type of <var>i_roll_over_expire</var> {@link ADurationSid.DAY}, {@link ADurationSid.WEEK},
   *         {@link ADurationSid.MONTH}, {@link ADurationSid.YEAR}.
   *       </dd>
   *       <dt>int <var>id_limit_cycle</var></dt>
   *       <dd>The type of the limit cycle {@link Wl_Promotion_Edit_Limit_Cycle_Sid}.</dd>
   *       <dt>bool <var>is_reconcile_visit</var></dt>
   *       <dd>Determines whether to reconcile unpaid sessions on restrictions reset.</dd>
   *       <dt>bool <var>is_roll_over_expire</var></dt>
   *       <dd>Determines if the rolled over session is expired.</dd>
   *       <dt>bool <var>is_roll_over_renew</var></dt>
   *       <dd>Determines whether to rollover sessions upon auto-renew.</dd>
   *       <dt>bool <var>is_rollup</var></dt>
   *       <dd>Determines Whether to rollover sessions.</dd>
   *       <dt>bool <var>is_visit_conversion</var></dt>
   *       <dd>Determines whether to convert remaining visits.</dd>
   *     </dl>
   *   </dd>
   *   <dt>
   *     string <var>dl_expire</var>
   *   </dt>
   *   <dd>
   *     The local expiration date. This is the last day of the Purchase Option's active status.
   *     This is used only for the 'Expires on a certain date' duration type. Otherwise, this should be ignored.
   *   </dd>
   *   <dt>
   *     int <var>i_duration</var>
   *   </dt>
   *   <dd>
   *     The number of periods for the "Period" duration type.
   *     For example, if the duration of the Purchase Option is 12 months, this field will be 12.
   *   </dd>
   *   <dt>
   *     int <var>i_limit</var>
   *   </dt>
   *   <dd>
   *     The number of visits that the owner of the Purchase Option can use.
   *     This will be `0` if the Purchase Option has unlimited visits.
   *   </dd>
   *   <dt>
   *     int <var>i_limit_duration</var>
   *   </dt>
   *   <dd>
   *     The maximum number of minutes or hours depending on <var>id_limit_duration</var> that the current promotion can be used in.
   *   </dd>
   *   <dt>
   *     int <var>id_limit_duration</var>
   *   </dt>
   *   <dd>
   *     The type of <var>i_limit_duration</var> {@link ADurationSid.MINUTE} or {@link ADurationSid.HOUR}.
   *   </dd>
   *   <dt>
   *     int <var>id_duration</var>
   *   </dt>
   *   <dd>
   *     The type of periods for the duration type "Period".
   *     For example, if the duration of the Purchase Option is 12 months, this field will be the ID of the month.
   *     See all the possible options here: {@link ADurationSid}.
   *   </dd>
   *   <dt>
   *     int <var>id_duration_type</var>
   *   </dt>
   *   <dd>
   *     The type of the duration. Ths can be "Without End", "Expires on a certain date", "Period".
   *     See more information here: {@link RsDurationTypeSid}.
   *   </dd>
   *   <dt>
   *     int <var>id_program</var>
   *   </dt>
   *   <dd>
   *     The type of the Purchase Option. The <var>id_program</var> relates to only one <var>id_program_type</var> and one
   *     <var>id_program_category</var>.
   *     See more information here: {@link RsProgramSid}.
   *   </dd>
   *   <dt>
   *     int <var>id_program_category</var>
   *   </dt>
   *   <dd>
   *     The category of the program for promotions. The <var>id_program_category</var> relates to more than one
   *     <var>id_program</var>.
   *     See more information here: {@link RsProgramCategorySid}.
   *   </dd>
   *   <dt>
   *     int <var>id_program_type</var>
   *   </dt>
   *   <dd>
   *     The ID of the promotion program type. The <var>id_program_type</var> relates to more than one <var>id_program</var>.
   *     See more information here: {@link RsProgramTypeSid}.
   *   </dd>
   *   <dt>
   *     bool <var>is_direct_buy_only</var>
   *   </dt>
   *   <dd>
   *     If `true`, the pricing option can be sold only by direct link. This means it shouldn't be shown in the store or
   *     explorer. Otherwise, this will be `false`.
   *   </dd>
   *   <dt>
   *     bool <var>is_introductory</var>
   *   </dt>
   *   <dd>
   *     If `true`, this promotion is for introductory clients. Otherwise, this will be `false`.
   *   </dd>
   *   <dt>
   *     bool <var>is_online</var>
   *   </dt>
   *   <dd>
   *     If `true` this promotion is available for online purchase. Otherwise, this will be `false`.
   *   </dd>
   *   <dt>
   *     string <var>k_promotion</var>
   *   </dt>
   *   <dd>
   *     The promotion key.
   *   </dd>
   *   <dt>
   *     string <var>m_price</var>
   *   </dt>
   *   <dd>
   *     The price.
   *   </dd>
   *   <dt>
   *     string <var>text_description</var>
   *   </dt>
   *   <dd>
   *     The description.
   *   </dd>
   *   <dt>
   *     int <var>text_program</var>
   *   </dt>
   *   <dd>
   *     THe localized promotion program name corresponding to the value of <var>id_program</var>.
   *   </dd>
   *   <dt>
   *     string <var>text_title</var>
   *   </dt>
   *   <dd>
   *     The title.
   *   </dd>
   *   <dt>
   *     string <var>url_buy</var>
   *   </dt>
   *   <dd>
   *     The direct URL to the promotion purchase page.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Promotion_Index_PromotionIndexModel_a_promotion[]}
   */
  this.a_promotion = undefined;

  /**
   * The program type ID, which will be one of the {@link RsProgramTypeSid} constants.
   *
   * `0` to not filter Purchase Options with type of the Purchase Option.
   *
   * @get get
   * @type {number}
   */
  this.id_program_type = 0;

  /**
   * The location key.
   *
   * @get get
   * @type {string}
   */
  this.k_location = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Promotion_Index_PromotionIndexModel);

/**
 * @inheritDoc
 */
Wl_Promotion_Index_PromotionIndexModel.prototype.config=function()
{
  return {"a_field": {"a_promotion": {"get": {"result": true}},"id_program_type": {"get": {"get": true}},"k_location": {"get": {"get": true}}}};
};