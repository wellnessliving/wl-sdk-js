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
   * @property {?string} dtu_session Selected booking session datetime. `null` if not available.
   * @property {number} i_order Zero-based item order in the checkout list.
   * @property {number} i_quantity Quantity of selected items.
   * @property {number} id_purchase_item Purchase item ID. See {@link RsPurchaseItemSid}.
   * @property {number} id_service Service ID. See {@link Wl_Service_ServiceSid}.
   * @property {?string} k_class_period Selected class period key for classes/events booking items. `null` if class period is not specified or not applicable.
   * @property {string} k_item Selected item key.
   * @property {?string} m_price Checkout item price in the location currency. `null` if not available.
   * @property {string} text_service_name Item name snapshot from checkout.
   * @property {string} uid_staff Selected staff user key. Empty if staff was not selected.
   */

  /**
   * @typedef {{}} Wl_Widget_Analytics_WidgetAnalyticsEventModel_a_payload
   * @property {Wl_Widget_Analytics_WidgetAnalyticsEventModel_a_payload_a_item} a_item Selected checkout items.
   * @property {number} id_checkout_type Checkout type. See {@link Wl_Widget_Analytics_WidgetAnalyticsCheckoutTypeSid}.
   * @property {string} k_location Location key.
   * @property {string} m_total Checkout total in the location currency.
   * @property {string} s_funnel_step Last funnel step reached by the client. Empty if it is unavailable.
   * @property {string} s_session_id Widget checkout session identifier. Used for diagnostics and continuation context, not for idempotency.
   * @property {string} s_utm_campaign UTM campaign value. Empty if it is unavailable.
   * @property {string} s_utm_medium UTM medium value. Empty if it is unavailable.
   * @property {string} s_utm_source UTM source value. Empty if it is unavailable.
   * @property {string} uid User key for whom checkout was abandoned.
   */

  /**
   * Event-specific payload.
   *
   * @post post
   * @type {Wl_Widget_Analytics_WidgetAnalyticsEventModel_a_payload}
   */
  this.a_payload = undefined;

  /**
   * Event name.
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

/**
 * Accepts a Widget analytics event.
 *
 * Validates the event envelope and payload. An `abandoned_checkout` event is stored and scheduled for
 * asynchronous processing. A `purchase` event marks any pending abandoned checkout event for the same client
 * and checkout type as checkout-complete, so the "Abandoned checkout" trigger stops enrolling the client for it.
 *
 * @function
 * @name Wl_Widget_Analytics_WidgetAnalyticsEventModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
