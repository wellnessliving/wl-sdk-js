/**
 * Entry for enter business after confirmation form staff member of franchisee.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_AuthorizeSupport_AuthorizeSupportEnterModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Location primary key in {@link \RsLocationSql} table.
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