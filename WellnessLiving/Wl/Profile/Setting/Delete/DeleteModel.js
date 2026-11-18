/**
 * Checks whether the users can be deleted from the businesses.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Profile_Setting_Delete_DeleteModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * The keys of the businesses to delete the account from.
   *
   * Send one business key to delete the account from that business only. Send all the businesses of the client,
   * except the franchisor businesses, to delete the account everywhere. A franchisor business is rejected here; it is
   * removed automatically when the account is deleted from all the other businesses.
   *
   * @get get
   * @post get
   * @type {string[]}
   */
  this.a_business = undefined;

  /**
   * The result of the deletion for every user.
   *
   * The key is a user key.  The value is:
   *
   * @post result
   * @type {{}}
   */
  this.a_delete_result = undefined;

  /**
   * The reasons why the account cannot be deleted, for every user.
   *
   * The key is a user key.  The value is:
   *
   * @get result
   * @post result
   * @type {{}}
   */
  this.a_error_info = undefined;

  /**
   * The keys of the users to delete.
   *
   * When empty, the signed-in user is used. Keys other than the signed-in user are accepted only when
   * {@link Wl_Profile_Setting_Delete_DeleteModel.is_backend} is `true`.
   *
   * @get get
   * @post get
   * @type {string[]}
   */
  this.a_uid = undefined;

  /**
   * The keys of the users from {@link Wl_Profile_Setting_Delete_DeleteModel.a_uid} that can be deleted.
   *
   * @get result
   * @post result
   * @type {string[]}
   */
  this.a_uid_valid = undefined;

  /**
   * `true` when a staff member deletes clients, `false` when the client deletes their own account.
   *
   * When `true`, the signed-in staff member must have the privilege to delete client profiles in every business of
   * {@link Wl_Profile_Setting_Delete_DeleteModel.a_business}.
   *
   * @get get
   * @post get
   * @type {boolean}
   */
  this.is_backend = false;

  /**
   * The application ID.
   *
   * When set, the Apple Sign-in tokens of the user are revoked when the account is deleted from all the businesses.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.text_application = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Profile_Setting_Delete_DeleteModel);

/**
 * @inheritDoc
 */
Wl_Profile_Setting_Delete_DeleteModel.prototype.config=function()
{
  return {"a_field":{"a_business":{"get":{"get":true},"post":{"get":true}},"a_delete_result":{"post":{"result":true}},"a_error_info":{"get":{"result":true},"post":{"result":true}},"a_uid":{"get":{"get":true},"post":{"get":true}},"a_uid_valid":{"get":{"result":true},"post":{"result":true}},"is_backend":{"get":{"get":true},"post":{"get":true}},"text_application":{"get":{"get":true},"post":{"get":true}}}};
};

/**
 * Checks whether the users can be deleted from the businesses.
 *
 * Checks the users of {@link Wl_Profile_Setting_Delete_DeleteModel.a_uid} in the businesses of {@link Wl_Profile_Setting_Delete_DeleteModel.a_business}, and returns
 * the users that can be deleted in {@link Wl_Profile_Setting_Delete_DeleteModel.a_uid_valid} and the reasons for every user in
 * {@link Wl_Profile_Setting_Delete_DeleteModel.a_error_info}. When a client checks their own account and it cannot be deleted, the request
 * fails with the reason in {@link Wl_Profile_Setting_Delete_DeleteModel.text_reason}.
 *
 * @function
 * @name Wl_Profile_Setting_Delete_DeleteModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Deletes the account of the users from the businesses.
 *
 * Makes the same checks as `get()`, then anonymizes the profiles of the users in the businesses
 * of {@link Wl_Profile_Setting_Delete_DeleteModel.a_business} and returns the result for every user in {@link Wl_Profile_Setting_Delete_DeleteModel.a_delete_result}.
 * A request of a client may require a captcha, as the description of the endpoint says.
 *
 * @function
 * @name Wl_Profile_Setting_Delete_DeleteModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
