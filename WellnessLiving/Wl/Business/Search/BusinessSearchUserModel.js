/**
 * Searches for businesses by name and email address and returns matching business keys.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_Search_BusinessSearchUserModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Array with business keys that contain given name in their title.
   *
   * @get result
   * @type {string[]}
   */
  this.a_result = undefined;

  /**
   * If `true`, the return only active customers, `false` - all business.
   *
   * @get get
   * @type {boolean}
   */
  this.is_customer = true;

  /**
   * User email to search business keys.
   *
   * @get get
   * @type {string}
   */
  this.text_mail = "";

  /**
   * Given business name to search by.
   *
   * @get get
   * @type {string}
   */
  this.text_name = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_Search_BusinessSearchUserModel);

/**
 * @inheritDoc
 */
Wl_Business_Search_BusinessSearchUserModel.prototype.config=function()
{
  return {"a_field":{"a_result":{"get":{"result":true}},"is_customer":{"get":{"get":true}},"text_mail":{"get":{"get":true}},"text_name":{"get":{"get":true}}}};
};

/**
 * Searches for businesses by name and email address and returns matching business keys.
 *
 * Used to locate a specific business for a given client, for example during a password reset or
 * membership lookup. Returns only businesses where the email belongs to a registered member, so
 * a match confirms the client actually has an account at that business.
 *
 * @function
 * @name Wl_Business_Search_BusinessSearchUserModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
