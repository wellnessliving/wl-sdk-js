/**
 * Finds a user by their email or phone within the specified business.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Login_Search_ConcertoModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Business to search user in.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Email to search.
   *
   * @get get
   * @type {string}
   */
  this.text_mail = "";

  /**
   * Phone to search.
   *
   * @get get
   * @type {string}
   */
  this.text_phone = "";

  /**
   * User's primary key.
   *
   * @get result
   * @type {string}
   */
  this.uid = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Login_Search_ConcertoModel);

/**
 * @inheritDoc
 */
Wl_Login_Search_ConcertoModel.prototype.config=function()
{
  return {"a_field":{"k_business":{"get":{"get":true}},"text_mail":{"get":{"get":true}},"text_phone":{"get":{"get":true}},"uid":{"get":{"result":true}}}};
};

/**
 * Finds a user by their email or phone within the specified business.
 *
 * Accepts exactly one of `text_mail` or `text_phone`, validates the value, and returns the user key if a matching
 * active member of the business is found. Returns an error if the user is not found or if multiple users share
 * the given phone number.
 *
 * @function
 * @name Wl_Login_Search_ConcertoModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
