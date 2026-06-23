/**
 * Deletes the specified credential for the application.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Request_Api_Application_Credential_CredentialModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * The CID of the credential.
   *
   * @delete get
   * @get get
   * @put get
   * @type {number}
   */
  this.cid_credential = 0;

  /**
   * An array with the credential.
   *
   * @get result
   * @put post
   * @type {string}
   */
  this.json_credential = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Request_Api_Application_Credential_CredentialModel);

/**
 * @inheritDoc
 */
Core_Request_Api_Application_Credential_CredentialModel.prototype.config=function()
{
  return {"a_field":{"cid_credential":{"delete":{"get":true},"get":{"get":true},"put":{"get":true}},"json_credential":{"get":{"result":true},"put":{"post":true}}}};
};

/**
 * Deletes the specified credential for the application.
 *
 * Accepts a credential CID identifying the credential type (such as Google or Facebook), resolves
 * the corresponding credential for the current application, and removes it from the database.
 *
 * @function
 * @name Core_Request_Api_Application_Credential_CredentialModel.delete
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.delete()
 */

/**
 * Returns the credential data for the application.
 *
 * Accepts a credential CID identifying the credential type, loads the credential stored for the current
 * application, and returns it as a JSON-encoded object containing only public fields.
 *
 * @function
 * @name Core_Request_Api_Application_Credential_CredentialModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Saves the credential for the application.
 *
 * Accepts a credential CID and a JSON-encoded object with credential fields, validates the data,
 * and stores or replaces the credential for the current application.
 *
 * @function
 * @name Core_Request_Api_Application_Credential_CredentialModel.put
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.put()
 */
