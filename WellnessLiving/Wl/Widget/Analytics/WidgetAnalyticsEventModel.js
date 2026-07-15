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
   * Event-specific payload.
   *
   * @post post
   * @type {*[]}
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
 * @function
 * @name Wl_Widget_Analytics_WidgetAnalyticsEventModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
