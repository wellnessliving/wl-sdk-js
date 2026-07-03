/**
 * Checks if user with specified email already registered for specified business.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Lead_LeadCheckModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * `true` if user with specified email is lead of a specified business, `false` - otherwise.
   *
   * @post result
   * @type {boolean}
   */
  this.is_lead = undefined;

  /**
   * `true` if user with specified email is a member of a specified business, `false` - otherwise.
   *
   * @post result
   * @type {boolean}
   */
  this.is_member = undefined;

  /**
   * The key of business to which the new user must be captured.
   *
   * @post post
   * @type {string}
   */
  this.k_business = "";

  /**
   * User email.
   *
   * @post post
   * @type {string}
   */
  this.s_mail = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Lead_LeadCheckModel);

/**
 * @inheritDoc
 */
Wl_Lead_LeadCheckModel.prototype.config=function()
{
  return {"a_field":{"is_lead":{"post":{"result":true}},"is_member":{"post":{"result":true}},"k_business":{"post":{"post":true}},"s_mail":{"post":{"post":true}}}};
};

/**
 * Checks if user with specified email already registered for specified business.
 *
 * Looks up an existing account by the given email address. If no account with that email exists,
 * the user is reported as neither a member nor a lead. If an account exists, the response reports
 * whether that user is already a member of the specified business, and whether that user is already
 * registered as a lead for the specified business.
 *
 * @function
 * @name Wl_Lead_LeadCheckModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
