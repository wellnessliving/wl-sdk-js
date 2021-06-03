/**
 * Allows to restart a thread or all threads at worker server or at all worker servers.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Async_Service_RestartModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * IP address of a queue server which worker threads should be restarted.
   *
   * An empty string to restart worker threads at all queue servers.
   *
   * @post post
   * @type {string}
   */
  this.ip_queue = undefined;

  /**
   * IP address of a worker at which all threads should be restarted.
   *
   * This variable is required if {@link \Core\Async\Service\RestartApi::$is_all} is <tt>false</tt> and
   * {@link \Core\Async\Service\RestartApi::$s_thread} is not specified, otherwise this variable is not allowed.
   *
   * @post post
   * @type {string}
   */
  this.ip_worker = undefined;

  /**
   * Whether all threads at all worker servers should be restarted.
   *
   * This variable should be set to `true` if neither {@link \Core\Async\Service\RestartApi::$ip_worker} nor
   * {@link \Core\Async\Service\RestartApi::$s_thread} specified, otherwise this variable should be set to `false`.
   *
   * @post post
   * @type {boolean}
   */
  this.is_all = undefined;

  /**
   * Name of a provider which thread(s) should be restarted.
   *
   * @post get
   * @type {string}
   */
  this.s_provider = undefined;

  /**
   * ID of a thread to restart.
   *
   * This variable is required if {@link \Core\Async\Service\RestartApi::$is_all} is <tt>false</tt> and
   * {@link \Core\Async\Service\RestartApi::$ip_worker} is not specified, otherwise this variable is not allowed.
   *
   * @post post
   * @type {string}
   */
  this.s_thread = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Async_Service_RestartModel);

/**
 * @inheritDoc
 */
Core_Async_Service_RestartModel.prototype.config=function()
{
  return {"a_field": {"ip_queue": {"post": {"post": true}},"ip_worker": {"post": {"post": true}},"is_all": {"post": {"post": true}},"s_provider": {"post": {"get": true}},"s_thread": {"post": {"post": true}}}};
};