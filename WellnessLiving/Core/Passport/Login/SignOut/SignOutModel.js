/**
 * Signs user out.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Passport_Login_SignOut_SignOutModel()
{
  WlSdk_ModelAbstract.apply(this);

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Passport_Login_SignOut_SignOutModel);

/**
 * @inheritDoc
 */
Core_Passport_Login_SignOut_SignOutModel.prototype.config=function()
{
  return {"a_field":{}};
};

/**
 * Signs user out.
 *
 * Requires the user to be signed in, fires a before-logout event allowing listeners to intercept or
 * handle the logout, then clears the current session. Throws an error if the user is authenticated
 * via SAML SSO, as API-based logout is not supported in that case.
 *
 * @function
 * @name Core_Passport_Login_SignOut_SignOutModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
