/**
 * Logs component load timing entries reported by browser.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Timing_ComponentTimingModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Core_Timing_ComponentTimingModel_a_timing_list
   * @property {*[][]} a_request Only for view entries. Timings of the requests made while the view was loading. Each item has the keys `i_duration_network`, `i_duration_server`, `i_duration_total`, `is_success`, `s_correlation` and `s_url` described below. Absent for request entries.
   * @property {number} i_duration_network Approximate network duration in milliseconds (`i_duration_total` minus `i_duration_server`). `null` if `i_duration_server` is unavailable.
   * @property {number} i_duration_render Only for view entries. Browser-side duration in milliseconds: from the moment view data is ready until the rendered content is painted. Absent for request entries.
   * @property {number} i_duration_server Server-side processing duration in milliseconds, taken from the `X-Response-Time` response header. `null` if the header was not present, for example on a network failure.
   * @property {number} i_duration_startup Only for view entries. Duration of the view startup in milliseconds, mostly waiting for models. Absent for request entries.
   * @property {number} i_duration_total Total client-perceived duration in milliseconds: of the request, or of the whole view load.
   * @property {boolean} is_success `true` if the request succeeded, `false` otherwise.
   * @property {string} s_component Component name, as set by the caller in `WlSdk_ModelAbstract::s_timing_component`.
   * @property {?string} s_correlation Correlation ID of the timed request, taken from the `X-Correlation-Id` response header.
   * @property {string} s_url URL of the timed request.
   */

  /**
   * List of timing entries. Each entry has next keys:
   *
   * JSON-encoded array may arrive as a `string`.
   *
   * @post post
   * @type {Core_Timing_ComponentTimingModel_a_timing_list}
   */
  this.a_timing_list = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Timing_ComponentTimingModel);

/**
 * @inheritDoc
 */
Core_Timing_ComponentTimingModel.prototype.config=function()
{
  return {"a_field":{"a_timing_list":{"post":{"post":true}}}};
};

/**
 * Logs component load timing entries reported by browser.
 *
 * Ignores requests from bots and monitoring user agents. Accepts up to `MAX_ENTRY`
 * entries per request, discarding any extra entries. Each entry is written to {@link Core_Log_CoreLog}
 * and reported to Cloud Watch as up to three `ComponentTime` data points (one per phase that has a value),
 * tagged with `Component` and `Phase` dimensions. Phases of a request entry are 'network', 'request' and
 * 'server'. Phases of a view entry are 'render', 'startup' and 'view'. A view entry is logged as one record
 * together with its requests, and the requests are also reported to Cloud Watch with their own phases.
 *
 * @function
 * @name Core_Timing_ComponentTimingModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
