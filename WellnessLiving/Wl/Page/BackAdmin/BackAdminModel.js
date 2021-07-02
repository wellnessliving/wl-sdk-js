/**
 * Allows administrator to switch back to his administrator account when he signed in as a different user.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Page_BackAdmin_BackAdminModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * A link to redirect to an administrator account who is currently signed as a different user.
   *
   * @post result
   * @type {string}
   */
  this.url_redirect = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Page_BackAdmin_BackAdminModel);

/**
 * @inheritDoc
 */
Wl_Page_BackAdmin_BackAdminModel.prototype.config=function()
{
  return {"a_field": {"url_redirect": {"post": {"result": true}}}};
};