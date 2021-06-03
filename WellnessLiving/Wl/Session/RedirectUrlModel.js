/**
 * Encodes URL such that it can be used for redirect.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Session_RedirectUrlModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * IP address of remote user.
   *
   * @get get
   * @type {string}
   */
  this.ip = "";

  /**
   * URL to encode.
   *
   * @get get,result
   * @type {string}
   */
  this.url = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Session_RedirectUrlModel);

/**
 * @inheritDoc
 */
Wl_Session_RedirectUrlModel.prototype.config=function()
{
  return {"a_field": {"ip": {"get": {"get": true}},"url": {"get": {"get": true,"result": true}}}};
};