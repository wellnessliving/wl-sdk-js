/**
 * Api for manage credential fro application.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Request_Api_Application_Credential_CredentialModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * CID of the credential.
   * Accepted values: <ul>
   *   <li>
   *     <tt>972</tt> - Google credential.
   *     Use {@link GoogleCredentialData} object for send credential.
   *   </li>
   *   <li>
   *     <tt>973</tt> - Facebook credential.
   *     Use {@link FacebookCredentialData} object for send credential.
   *   </li>
   * </ul>
   *
   * @delete get
   * @get get
   * @put get
   * @type {number}
   */
  this.cid_credential = undefined;

  /**
   * Array with credential.
   *
   * @get result
   * @put post
   * @type {{}}
   */
  this.json_credential = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Request_Api_Application_Credential_CredentialModel);

/**
 * @inheritDoc
 */
Core_Request_Api_Application_Credential_CredentialModel.prototype.config=function()
{
  return {"a_field": {"cid_credential": {"delete": {"get": true},"get": {"get": true},"put": {"get": true}},"json_credential": {"get": {"result": true},"put": {"post": true}}}};
};