/**
 * Returns information about SMS settings.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Sms_SmsStatusModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business";

  /**
   * Indicates if business phone number configured.
   *
   * @get result
   * @type {boolean}
   */
  this.has_sms_number = undefined;

  /**
   * Indicates if the A2P10DLC registration for this business needs to be completed now.
   *
   * @get result
   * @type {boolean}
   */
  this.is_a2p_registration_due = undefined;

  /**
   * Indicates if a regulatory bundle submission is required for this business.
   * `true` if the business locale requires a regulatory bundle (UK/Australia) and it has not been submitted yet.
   *
   * @get result
   * @type {boolean}
   */
  this.is_regulatory_bundle_required = undefined;

  /**
   * Indicates if SMS is enabled for this business. Determines if SMS features are available.
   *
   * @get result
   * @type {boolean}
   */
  this.is_sms_enable = undefined;

  /**
   * Indicates if SMS notifications are enabled for this business.
   *
   * @get result
   * @type {boolean}
   */
  this.is_sms_notification_enable = undefined;

  /**
   * Business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Returns the message to be displayed when A2P10DLC registration is due for a business and the user attempts to access an SMS feature.
   * `null` if registration is not due.
   *
   * @get result
   * @type {?string}
   */
  this.text_a2p_registration_due_message = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Sms_SmsStatusModel);

/**
 * @inheritDoc
 */
Wl_Sms_SmsStatusModel.prototype.config=function()
{
  return {"a_field":{"has_sms_number":{"get":{"result":true}},"is_a2p_registration_due":{"get":{"result":true}},"is_regulatory_bundle_required":{"get":{"result":true}},"is_sms_enable":{"get":{"result":true}},"is_sms_notification_enable":{"get":{"result":true}},"k_business":{"get":{"get":true}},"text_a2p_registration_due_message":{"get":{"result":true}}}};
};

/**
 * @function
 * @name Wl_Sms_SmsStatusModel.instanceGet
 * @param {string} k_business Business key.
 * @returns {Wl_Sms_SmsStatusModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Returns information about SMS settings.
 *
 * Reports whether a business phone number is configured, whether SMS and SMS notifications
 * are enabled, whether A2P10DLC registration is due and, if so, the message to show the
 * user, and whether a regulatory bundle submission is still required for the business.
 *
 * @function
 * @name Wl_Sms_SmsStatusModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
