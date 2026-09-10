/**
 * Marks all messages in the dialog in the given business with a given user as read.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_Sms_Unread_SmsUnreadModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Key of the business.
   *
   * @delete post
   * @post post
   * @type {string}
   */
  this.k_business = "";

  /**
   * User key with whom you want to delete unread messages.
   *
   * @delete post
   * @post post
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_Sms_Unread_SmsUnreadModel);

/**
 * @inheritDoc
 */
Wl_Business_Sms_Unread_SmsUnreadModel.prototype.config=function()
{
  return {"a_field":{"k_business":{"delete":{"post":true},"post":{"post":true}},"uid":{"delete":{"post":true},"post":{"post":true}}}};
};

/**
 * Marks all messages in the dialog in the given business with a given user as read.
 *
 * Removes the unread marker for the dialog if one exists. When individual reads are
 * disabled and the current user is an active staff member or a business admin, also
 * records a read entry in the message history so other staff members see the
 * conversation as read. Refreshes the unread SMS count and notifies the dialog channel
 * about the change.
 *
 * @function
 * @name Wl_Business_Sms_Unread_SmsUnreadModel.delete
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.delete()
 */

/**
 * Marks the last messages in the dialog in the given business with a given user as unread.
 *
 * Only messages that were sent by client after the last message from the business to the client will be marked as unread.
 *
 * @function
 * @name Wl_Business_Sms_Unread_SmsUnreadModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
