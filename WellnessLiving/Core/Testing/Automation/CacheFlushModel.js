/**
 * Flushes all application caches.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Testing_Automation_CacheFlushModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Name of the action to perform within this endpoint.
   *
   * @get get
   * @type {string}
   */
  this.s_action = "";

  /**
   * Request authentication token.
   *
   * A hex-encoded `sha256` signature that proves the caller knows the shared secret.
   * See `checkAccess()` for the expected formula.
   *
   * The token comes from the URL for a request of the method `POST` as well: the body of such a request carries the
   * data of the endpoint, and {@link Core_Testing_Automation_StandFixtureApplyModel} needs the token signed the same way.
   *
   * @get get
   * @type {string}
   */
  this.s_token = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Testing_Automation_CacheFlushModel);

/**
 * @inheritDoc
 */
Core_Testing_Automation_CacheFlushModel.prototype.config=function()
{
  return {"a_field":{"s_action":{"get":{"get":true}},"s_token":{"get":{"get":true}}}};
};

/**
 * Flushes all application caches.
 *
 * Clears every cache layer used by the application via `CoreCache::flush_all()`. Intended for use by
 * automation tests that need a clean cache state before or between test runs.
 *
 * @function
 * @name Core_Testing_Automation_CacheFlushModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
