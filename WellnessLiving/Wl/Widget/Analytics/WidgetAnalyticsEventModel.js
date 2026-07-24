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
   * @property {number} id_purchase_item A list of purchase types.
   * @property {number} id_service A list of services.
   * @property {?string} k_enrollment_block Enrollment block key for an event item. Empty for all other item types.
   * @property {string} k_item Selected item key.
   */

  /**
   * @typedef {{}} Wl_Widget_Analytics_WidgetAnalyticsEventModel_a_payload
   * @property {Wl_Widget_Analytics_WidgetAnalyticsEventModel_a_payload_a_item} a_item Selected checkout items.
   * @property {number} id_checkout_type Widget analytics checkout types.
   * @property {string} k_location Location key.
   * @property {?string} k_skin Widget skin key. `null` if the Widget does not use a registered skin.
   * @property {string} m_total Checkout total in the location currency.
   * @property {string} s_funnel_step Last funnel step reached by the client. Empty if it is unavailable.
   * @property {string} s_session_id Widget checkout session identifier. Empty if it is unavailable. It is used only for diagnostics and continuation context, not for idempotency.
   * @property {string} s_utm_campaign UTM campaign value. Empty if it is unavailable.
   * @property {string} s_utm_medium UTM medium value. Empty if it is unavailable.
   * @property {string} s_utm_source UTM source value. Empty if it is unavailable.
   * @property {string} uid User key for whom checkout was abandoned.
   * @property {string} url_continue URL that restores the booking or purchase flow with the selected items.
   */

  /**
   * Event-specific payload.
   *
   * @post post
   * @type {Wl_Widget_Analytics_WidgetAnalyticsEventModel_a_payload}
   */
  this.a_payload = undefined;

  /**
   * Event name. Initially only {@link Wl_Widget_Analytics_WidgetAnalyticsEventSid} is supported.
   *
   * @post post
   * @see Wl_Widget_Analytics_WidgetAnalyticsEventSid
   * @type {number}
   */
  this.id_event_name = 0;

  /**
   * Event schema version. Currently only {@link Wl_Widget_Analytics_WidgetAnalyticsEventVersionSid} is supported.
   *
   * @post post
   * @see Wl_Widget_Analytics_WidgetAnalyticsEventVersionSid
   * @type {number}
   */
  this.id_event_version = 1;

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

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Widget_Analytics_WidgetAnalyticsEventModel);

/**
 * @inheritDoc
 */
Wl_Widget_Analytics_WidgetAnalyticsEventModel.prototype.config=function()
{
  return {"a_field":{"a_payload":{"post":{"post":true}},"id_event_name":{"post":{"post":true}},"id_event_version":{"post":{"post":true}},"k_business":{"post":{"post":true}},"s_event_id":{"post":{"post":true}}}};
};
