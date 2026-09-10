/**
 * Marks all messages in the dialog in the given business with a given user as unpinned.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_Sms_Pin_SmsPinModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * The business key.
   *
   * @delete post
   * @post post
   * @type {string}
   */
  this.k_business = "";

  /**
   * User key with whom you want to pin/unpin messages.
   *
   * @delete post
   * @post post
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_Sms_Pin_SmsPinModel);

/**
 * @inheritDoc
 */
Wl_Business_Sms_Pin_SmsPinModel.prototype.config=function()
{
  return {"a_field":{"k_business":{"delete":{"post":true},"post":{"post":true}},"uid":{"delete":{"post":true},"post":{"post":true}}}};
};

/**
 * Marks all messages in the dialog in the given business with a given user as unpinned.
 *
 * Removes the pin records for the given business, the dialog partner identified by `uid`, and
 * the current actor from `wl_business_sms_pin`, then notifies the dialog channel of the change.
 *
 * @function
 * @name Wl_Business_Sms_Pin_SmsPinModel.delete
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.delete()
 */

/**
 * Marks the last messages in the dialog in the given business with a given user as pinned.
 *
 * If the dialog is already pinned for the current actor, does nothing. Otherwise inserts a pin
 * record into `wl_business_sms_pin` and notifies the dialog channel of the change.
 *
 * @function
 * @name Wl_Business_Sms_Pin_SmsPinModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
