/**
 * Manages business connection with {@link https://zoom.us/}.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Integration_Zoom_ConnectionModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Event payload information.
   *
   * @post post
   * @type {{}}
   */
  this.payload = undefined;

  /**
   * Business key.
   *
   * @delete get
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Code to returned by <tt>Zoom</tt> service after successful authorisation.
   *
   * Required to retrieve access token.
   *
   * @get get
   * @type {string}
   */
  this.code = undefined;

  /**
   * Csrf code.
   *
   * @get get
   * @type {string}
   */
  this.csrf = undefined;

  /**
   * Event type.
   *
   * @post post
   * @type {string}
   */
  this.event = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Integration_Zoom_ConnectionModel);

/**
 * @inheritDoc
 */
Wl_Integration_Zoom_ConnectionModel.prototype.config=function()
{
  return {"a_field": {"payload": {"post": {"post": true}},"k_business": {"delete": {"get": true},"get": {"get": true},"post": {"get": true}},"code": {"get": {"get": true}},"csrf": {"get": {"get": true}},"event": {"post": {"post": true}}}};
};