/**
 * An endpoint that retrieves user statuses in the business.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Integration_Saml_SamlUserDeactivationModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * A list of SAML identifiers.
   *
   * @post post
   * @type {string[]}
   */
  this.a_id = undefined;

  /**
   * The key of the SAML identifier.
   *
   * This value is `true` if an active user is found in the business, `false` if otherwise.
   *
   * @post result
   * @type {boolean[]}
   */
  this.a_result = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Integration_Saml_SamlUserDeactivationModel);

/**
 * @inheritDoc
 */
Wl_Integration_Saml_SamlUserDeactivationModel.prototype.config=function()
{
  return {"a_field": {"a_id": {"post": {"post": true}},"a_result": {"post": {"result": true}}}};
};