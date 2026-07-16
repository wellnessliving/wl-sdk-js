/**
 * Accepts a Widget analytics event.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Widget_Analytics_WidgetAnalyticsEventModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Widget_Analytics_WidgetAnalyticsEventModel_a_payload_a_item
   * @property {number} id_item A list of purchase types.
   * @property {string} k_item Selected item key.
   * @property {string} k_item_extra Event enrollment block key, or an empty string.
   */

  /**
   * @typedef {{}} Wl_Widget_Analytics_WidgetAnalyticsEventModel_a_payload
   * @property {Wl_Widget_Analytics_WidgetAnalyticsEventModel_a_payload_a_item} a_item Selected checkout items. Each entry has the following structure:
   * @property {number} id_checkout_type Widget analytics checkout types.
   * @property {string} k_location Location key.
   * @property {?string} k_skin Widget skin key, or `null` if the Widget does not use a registered skin.
   * @property {string} m_total Checkout total.
   * @property {string} s_funnel_step Last funnel step reached.
   * @property {string} s_session_id Widget checkout session identifier.
   * @property {string} s_utm_campaign UTM campaign value.
   * @property {string} s_utm_medium UTM medium value.
   * @property {string} s_utm_source UTM source value.
   * @property {string} uid User key.
   * @property {string} url_continue Continuation URL.
   */

  /**
   * Event-specific payload.
   *
   * @post post
   * @type {Wl_Widget_Analytics_WidgetAnalyticsEventModel_a_payload}
   */
  this.a_payload = undefined;

  /**
   * Event schema version.
   *
   * @post post
   * @type {number}
   */
  this.i_event_version = 1;

  /**
   * Whether the event was durably accepted for asynchronous processing.
   *
   * @post result
   * @type {boolean}
   */
  this.is_accepted = undefined;

  /**
   * Business key used for shard and datacenter routing.
   *
   * @post post
   * @type {string}
   */
  this.k_business = "";

  /**
   * Client-generated idempotency identifier.
   * A retry of the same logical event must use the same value.
   *
   * @post post
   * @type {string}
   */
  this.s_event_id = "";

  /**
   * Event name. Initially only `abandoned_checkout` is supported.
   *
   * @post post
   * @type {string}
   */
  this.s_event_name = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Widget_Analytics_WidgetAnalyticsEventModel);

/**
 * @inheritDoc
 */
Wl_Widget_Analytics_WidgetAnalyticsEventModel.prototype.config=function()
{
  return {"a_field":{"a_payload":{"post":{"post":true}},"i_event_version":{"post":{"post":true}},"is_accepted":{"post":{"result":true}},"k_business":{"post":{"post":true}},"s_event_id":{"post":{"post":true}},"s_event_name":{"post":{"post":true}}}};
};

/**
 * Accepts a Widget analytics event.
 *
 * Validates the event envelope and payload, stores the event, and schedules asynchronous processing.
 *
 * @function
 * @name Wl_Widget_Analytics_WidgetAnalyticsEventModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
