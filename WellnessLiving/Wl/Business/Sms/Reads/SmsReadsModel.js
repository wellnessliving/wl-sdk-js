/**
 * Adds SMS reads for individual reads.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_Sms_Reads_SmsReadsModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * The business key.
   *
   * @post post
   * @type {?string}
   */
  this.k_business = null;

  /**
   * User key with whom you want to read messages.
   *
   * @post post
   * @type {?string}
   */
  this.uid = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_Sms_Reads_SmsReadsModel);

/**
 * @inheritDoc
 */
Wl_Business_Sms_Reads_SmsReadsModel.prototype.config=function()
{
  return {"a_field":{"k_business":{"post":{"post":true}},"uid":{"post":{"post":true}}}};
};

/**
 * Adds SMS reads for individual reads.
 *
 * Marks up to the last 100 inbound messages between the given business and user as read by
 * the current actor, then, unless updating channels is skipped, refreshes the unread count
 * and notifies the dialog channel of the change.
 *
 * @function
 * @name Wl_Business_Sms_Reads_SmsReadsModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
