/**
 * An endpoint that gets promotions for the specified business and promotion keys.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Promotion_PromotionModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Promotion_PromotionModel_a_promotion_a_access_a_image
   * @property {string} i_height The height of the image.
   * @property {string} i_width The width of the image.
   * @property {string} url-thumbnail The link to the image.
   */
  /**
   * @typedef {{}} Wl_Promotion_PromotionModel_a_promotion_a_access
   * @property {{}[]} a_class A list of available classes. Each element is primary key from {@link \RsClassSql} table.
   * @property {{}[]} a_event A list of available events. Each element is primary key from {@link \RsClassSql} table.
   * @property {{}[]} a_resource A list of available assets. Each element is primary key from {@link \RsResourceSql} table.
   * @property {{}[]} a_service A list of available appointment types. Each element is primary key from {@link \RsServiceSql} table.
   * @property {boolean} is_class_all This will be `true` if any class in the business can be visited with this Purchase Option. Otherwise, this
   * will be `false` if only selected classes can be visited with this Purchase Option. Selected classes can be found
   * in the list of available classes and events.
   * @property {boolean} is_event_all This will be `true` if any event in the business can be visited with this Purchase Option. Otherwise, this
   * will be `false` if only selected events can be visited with this Purchase Option. Selected events can be found
   * in the list of available classes and events.
   */
  /**
   * @typedef {{}} Wl_Promotion_PromotionModel_a_promotion
   * @property {Wl_Promotion_PromotionModel_a_promotion_a_access} a_access Information about services that can be attended with this pass or membership.
   * <dl>
   *   <dt>array[] <tt>a_class</tt></dt>
   *   <dd>A list of available classes. Each element is primary key from {@link \RsClassSql} table.</dd>
   *   <dt>array[] <tt>a_event</tt></dt>
   *   <dd>A list of available events. Each element is primary key from {@link \RsClassSql} table.</dd>
   *   <dt>array[] <tt>a_resource</tt></dt>
   *   <dd>A list of available assets. Each element is primary key from {@link \RsResourceSql} table.</dd>
   *   <dt>array[] <tt>a_service</tt></dt>
   *   <dd>A list of available appointment types. Each element is primary key from {@link \RsServiceSql} table.</dd>
   *   <dt>bool <tt>is_class_all</tt></dt>
   *   <dd>This will be `true` if any class in the business can be visited with this Purchase Option. Otherwise, this
   *     will be `false` if only selected classes can be visited with this Purchase Option. Selected classes can be found
   *     in the list of available classes and events.</dd>
   *   <dt>bool <tt>is_event_all</tt></dt>
   *   <dd>This will be `true` if any event in the business can be visited with this Purchase Option. Otherwise, this
   *     will be `false` if only selected events can be visited with this Purchase Option. Selected events can be found
   *     in the list of available classes and events.</dd>
   * </dl>
   * @property {Wl_Promotion_PromotionModel_a_promotion_a_access_a_image} a_image Information about Purchase Option image. This will be an empty array if the Purchase Option doesn't have an image.
   * <dl>
   *   <dt>string <tt>i_height</tt></dt>
   *   <dd>The height of the image.</dd>
   *   <dt>string <tt>i_width</tt></dt>
   *   <dd>The width of the image.</dd>
   *   <dt>string <tt>url-thumbnail</tt></dt>
   *   <dd>The link to the image.</dd>
   * </dl>
   * @property {string} dl_expire The local expiration date. This is the last day when the Purchase Option is active.
   * This is used only when the 'Expires on a certain date' duration type is set.
   * @property {number} i_duration The number of periods for the 'Period' duration type.
   * For example, if the duration of the Purchase Option is 12 months, this field will be 12.
   * @property {number} i_limit The number of visits that the owner can use for the Purchase Option.
   * This will be `0` if the Purchase Option allows for unlimited visits.
   * @property {number} id_duration The type of period for the 'Period' duration type.
   * For example, if the duration of the Purchase Option is 12 months, this field will display the ID of the month.
   * For all possible options, see {@link ADurationSid}.
   * @property {number} id_duration_type The duration type. Possible duration types can be 'Without End', 'Expires on a certain date', 'Period'.
   * For more information, see {@link RsDurationTypeSid}.
   * @property {number} id_program The Purchase Option type.
   * For more information, see {@link RsProgramSid}.
   * @property {boolean} is_introductory If `true`, this promotion is for introductory clients. Otherwise, this will be `false`.
   * @property {boolean} is_online If `true`, this promotion is available for online purchase. Otherwise, this will be `false`.
   * @property {string} k_promotion The key of the promotion.
   * @property {string} m_price The price.
   * @property {string} text_description The description of the Purchase Option.
   * @property {string} text_title The title of the Purchase Option.
   * @property {string} url_buy The direct URL to the promotion purchase page.
   */

  /**
   * Promotion information.
   * <dl>
   *   <dt>
   *     array <var>a_access</var>
   *   </dt>
   *   <dd>
   *     Information about services that can be attended with this pass or membership.
   *     <dl>
   *       <dt>array[] <var>a_class</var></dt>
   *       <dd>A list of available classes. Each element is primary key from {@link \RsClassSql} table.</dd>
   *       <dt>array[] <var>a_event</var></dt>
   *       <dd>A list of available events. Each element is primary key from {@link \RsClassSql} table.</dd>
   *       <dt>array[] <var>a_resource</var></dt>
   *       <dd>A list of available assets. Each element is primary key from {@link \RsResourceSql} table.</dd>
   *       <dt>array[] <var>a_service</var></dt>
   *       <dd>A list of available appointment types. Each element is primary key from {@link \RsServiceSql} table.</dd>
   *       <dt>bool <var>is_class_all</var></dt>
   *       <dd>This will be `true` if any class in the business can be visited with this Purchase Option. Otherwise, this
   *         will be `false` if only selected classes can be visited with this Purchase Option. Selected classes can be found
   *         in the list of available classes and events.</dd>
   *       <dt>bool <var>is_event_all</var></dt>
   *       <dd>This will be `true` if any event in the business can be visited with this Purchase Option. Otherwise, this
   *         will be `false` if only selected events can be visited with this Purchase Option. Selected events can be found
   *         in the list of available classes and events.</dd>
   *     </dl>
   *   </dd>
   *   <dt>
   *     array <var>a_image</var>
   *   </dt>
   *   <dd>
   *     Information about Purchase Option image. This will be an empty array if the Purchase Option doesn't have an image.
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
   *     string <var>dl_expire</var>
   *   </dt>
   *   <dd>
   *     The local expiration date. This is the last day when the Purchase Option is active.
   *     This is used only when the 'Expires on a certain date' duration type is set.
   *   </dd>
   *   <dt>
   *     int <var>i_duration</var>
   *   </dt>
   *   <dd>
   *     The number of periods for the 'Period' duration type.
   *     For example, if the duration of the Purchase Option is 12 months, this field will be 12.
   *   </dd>
   *   <dt>
   *     int <var>i_limit</var>
   *   </dt>
   *   <dd>
   *     The number of visits that the owner can use for the Purchase Option.
   *     This will be `0` if the Purchase Option allows for unlimited visits.
   *   </dd>
   *   <dt>
   *     int <var>id_duration</var>
   *   </dt>
   *   <dd>
   *     The type of period for the 'Period' duration type.
   *     For example, if the duration of the Purchase Option is 12 months, this field will display the ID of the month.
   *     For all possible options, see {@link ADurationSid}.
   *   </dd>
   *   <dt>
   *     int <var>id_duration_type</var>
   *   </dt>
   *   <dd>
   *     The duration type. Possible duration types can be 'Without End', 'Expires on a certain date', 'Period'.
   *     For more information, see {@link RsDurationTypeSid}.
   *   </dd>
   *   <dt>
   *     int <var>id_program</var>
   *   </dt>
   *   <dd>
   *     The Purchase Option type.
   *     For more information, see {@link RsProgramSid}.
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
   *     If `true`, this promotion is available for online purchase. Otherwise, this will be `false`.
   *   </dd>
   *   <dt>
   *     string <var>k_promotion</var>
   *   </dt>
   *   <dd>
   *     The key of the promotion.
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
   *     The description of the Purchase Option.
   *   </dd>
   *   <dt>
   *     string <var>text_title</var>
   *   </dt>
   *   <dd>
   *     The title of the Purchase Option.
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
   * @type {Wl_Promotion_PromotionModel_a_promotion[]}
   */
  this.a_promotion = undefined;

  /**
   * The key of the business.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * The key of the promotion.
   *
   * @get get
   * @type {string}
   */
  this.k_promotion = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Promotion_PromotionModel);

/**
 * @inheritDoc
 */
Wl_Promotion_PromotionModel.prototype.config=function()
{
  return {"a_field": {"a_promotion": {"get": {"result": true}},"k_business": {"get": {"get": true}},"k_promotion": {"get": {"get": true}}}};
};