/**
 * An endpoint that allows a franchisor or staff member to enter a franchisee business location.
 *
 * Access to the franchisee is granted after confirmation.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_AuthorizeSupport_AuthorizeSupportEnterModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * The location key.
   *
   * @get get
   * @type {string}
   */
  this.k_location = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_AuthorizeSupport_AuthorizeSupportEnterModel);

/**
 * @inheritDoc
 */
Wl_Business_AuthorizeSupport_AuthorizeSupportEnterModel.prototype.config=function()
{
  return {"a_field": {"k_location": {"get": {"get": true}}}};
};