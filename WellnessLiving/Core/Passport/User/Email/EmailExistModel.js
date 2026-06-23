/**
 * Checks if email address exists.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Passport_User_Email_EmailExistModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Determines whether the email address exists.
   *
   * @get result
   * @type {boolean}
   */
  this.is_exist = undefined;

  /**
   * The email address.
   *
   * @get get
   * @type {string}
   */
  this.text_email = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Passport_User_Email_EmailExistModel);

/**
 * @inheritDoc
 */
Core_Passport_User_Email_EmailExistModel.prototype.config=function()
{
  return {"a_field":{"is_exist":{"get":{"result":true}},"text_email":{"get":{"get":true}}}};
};

/**
 * Checks if email address exists.
 *
 * Used in registration and "forgot password" flows to give immediate feedback before the user submits
 * the full form. Returns `true` if a user account with the given email already exists, so the frontend
 * can prompt to sign in instead of registering.
 *
 * @function
 * @name Core_Passport_User_Email_EmailExistModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
