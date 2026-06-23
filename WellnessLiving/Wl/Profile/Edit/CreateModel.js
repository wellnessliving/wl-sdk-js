/**
 * Creates a new user.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Profile_Edit_CreateModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business";

  /**
   * The key of the business where you're creating new user.
   *
   * @post post
   * @type {string}
   */
  this.k_business = "";

  /**
   * First name of the user.
   *
   * @post post
   * @type {string}
   */
  this.text_firstname = "";

  /**
   * Last name of the user.
   *
   * @post post
   * @type {string}
   */
  this.text_lastname = "";

  /**
   * Email of the user.
   *
   * @post post
   * @type {string}
   */
  this.text_mail = "";

  /**
   * The key of the user added.
   *
   * @post result
   * @type {string}
   */
  this.uid = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Profile_Edit_CreateModel);

/**
 * @inheritDoc
 */
Wl_Profile_Edit_CreateModel.prototype.config=function()
{
  return {"a_field":{"k_business":{"post":{"post":true}},"text_firstname":{"post":{"post":true}},"text_lastname":{"post":{"post":true}},"text_mail":{"post":{"post":true}},"uid":{"post":{"result":true}}}};
};

/**
 * @function
 * @name Wl_Profile_Edit_CreateModel.instanceGet
 * @param {string} k_business The key of the business where you're creating new user.
 * @returns {Wl_Profile_Edit_CreateModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Creates a new user.
 *
 * Creates a new user account with the given email, first name, and last name in the specified
 * business, registers the user as a member, and returns the `uid` of the created or existing
 * user.
 *
 * @function
 * @name Wl_Profile_Edit_CreateModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
