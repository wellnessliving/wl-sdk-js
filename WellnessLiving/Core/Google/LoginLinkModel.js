/**
 * Returns a link for a user to sign in with Google+.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Google_LoginLinkModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * A link for a user to sign in with Google+.
   *
   * @get result
   * @type {string}
   */
  this.url_redirect = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Google_LoginLinkModel);

/**
 * @inheritDoc
 */
Core_Google_LoginLinkModel.prototype.config=function()
{
  return {"a_field": {"url_redirect": {"get": {"result": true}}}};
};